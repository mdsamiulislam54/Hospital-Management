import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import { removeBooking } from "../../Redux/Store/ReduxSlice/appointmentSlice";
const Appointment = () => {
  const doctor = useSelector((state) => state.doctor.doctor);
    const dispatch = useDispatch()
  console.log(doctor);
    const removeAppointment = (doctor_id)=>{
        dispatch(removeBooking({doctor_id:doctor_id}))
    }
  return (
    <div className="min-h-screen xl:ml-64 p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Appointments</h2>

      {doctor && doctor.length > 0 ? (
        doctor.map((item) => (
          <div
            key={item.bookingId}
            className="bg-white p-5 rounded-xl shadow mb-4 border-l-4 border-blue-500"
          >
            <div className="flex justify-between  my-5">
            
            <img src={item.doctor.profile_photo} alt="" className="w-30 h-30 rounded-full" />
                <span onClick={()=>removeAppointment(item.doctor_id)} className="cursor-pointer" ><FaDeleteLeft size={30 } color="red" /></span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Booking ID:{" "}
              <span className="text-blue-600">{item.bookingId}</span>
            </h3>
            <p>
              <strong>Doctor ID:</strong> {item.doctor_id}
            </p>
            <p>
              <strong>Chamber:</strong> {item.chamber.location}
            </p>
            <p>
              <strong>Address:</strong> {item.chamber.address}
            </p>
            <p>
              <strong>Times:</strong> {item.chamber.available_times.join(", ")}
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-2 font-medium ${
                  item.status === "pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {item.status}
              </span>
            </p>
            <p><strong>Price</strong> <span>৳ {item.doctor.consultation_fee}</span></p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default Appointment;
