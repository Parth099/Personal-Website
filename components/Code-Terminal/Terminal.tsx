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

//fade in effect but it first runs and only then triggers children animations
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
        <section className="terminal-container text-white font-mono md-max:px-4 md-max:text-sm">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={TerminalVariant}
                className="terminal-internal-container rounded-lg mx-auto shadow-2xl 2xl:max-w-maxview xl:max-w-lg lg:max-w-md md:max-w-sm"
            >
                <ExternalShell filename={filename} />
                <TextSection text={introduction} />
            </motion.div>
        </section>
    );
}
