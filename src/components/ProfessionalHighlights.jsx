import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExternalLinkAlt, FaLock, FaSatellite } from 'react-icons/fa';

const HighlightCard = ({ title, description, tags, link, linkLabel, isInternal, icon, index, impact }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl hover:shadow-purple-500/10 transition-all flex flex-col h-full"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 text-purple-500 text-2xl shadow-lg shadow-purple-900/20">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
        </div>

        <div className="mb-6 flex-grow">
            <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                {description}
            </p>
            <div className="bg-purple-900/10 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-purple-300 font-medium text-sm">
                    <strong className="text-purple-400 uppercase tracking-wider text-xs block mb-1">Key Impact</strong>
                    {impact}
                </p>
            </div>
        </div>

        <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-gray-900 text-gray-300 rounded font-medium border border-gray-700">
                        {t}
                    </span>
                ))}
            </div>

            <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
                {isInternal ? (
                    <span className="flex items-center gap-2 text-gray-500 text-sm font-medium px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 cursor-not-allowed w-full justify-center">
                        <FaLock className="text-xs" /> {linkLabel}
                    </span>
                ) : (
                    <div className="flex flex-col gap-1 w-full">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/25 text-sm w-full"
                        >
                            {linkLabel} <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <span className="text-xs text-center text-gray-500 italic mt-1">*Sanitized Code Sample</span>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const ProfessionalHighlights = () => {
    const highlights = [
        {
            title: "Secure Vault Migration Engine",
            icon: <FaShieldAlt />,
            description: "A centralized Python middleware acting as the standard security layer for 150+ automation bots. It abstracts BeyondTrust Vault interactions, eliminating hardcoded secrets and standardizing connection retries across the organization.",
            impact: "Accelerated migration by 60%.",
            tags: ["Python", "OOP", "Security"],
            link: "https://github.com/Rocksri/BeyondTrust",
            linkLabel: "View Logic Demo",
            isInternal: false
        },
        {
            title: "Real-Time Starlink Telemetry Monitor",
            icon: <FaSatellite />,
            description: "A high-frequency monitoring service that polls Starlink satellite data in real-time (<60s). Built to detect service disruptions and manage B2B bandwidth thresholds automatically.",
            impact: "Reduced outage notification latency by 70%.",
            tags: ["Node.js", "API Polling", "Automation"],
            link: "#",
            linkLabel: "Internal Proprietary Tool",
            isInternal: true
        }
    ];

    return (
        <section id="enterprise" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-2">Category A</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise <span className="text-purple-500">Architecture</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        High-impact internal tools designed for security, scalability, and efficiency.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <HighlightCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalHighlights;
