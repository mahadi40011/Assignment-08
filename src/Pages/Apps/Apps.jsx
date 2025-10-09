import React, { useEffect, useState } from "react";
import useAllData from "../../Hooks/useAllData";
import AppCard from "../../Components/AppCard/AppCard";
import NotFound from "../../Components/NotFound/NotFound";

const Apps = () => {
  const { allApps, loading, setLoading } = useAllData();
  const [search, setSearch] = useState("");

  const searchValue = search.trim().toLowerCase();

  const searchApps = searchValue
    ? allApps.filter((app) => app.title.toLowerCase().includes(searchValue))
    : allApps;
  // console.log(searchApps);

  // useEffect(()=>{
  //   if(search.length > 0){
  //     setLoading(true)
  //   }
  // },[search])

  if (loading) return <p>loading..</p>;

  return (
    <div className="my-8 md:my-14 lg:my-20">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4">
          Our All Applications
        </h1>
        <p className="md:text-xl text-center text-gray-500 mb-6 px-2 md:mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
        <span className="font-semibold text-2xl">
          ({searchApps.length}) Apps Found
        </span>
        <label className="input w-[280px] ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search App"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 px-2  md:px-0">
        {searchApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>

      {
        !searchApps.length && <NotFound setSearch={setSearch}></NotFound> 
      }
    </div>
  );
};

export default Apps;
