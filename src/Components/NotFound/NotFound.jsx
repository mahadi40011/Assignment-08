import React from "react";
import notFoundImg from "../../assets/App-Error.png";

const NotFound = ({ setSearch }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 ">
      <img className="w-40 sm:w-[300px] md:w-[450px] lg:w-[550px] h-fit " src={notFoundImg} alt="" />
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 md:mt-7 mb-2 ">OPPS!! APP NOT FOUND</h1>
      <p className="text-sm md:text-lg lg:text-xl text-center">
        The App you are searching is not found on our system. please try again.
      </p>
      <button
        onClick={() => setSearch("")}
        className="btn text-base md:text-xl py-4 md:py-6 font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-8"
      >
        Show All Apps
      </button>
    </div>
  );
};

export default NotFound;
