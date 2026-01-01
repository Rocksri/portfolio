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

            <div className="space-y-3 mb-6">
                {content.map((item, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">
                        <strong className="text-gray-200">{item.label}:</strong> {item.text}
                    </p>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
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
            title: "Enterprise Secret Management Framework",
            icon: <FaShieldAlt />,
            github: "#",
            tags: ["Python OOP", "Vault Security", "System Architecture"],
            content: [
                { label: "Challenge", text: "Legacy systems and hardcoded credentials caused security risks and code redundancy during massive bot migrations." },
                { label: "Solution", text: "Architected a core Python OOP module for centralized Vault security and standardized credential fetching." },
                { label: "Result", text: "Reduced code redundancy by 30% and enforced 100% security compliance across 150+ bots." }
            ]
        },
        {
            title: "Real-Time Bandwidth Intelligence",
            icon: <FaNetworkWired />,
            github: "#",
            tags: ["Node.js", "API Orchestration", "Critical Alerting"],
            content: [
                { label: "Challenge", text: "High latency and blind spots in monitoring B2B client networks led to service interruptions." },
                { label: "Solution", text: "Engineered a fault-tolerant Node.js service for Starlink API monitoring with polling logic." },
                { label: "Result", text: "Reduced latency by 70% and enabled proactive critical alerts for bandwidth thresholds." }
            ]
        },
        {
            title: "Scalable Event Ticketing Engine",
            icon: <FaChartLine />,
            github: "https://github.com/Rocksri/EventManagement",
            tags: ["JWT", "RBAC", "MongoDB Aggregation", "Stripe Webhooks"],
            content: [
                { label: "Overview", text: "A production-grade platform handling complex ticket inventory and secure payments." },
                { label: "Technical Deep Dive", text: "Implemented Role-Based Access Control (RBAC) and optimized MongoDB queries using Aggregation Pipelines for real-time analytics." }
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
            </div>
        </section>
    );
};

export default Projects;
