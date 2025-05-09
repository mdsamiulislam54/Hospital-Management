import React, { useEffect, useState } from "react";

const Doctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorPerPage, setDoctorPerPage] = useState(6);
  useEffect(() => {
    const f = async () => {
      const r = await fetch("/doctors_bd_named_data.json");
      const d = await r.json();
      setDoctor(d);
      setFilteredDoctors(d);
    };
    f();
  }, []);

  const filterDoctorName = (name) => {
    const filterDoctor = doctor.filter((doc) =>
      doc.full_name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredDoctors(filterDoctor);
  };

  const filterBySpecialization = (name) => {
    if (name === "") {
      setFilteredDoctors(doctor);
    } else {
      const result = doctor.filter(
        (doc) => doc.specialization.toLowerCase() === name.toLowerCase()
      );
      setFilteredDoctors(result);
    }
  };

  const filterAddress = (name) => {
    const result = doctor.filter((doc) =>
      doc.address.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredDoctors(result);
  };

  const indexOfLastPage = currentPage * doctorPerPage;
  const indexOffastPage = indexOfLastPage - doctorPerPage;
  const currentDoctor = filteredDoctors.slice(indexOffastPage, indexOfLastPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(doctor.length / doctorPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="h-screen xl:ml-62 p-5 overflow-y-scroll">
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Doctor List
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            onChange={(e) => filterDoctorName(e.target.value)}
            placeholder="Search Doctor Name..."
            className="border border-gray-300 rounded-md px-4 py-2 
      xl:w-64 lg:w-60 md:w-56 sm:w-full w-full
      focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />

          <select
            name="specialization"
            id="specialization"
            onChange={(e) => filterBySpecialization(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 
      xl:w-52 lg:w-48 md:w-44 sm:w-full w-full
      focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">Select Specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
          </select>

          <input
            type="text"
            placeholder="Search Address ..."
            onChange={(e) => filterAddress(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 
      xl:w-64 lg:w-60 md:w-56 sm:w-full w-full
      focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          />
        </div>
        <div className="mb-4">
          <span className="text-white "> Total Doctor: {filteredDoctors.length}</span>
        </div>
        {/* Doctor Card List */}
        {currentDoctor.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {currentDoctor.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.profile_photo}
                  alt={item.full_name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-center mb-1">
                  {item.full_name}
                </h2>
                <p className="text-center text-gray-600 mb-2">
                  {item.specialization}
                </p>
                <p className="text-center text-gray-500 text-sm mb-4">
                  {item.address}
                </p>
                <div className="text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-10">
            <p className="text-2xl font-bold text-white text-center">
              No Doctor Found...
            </p>
          </div>
        )}
      </div>
      <div>
        <nav>
          <div className="join mt-8 flex justify-center ">
            {pageNumbers.map((number) => (
              <input
                key={number}
                type="radio"
                name="page"
                aria-label={number}
                className="join-item btn btn-square "
                checked={currentPage === number}
                onChange={() => setCurrentPage(number)}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Doctor;
