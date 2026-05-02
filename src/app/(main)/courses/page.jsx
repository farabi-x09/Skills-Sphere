

"use client";

import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
      const data = await res.json();
      setCourses(data);
    };
    fetchData();
  }, []);

  //  filter logic
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='font-bold text-3xl my-10'>All Courses</h1>

      <div className='flex justify-center mb-8'>
        <input
          type="text"
          placeholder="Search courses..."
          className="border px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Courses */}
      <div className='flex justify-center 2xl:justify-between gap-5 flex-wrap mb-10'>
        {
          filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <Card key={course.id} course={course} />
            ))
          ) : (
            <p className="text-gray-500">No courses found</p>
          )
        }
      </div>
    </div>
  );
};

export default AllCourses;