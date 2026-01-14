import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const myForm = e.target;
        const formDataObj = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formDataObj).toString(),
        })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000); // Auto hide after 5s
            })
            .catch((error) => {
                console.error("Form submission error:", error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

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

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center group">
                                <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-2xl mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <h4 className="text-white font-semibold mb-1">Email</h4>
                                <p className="text-gray-400 text-xs break-all">srinathceh6522@gmail.com</p>
                            </div>
                            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center group">
                                <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-2xl mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform">
                                    <FaMapMarkerAlt />
                                </div>
                                <h4 className="text-white font-semibold mb-1">Location</h4>
                                <p className="text-gray-400 text-xs">Chennai</p>
                            </div>
                            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center group">
                                <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-2xl mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform">
                                    <FaLinkedin />
                                </div>
                                <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/srinath2329/" className="text-purple-400 text-xs hover:underline">View Profile</a>
                            </div>
                            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors text-center group">
                                <div className="p-3 bg-gray-900 rounded-full text-purple-400 text-2xl mb-3 shadow-lg inline-block group-hover:scale-110 transition-transform">
                                    <FaGithub />
                                </div>
                                <h4 className="text-white font-semibold mb-1">GitHub</h4>
                                <a href="https://github.com/Rocksri" className="text-purple-400 text-xs hover:underline">View Profile</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-md shadow-xl relative"
                    >
                        {/* Success Overlay */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 z-20 bg-gray-900/95 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center p-8 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <FaCheckCircle className="text-5xl text-green-500" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 mb-6">Thanks for reaching out! I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder-gray-600"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder-gray-600"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder-gray-600"
                                    placeholder="How can we collaborate?"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>Sending... <FaSpinner className="animate-spin" /></>
                                ) : (
                                    <>Send Message <FaPaperPlane className="text-sm" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
