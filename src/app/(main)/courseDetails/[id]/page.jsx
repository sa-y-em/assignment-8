"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FcManager } from "react-icons/fc";
import { FaClock, FaStar } from "react-icons/fa";
import allData from "../../../../../public/allData.json";
import { SiTicktick } from "react-icons/si";
import Link from "next/link";

const CourseDetailspage = () => {
  const { id } = useParams();

  const expect = allData.find(
    (course) => course.id === Number(id)
  );

  if (!expect) {
    
    return <p>Course not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-lg">
        <figure>
          <Image
            src={expect.image}
            alt={expect.title}
            width={600}
            height={350}
            className="w-full h-80 object-cover"
          />
        </figure>

        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-3xl">
              {expect.title}
            </h2>

            <div className="badge badge-secondary">
              {expect.category}
            </div>
          </div>

          <p>{expect.description}</p>

          <div className="flex gap-6 mt-4">
            <span className="flex items-center gap-2">
              <FcManager />
              {expect.instructor}
            </span>

            <span className="flex items-center gap-2">
              <FaClock />
              {expect.duration}
            </span>

            <span className="flex items-center gap-2">
              <FaStar />
              {expect.rating}
            </span>
          </div>
          <div><span className="font-bold text-2xl m-2">Course Details : </span>
            {
                expect.curriculum.map((details,ind) =>{
                    return <div className="mt-2" key={ind}>
                        <p>
                            <span className="flex gap-2"> <SiTicktick /> <span> {details}</span></span> 
                        </p>
                       
                    </div>
                })
            }
            
          </div>
<Link href={"/courses"} className="p-2 bg-white-500 text-yellow-500 border rounded-lg w-1/4 mx-auto text-center">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailspage;