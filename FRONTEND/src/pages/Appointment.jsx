import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          .replace(/:00/, "");

        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {}, [docSlots]);

  return (
    docInfo && (
      <div className="px-3 sm:px-0">
        {/* ..Doctor details.......... */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-6 sm:p-8 py-6 sm:py-7 bg-white mx-2 sm:mx-0 mt-[-40px] sm:mt-0">
            {/* .Doc info: name, degree, experience............. */}
            <p className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* ...Doctor About......... */}
            <div>
              <p className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-800 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-xs sm:text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4 text-sm sm:text-base">
              Appointment fee:{" "}
              <span className="text-gray-800">
                {currencySymbol} {docInfo.fees} /-
              </span>
            </p>
          </div>
        </div>

        {/* ..Booking Slots......... */}
        <div className="sm:ml-48 md:ml-60 lg:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="text-sm sm:text-base">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 no-scrollbar  scroll-smooth">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-5 sm:py-6 min-w-14 sm:min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p className="text-xs sm:text-sm">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="text-xs sm:text-sm">
                    {item[0] && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll  mt-4 no-scrollbar scroll-smooth">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-xs sm:text-sm font-light flex-shrink-0 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? `bg-primary text-white`
                      : `border border-gray-300`
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-xs sm:text-sm font-light px-10 sm:px-14 py-2.5 sm:py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
        {/* ........listing ..Realated.....doctors.................. */}
        <div className="mt-6">
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
