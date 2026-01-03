import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaCode, FaFileAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, github, index, icon, isInternal, linkLabel }) => (
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
        <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex justify-end">
            {isInternal ? (
                <span className="flex items-center gap-2 text-gray-500 text-sm font-medium cursor-not-allowed">
                    {linkLabel || 'Proprietary Implementation'}
                </span>
            ) : (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm ${github === '#' ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:text-purple-400'} transition-colors`}
                    onClick={(e) => github === '#' && e.preventDefault()}
                >
                    <FaGithub /> View Code <FaExternalLinkAlt size={10} />
                </a>
            )}

        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Event Management Platform API",
            icon: <FaChartLine />,
            github: "https://github.com/Rocksri/EventManagement",
            tags: ["MERN Stack", "Stripe", "RBAC"],
            description: "Comprehensive RESTful API featuring JWT authentication, Role-Based Access Control, and Stripe payment integration."
        },
        {
            title: "Dynamic eForm System",
            icon: <FaFileAlt />,
            github: "#",
            tags: ["React.js", "Frontend Validation", "PHP"],
            description: "Designed and deployed a suite of dynamic electronic forms to digitize manual workflows. Features real-time frontend validation that ensures 100% data integrity for downstream RPA bots. Digitized 4 manual processes and reduced user submission errors by 25%.",
            isInternal: true,
            linkLabel: "Proprietary Implementation"
        },
        {
            title: "Personal Portfolio Website",
            icon: <FaCode />,
            github: "https://github.com/Rocksri/portfolio",
            tags: ["React", "CSS3", "Netlify"],
            description: "A responsive, high-performance portfolio designed to showcase architectural case studies and technical expertise."
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
                        End-to-end web solutions demonstrating robust architecture and best practices.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
