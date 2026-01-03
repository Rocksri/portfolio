import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';

const AboutExperience = () => {
    const experiences = [
        {
            company: "Prodapt Solutions",
            role: "Software Engineer", // As per request "Company | Role | Date", user text said "Currently a Software Engineer" in Bio, but "Senior" logic in bullets? User said "Prodapt Solutions Entry ... Do not list generic duties". I will use the role "Software Engineer" as per Bio logic or keep "Senior" if previously established? User request says: "Currently a Software Engineer at Prodapt".
            date: "March 2023 – Present",
            icon: <FaBriefcase />,
            bullets: [
                {
                    title: "Internal Tooling Architecture",
                    desc: "Architected a reusable Python OOP module to securely fetch secrets from BeyondTrust, adopted by the entire team to accelerate the migration of 150+ bots."
                },
                {
                    title: "Performance Engineering",
                    desc: "Engineered a real-time data monitoring bot using Starlink APIs, triggering alerts at 75% consumption and ensuring proactive bandwidth management."
                },
                {
                    title: "Legacy Modernization",
                    desc: <span>Refactored legacy PHP logic into modular Node.js/React architectures, reducing resolution time by <strong className="text-purple-400">40%</strong> through automated logging and DB updates.</span>
                },
                {
                    title: "Mentorship",
                    desc: "Mentored junior developers on Python best practices and clean code standards, ensuring 100% on-time delivery."
                }
            ]
        }
    ];

    return (
        <section id="about-experience" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

                    {/* LEFT COLUMN: ABOUT ME */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
                            About <span className="text-purple-500">Me</span>
                        </h2>
                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I don't just write code; I <span className="text-white font-bold">build systems that save time</span>. Currently a Software Engineer at Prodapt Solutions, I specialize in bridging the gap between Full Stack Development and Intelligent Automation.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                My core expertise lies in <span className="text-white font-semibold">architecting fault-tolerant internal tools</span> and <span className="text-white font-semibold">optimizing backend performance</span>. From designing a centralized vault security module adopted by 150+ bots to engineering real-time monitoring systems that cut latency by <strong>70%</strong>, I focus on technical scalability and measurable business impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: EXPERIENCE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">
                            Professional <span className="text-purple-500">Experience</span>
                        </h2>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg hover:border-purple-500/30 transition-all">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                                            <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                                                <FaUserTie className="text-sm" /> <span>{exp.role}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm italic">{exp.date}</p>
                                        </div>
                                        <div className="p-3 bg-gray-900 rounded-lg text-purple-500 text-xl border border-gray-700">
                                            {exp.icon}
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    <strong className="text-white">{bullet.title}:</strong> {bullet.desc}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutExperience;
