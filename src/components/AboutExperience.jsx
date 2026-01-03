import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';

const AboutExperience = () => {
    const experiences = [
        {
            company: "Prodapt Solutions",
            role: "Senior Software Engineer",
            icon: <FaBriefcase />,
            bullets: [
                {
                    title: "Legacy Modernization",
                    desc: <span>Spearheaded the migration of legacy PHP workflows to a modern React/Node.js architecture, improving UI responsiveness and reducing user errors by <strong className="text-purple-400">25%</strong>.</span>
                },
                {
                    title: "Performance Engineering",
                    desc: <span>Overhauled error-logging architectures using MongoDB Aggregation, slashing issue resolution time by <strong className="text-purple-400">40%</strong>.</span>
                },
                {
                    title: "API Orchestration",
                    desc: <span>Designed a resilience layer for Salesforce & Aria integrations, achieving <strong className="text-purple-400">95%</strong> reliability for workflows.</span>
                },
                {
                    title: "Mentorship",
                    desc: "Conducted code reviews and mentored 3 junior developers on clean code principles and Git workflows."
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
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                                I am a <strong>Senior Software Engineer</strong> who doesn't just write code—I <span className="text-purple-400 font-bold">engineer efficiency</span>. With 2.6+ years of experience, I specialize in blending Full Stack Architecture (MERN) with Intelligent Automation (Python/RPA).
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                My focus is on building <span className="text-white font-semibold">System Design</span> that scales. From architecting secure Vault integrations for 150+ bots to <span className="text-white font-semibold">Optimization</span> of event platforms for high-volume transactions, I build <span className="text-white font-semibold">Automation</span> tools that reduce manual workloads by <strong>90%</strong> and cut system latency by <strong>70%</strong>. Currently open to Senior Engineering roles.
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
                                            <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                                            <h4 className="text-purple-400 font-semibold flex items-center gap-2">
                                                <FaUserTie className="text-sm" /> {exp.role}
                                            </h4>
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
