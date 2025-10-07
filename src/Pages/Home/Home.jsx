import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
