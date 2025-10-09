import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { removeFromLS } from "../../LocalStorage/LocalStorage";
import Swal from "sweetalert2";

const InstallAppCard = ({ app, myApps, setMyApps }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;

  const handleClicked = (id) => {
    const intID = String(id);
    removeFromLS(intID);
    const filteredData = myApps.filter((ap) => ap.id !== id);
    setMyApps(filteredData);
    Swal.fire({
      title: `${title} Successfully Uninstall`,
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="flex justify-between items-center mt-5 bg-white px-6 rounded-3xl">
      <div className="flex items-center gap-5">
        <div>
          <img className="w-40 h-40 rounded-4xl" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-6">{title}</h1>
          <div className="font-medium flex items-center gap-3">
            <div className="flex items-center justify-center gap-1 text-green-400  w-fit">
              <GoDownload></GoDownload>
              <span className="text-lg font-semibold  ">
                {downloads < 1_000_000_000 ? `${(downloads / 1_000_000).toFixed(0)}M` : `${(downloads / 1_000_000_000).toFixed(0)}B`}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[#FF8811]  w-fit">
              <FaStar></FaStar>
              <span className="text-lg font-semibold "> {ratingAvg}</span>
            </div>
            <span className="text-lg font-semibold  ">{size}MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleClicked(id)}
        className="btn text-base md:text-xl py-4 md:py-6 font-semibold rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallAppCard;
