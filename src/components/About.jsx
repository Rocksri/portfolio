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
                        <p className="text-gray-300 text-xl font-medium leading-relaxed mb-6">
                            Senior-level Software Engineer optimizing enterprise workflows.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I blend <strong>Full Stack architecture (MERN)</strong> with <strong>intelligent automation (Python/RPA)</strong> to reduce manual workloads by <strong>90%</strong>.
                            My focus is on solving complex business problems through fault-tolerant systems and scalable engineering solutions, moving beyond just syntax to deliver tangible ROI.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
