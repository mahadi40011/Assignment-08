import React, { useState } from "react";
import useAllData from "../../Hooks/useAllData";
import AppCard from "../../Components/AppCard/AppCard";
import NotFound from "../../Components/NotFound/NotFound";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Apps = () => {
  const { allApps, loading } = useAllData();
  const [search, setSearch] = useState("");
  const [manualLoading, setManualLoading] = useState(false);

  const searchValue = search.trim().toLowerCase();

  const searchApps = searchValue
    ? allApps.filter((app) => app.title.toLowerCase().includes(searchValue))
    : allApps;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);

    setManualLoading(true);

    setTimeout(() => {
      setManualLoading(false);
    }, 300);
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

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

      <div className="sticky top-[62px] lg:top-[70px] z-[90] pb-2 pt-4 md:py-5 bg-gray-100 flex flex-col-reverse gap-2 md:flex-row justify-between items-center">
        <span className="font-semibold text-lg md:text-2xl">
          ({searchApps.length}) Apps Found
        </span>
        <label className="input w-[250px] ">
          <input
            value={search}
            onChange={(e) => handleChange(e)}
            type="search"
            required
            placeholder="Search App"
          />
        </label>
      </div>

      <div>
        {manualLoading ? (
          <LoadingSpinner height="h-[400px]"></LoadingSpinner>
        ) : (
          <div className="grid grid-cols-1 h- sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 ">
            {searchApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
      </div>
        {manualLoading ? "" : !searchApps.length && <NotFound setSearch={setSearch}></NotFound>}
    </div>
  );
};

export default Apps;
