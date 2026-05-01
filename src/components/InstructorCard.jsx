import Image from 'next/image';
import React from 'react';

const InstructorCard = ({ name, role, experience, image }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center w-full max-w-[300px] mx-auto transition-transform hover:scale-105 duration-300">
            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                />
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
            <p className="text-gray-500 text-sm font-medium mb-3">{role}</p>
            
            <span className="text-gray-400 text-xs font-semibold bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                {experience}
            </span>
        </div>
    );
};

export default InstructorCard;