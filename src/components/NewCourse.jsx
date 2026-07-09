import React from 'react';

const NewCourse = () => {
    return (
        <div className='m-3'>
            <div className='  '>
                <h2 className='font-bold text-4xl items-center justify-center flex' >New Releases

                </h2>
                <p className='text-gray-300 justify-center flex mb-2.5'>Just dropped — get ahead of the curve

                </p>

                <div className="m-3 max-w-7xl mx-auto border border-gray-200 rounded-2xl bg-white px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition">
                    {/* Left Section */}
                    <div className="flex items-center gap-4">
                        {/* Number */}
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                            01
                        </div>

                        {/* Course Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Complete Web Development Bootcamp
                            </h2>

                            <p className="text-gray-500 mt-1">
                                John Doe<span className="mx-2">•</span> 20  hrs
                            </p>
                        </div>
                    </div>

                    {/* Right Badge */}
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        New
                    </span>
                </div>
                <div className="m-3 max-w-7xl mx-auto border border-gray-200 rounded-2xl bg-white px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition">
                    {/* Left Section */}
                    <div className="flex items-center gap-4">
                        {/* Number */}
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                            02
                        </div>

                        {/* Course Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Digital Marketing Pro
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Michael Brown<span className="mx-2">•</span> 18  hrs
                            </p>
                        </div>
                    </div>

                    {/* Right Badge */}
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        New
                    </span>
                </div>
                <div className="m-3 max-w-7xl mx-auto border border-gray-200 rounded-2xl bg-white px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition">
                    {/* Left Section */}
                    <div className="flex items-center gap-4">
                        {/* Number */}
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                            03
                        </div>

                        {/* Course Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Python Programming Essentials
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Emily Davis<span className="mx-2">•</span> 22  hrs
                            </p>
                        </div>
                    </div>

                    {/* Right Badge */}
                    <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        New
                    </span>
                </div>

            </div>

        </div>
    );
};

export default NewCourse;