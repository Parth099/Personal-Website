import React from "react";
import { motion } from "framer-motion";

interface TextSectionProps {
    text: string[];
}

//fades in text sequentially
const textVarients = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => {
        return {
            opacity: 1,
            transition: { duration: 0.4, delay: i * 0.15 },
        };
    },
};

export default function TextSection({ text }: TextSectionProps) {
    return (
        <section className="bg-terminalTabColor px-4 pt-3 pb-4 rounded-b-lg">
            {text.map((str, i) => {
                return (
                    <motion.pre variants={textVarients} custom={i} key={i} className="flex gap-3">
                        <span className="text-[#6e7681]">{i + 1}</span>
                        <p>{str}</p>
                    </motion.pre>
                );
            })}
        </section>
    );
}
