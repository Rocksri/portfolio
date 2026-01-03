import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-10 bg-gray-900 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In <span className="text-purple-500">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="flex justify-center max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
                    >
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
                            <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-xl mb-3 shadow-lg shadow-purple-900/20">
                                <FaEnvelope />
                            </div>
                            <h4 className="text-white font-semibold text-base mb-1">Email Me</h4>
                            <p className="text-gray-400 text-xs break-all">srinathceh6522@gmail.com</p>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
                            <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-xl mb-3 shadow-lg shadow-purple-900/20">
                                <FaMapMarkerAlt />
                            </div>
                            <h4 className="text-white font-semibold text-base mb-1">Location</h4>
                            <p className="text-gray-400 text-xs">Chennai</p>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
                            <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-xl mb-3 shadow-lg shadow-purple-900/20">
                                <FaLinkedin />
                            </div>
                            <h4 className="text-white font-semibold text-base mb-1">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/srinath2329/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors text-xs underline-offset-4 hover:underline">
                                View Profile
                            </a>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 backdrop-blur-sm flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
                            <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-xl mb-3 shadow-lg shadow-purple-900/20">
                                <FaGithub />
                            </div>
                            <h4 className="text-white font-semibold text-base mb-1">GitHub</h4>
                            <a href="https://github.com/Rocksri" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors text-xs underline-offset-4 hover:underline">
                                View Profile
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
