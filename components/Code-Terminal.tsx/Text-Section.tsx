import React from "react";
import { motion } from "framer-motion";

interface TextSectionProps {
    text: string[];
}

const textVarients = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => {
        return {
            opacity: 1,
            transition: { duration: 0.5, delay: i * 0.2 },
        };
    },
};

export default function TextSection({ text }: TextSectionProps) {
    return (
        <section className="bg-terminalTabColor px-4 pt-2 pb-4 rounded-b-lg">
            {text.map((str, i) => {
                return (
                    <motion.pre variants={textVarients} custom={i} key={i} className="block">
                        <span className="text-[#6e7681]">{i + 1} </span> {str}
                    </motion.pre>
                );
            })}
        </section>
    );
}
