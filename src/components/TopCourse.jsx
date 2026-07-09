import React from 'react';
import allData from "../.././public/allData.json";
import Link from 'next/link';
import { FaClock, FaStar } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import Image from 'next/image';
import { SiTicktick } from 'react-icons/si';

const TopCourse = () => {
  const data = [...allData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl flex justify-center items-center text-center m-4 font-bold">
        Top Courses :
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((s) => (
          <div className="w-full max-w-md mx-auto" key={s.id}>
            <Link
              href={`/courseDetails/${s.id}`}
              className="card bg-base-100 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <figure>
                <Image
                  src={s.image}
                  alt={s.title}
                  width={400}
                  height={250}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-lg sm:text-xl font-bold">
                    {s.title}
                  </h2>

                  <div className="badge badge-secondary">
                    {s.category}
                  </div>
                </div>

                <p className="text-gray-400 line-clamp-3">
                  {s.description}
                </p>

                <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <FcManager />
                    <span>{s.instructor}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <FaClock />
                    <span>{s.duration}</span>
                  </span>
                </div>

                <div className="divider my-1"></div>

                <div className="flex justify-between items-center">
                  <div className="badge badge-outline">
                    <FaStar className="mr-1" />
                    {s.rating}
                  </div>

                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourse;