import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, github, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 border border-gray-700 group flex flex-col h-full"
    >
        <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-purple-300 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex justify-end">
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${github === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:text-purple-400'} transition-colors`}
                onClick={(e) => github === '#' && e.preventDefault()}
            >
                <FaGithub /> {github === '#' ? 'Private / Internal' : 'View Code'} <FaExternalLinkAlt size={10} />
            </a>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Event Management System",
            description: "A comprehensive platform for managing events, bookings, and user registrations.",
            tags: ["MERN", "Redux", "Stripe"],
            github: "https://github.com/Rocksri/EventManagement"
        },
        {
            title: "Recipe App",
            description: "Discover and share culinary delights with this interactive recipe application.",
            tags: ["React", "API Integration", "Tailwind"],
            github: "https://github.com/Rocksri/RecipeApp"
        },
        {
            title: "Expense Tracker",
            description: "Track your daily expenses and income with visual charts and analytics.",
            tags: ["React", "Context API", "LocalStorage"],
            github: "https://github.com/Rocksri/expensetracker"
        },
        {
            title: "Movie Search App",
            description: "Search for your favorite movies and get details using external movie APIs.",
            tags: ["React", "REST API", "CSS"],
            github: "https://github.com/Rocksri/movie_search"
        },
        {
            title: "Auth App",
            description: "Secure authentication system with login, signup, and password reset functionalities.",
            tags: ["Node.js", "Express", "JWT"],
            github: "https://github.com/Rocksri/auth-app"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-purple-500">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A mix of professional work and personal projects showcasing my full-stack capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Rocksri?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                        <FaGithub /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
