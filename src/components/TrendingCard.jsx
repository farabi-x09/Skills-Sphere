import Image from 'next/image';
import React from 'react';
import { BsClock, BsStarFill } from 'react-icons/bs';

const TrendingCard = ({course}) => {
     const { title, image,  duration, rating} = course;
    return (

       <div className=' border border-gray-200 rounded-2xl p-2 shadow-sm w-full max-w-[260px] flex flex-col justify-between h-[330px] hover:scale-105 duration-300 cursor-pointer'>
            <div className='relative h-36 w-full mb-3 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center'>
                <Image
                    className=' rounded-2xl ' // 
                    sizes="(max-width: 768px) 100vw, 260px"  
                    src={image} 
                    alt={title} 
                    fill 
                    priority
                />
                
                <div className='absolute bottom-2.5 left-2.5 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm text-[10px] font-semibold'>
                    <BsStarFill className='text-amber-400 text-xs' />
                    <span className='text-gray-800'>{rating}</span>
                </div>
            </div>

           
            <div>
                <h2 className='font-bold text-sm text-gray-900 leading-tight h-10 overflow-hidden text-ellipsis line-clamp-2'>
                    {title}
                </h2>
            </div>

            <div className='flex items-center gap-2  text-gray-400 text-xs font-medium'>
                <BsClock className='text-xs' />
                <span>{duration}</span>
            </div>
        </div>
      
    );
};

export default TrendingCard;