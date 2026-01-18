import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const certs = [
        {
            title: "Certified Full Stack Developer",
            issuer: "GUVI Geek Networks, IITM Research Park",
            img: "/assets/FullStack Certificate.png"
        },
        {
            title: "Python Programming",
            issuer: "GUVI Geek Networks",
            img: "/assets/Python Certificate.png"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & <span className="text-purple-500">Awards</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Validated expertise in Full Stack Development and technical problem solving.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl cursor-pointer group relative"
                            onClick={() => setSelectedImg(cert.img)}
                        >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center z-10">
                                <span className="text-white font-bold flex items-center gap-2"><FaExternalLinkAlt /> View Full Size</span>
                            </div>
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-auto rounded-xl"
                            />
                            <div className="mt-4 flex items-center gap-3">
                                <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
                                    <FaAward size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for Lightbox */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setSelectedImg(null)}
                    >
                        <FaTimes size={32} />
                    </button>
                    <img
                        src={selectedImg}
                        alt="Certificate Full View"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-gray-700"
                    />
                </div>
            )}
        </section>
    );
};

export default Certifications;
