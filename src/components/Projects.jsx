import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, github, index, icon }) => (
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

            <p className="text-gray-400 text-sm mb-4 line-clamp-4 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-purple-300 rounded-full border border-gray-600">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex justify-end">
            {/* For Case Studies, GitHub might be private, so checking link */}
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${github === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:text-purple-400'} transition-colors`}
                onClick={(e) => github === '#' && e.preventDefault()}
            >
                <FaGithub /> {github === '#' ? 'Proprietary / Internal' : 'View Architecture'} <FaExternalLinkAlt size={10} />
            </a>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Enterprise Secret Management Framework",
            description: "Designed the core Python security module used by the entire engineering team. Standardized credential fetching for 150+ bots, enforcing security compliance and reducing code redundancy by 30%.",
            tags: ["Python", "OOP", "Security", "System Architecture"],
            github: "#", // Internal/Proprietary
            icon: <FaShieldAlt />
        },
        {
            title: "Real-Time Bandwidth Intelligence System",
            description: "Engineered a fault-tolerant monitoring service for B2B clients using Starlink APIs. Implemented polling logic to detect bandwidth thresholds (75%) and trigger critical alerts, preventing service interruptions.",
            tags: ["Node.js", "API Orchestration", "Critical Alerting"],
            github: "#", // Internal/Proprietary
            icon: <FaNetworkWired />
        },
        {
            title: "Scalable Event Ticketing Engine",
            description: "A production-grade platform handling complex ticket inventory, secure payments (Stripe), and real-time analytics. Optimized MongoDB queries using Aggregation Pipelines to visualize sales data for organizers.",
            tags: ["MERN Stack", "Stripe", "MongoDB Aggregation", "JWT"],
            github: "https://github.com/Rocksri/EventManagement",
            icon: <FaChartLine />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Architecture <span className="text-purple-500">Case Studies</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deep dives into scalable systems, enterprise automation, and fault-tolerant architectures.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Rocksri?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                        <FaGithub /> View Open Source on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
