import React from 'react';
import TrendingCard from './TrendingCard';
import fire from "@/assets/img/fire.png";
import Image from 'next/image';

const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
    const data = await res.json();

const TrendingCourses = () => {
     const trendingCourses = data.slice(4,9)
    return (
         <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl my-10'>
               <span><Image src={fire} alt="Fire" className='inline-block w-10 h-10' /></span> Trending Courses
            </h1>
            {/* flex justify-center 2xl:justify-between gap-5 flex-wrap mb-10 */}
            <div className='flex justify-center 2xl:justify-between gap-5 flex-wrap mb-10 '>
                {
                    trendingCourses.map(course => <TrendingCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default TrendingCourses;