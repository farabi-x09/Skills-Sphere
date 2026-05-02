import React from 'react';
import Card from '@/components/Card';

const PopularCourses = async () => {
    const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
    const data = await res.json();
    
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-3xl my-10'>
                Popular Courses
            </h1>
            <div className='flex justify-center 2xl:justify-between gap-5 flex-wrap mb-10'>
                {
                    data.map(course => <Card key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;