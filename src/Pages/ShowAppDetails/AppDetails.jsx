import React, { useEffect, useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { setToLS } from "../../LocalStorage/LocalStorage";
import "../../Components/SweetAlert/SweetAlertStyle.css";
import { InstallAlert } from "../../Components/SweetAlert/SweetAlert";
import NotFound2 from "../../Components/NotFound/NotFound2";

const AppDetails = ({ allProps, foundData }) => {
  console.log(allProps)
  const [disable, setDisable] = useState(false);
  const [btnText, setBtnText] = useState("Install Now");

  useEffect(() => {
    if (foundData) {
      setDisable(true);
      setBtnText("Installed");
    }
  }, [foundData]);

  // const { id, image, title, companyName, size, reviews, ratingAvg, downloads } =
  //   allProps;

  const handleClicked = (id) => {
    setDisable(true);
    setBtnText("Installing")
    setTimeout(()=> {
      setBtnText("Installed");
      setToLS(id);
      InstallAlert(allProps?.title)
    }, 1000)
  };

  if(!allProps.title) return <NotFound2></NotFound2>
  return (
    <div>
      {/* design for desktop */}
      <div className="hidden lg:block">
        <div className="flex justify-start items-center ">
          <div className="w-[362px] flex justify-center items-center bg-white rounded-2xl">
            <img className="w-full h-fit rounded-2xl" src={allProps?.image} alt={allProps?.title} />
          </div>
          <div className="pl-10">
            <h1 className="font-bold text-4xl mb-1">{allProps?.title}</h1>
            <p className="text-xl">
              Developed by{" "}
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {allProps?.companyName}
              </span>
            </p>
            <hr className="border border-gray-300 my-4" />
            <div className="flex items-center justify-start gap-10">
              <div className="flex flex-col items-center justify-center">
                <img className="w-8 h-8" src={downloadIcon} alt={allProps?.title} />
                <p className="mt-2">Downloads</p>
                <span className="font-extrabold text-[40px]">
                  {allProps?.downloads < 1000000000
                    ? `${allProps?.downloads / 1000000}M`
                    : `${allProps?.downloads / 1000000000}B`}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img className="w-8 h-8" src={starIcon} alt={allProps?.title} />
                <p className="mt-2">Average Ratings</p>
                <span className="font-extrabold text-[40px]">{allProps?.ratingAvg}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img className="w-8 h-8" src={reviewIcon} alt={allProps?.title} />
                <p className="mt-2">Total Reviews</p>
                <span className="font-extrabold text-[40px]">
                  {allProps?.reviews / 1000000}M
                </span>
              </div>
            </div>
            <button
              onClick={() => handleClicked(allProps?.id)}
              disabled={disable}
              className={`px-5 py-3 text-xl font-semibold rounded-lg mt-6 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ${
                disable ? " cursor-not-allowed" : " cursor-pointer"
              }`}
            >
              {btnText === "Install Now" ? `${btnText} (${allProps?.size}MB)` : btnText}
            </button>
          </div>
        </div>
      </div>

      {/* design for mobile */}
      <div className="lg:hidden">
        <div className="flex justify-start mb-4 sm:mb-10 pl-1">
          <div className=" flex justify-center items-center bg-white rounded-2xl">
            <img
              className="max-w-[105px] sm:max-w-[150px] w-full h-fit rounded-full"
              src={allProps?.image}
              alt={allProps?.title}
            />
          </div>
          <div className=" pl-3 sm:pl-10 md:pl-12 h-fit">
            <h1 className="font-bold text-2xl sm:text-4xl mb-0 sm:mb-1">{allProps?.title}</h1>
            <p className="text-sm sm:text-base md:text-xl">
              Developed by{" "}
              <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {allProps?.companyName}
              </span>
            </p>
            <button
              onClick={() => handleClicked(allProps?.id)}
              disabled={disable}
              className={`px-2 py-1.5 text-xs sm:text-base font-semibold rounded-md mt-2 sm:mt-4 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ${
                disable ? " cursor-not-allowed" : " cursor-pointer"
              }`}
            >
              {btnText === "Install Now" ? `${btnText} (${allProps?.size}MB)` : btnText}
            </button>
          </div>
        </div>

        <div className="flex justify-start sm:justify-around gap-4 sm:max-w-[400px] md:max-w-[500px]">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={downloadIcon}
              alt={allProps?.title}
            />
            <p className="mt-2 text-center">Downloads</p>
            <span className="font-bold md:font-extrabold text-2xl sm:text-3xl md:text-[40px]">
              {allProps?.downloads < 1000000000
                ? `${allProps?.downloads / 1000000}M`
                : `${allProps?.downloads / 1000000000}B`}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={starIcon}
              alt={allProps?.title}
            />
            <p className="mt-2 text-center">Average Ratings</p>
            <span className="font-bold md:font-extrabold text-2xl sm:text-3xl md:text-[40px]">
              {allProps?.ratingAvg}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-7 h-7 md:w-10 md:h-10"
              src={reviewIcon}
              alt={allProps?.title}
            />
            <p className="mt-2 text-center">Total Reviews</p>
            <span className="font-bold md:font-extrabold text-2xl sm:text-3xl md:text-[40px]">
              {allProps?.reviews / 1000000}M
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
