import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 py-8 text-center border-t border-gray-800">
            <p className="text-gray-500">
                © {new Date().getFullYear()} Srinath S. Built with React, Tailwind CSS & Framer Motion.
            </p>
        </footer>
    );
};

export default Footer;
