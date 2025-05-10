import { createSlice, nanoid } from "@reduxjs/toolkit";
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("appointmentState");
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    doctor: [],
    status: true,
  };
};
const appointment = createSlice({
  name: "appointment",
  initialState: loadStateFromLocalStorage(),
  reducers: {
    addBooking: (state, action) => {
      const { doctor_id, chamber, doctor } = action.payload;
      const filterDoctorData = state.doctor.find(
        (item) => item.doctor_id === doctor_id
      );
      if (filterDoctorData) {
        state.status = true;
      } else {
        state.doctor.push({
          doctor_id,
          doctor,
          chamber,
          bookingId: nanoid(),
          status: "pending",
        });
        state.status = false;
      }
      localStorage.setItem("appointmentState", JSON.stringify(state));
    },

    removeBooking: (state, action) => {
      const { doctor_id } = action.payload;
      state.doctor = state.doctor.filter(
        (doctor) => doctor.doctor_id !== doctor_id
      );
      localStorage.setItem("appointmentState", JSON.stringify(state));
    },
    resetStatus: (state) => {
      state.status = false;
    },
  },
});

export const { addBooking, removeBooking ,resetStatus} = appointment.actions;
export default appointment.reducer;
