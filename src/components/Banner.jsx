import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import bannerImg from "@/assets/img/banner2.png";
import rocket from "@/assets/img/rocket.png";
import Link from 'next/link';
const Banner = () => {
    return (
        <div className='bg-[#eee8fc] py-10'>
            <div className='w-11/12 mx-auto flex flex-wrap-reverse items-center justify-center xl:justify-between gap-10'>
                <div className='left max-w-lg space-y-4  text-center md:text-left'>
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl leading-normal'>
                        Upgrade Your <span className='text-purple-600'>Skills</span> Today <Image src={rocket} alt="Rocket" className='inline-block w-10 lg:w-30 lg:h-30' />
                    </h1>
                    <p className='text-gray-700 text-lg'>
                        Learn from industry experts and boost your career with in demand skills. Join our community of learners and start your journey to success.
                    </p>
                    <div className='flex flex-wrap gap-5  justify-center md:justify-start'>
                        <Link href={'/courses'}>
                            <button className='btn hover:scale-105 duration-300 cursor-pointer bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 font-semibold'>
                                Explore Courses
                            </button>
                        </Link>

                        <Link href={'/courses'}>
                            <button className='btn cursor-pointer hover:scale-105 duration-300  bg-white py-2 px-4 rounded  font-semibold flex items-center gap-2'>
                                <FaPlay className='text-purple-600' />
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='right  '>
                    <Image src={bannerImg} alt="Banner" width={800} height='auto' />
                    {/*  <Image src={bannerImg} alt="Banner" width={800} height={500} className="w-full " />
 */}
                </div>
            </div>

        </div>
    );
};

export default Banner;