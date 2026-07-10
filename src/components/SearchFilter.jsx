"use client"
import LoadingPage from '@/app/loading';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';

const SearchFilter = ({ allData }) => {
    const [query, SetQuery] = useState("")
    // if(query.trim() === "")
    //     return allData
    const filteredData = query.trim() === "" ? allData : allData.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="w-full mx-auto flex flex-col items-center my-5 ">
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label> */}
            <div className="flex w-full gap-2">
                <input type="text" id="search" value={query} onChange={(e) => SetQuery(e.target.value)} placeholder="Search courses..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white" />
                
            </div>

            {/* search results */}
            {filteredData.length === 0 ?
                <p className='text-center text-red-600 font-semibold text-lg mx-auto mt-5'>No courses found</p>
                : <div className="grid grid-cols-1 w-full mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Suspense fallback={<LoadingPage></LoadingPage>} >

                        {filteredData.map((course) => (

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
                                        <button className="btn btn-primary btn-sm">
                                            View Details
                                        </button>



                                    </div>
                                </div>
                            </Link>


                        ))}
                    </Suspense>




                </div>
            }
        </div>
    );
};

export default SearchFilter;




