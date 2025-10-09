import React, { useEffect, useState } from "react";
import { getFromLS } from "../../LocalStorage/LocalStorage";
import useAllData from "../../Hooks/useAllData";
import InstallAppCard from "./InstallAppCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Installation = () => {
  const { allApps, loading } = useAllData();
  const [myApps ,setMyApps] = useState([])
  const [sort , setSort] = useState("")

  

  useEffect(() => {
    if (loading){
      <LoadingSpinner></LoadingSpinner>
      return
    };
    const dataSTR = getFromLS();
    const dataINT = dataSTR.map((id) => parseInt(id));
    const installedApps =
      allApps.filter((app) => dataINT.includes(app.id));
    
      setMyApps(installedApps)
  }, [allApps, loading]);

  const sortedItem = (()=> {
    if(sort === "asc"){
      return [...myApps].sort((a, b) => a.downloads - b.downloads)
    }
    else if(sort === "dsc"){
      return [...myApps].sort((a, b) => b.downloads - a.downloads)
    }
    else return myApps
  })()

  return (
    <div className="my-8 md:my-14 lg:my-20">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4">
          Your Installed Apps
        </h1>
        <p className="md:text-xl text-center text-gray-500 mb-6 px-2 md:mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
        <span className="font-semibold text-2xl">{sortedItem.length} Apps Found</span>
        <select
          value={sort}
          onChange={(e)=> setSort(e.target.value)}
          className="select focus:outline-none border border-gray-400 w-52 text-lg font-medium"
        >
          <option disabled value="">Sort by Download</option>
          <option value="asc">Low to High</option>
          <option value="dsc">High to Low</option>
        </select>
      </div>

      {
        sortedItem.map(app => <InstallAppCard key={app.id} app={app} setMyApps={setMyApps} myApps={myApps}></InstallAppCard>)
      }
    </div>
  );
};

export default Installation;
