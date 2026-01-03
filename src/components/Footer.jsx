import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 py-3 text-center border-t border-gray-800">
            <div className="container mx-auto px-4">
                <p className="text-gray-600 text-base">
                    © {new Date().getFullYear()} Srinath S. Built with React, Tailwind CSS & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
