import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-purple-500">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-gray-800 rounded-lg text-purple-400 text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">Email Me</h4>
                                <p className="text-gray-400">srinathceh65@gmail.com</p> {/* Placeholder, should verify if user provided email implies this or just generic */}
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-gray-800 rounded-lg text-purple-400 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">Location</h4>
                                <p className="text-gray-400">Chennai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-gray-800 rounded-lg text-purple-400 text-xl">
                                <FaLinkedin />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-lg">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/srinath2329/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    linkedin.com/in/srinath2329
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
