import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUserTie } from 'react-icons/fa';

const ExperienceCard = ({ company, role, bullets, icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-8 sm:pl-12 py-6 group"
    >
        {/* Timeline Line */}
        <div className="absolute left-2 sm:left-0 top-0 bottom-0 w-0.5 bg-gray-700 group-last:bottom-auto group-last:h-8"
            style={{ top: index === 0 ? '1.5rem' : '0' }} />

        {/* Icon */}
        <div className="absolute left-2 sm:left-0 top-6 w-8 h-8 -translate-x-1/2 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            <div className="text-xs">{icon}</div>
        </div>

        {/* Content Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-1">{company}</h3>
            <h4 className="text-purple-400 font-semibold mb-6 flex items-center gap-2">
                <FaUserTie className="text-sm" /> {role}
            </h4>

            <ul className="space-y-4">
                {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            <strong className="text-white">{bullet.title}:</strong> {bullet.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            company: "Prodapt Solutions",
            role: "Senior Software Engineer",
            icon: <FaBriefcase />,
            bullets: [
                {
                    title: "Legacy Modernization",
                    desc: <span>Spearheaded the migration of legacy PHP workflows to a modern React/Node.js architecture, improving UI responsiveness and reducing user errors by <strong className="text-purple-400 text-lg">25%</strong>.</span>
                },
                {
                    title: "Performance Engineering",
                    desc: <span>Overhauled error-logging architectures using MongoDB Aggregation, slashing issue resolution time by <strong className="text-purple-400 text-lg">40%</strong>.</span>
                },
                {
                    title: "API Orchestration",
                    desc: <span>Designed a resilience layer for Salesforce & Aria integrations, achieving <strong className="text-purple-400 text-lg">95%</strong> reliability for customer communication workflows.</span>
                },
                {
                    title: "Mentorship",
                    desc: "Conducted code reviews and mentored 3 junior developers on clean code principles and Git workflows."
                }
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-purple-500">Experience</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Delivering high-impact solutions and engineering leadership.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-0 border-gray-700 ml-3 sm:ml-0">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} {...exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
