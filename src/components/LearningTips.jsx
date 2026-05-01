import React from 'react';
import TipCard from './TipCard';
import { FaShoePrints, FaPaperPlane, FaHeart } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';

const LearningTips = () => {
    const tips = [
        {
            id: 1,
            title: 'Stay Consistent',
            description: 'Learn a little every day and stay consistent.',
            icon: FaShoePrints,
            color: 'text-blue-600',
            bg: 'bg-blue-100'
        },
        {
            id: 2,
            title: 'Manage Your Time',
            description: 'Plan your schedule and stick to it.',
            icon: BsStopwatch,
            color: 'text-green-600',
            bg: 'bg-green-100'
        },
        {
            id: 3,
            title: 'Set Clear Goals',
            description: 'Define your goals and work towards them.',
            icon: FaPaperPlane,
            color: 'text-purple-600',
            bg: 'bg-purple-100'
        },
        {
            id: 4,
            title: 'Avoid Distractions',
            description: 'Stay focused and avoid distractions.',
            icon: FaHeart,
            color: 'text-orange-500',
            bg: 'bg-orange-100'
        },
    ];

    return (
        <section className="w-11/12 mx-auto py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Learning Tips</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip) => (
                    <TipCard 
                        key={tip.id} 
                        title={tip.title} 
                        description={tip.description} 
                        icon={tip.icon} 
                        bg={tip.bg} 
                        color={tip.color} 
                    />
                ))}
            </div>
        </section>
    );
};

export default LearningTips;