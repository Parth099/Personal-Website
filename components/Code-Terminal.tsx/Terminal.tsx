import React from "react";
import ExternalShell from "./External-Shell";
import TextSection from "./Text-Section";

import { motion } from "framer-motion";

export interface TerminalProps {
    filename: string;
    introduction: string[];
}

export default function Terminal({ filename, introduction }: TerminalProps) {
    return (
        <section className="terminal-container text-white font-mono">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, delayChildren: 0.5 }}
                className="terminal-internal-container rounded-lg max-w-maxview mx-auto shadow-2xl "
            >
                <ExternalShell filename={filename}></ExternalShell>
                <TextSection text={introduction} />
            </motion.div>
        </section>
    );
}
