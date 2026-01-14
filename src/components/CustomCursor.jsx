import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            const isClickable = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');
            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "2px solid #a855f7", // Purple-500
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "rgba(168, 85, 247, 0.1)",
            border: "2px solid #db2777", // Pink-600
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#db2777", // Pink-600
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#a855f7", // Purple-500
        }
    };

    return (
        <>
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
