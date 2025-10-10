import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { removeFromLS } from "../../LocalStorage/LocalStorage";
import "../../Components/SweetAlert/SweetAlertStyle.css";
import { UninstallAlert } from "../../Components/SweetAlert/SweetAlert";

const InstallAppCard = ({ app, myApps, setMyApps }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;
  const [btnText, setBtnText] = useState("Uninstall");

  const handleClicked = (id) => {
    setBtnText("Uninstalling");
    setTimeout(() => {
      const intID = String(id);
      removeFromLS(intID);
      const filteredData = myApps.filter((ap) => ap.id !== id);
      setMyApps(filteredData);
      UninstallAlert(title)
    }, 1000);
  };

  return (
    <div className="flex justify-between items-center mb-2 md:mb-0 md:mt-5 bg-white mx-2 px-2 py-1 md:px-6 rounded-xl md:rounded-3xl">
      <div className="flex items-center gap-2 sm:gap-5">
        <div className="w-12 h-12 sm:w-30 sm:h-30 md:w-40 md:h-40">
          <img
            className="  rounded-lg object-cover md:rounded-4xl"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 md:mb-6">
            {title}
          </h1>
          <div className="text-sm sm:text-lg md:text-xl font-medium md:font-semibold flex items-center gap-1.5 sm:gap-3">
            <div className="flex items-center justify-center md:gap-1 text-green-400 w-fit">
              <GoDownload></GoDownload>
              <span>
                {downloads < 1_000_000_000
                  ? `${(downloads / 1_000_000).toFixed(0)}M`
                  : `${(downloads / 1_000_000_000).toFixed(0)}B`}
              </span>
            </div>
            <div className="flex items-center justify-center md:gap-1 text-[#FF8811] w-fit">
              <FaStar></FaStar>
              <span> {ratingAvg}</span>
            </div>
            <span>{size}MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleClicked(id)}
        className="btn text-xs sm:text-base md:text-xl lg:text-2xl h-fit py-2 font-semibold rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
      >
        {btnText}
      </button>
    </div>
  );
};

export default InstallAppCard;
