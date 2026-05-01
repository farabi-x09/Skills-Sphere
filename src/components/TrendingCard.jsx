import Image from 'next/image';
import React from 'react';
import { BsClock, BsStarFill } from 'react-icons/bs';

const TrendingCard = ({course}) => {
     const { title, image,  duration, rating} = course;
    return (

       <div className=' border border-gray-200 rounded-2xl p-2 shadow-sm w-full max-w-[260px] flex flex-col justify-between h-[330px]'>
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

            <div className='flex items-center gap-2 mt-2 text-gray-400 text-xs font-medium'>
                <BsClock className='text-xs' />
                <span>{duration}</span>
            </div>
        </div>
        //  <div className='w-50   border-2 border-gray-300 rounded-lg relative'>
        //            <Image className='w-full object-cover h-50 rounded-t-lg' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  src={image} alt={title} width={300} height={200} />
        //            <div className='w-11/12 mx-auto'>
        //            <h1 className='font-bold text-lg mt-4'>{title}</h1>
                  
        //             <p className='absolute top-0 right-0 mt-4 mr-4 bg-white p-2 rounded-xl flex  items-center gap-2'><BsStarFill className='text-amber-400'></BsStarFill> {rating}</p>
        //            <button className='btn bg-blue-700 text-white hover:bg-blue-900 w-full my-5 py-2 rounded-full '>View Details</button>
        //              </div>
        //      </div>
    );
};

export default TrendingCard;