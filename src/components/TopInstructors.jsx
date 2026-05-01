import React from 'react';
import InstructorCard from './InstructorCard';

const TopInstructors = () => {
    const instructors = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Full Stack Developer',
            experience: '10+ Years Exp.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg' // Replace with your image paths or imports
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'UI/UX Designer',
            experience: '8+ Years Exp.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            role: 'Digital Marketer',
            experience: '7+ Years Exp.',
            image: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
            id: 4,
            name: 'Sarah Wilson',
            role: 'Data Scientist',
            experience: '9+ Years Exp.',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];

    return (
        <section className="w-11/12 mx-auto py-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Top Instructors</h2>
                <a href="/instructors" className="text-sm font-semibold text-indigo-600 hover:underline">
                    View All
                </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {instructors.map((instructor) => (
                    <InstructorCard
                        key={instructor.id}
                        name={instructor.name}
                        role={instructor.role}
                        experience={instructor.experience}
                        image={instructor.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default TopInstructors;