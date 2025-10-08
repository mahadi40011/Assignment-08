import React from "react";
import { useParams } from "react-router";
import useAllData from "../../Hooks/useAllData";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { allApps, loading } = useAllData();

  if (loading) return <p>loading...</p>;

  const clickedApps = allApps.find((app) => app.id === Number(id));
  const { image, title, companyName, size, reviews, ratingAvg, downloads } =
    clickedApps;
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-1 flex justify-center items-center ">
          <img className="w-full h-fit rounded-full" src={image} alt={title} />
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
          <button className="p-4 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-xl font-semibold text-white rounded-lg mt-8">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
