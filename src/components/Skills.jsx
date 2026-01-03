import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaServer, FaRobot, FaLock, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiPostman, SiSelenium, SiJira } from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: "Architecture",
            delay: 0,
            skills: [
                { name: "Python (OOP)", icon: <FaPython /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MERN Stack", icon: <FaReact /> },
                { name: "PHP", icon: <FaReact /> },
            ]
        },
        {
            title: "Database",
            delay: 0.1,
            skills: [
                { name: "MongoDB (Schema/Agg)", icon: <SiMongodb /> },
                { name: "SQL", icon: <FaDatabase /> },
            ]
        },
        {
            title: "Automation",
            delay: 0.2,
            skills: [
                { name: "BeyondTrust (Vault)", icon: <FaLock /> },
                { name: "Selenium", icon: <SiSelenium /> },
                { name: "RPA/Python", icon: <FaRobot /> },
            ]
        },
        {
            title: "DevOps",
            delay: 0.3,
            skills: [
                { name: "Docker", icon: <FaDocker /> },
                { name: "CI/CD", icon: <FaRobot /> }, // Using Robot as placeholder or generic CI icon
                { name: "Git", icon: <FaGitAlt /> },
            ]
        }
    ];

    const SkillCard = ({ title, skills, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors h-full"
        >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">{title}</h3>
            <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                        <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-purple-900/20 group-hover:text-purple-400 transition-colors text-xl text-gray-400">
                            {skill.icon}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-purple-500">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A robust stack tailored for security, scalability, and efficiency.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <SkillCard key={index} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
