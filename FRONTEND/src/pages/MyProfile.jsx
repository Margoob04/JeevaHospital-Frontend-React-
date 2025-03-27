import React, { useDebugValue, useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Margoob Tanweer",
    image: assets.profile_pic,
    email: "margoobtanweer@gmail.com",
    phone: "8102165162",
    address: {
      line1: "Dhaka, Motihari",
      line2: "Bihar",
    },
    dob: "2000-01-04",
    gender: "Male",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-[90%] sm:max-w-md lg:max-w-lg flex flex-col gap-2 sm:gap-4 text-xs sm:text-sm mx-auto">
      <img
        className="w-20 sm:w-24 lg:w-36 rounded mx-auto"
        src={userData.image}
        alt=""
      />
      {isEdit ? (
        <input
          className="bg-gray-50 text-lg sm:text-xl lg:text-3xl font-medium max-w-60 mt-2 sm:mt-4 text-center"
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p className="font-medium text-lg sm:text-xl lg:text-3xl text-neutral-800 mt-2 sm:mt-4 text-center">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_3fr] gap-y-2 sm:gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500 break-words">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-32 sm:max-w-40 lg:max-w-52"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 max-w-32 sm:max-w-40 lg:max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50 max-w-32 sm:max-w-40 lg:max-w-52"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_3fr] gap-y-2 sm:gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-16 sm:max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input
              className="max-w-24 sm:max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 lg:py-2 rounded-full hover:bg-primary hover:text-white transition-all text-xs sm:text-sm w-full sm:w-auto"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 lg:py-2 rounded-full hover:bg-primary hover:text-white transition-all text-xs sm:text-sm w-full sm:w-auto"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;