import React from "react";
import googlePlayImg from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";
import bannerImg from "../../assets/hero.png";
import { useNavigate } from "react-router";
import useAllData from "../../Hooks/useAllData";

const Banner = () => {
  const navigateToAppStore = useNavigate();
  const {allApps} = useAllData()

  const totalDownload = allApps.map(app => app.downloads).reduce((a,b) => a + b , 0)
  const totalReviews = allApps.map(app => app.reviews).reduce((a,b) => a + b , 0)
  const activeApps = allApps.length
  console.log(totalDownload)

  return (
    <div className="flex flex-col justify-center items-center mt-8 md:mt-14 lg:mt-20">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-center mb-2 md:mb-4">
        We Build <br />
        <span className="font-extrabold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-center text-base md:text-lg text-gray-500">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 my-4 md:my-7 lg:my-10">
        <div onClick={()=> window.open("https://play.google.com/store/apps?hl=en", "_blank")} className="flex justify-center items-center gap-1.5 md:gap-3 border border-gray-300 rounded-lg w-[200px] md:w-fit py-1 md:py-2 px-5 bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <img src={googlePlayImg} alt="" />
          <p className="font-semibold text-base md:text-xl">Google Play</p>
        </div>
        <div
          onClick={() => navigateToAppStore("/apps")}
          className="flex justify-center items-center gap-1.5 md:gap-3 border border-gray-300 rounded-lg w-[200px] md:w-fit py-1 md:py-2 px-5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
        >
          <img src={appStore} alt="" />
          <p className="font-semibold text-base md:text-xl">App Store</p>
        </div>
      </div>
      <img className="hidden md:block md:w-[500px] lg:w-[850px]" src={bannerImg} alt="" />

      <div className=" flex flex-col justify-center items-center gap-4 md:gap-7 lg:gap-10 py-8 md:py-14 lg:py-20 bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-full  text-white text-center">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex gap-3 md:gap-5 lg:gap-7 justify-center items-center">
          <div className="flex flex-col space-y-2  md:space-y-3 lg:space-y-4">
            <span className="text-sm md:text-[17px] lg:text-xl">Total Downloads</span>
            <span className="font-bold text-2xl md:text-4xl lg:text-6xl">{totalDownload < 1000000000 ? `${(totalDownload / 1000000).toFixed(1)}M` : `${(totalDownload / 1000000000).toFixed(1)}B`} </span>
            <span className="text-xs md:text-sm lg:text-base">21% more than last month</span>
          </div>
          <div className="flex flex-col space-y-2  md:space-y-3 lg:space-y-4">
            <span className="text-sm md:text-[17px] lg:text-xl">Total Reviews</span>
            <span className="font-bold text-2xl md:text-4xl lg:text-6xl">{totalReviews < 1000000000 ? `${(totalReviews / 1000000).toFixed(1)}M` : `${(totalReviews / 1000000000).toFixed(1)}B`}</span>
            <span className="text-xs md:text-sm lg:text-base">45% more than last month</span>
          </div>
          <div className="flex flex-col space-y-2  md:space-y-3 lg:space-y-4">
            <span className="text-sm md:text-[17px] lg:text-xl">Active Apps</span>
            <span className="font-bold text-2xl md:text-4xl lg:text-6xl">{activeApps}</span>
            <span className="text-xs md:text-sm lg:text-base">6 more will Launch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
