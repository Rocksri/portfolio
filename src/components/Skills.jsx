import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPhp, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiMysql, SiSelenium, SiRedux, SiVite } from 'react-icons/si';

const SkillCard = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors h-full"
    >
        <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group">
                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-purple-900/20 group-hover:text-purple-400 transition-colors text-2xl text-gray-400">
                        {skill.icon}
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white text-center">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Frontend Ecosystem",
            delay: 0,
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Vite", icon: <SiVite /> },
            ]
        },
        {
            title: "Backend & APIs",
            delay: 0.1,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python (OOP)", icon: <FaPython /> },
                { name: "REST Arch", icon: <FaServer /> }, // Using FaServer as placeholder for REST
                { name: "PHP", icon: <FaPhp /> },
            ]
        },
        {
            title: "Data & Infrastructure",
            delay: 0.2,
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "Git/CI/CD", icon: <FaGitAlt /> },
            ]
        },
        {
            title: "Automation Core",
            delay: 0.3,
            skills: [
                { name: "Selenium", icon: <SiSelenium /> },
                { name: "Robocorp", icon: <FaRobot /> }, // Using FaRobot as placeholder
                { name: "Vault Security", icon: <FaLock /> }, // Placeholder
                { name: "Python RPA", icon: <FaPython /> },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-purple-500">Ecosystem</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Architecting solutions with a robust and scalable technology stack.
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

// Start imports at top
import { FaRobot, FaServer, FaLock } from 'react-icons/fa';

export default Skills;
