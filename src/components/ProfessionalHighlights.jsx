import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaNetworkWired, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLock, FaSatellite } from 'react-icons/fa';

const HighlightCard = ({ title, role, challenge, solution, metrics, tech, link, linkLabel, isInternal, icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl hover:shadow-purple-500/10 transition-all mb-12 last:mb-0"
    >
        <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column: Header & Icon */}
            <div className="md:w-1/3 flex flex-col items-start">
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 text-purple-500 text-3xl mb-6 shadow-lg shadow-purple-900/20">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
                <div className="text-purple-400 font-medium mb-6 bg-purple-900/20 px-3 py-1 rounded-full text-sm inline-block border border-purple-500/30">
                    {role}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-700 w-full">
                    <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((t, i) => (
                            <span key={i} className="text-xs px-2.5 py-1 bg-gray-900 text-gray-300 rounded font-medium border border-gray-700">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Case Study Details */}
            <div className="md:w-2/3 md:pl-8 border-t md:border-t-0 md:border-l border-gray-700 pt-8 md:pt-0">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> The Challenge
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">{challenge}</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> The Solution
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">{solution}</p>
                    </div>

                    <div className="bg-gray-900/50 rounded-xl p-5 border border-gray-700/50">
                        <h4 className="text-purple-400 font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
                            <FaCheckCircle /> Key Business Impact
                        </h4>
                        <ul className="space-y-2">
                            {metrics.map((metric, i) => (
                                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-purple-500 mt-1">•</span>
                                    {metric}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 flex items-center justify-end">
                        {isInternal ? (
                            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 cursor-not-allowed">
                                <FaLock className="text-xs" /> {linkLabel}
                            </span>
                        ) : (
                            <div className="flex flex-col items-end gap-1">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/25 text-sm"
                                >
                                    {linkLabel} <FaExternalLinkAlt className="text-xs" />
                                </a>
                                <span className="text-xs text-gray-500 italic">*Sanitized architectural demo</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProfessionalHighlights = () => {
    const highlights = [
        {
            title: "Secure Vault Migration Engine",
            role: "Architect & Lead Developer",
            icon: <FaShieldAlt />,
            challenge: "Migrating 150+ automation bots required a secure method to manage credentials without hardcoding secrets, which posed a major security risk.",
            solution: "Architected a reusable Python OOP module acting as a middleware between bots and the BeyondTrust Vault. This library standardized secret fetching and connection retries.",
            metrics: [
                "Adopted as the standard integration pattern for 150+ bots.",
                "Reduced development time for new automations by 30%.",
                "Eliminated hardcoded credentials, ensuring 100% security compliance."
            ],
            tech: ["Python (Advanced OOP)", "BeyondTrust API", "PyTest"],
            link: "https://github.com/Rocksri/BeyondTrust",
            linkLabel: "View Logic Demo",
            isInternal: false
        },
        {
            title: "Real-Time Starlink Telemetry Monitor",
            role: "Backend Engineer",
            icon: <FaSatellite />,
            challenge: "Manual monitoring of Starlink B2B connections caused data overages and service outages due to notification delays.",
            solution: "Engineered a Node.js/Python monitoring service that polls Starlink APIs in real-time (<60s intervals) and calculates bandwidth thresholds.",
            metrics: [
                "Reduced outage notification latency by 70% (from 30+ mins to <1 min).",
                "Proactive alerts at 75% bandwidth usage prevented data throttling.",
                "Designed fault-tolerant polling that handles API rate limits."
            ],
            tech: ["Node.js", "Starlink API", "SMTP Automation", "MongoDB"],
            link: "#",
            linkLabel: "Proprietary / Internal Tool",
            isInternal: true
        }
    ];

    return (
        <section id="professional-highlights" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-purple-500">Experience Highlights</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Enterprise-grade systems architected for security, scale, and high-impact automation.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <HighlightCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalHighlights;
