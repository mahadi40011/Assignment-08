import React, { useEffect, useState } from "react";
import useAllData from "../../Hooks/useAllData";
import { useParams } from "react-router";
import BarCharts from "../../Components/BarCharts/BarCharts";
import AppDetails from "./AppDetails";

const ShowAppDetails = () => {
  const [barChartData, setBarChartData] = useState([]);

  const { id } = useParams();
  const { allApps, loading } = useAllData();

  useEffect(() => {
    if (!loading) {
      const clickedApps = allApps.find((app) => app.id === Number(id));
      if (clickedApps) {
        setBarChartData(clickedApps.ratings);
      }
    }
  }, [loading, allApps, id]);

  if (loading) return <p>loading...</p>;
  const clickedApps = allApps.find((app) => app.id === Number(id));
  const { description } = clickedApps;

  return (
    <div className="my-20">
      <div>
        <AppDetails></AppDetails>
      </div>

      <hr className="border border-gray-300 my-10" />

      <div>
        <h1 className="font-semibold text-2xl mb-4">Ratings</h1>
        <BarCharts barChartData={barChartData}></BarCharts>
      </div>

      <div className="mt-15">
        <h1 className="font-semibold text-2xl mb-5">Description</h1>
        <p className="text-xl text-justify text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ShowAppDetails;
