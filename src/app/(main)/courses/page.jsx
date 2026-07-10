import React from "react";
import LoadingPage from "@/app/loading";
import SearchFilter from "@/components/SearchFilter";

const Coursespage = async () => {
  const load = await fetch("https://ass8final.vercel.app/allData.json");
  const allData = await load.json()
  




  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center ">
        Our Courses
      </h1>
      <SearchFilter allData={allData} ></SearchFilter>
    </div>
  );
};

export default Coursespage;