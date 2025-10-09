import React from "react";
import Banner from "../../Components/Banner/Banner";
import useAllData from "../../Hooks/useAllData";
import AppCard from "../../Components/AppCard/AppCard";
import { Link } from "react-router";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Home = () => {

const {allApps, loading} = useAllData();
if(loading) return <p>Loading ...</p>
const trendingApp = allApps.slice(0, 8)

  return (
    <div>
      <LoadingSpinner></LoadingSpinner>
      <Banner></Banner>

      <div>
        <div className="mt-8 md:mt-14 lg:mt-20 text-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mb-1 md:mb-2 lg:mb-4">Trending Apps</h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-500">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 px-2  md:px-0">
          {
            trendingApp.map(app => <AppCard key={app.id} app={app}></AppCard>)
          }
        </div>
        <div className="text-center mb-20">
          <Link to={"/apps"} className="btn text-base md:text-xl py-4 md:py-6 font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ">Show All</Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
