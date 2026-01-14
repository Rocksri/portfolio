import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';

// --- Typewriter Component (Kept as is) ---
const TypewriterText = ({ texts }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    return (
        <span className="text-purple-400 font-bold font-mono">
            {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
    );
};

// --- Neural Network Canvas Background ---
const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Configuration
        const particleCount = 60; // Adjust for density
        const connectionDistance = 150;
        const mouseDistance = 200;

        // Mouse State
        let mouse = { x: null, y: null };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5; // Velocity X
                this.vy = (Math.random() - 0.5) * 1.5; // Velocity Y
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * this.size;
                        const directionY = forceDirectionY * force * this.size;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(147, 51, 234, 0.7)'; // Purple-600
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.strokeStyle = `rgba(147, 51, 234, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        // Event Listeners
        window.addEventListener('resize', () => { resize(); init(); });
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Start
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            // Cleanup listeners would be good here but simpler anonymous functions are hard to remove.
            // React unmount cleans up the useEffect scope.
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-gray-900" />;
};


const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
            {/* 1. Neural Network Background (Canvas) */}
            <NeuralBackground />

            {/* 2. Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="backdrop-blur-md bg-gray-900/60 p-8 md:p-12 rounded-3xl border border-gray-700/50 shadow-2xl inline-block max-w-5xl"
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-purple-500/50 bg-purple-900/20 text-purple-300 font-bold text-sm tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        AVAILABLE FOR NEW PROJECTS
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-xl">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Intelligent</span> <br className="hidden md:block" />
                        <span className="text-white">Systems.</span>
                    </h1>

                    <div className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 h-24 flex items-center justify-center flex-col font-light">
                        <p className="mb-2 text-gray-400">Transforming operations by</p>
                        <TypewriterText texts={[
                            "Reducing Workloads by 90%",
                            "Bridging MERN & RPA",
                            "Securing Enterprise Data",
                            "Scaling Architecture"
                        ]} />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                        <motion.a
                            href="#enterprise"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                        >
                            View Architecture <FaArrowRight />
                        </motion.a>

                        <motion.a
                            href="/assets/Srinath S MERN.pdf"
                            download
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-transparent text-white font-bold text-lg border-2 border-gray-600 hover:border-white transition-all flex items-center justify-center gap-2"
                        >
                            <FaFilePdf /> Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
