import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default async function CourseDetailsPage({ params }) {
     const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
    const data = await res.json();
    const { id } = await params;
    
    const course = data.find((c) => c.id === parseInt(id));

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                
                {/* Main Header Container */}
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 md:flex">
                    
                    {/* Left Side: Course Info */}
                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                            {/* Category and Level Badges */}
                            <div className="flex items-center gap-3 mb-6 flex-wrap">
                                <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
                                    {course.category}
                                </span>
                                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {course.level}
                                </span>
                                <span className="text-gray-400 text-sm font-medium flex items-center gap-1">
                                    ★ {course.rating} Rating
                                </span>
                            </div>

                            {/* Title and Description */}
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {course.description}
                            </p>
                        </div>

                        <div>
                            {/* Instructor & Duration Widget */}
                            <div className="border-t border-gray-50 pt-6 mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Instructor
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {course.instructor}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Duration
                                    </p>
                                    <p className="text-base font-bold text-gray-900">
                                        {course.duration}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-100">
                                    Enroll Now
                                </button>
                                <Link 
                                    href="/" 
                                    className="flex-1 text-center bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100"
                                >
                                    Back to Courses
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Course Banner / Image */}
                    <div className="md:w-1/2 relative h-72 md:h-auto bg-cover  bg-gray-100">
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={200}
                            height={200}
                            className="w-full h-full  bg-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}