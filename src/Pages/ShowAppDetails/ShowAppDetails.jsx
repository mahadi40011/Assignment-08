import React, { useEffect, useState } from "react";
import useAllData from "../../Hooks/useAllData";
import { useParams } from "react-router";
import BarCharts from "../../Components/BarCharts/BarCharts";
import AppDetails from "./AppDetails";
import { getFromLS } from "../../LocalStorage/LocalStorage";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const ShowAppDetails = () => {
  const { allApps, loading } = useAllData();
  const [barChartData, setBarChartData] = useState([]);
  const [installedApp, setInstallApp] = useState([]);

  const { id } = useParams();
  const foundData = installedApp.find((singleId) => singleId === id);

  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

  useEffect(()=> {
    const storedData = getFromLS()
    setInstallApp(storedData)
  },[])

  useEffect(() => {
    if (!loading) {
      const clickedApps = allApps.find((app) => app.id === Number(id));
      if (clickedApps) {
        setBarChartData(clickedApps.ratings);
      }
    }
  }, [loading, allApps, id]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  const clickedApps = allApps.find((app) => app.id === Number(id));
  const { image, title, companyName, size, reviews, ratingAvg, downloads, description } = clickedApps;

const allProps = {
  id: id,
  image: image,
  title: title,
  companyName: companyName,
  size: size,
  reviews: reviews,
  ratingAvg: ratingAvg,
  downloads: downloads
}

  return (
    <div className="my-5 sm:my-8 md:my-10 lg:my-16 p-2">
      <div>
        <AppDetails allProps={allProps} foundData={foundData}></AppDetails>
      </div>

      <hr className="border border-gray-300 my-5 sm:my-8 md:my-10" />

      <div>
        <h1 className="font-semibold text-xl md:text-2xl  mb-4">Ratings</h1>
        <BarCharts barChartData={barChartData}></BarCharts>
      </div>

      <hr className="border border-gray-300 my-5 sm:my-8 md:my-10" />

      <div>
        <h1 className="font-semibold text-xl md:text-2xl mb-2">Description</h1>
        <p className="md:text-xl text-start md:text-justify text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShowAppDetails;
