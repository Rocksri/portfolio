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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Engineering Scalable <span className="text-purple-500">Automation</span> & <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Full-Stack Architectures</span>.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        Software Engineer with 2.6+ years of experience delivering <span className="text-white font-medium">90% workload reduction</span> across enterprise projects using <span className="text-white font-medium">Python (RPA)</span> and the <span className="text-white font-medium">MERN Stack</span>.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="#enterprise"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-2"
                        >
                            View Enterprise Solutions <FaArrowRight />
                        </motion.a>

                        <motion.a
                            href="/assets/Srinath S MERN.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gray-800 text-white font-bold text-lg border border-gray-600 hover:bg-gray-700 transition-all flex items-center gap-2"
                        >
                            Download CV <FaFilePdf />
                        </motion.a>
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
