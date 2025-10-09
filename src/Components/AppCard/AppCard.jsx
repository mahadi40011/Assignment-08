import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { useNavigate } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  const navigate = useNavigate();
  const handleClicked = (id) => {
    navigate(`/app-details/${id}`)
    setTimeout(() => {
      <LoadingSpinner></LoadingSpinner>
    }, 5000);
  };

  return (
    <div
      onClick={() => handleClicked(id)}
      className="bg-white p-4 object-cover max-w-[300px] mx-auto sm:max-w-none w-full md:mt-2 rounded-xl shadow-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300 "
    >
      <div className="mb-5">
        <img
          className="w-[150px] mx-auto h-36 sm:w-full sm:h-70 object-cover rounded-xl"
          src={image}
          alt={title}
        />
      </div>
      <span className="font-semibold text-2xl">{title}</span>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center justify-center gap-1 rounded-lg p-2 text-green-400 bg-[#F1F5E8] w-fit">
          <GoDownload></GoDownload>
          <span className="text-lg font-semibold  ">
            {" "}
            {downloads / 1000000} M
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-lg p-2 text-[#FF8811] bg-[#FFF0E1] w-fit">
          <FaStar></FaStar>
          <span className="text-lg font-semibold "> {ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
