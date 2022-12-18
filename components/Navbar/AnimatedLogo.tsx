import React from "react";
import { motion } from "framer-motion";

const LogoColorTransition = ["#ffe401", "#ff652f", "#00fc99"];

interface RotatingLogoProps {
    firstLetter: string;
    rest: string;
}

export default function AnimatedLogo({ firstLetter, rest }: RotatingLogoProps) {
    return (
        <motion.section className="flex" whileHover={{ scale: 1.15 }}>
            <motion.div
                initial={{ color: "#ffe401", y: -50, x: -50 }}
                animate={{ rotate: 360, color: LogoColorTransition, y: 0, x: 0 }}
                transition={{ duration: 0.75, delay: 1, delayChildren: 1 }}
                className="logo flex justify-center items-center"
            >
                <span>{firstLetter}</span>
            </motion.div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, color: "#00fc99" }} transition={{ duration: 0.5, delay: 2 }}>
                {rest}
            </motion.span>
        </motion.section>
    );
}
