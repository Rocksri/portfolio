import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 pt-20">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-600/30 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-purple-400 font-semibold mb-4 tracking-wide">
                        HELLO THERE
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Srinath S</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in MERN Stack Development, Backend Logic, and RPA Automation.
                        I build scalable web solutions and intelligent bots to optimize business workflows.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-2"
                        >
                            Let's Talk <FaArrowRight />
                        </motion.a>
                    </div>

                    <div className="mt-12">
                        <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest">Download Resumes</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: 'MERN Stack', file: 'Srinath S MERN.pdf' },
                                { name: 'Backend', file: 'Srinath S BackEnd.pdf' },
                                { name: 'Python RPA', file: 'Srinath S Python RPA.pdf' }
                            ].map((cv, index) => (
                                <motion.a
                                    key={index}
                                    href={`/assets/${cv.file}`}
                                    download
                                    whileHover={{ y: -5 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-purple-500 transition-colors backdrop-blur-sm"
                                >
                                    <FaFilePdf className="text-red-400" />
                                    <span className="text-sm font-medium">{cv.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
