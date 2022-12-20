import React from "react";
import { motion } from "framer-motion";

//shell FCs
import ExternalShell from "./External-Shell";
import TextSection from "./Text-Section";

interface ExternalShellProps {
    filename: string;
}

export interface TerminalProps {
    filename: string;
    introduction: string[];
}

//framer motion varient
const TerminalVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1, when: "beforeChildren" },
    },
};

export default function Terminal({ filename, introduction }: TerminalProps) {
    return (
        <section className="terminal-container text-white font-mono">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={TerminalVariant}
                className="terminal-internal-container rounded-lg max-w-maxview mx-auto shadow-2xl "
            >
                <ExternalShell filename={filename} />
                <TextSection text={introduction} />
            </motion.div>
        </section>
    );
}
