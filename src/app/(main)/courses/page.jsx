
import React, { Suspense } from "react";
import Image from "next/image";
import { FaClock, FaStackExchange, FaStar } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FcManager } from "react-icons/fc";
import Link from "next/link";
import LoadingPage from "@/app/loading";
import TopCourse from "@/components/TopCourse";
import { fetchingData } from "@/components/fetching";
import NavLink from "@/components/NavLink";

const Coursespage = async() => {
  const load = await fetch("https://ass8final.vercel.app/allData.json");
     const allData = await load.json()
     console.log(allData);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         <Suspense fallback={<LoadingPage></LoadingPage>} >
         {allData.map((course) => (
          <Link
            href={`/courseDetails/${course.id}`}
            key={course.id}
            className="card bg-base-100 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <figure>
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-xl font-bold">
                  {course.title}
                </h2>

                <div className="badge badge-secondary">
                  {course.category}
                </div>
              </div>

              <p className="text-gray-400 line-clamp-3">
                {course.description}
              </p>

              <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                <span className="flex items-center
                 gap-1"><FcManager /><span>{course.instructor}</span> </span>
                <span className="flex items-center gap-1"><FaClock /><span>{course.duration}</span></span>
              </div>

              <div className="divider my-1"></div>

              <div className="flex justify-between items-center">
                <div className="badge badge-outline">
                  <FaStar />{course.rating}
                </div>
                 <Link href= "/login"><button className="btn btn-primary btn-sm">
                  View Details
                </button>
                 </Link>
                 

              </div>
            </div>
          </Link>

                  
        ))}
         </Suspense>
        
        
        

      </div>
    </div>
  );
};

export default Coursespage;