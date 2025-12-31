import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from 'react-icons/si';

const SkillCard = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors"
    >
        <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group">
                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-purple-900/20 group-hover:text-purple-400 transition-colors text-3xl text-gray-400">
                        {skill.icon}
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            delay: 0,
            skills: [
                { name: "React", icon: <FaReact /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
            ]
        },
        {
            title: "Backend & Database",
            delay: 0.2,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "SQL", icon: <FaDatabase /> },
                { name: "Python", icon: <FaPython /> },
                { name: "PHP", icon: <FaPhp /> },
            ]
        },
        {
            title: "Tools & Others",
            delay: 0.4,
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "RPA", icon: <FaPython /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-purple-500">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable, responsive, and efficient applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <SkillCard key={index} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
