import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCode, FaDatabase, FaRobot, FaServer,
    FaPython, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaAws, FaLinux
} from 'react-icons/fa';
import { SiMongodb, SiPostman, SiSelenium, SiJira, SiExpress, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';

const SkillCategory = ({ title, icon, skills, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)] hover:-translate-y-2 overflow-hidden"
    >
        {/* Background Gradient Blob */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl group-hover:bg-pink-600/30 transition-all duration-500"></div>

        <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-purple-400 text-2xl border border-gray-700 shadow-lg group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3 relative z-10">
            {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 rounded-lg border border-gray-700/50 text-sm text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 cursor-default"
                >
                    {skill.icon && <span className={skill.color}>{skill.icon}</span>}
                    {skill.name}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

// Marquee Component for a dynamic flow of "All Skills" or Logos
const TechMarquee = () => {
    const icons = [
        { icon: <FaPython />, color: "text-blue-400" },
        { icon: <FaNodeJs />, color: "text-green-500" },
        { icon: <FaReact />, color: "text-cyan-400" },
        { icon: <SiMongodb />, color: "text-green-400" },
        { icon: <FaDocker />, color: "text-blue-500" },
        { icon: <FaAws />, color: "text-orange-400" },
        { icon: <SiSelenium />, color: "text-green-300" },
        { icon: <SiJavascript />, color: "text-yellow-400" },
        { icon: <SiTypescript />, color: "text-blue-400" },
        { icon: <SiTailwindcss />, color: "text-cyan-300" },
    ];

    return (
        <div className="overflow-hidden py-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <motion.div
                className="flex gap-16 min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...icons, ...icons, ...icons].map((item, index) => (
                    <div key={index} className={`text-4xl ${item.color} transform hover:scale-125 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Architecture & Backend",
            icon: <FaServer />,
            skills: [
                { name: "Python (OOP)", icon: <FaPython />, color: "text-blue-400" },
                { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
                { name: "Express.js", icon: <SiExpress />, color: "text-white" },
                { name: "PHP", icon: null, color: "" },
                { name: "REST APIs", icon: <FaCode />, color: "text-purple-400" }
            ]
        },
        {
            title: "Frontend & UI",
            icon: <FaCode />,
            skills: [
                { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
                { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-400" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
                { name: "HTML5/CSS3", icon: <FaHtml5 />, color: "text-orange-500" }
            ]
        },
        {
            title: "Database & Cloud",
            icon: <FaDatabase />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
                { name: "SQL", icon: <FaDatabase />, color: "text-blue-300" },
                { name: "AWS (Basic)", icon: <FaAws />, color: "text-orange-400" },
                { name: "Docker", icon: <FaDocker />, color: "text-blue-500" }
            ]
        },
        {
            title: "Automation & DevOps",
            icon: <FaRobot />,
            skills: [
                { name: "Selenium", icon: <SiSelenium />, color: "text-green-300" },
                { name: "RPA (Python)", icon: <FaRobot />, color: "text-pink-400" },
                { name: "Git/GitHub", icon: <FaGitAlt />, color: "text-red-500" },
                { name: "Linux", icon: <FaLinux />, color: "text-yellow-100" },
                { name: "Jira", icon: <SiJira />, color: "text-blue-500" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ecosystem</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A robust arsenal of tools and technologies engineered for scalability and performance.
                    </p>
                </motion.div>

                <TechMarquee />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
                    {categories.map((category, index) => (
                        <SkillCategory key={index} {...category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
