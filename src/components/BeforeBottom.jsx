import React from "react";
import {
    FaBook,
    FaBullseye,
    FaClock,
    FaLightbulb,
    FaTrophy,
} from "react-icons/fa";

const BeforeBottom = () => {
    return (
        <section className="bg-[#1D232A] py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex justify-center items-center gap-2">
                        <FaLightbulb />
                        <span>Learning Tips</span>
                    </h2>

                    <p className="text-gray-300 mt-3 text-base md:text-lg">
                        Strategies to maximize your learning experience
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="w-full bg-[#2A323C] rounded-2xl border border-gray-700 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <FaBullseye className="text-5xl text-pink-500 mb-6" />

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Set Daily Goals
                        </h3>

                        <p className="text-gray-400 leading-7">
                            Dedicate 30-60 minutes daily. Consistency beats long, sporadic
                            sessions.
                        </p>
                    </div>

                    <div className="w-full bg-[#2A323C] rounded-2xl border border-gray-700 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <FaClock className="text-5xl text-orange-500 mb-6" />

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Time Blocking
                        </h3>

                        <p className="text-gray-400 leading-7">
                            Block focus time in your calendar. Treat it like a
                            non-negotiable meeting.
                        </p>
                    </div>

                    <div className="w-full bg-[#2A323C] rounded-2xl border border-gray-700 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <FaBook className="text-5xl text-blue-500 mb-6" />

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Build as You Learn
                        </h3>

                        <p className="text-gray-400 leading-7">
                            Apply concepts immediately. Projects reinforce skills far better
                            than notes.
                        </p>
                    </div>
                </div>

                {/* Top Instructors Heading */}
                <div className="text-center my-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex justify-center items-center gap-2">
                        <FaTrophy />
                        <span>Top Instructors</span>
                    </h2>

                    <p className="text-gray-300 mt-3 text-base md:text-lg">
                        Learn from the best in the industry
                    </p>
                </div>

                {/* Instructor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-3xl font-bold mx-auto">
                            JD
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-5">
                            John Doe
                        </h2>

                        <p className="text-gray-500 text-lg mt-1">
                            Full-Stack Developer
                        </p>

                        <div className="w-16 h-[2px] bg-gray-200 mx-auto my-4"></div>

                        <div className="flex justify-center items-center gap-2 text-gray-500">
                            <span>8 Courses</span>
                            <span className="text-gray-300">•</span>
                            <span>12K Students</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-3xl font-bold mx-auto">
                            SK
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-5">
                            Sarah Kim
                        </h2>

                        <p className="text-gray-500 text-lg mt-1">
                            UX Lead @ Google
                        </p>

                        <div className="w-16 h-[2px] bg-gray-200 mx-auto my-4"></div>

                        <div className="flex justify-center items-center gap-2 text-gray-500">
                            <span>5 Courses</span>
                            <span className="text-gray-300">•</span>
                            <span>9K Students</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl font-bold mx-auto">
                            MC
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-5">
                            Mike Chen
                        </h2>

                        <p className="text-gray-500 text-lg mt-1">
                            Growth Marketer
                        </p>

                        <div className="w-16 h-[2px] bg-gray-200 mx-auto my-4"></div>

                        <div className="flex justify-center items-center gap-2 text-gray-500">
                            <span>6 Courses</span>
                            <span className="text-gray-300">•</span>
                            <span>7K Students</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-3xl font-bold mx-auto">
                            AR
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-5">
                            Alex Rivera
                        </h2>

                        <p className="text-gray-500 text-lg mt-1">
                            ML Engineer
                        </p>

                        <div className="w-16 h-[2px] bg-gray-200 mx-auto my-4"></div>

                        <div className="flex justify-center items-center gap-2 text-gray-500">
                            <span>4 Courses</span>
                            <span className="text-gray-300">•</span>
                            <span>5K Students</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeBottom;