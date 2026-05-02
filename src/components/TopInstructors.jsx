



"use client";

import React from "react";
import { motion } from "framer-motion";
import InstructorCard from "./InstructorCard";
import t1 from "@/assets/img/t1.png";
import t2 from "@/assets/img/t2.png";
import t3 from "@/assets/img/t3.png";
import t4 from "@/assets/img/t4.png";

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      role: "Full Stack Developer",
      experience: "10+ Years Exp.",
      image: t1,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      experience: "8+ Years Exp.",
      image: t2,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Digital Marketer",
      experience: "7+ Years Exp.",
      image: t3,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Data Scientist",
      experience: "9+ Years Exp.",
      image: t4,
    },
  ];

  return (
    <section className="w-11/12 mx-auto py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Top Instructors
        </h2>
        <a
          href="/instructors"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          View All
        </a>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {instructors.map((instructor, index) => (
          <motion.div
            key={instructor.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120, // left & right alternate
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2, // stagger effect
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="w-full"
          >
            <InstructorCard
              name={instructor.name}
              role={instructor.role}
              experience={instructor.experience}
              image={instructor.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;