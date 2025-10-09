import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { setToLS } from "../../LocalStorage/LocalStorage";
import Swal from "sweetalert2";

const AppDetails = ({ allProps, foundData }) => {
  
  const [disable, setDisable] = useState(false);
  const [btnText, setBtnText] = useState("Install Now");

  useEffect(() => {
    if (foundData) {
      setDisable(true);
      setBtnText("Installed");
    }
  }, [foundData]);

  const { id, image, title, companyName, size, reviews, ratingAvg, downloads } =
    allProps;

  const handleClicked = (id) => {
    setToLS(id);
    setDisable(true);
    setBtnText("Installed");
    Swal.fire({
      title: `${title} Successfully Install`,
      icon: "success",
      draggable: true,
      customClass: {
        popup: "!w-[250px] !h-fit "
      }
    });
  };
  return (
    <div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 ">
          <div className="col-span-1 flex justify-center items-center bg-white rounded-2xl">
            <img className="w-full h-fit rounded-2xl" src={image} alt={title} />
          </div>
          <div className="col-span-3 p-10">
            <h1 className="font-bold text-4xl mb-2">{title}</h1>
            <p className="text-xl">
              Developed by{" "}
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
            <hr className="border border-gray-300 my-8" />
            <div className="grid grid-cols-5">
              <div>
                <img className="w-10 h-10" src={downloadIcon} alt={title} />
                <p className="mt-3">Downloads</p>
                <span className="font-extrabold text-[40px]">
                  {downloads < 1000000000
                    ? `${downloads / 1000000}M`
                    : `${downloads / 1000000000}B`}
                </span>
              </div>
              <div>
                <img className="w-10 h-10" src={starIcon} alt={title} />
                <p className="mt-3">Average Ratings</p>
                <span className="font-extrabold text-[40px]">{ratingAvg}</span>
              </div>
              <div>
                <img className="w-10 h-10" src={reviewIcon} alt={title} />
                <p className="mt-3">Total Reviews</p>
                <span className="font-extrabold text-[40px]">
                  {reviews / 1000000}M
                </span>
              </div>
            </div>
            <button
              onClick={() => handleClicked(id)}
              disabled={disable}
              className={`px-5 py-3 text-xl font-semibold rounded-lg mt-8 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ${
                disable ? " cursor-not-allowed" : " cursor-pointer"
              }`}
            >
              {btnText === "Install Now" ? `${btnText} (${size}MB)` : btnText}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="grid grid-cols-3 mb-4 ">
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-full h-fit rounded-full"
              src={image}
              alt={title}
            />
          </div>
          <div className="col-span-2 p-3 md:p-10">
            <h1 className="font-bold text-3xl md:text-4xl mb-2">{title}</h1>
            <p className="text-base md:text-xl">
              Developed by{" "}
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
            <button
              onClick={() => handleClicked(id)}
              disabled={disable}
              className={`px-3 py-2 text-sm font-semibold rounded-lg mt-4 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ${
                disable ? " cursor-not-allowed" : " cursor-pointer"
              }`}
            >
              {btnText === "Install Now" ? `${btnText} (${size}MB)` : btnText}
            </button>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={downloadIcon}
              alt={title}
            />
            <p className="mt-3">Downloads</p>
            <span className="font-bold md:font-extrabold text-3xl md:text-[40px]">
              {downloads < 1000000000
                ? `${downloads / 1000000}M`
                : `${downloads / 1000000000}B`}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={starIcon}
              alt={title}
            />
            <p className="mt-3">Average Ratings</p>
            <span className="font-bold md:font-extrabold text-3xl md:text-[40px]">
              {ratingAvg}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={reviewIcon}
              alt={title}
            />
            <p className="mt-3">Total Reviews</p>
            <span className="font-bold md:font-extrabold text-3xl md:text-[40px]">
              {reviews / 1000000}M
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
