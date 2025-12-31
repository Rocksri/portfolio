import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaRobot, FaServer, FaCogs } from 'react-icons/fa';

const ExperienceCard = ({ title, role, description, tech, icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative flex flex-col md:flex-row items-center justify-between mb-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
    >
        {/* Layout Spacer for Desktop to push content to one side */}
        <div className="hidden md:block w-5/12" />

        {/* Center Timeline Icon & Line */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center h-full top-0">
            {/* Top Line Segment connecting to previous */}
            {index > 0 && <div className="w-0.5 h-6 bg-gray-700 md:h-8" />}

            {/* Icon */}
            <div className="w-10 h-10 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] shrink-0 my-1">
                <div className="text-secondary text-sm">{icon}</div>
            </div>

            {/* Bottom Line Segment */}
            <div className="w-0.5 flex-grow bg-gray-700" />
        </div>

        {/* Content Card */}
        <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
            }`}>
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <h4 className="text-purple-400 font-medium mb-3 text-sm">{role}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-700/50 text-purple-300 rounded font-medium border border-gray-600">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            title: "B2C/B2B Workflow Logic Engine",
            role: "Backend Development",
            description: "Designed and implemented the core logic engine to streamline complicated B2C and B2B workflows, enhancing operational efficiency and data processing speed.",
            tech: ["Backend", "Logic Engine", "Workflow Automation"],
            icon: <FaServer />
        },
        {
            title: "Sigma Repush Bot (AI-Powered)",
            role: "MERN Stack Development",
            description: "Developed an intelligent bot using the MERN stack to automatically handle and retry failed transactions or processes, significantly reducing manual intervention.",
            tech: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
            icon: <FaRobot />
        },
        {
            title: "Real-time Outage Notification System",
            role: "RPA & API Integration",
            description: "Built a critical system for monitoring and alerting outages in real-time. Integrated SolarWinds and Node Tracker APIs with SharePoint for centralized reporting.",
            tech: ["SolarWinds API", "Node Tracker API", "SharePoint", "Python"],
            icon: <FaCogs />
        },
        {
            title: "Finance Monthly Rental Automation",
            role: "Python RPA Automation",
            description: "Automated the end-to-end process of monthly rental calculations and reporting using Python and Excel automation, with automated email distribution via SMTP.",
            tech: ["Python", "Excel Automation", "SMTP", "Scripting"],
            icon: <FaBriefcase />
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-purple-500">Experience</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Highlights of my professional work in Backend Systems, RPA, and Full Stack Development.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                    {/* End dot or fade out for the line implies continuation or end */}
                    <div className="hidden md:flex justify-center -mt-8">
                        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-700 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
