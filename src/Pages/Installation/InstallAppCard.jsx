import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { removeFromLS } from "../../LocalStorage/LocalStorage";
import Swal from "sweetalert2";
import "../../Components/SweetAlert/SweetAlertStyle.css";

const InstallAppCard = ({ app, myApps, setMyApps }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;
  const [btnText, setBtnText] = useState("Uninstall");

  const handleClicked = (id) => {
    setBtnText("Uninstalling")
    setTimeout(() => {
      const intID = String(id);
      removeFromLS(intID);
      const filteredData = myApps.filter((ap) => ap.id !== id);
      setMyApps(filteredData);
      Swal.fire({
        title: `${title} Successfully Uninstall`,
        icon: "success",
        draggable: true,
        customClass: {
          popup: "popup-style",
          title: "title-style",
        },
      });
    }, 2000);
  };

  return (
    <div className="flex justify-between items-center mb-2 md:mb-0 md:mt-5 bg-white mx-2 px-2 py-1 md:px-6 rounded-xl md:rounded-3xl">
      <div className="flex items-center gap-2 sm:gap-5">
        <div>
          <img
            className="w-20 h-20 md:w-40 md:h-40 rounded-lg md:rounded-4xl"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold md:font-bold text-xl md:text-2xl mb-2 md:mb-6">
            {title}
          </h1>
          <div className="text-sm md:text-lg font-medium md:font-semibold flex items-center gap-1.5 sm:gap-3">
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
        className="btn text-sm sm:text-base md:text-xl h-fit py-2 font-semibold rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
      >
        {btnText}
      </button>
    </div>
  );
};

export default InstallAppCard;
