import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaUtensils, FaMoneyBillWave } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, githubFront, githubBack, demo, index, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 border border-gray-700 group flex flex-col h-full"
    >
        <div className="p-6 flex-grow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-900 rounded-lg text-purple-500 text-xl border border-gray-700">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-purple-300 rounded-full border border-gray-600">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex justify-between items-center gap-2">
            <div className="flex gap-3">
                <a
                    href={githubFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    title="Frontend Code"
                >
                    <FaGithub /> Frontend
                </a>
                {githubBack && (
                    <a
                        href={githubBack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                        title="Backend Code"
                    >
                        <FaGithub /> Backend
                    </a>
                )}
            </div>

            {demo && (
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-medium"
                >
                    Live Demo <FaExternalLinkAlt size={10} />
                </a>
            )}
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Online Event Management",
            icon: <FaChartLine />,
            githubFront: "https://github.com/Rocksri/EventManagement",
            githubBack: "https://github.com/Rocksri/online_event_manage",
            demo: "https://eventifymanage.netlify.app/login", // Placeholder if no live link provided, user can update
            tags: ["MERN Stack", "Stripe", "JWT", "Tailwind"],
            description: "A comprehensive platform for organizing and booking events. Features secure JWT authentication, role-based dashboards for admins/users, and Stripe payment integration for ticket booking."
        },
        {
            title: "Recipe Finder App",
            icon: <FaUtensils />,
            githubFront: "https://github.com/Rocksri/RecipeApp",
            demo: "https://recipesappe.netlify.app/", // Placeholder
            tags: ["React.js", "TheMealDB API", "Axios", "Tailwind"],
            description: "Dynamic recipe search application allowing users to find meals by name, category, or ingredients. Integrates with TheMealDB API to fetch real-time data and instructions."
        },
        {
            title: "Smart Expense Tracker",
            icon: <FaMoneyBillWave />,
            githubFront: "https://github.com/Rocksri/expensetracker",
            demo: "https://expensetrackzers.netlify.app/", // Placeholder
            tags: ["React.js", "LocalStorage", "Chart.js"],
            description: "Personal finance tool to track daily expenses with data visualization. Uses LocalStorage for data persistence and Chart.js to display spending analytics by category."
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-800/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Full Stack <span className="text-purple-500">Applications</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        End-to-end MERN stack solutions demonstrating API integration and state management.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
