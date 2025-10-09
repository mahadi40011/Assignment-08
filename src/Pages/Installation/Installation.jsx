import React, { useEffect, useState } from "react";
import { getFromLS } from "../../LocalStorage/LocalStorage";
import useAllData from "../../Hooks/useAllData";
import InstallAppCard from "./InstallAppCard";

const Installation = () => {
  const { allApps, loading } = useAllData();
  const [myApps ,setMyApps] = useState([])
  const [sort , setSort] = useState("")

  useEffect(() => {
    if (loading) return;
    const dataSTR = getFromLS();
    const dataINT = dataSTR.map((id) => parseInt(id));
    const installedApps =
      allApps.filter((app) => dataINT.includes(app.id));
    
      setMyApps(installedApps)
  }, [allApps, loading]);

  const handleClicked= (type)=> {
    setSort(type)
  }

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
        <span className="font-semibold text-2xl">{myApps.length} Apps Found</span>
        <select
          defaultValue={`${sort !== "" ? "Sort by Size" : sort} `}
          className="select focus:outline-none border border-gray-400 w-52 text-lg font-medium"
        >
          <option disabled>Sort by Size</option>
          <option onClick={()=> handleClicked("High to Low")}>High to Low</option>
          <option onClick={()=> handleClicked("High to Low")}>Low to High</option>
        </select>
      </div>

      {
        myApps.map(app => <InstallAppCard key={app.id} app={app} setMyApps={setMyApps} myApps={myApps}></InstallAppCard>)
      }
    </div>
  );
};

export default Installation;
