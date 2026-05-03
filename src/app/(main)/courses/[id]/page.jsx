// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';


// export default async function CourseDetailsPage({ params }) {
//      const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
//     const data = await res.json();
//     const { id } = await params;
    
//     const course = data.find((c) => c.id === parseInt(id));

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
                
//                 {/* Main Header Container */}
//                 <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 md:flex">
                    
//                     {/* Left Side: Course Info */}
//                     <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
//                         <div>
//                             {/* Category and Level Badges */}
//                             <div className="flex items-center gap-3 mb-6 flex-wrap">
//                                 <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
//                                     {course.category}
//                                 </span>
//                                 <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
//                                     {course.level}
//                                 </span>
//                                 <span className="text-gray-400 text-sm font-medium flex items-center gap-1">
//                                     ★ {course.rating} Rating
//                                 </span>
//                             </div>

//                             {/* Title and Description */}
//                             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
//                                 {course.title}
//                             </h1>
//                             <p className="text-gray-500 leading-relaxed mb-8">
//                                 {course.description}
//                             </p>
//                         </div>

//                         <div>
//                             {/* Instructor & Duration Widget */}
//                             <div className="border-t border-gray-50 pt-6 mb-8 flex items-center justify-between">
//                                 <div>
//                                     <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
//                                         Instructor
//                                     </p>
//                                     <p className="text-base font-bold text-gray-900">
//                                         {course.instructor}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
//                                         Duration
//                                     </p>
//                                     <p className="text-base font-bold text-gray-900">
//                                         {course.duration}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <button className="flex-1 bg-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-100">
//                                     Enroll Now
//                                 </button>
//                                 <Link 
//                                     href="/" 
//                                     className="flex-1 text-center bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100"
//                                 >
//                                     Back to Courses
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side: Course Banner / Image */}
//                     <div className="md:w-1/2 relative h-72 md:h-auto bg-cover  bg-gray-100">
//                         <Image
//                             src={course.image}
//                             alt={course.title}
//                             width={200}
//                             height={200}
//                             className="w-full h-full  bg-cover"
//                         />
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 1. Reusable Course Curriculum Data
export const curriculumData = [
  {
    id: 1,
    title: 'Module 1: Introduction',
    description: 'Get started with the foundational concepts and an overview of the course.',
  },
  {
    id: 2,
    title: 'Module 2: Frontend Development',
    description: 'Learn to build responsive and interactive user interfaces.',
  },
  {
    id: 3,
    title: 'Module 3: Backend Development',
    description: 'Understand server-side logic, APIs, and data management.',
  },
  {
    id: 4,
    title: 'Module 4: Database & Deployment',
    description: 'Connect databases and deploy your applications to the live server.',
  },
];

// 2. Reusable Course Curriculum Component
export function CourseCurriculum() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-8">
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">
        Course Curriculum
      </h2>
      <div className="space-y-4">
        {curriculumData.map((module) => (
          <div
            key={module.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-all duration-200 gap-4"
          >
            <div className="flex items-start sm:items-center gap-4">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-2xl font-bold text-base">
                {module.id}
              </span>
              <div>
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                  {module.description}
                </p>
              </div>
            </div>
            <div className="text-indigo-600 font-medium text-sm self-end sm:self-center">
              View &rarr;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Main Course Details Page
export default async function CourseDetailsPage({ params }) {
  const res = await fetch('https://skills-sphere-seven.vercel.app/data.json');
  const data = await res.json();
  
   
  const { id } = await params;

  const course = data.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Header Container */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
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
              <div className="border-t border-gray-50 pt-6 mb-8 flex items-center justify-between flex-wrap gap-4">
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
          <div className="md:w-1/2 relative h-72 md:h-auto bg-cover bg-gray-100">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        
        <CourseCurriculum />

      </div>
    </div>
  );
}