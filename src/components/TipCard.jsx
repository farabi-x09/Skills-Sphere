import React from 'react';

const TipCard = ({ title, description, icon: Icon, bg, color }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
            <div className={`p-4 rounded-full ${bg} ${color} mb-4`}>
                <Icon size={28} />
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default TipCard;