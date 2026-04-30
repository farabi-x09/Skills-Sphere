import { CardContent } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import {  BsStarFill } from 'react-icons/bs';

const Card = ({course}) => {
    const { title, image, instructor, level, rating} = course;
    // console.log(course);

    return (
        <div className='w-100   border-2 border-gray-300 rounded-lg relative'>
            <Image className='w-full bg-cover h-50 rounded-t-lg' src={image} alt={title} width={300} height={200} />
            <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl mt-4'>{title}</h1>
            <div className='flex justify-between text-gray-700 gap-4 mt-4'>
                <p className='flex flex-wrap'>Instructor: <span className='font-semibold text-black'> {instructor} </span></p>
                <p>Level:  <span className='font-semibold text-black'> {level} </span></p>
                
            </div>
             <p className='absolute top-0 right-0 mt-4 mr-4 bg-white p-2 rounded-xl flex  items-center gap-2'><BsStarFill className='text-amber-400'></BsStarFill> {rating}</p>
            <button className='btn bg-blue-700 text-white hover:bg-blue-900 w-full my-5 py-2 rounded-full '>View Details</button>
              </div>
      </div>
    );
};

export default Card;