import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const ProjectCard = ({ title, content, tags, github, index, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 border border-gray-700 group flex flex-col h-full"
    >
        <div className="p-6 flex-grow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-900 rounded-lg text-purple-500 text-xl border border-gray-700">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
            </div>

            <div className="space-y-4 mb-6">
                {content.map((item, i) => (
                    <div key={i} className="text-sm">
                        <strong className="text-purple-400 block mb-1 uppercase text-xs tracking-wider">{item.label}</strong>
                        <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-purple-300 rounded-full border border-gray-600">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex justify-end">
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${github === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:text-purple-400'} transition-colors`}
                onClick={(e) => github === '#' && e.preventDefault()}
            >
                <FaGithub /> {github === '#' ? 'Proprietary / Internal' : 'View Code'} <FaExternalLinkAlt size={10} />
            </a>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Secure Vault Migration Architecture",
            icon: <FaShieldAlt />,
            github: "#",
            tags: ["Python", "BeyondTrust API", "OOP Design Patterns"],
            content: [
                { label: "Challenge", text: "Migrating 150+ automation bots required a secure, scalable way to fetch credentials without hardcoding secrets." },
                { label: "Solution", text: "Architected a centralized Python OOP module integrating with BeyondTrust Vault. This created a reusable standard adopted by the entire engineering team." },
                { label: "Impact", text: "Accelerated migration timeline by 30% and ensured 100% security compliance." }
            ]
        },
        {
            title: "Real-Time Starlink Monitoring System",
            icon: <FaNetworkWired />,
            github: "#",
            tags: ["Node.js", "Starlink API", "SMTP Automation"],
            content: [
                { label: "Challenge", text: "Managing bandwidth for remote B2B operations was manual and reactive, leading to outages." },
                { label: "Solution", text: "Engineered a Node.js monitoring service consuming Starlink APIs to poll usage metrics in real-time (<60s intervals)." },
                { label: "Impact", text: "Reduced notification latency by 70% and triggered auto-alerts at 75% consumption, preventing downtime." }
            ]
        },
        {
            title: "Scalable Event Ticketing Engine",
            icon: <FaChartLine />,
            github: "https://github.com/Rocksri/EventManagement",
            tags: ["MERN Stack", "Stripe", "MongoDB Aggregation", "JWT"],
            content: [
                { label: "Overview", text: "A production-grade platform handling complex ticket inventory and secure payments." },
                { label: "Technical Deep Dive", text: "Implemented Role-Based Access Control (RBAC) and optimized MongoDB queries using Aggregation Pipelines to visualize sales data for organizers." }
            ]
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key <span className="text-purple-500">Case Studies</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deep dives into complex backend work, system design, and high-impact automation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
