import Link from "next/link";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="min-h-screen bg-[#071336]  text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">

        
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500 bg-indigo-500/10 text-indigo-300 text-sm">
          ✨ New courses added weekly
        </div>

       
        <h1 className="text-5xl md:text-7xl font-bold mt-10 leading-tight">
  Upgrade Your <br />
  <span className="flex items-center justify-center gap-3">
    Skills Today
    <MdRocketLaunch  className="text-4xl md:text-6xl" />
  </span>
       </h1>

        
        <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-300">
          Learn from industry experts and master in-demand skills.
          Build real-world projects and advance your career.
        </p>

        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[" Web Dev", "Design", "Marketing", "Data", "React", "Python"].map(
            (item) => (
              <span
                key={item}
                className="px-6 py-2 rounded-full border border-gray-600 text-gray-300"
              >
                {item}
              </span>
            )
          )}
        </div>

       
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Link href="/courses" className="px-10 py-4 bg-indigo-600 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
            Browse Courses
          </Link>

          <button className="px-10 py-4 border border-gray-500 rounded-xl text-lg hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

       
        <div className="border-t border-gray-700 mt-20 pt-10">
          <div className="flex justify-center gap-16 flex-wrap">
            <div>
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="text-gray-400">Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-gray-400">Courses</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">4.9</h3>
              <p className="text-gray-400">Avg Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Navbar;