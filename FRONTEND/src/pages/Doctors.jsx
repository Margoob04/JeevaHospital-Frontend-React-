import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const [showFilter, setShowFilter] = useState(false);


  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600 text-sm sm:text-base">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5 mt-5">
       <button className={`py-1 px-3 rounded  text-sm transition-all  sm:hidden ${showFilter ? 'bg-primary text-white'  : ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex flex-col gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 justify-center ${showFilter ? 'flex' :'hidden sm:flex'}`}>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "General physician"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "Gynecologist"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "Dermatologist"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "Pediatricians"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "Neurologist"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[90vw] sm:w-auto mx-auto sm:mx-0 pl-2 sm:pl-3 py-1 sm:py-1.5 pr-16 border border-gray-400 sm:border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-50 sm:hover:bg-blue-100 ${
              speciality === "Gastroenterologist"
                ? "bg-blue-200 sm:bg-blue-100 text-black"
                : ""
            } shadow-sm sm:shadow-none truncate`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 gap-y-4 sm:gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 max-w-32 sm:max-w-full mx-auto"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-2 text-sm sm:text-base text-center text-green-500">
                  <p className="rounded-full w-2 h-2 bg-green-500"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-sm sm:text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
