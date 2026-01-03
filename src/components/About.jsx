import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About <span className="text-purple-500">Me</span></h2>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                            I am a <strong>Senior Software Engineer</strong> who doesn't just write code—I <span className="text-purple-400 font-bold">engineer efficiency</span>. With 2.6+ years of experience, I specialize in blending Full Stack Architecture (MERN) with Intelligent Automation (Python/RPA).
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My focus is on building <span className="text-white font-semibold">System Design</span> that scales. From architecting secure Vault integrations for 150+ bots to <span className="text-white font-semibold">Optimization</span> of event platforms for high-volume transactions, I build <span className="text-white font-semibold">Automation</span> tools that reduce manual workloads by <strong>90%</strong> and cut system latency by <strong>70%</strong>. Currently open to Senior Engineering roles where I can drive architectural decisions and mentor teams.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
