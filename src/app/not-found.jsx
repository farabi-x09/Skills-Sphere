import Link from 'next/link';
import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">

                <div className="mx-auto w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6">
                    <BsExclamationTriangle size={36} />
                </div>

                {/* Status Code and Title */}
                <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-2">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Oops! It looks like the page you are looking for does not exist or has been moved. Let us get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all duration-200"
                    >
                        <FaHome size={16} />
                        Go Back Home
                    </Link>
                    <Link
                        href="/courses"
                        className="flex items-center justify-center px-5 py-3 w-full sm:w-auto text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200"
                    >
                        Browse Courses
                    </Link>
                </div>
            </div>

            <p className="mt-12 text-xs text-gray-400 font-medium">
                &copy; {new Date().getFullYear()} SkillSphere. All rights reserved.
            </p>
        </div>
    );
}