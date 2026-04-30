import Image from 'next/image';
import React from 'react';
import logo from "@/assets/img/logo2.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-[#021536]'>
            <div className='w-11/12 mx-auto py-10'>
                <div className='flex flex-wrap text-white gap-10 justify-center lg:justify-between'>
                    <div className='space-y-4'>
                        <div className='flex gap-2 items-center'>
                            <Image src={logo} alt="SkillSphere Logo" width={60}
                                height={60} />
                            <h3 className='font-semibold text-3xl'>
                                SkillSphere
                            </h3>
                        </div>
                        <p className='max-w-60 text-gray-300'>
                            Empowering learners to achieve their goals with quality education.
                        </p>
                        <div className=' text-2xl flex gap-4'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaInstagramSquare />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-4'>
                            Quick Links
                        </h3>
                        <p className='text-gray-300'>Home</p>
                        <p className='text-gray-300 my-3'>Courses</p>
                        <p className='text-gray-300'>My Profile</p>
                      
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-4'>
                            Support
                        </h3>
                        <p className='text-gray-300'>Contact Us</p>
                        <p className='text-gray-300 my-3'>Terms & Conditions</p>
                        <p className='text-gray-300 my-3'>Privacy Policy</p>
                        <p className='text-gray-300'>FAQ</p>

                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-4'>
                            Contact Us
                        </h3>
                        <p className='text-gray-300'>123 Education Street, City</p>
                        <p className='text-gray-300 my-3'>Email: info@skillsphere.com</p>
                        <p className='text-gray-300'>Phone: +1 (123) 456-7890</p>
                    </div>
                </div>
                <p className='text-gray-500 text-center mt-10'>
                    &copy; {new Date().getFullYear()} SkillSphere. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;