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
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a results-driven <strong>MERN Stack Developer</strong> and <strong>RPA Specialist</strong> with a proven track record in building high-performance web applications and automating complex business workflows.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With deep expertise in <strong>React, Node.js, and Python</strong>, I specialize in creating seamless user experiences and efficient backend systems. From developing AI-powered bots to architecting real-time notification systems, I bridge the gap between creative frontend design and robust, logic-driven backend engineering.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
