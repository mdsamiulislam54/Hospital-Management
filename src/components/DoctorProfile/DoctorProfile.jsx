import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, resetStatus } from "../../Redux/Store/ReduxSlice/appointmentSlice";
import { ToastContainer, toast } from "react-toastify";
const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableChambers, setAvailableChambers] = useState([]);
  const updatedStatus = useSelector((state) => state.doctor.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/doctors_bd_named_data.json");
      const data = await res.json();
      const filterData = data.find((doctor) => doctor.doctor_id === id);
      setDoctor(filterData);
    };
    fetchData();
  }, [id]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const selectedDay = date.toLocaleDateString("en-US", { weekday: "long" });

    // check chambers where doctor is available on selected day
    const chambersOnDate = doctor.chambers.filter((chamber) =>
      chamber.available_days.includes(selectedDay)
    );
    setAvailableChambers(chambersOnDate);
  };

  if (!doctor) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  const bookingAppointment = (chamber) => {
    dispatch(addBooking({ doctor_id: id, doctor, chamber: chamber }));
 

  if (!updatedStatus) {
    toast.success("Booking successfully completed!", { autoClose: 2000 });
    setTimeout(() => {
      navigate("/");
    }, 2000);
    
  } else {
    toast.error("Already Booking", { autoClose: 2000 });
    dispatch(resetStatus())

  }
  };


  return (
    <div className="min-h-screen xl:ml-64 p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
          <img
            src={doctor.profile_photo}
            alt={doctor.full_name}
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {doctor.full_name}
            </h2>
            <p className="text-blue-600 font-medium">{doctor.specialization}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {doctor.qualifications.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.phone}
              </p>
              <p>
                <strong>Blood Group:</strong> {doctor.blood_group}
              </p>
              <p>
                <strong>Experience:</strong> {doctor.years_of_experience} years
              </p>
              <p>
                <strong>Consultation Fee:</strong> ৳{doctor.consultation_fee}
              </p>
              <p>
                <strong>Available:</strong> {doctor.available_days.join(", ")} (
                {doctor.available_time})
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    doctor.status === "Active"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {doctor.status}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Appointment Booking */}
        <div className="border-t p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Book Appointment
          </h3>
          <div className="flex items-center gap-4">
            <label className="text-lg font-medium">Select Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              minDate={new Date()}
              placeholderText="Pick a date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {/* Show available chamber on selected date */}
          {selectedDate && (
            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-700">
                Available Chambers:
              </h4>
              {availableChambers.length > 0 ? (
                availableChambers.map((chamber) => (
                  <div
                    key={chamber.chamber_id}
                    className="mt-2 p-3 border rounded-lg bg-gray-100"
                  >
                    <p>
                      <strong>Location:</strong> {chamber.location}
                    </p>
                    <p>
                      <strong>Address:</strong> {chamber.address}
                    </p>
                    <p>
                      <strong>Available Times:</strong>{" "}
                      {chamber.available_times.join(", ")}
                    </p>
                    <button
                      onClick={() => bookingAppointment(chamber)}
                      className="btn my-4 bg-blue-500 text-white"
                    >
                      Booking Appointments
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-red-500 mt-2">
                  No chamber available on this date.
                </p>
              )}
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DoctorProfile;
