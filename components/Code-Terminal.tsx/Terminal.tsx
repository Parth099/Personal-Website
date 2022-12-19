import React from "react";
import ExternalShell from "./External-Shell";
import TextSection from "./Text-Section";

export interface TerminalProps {
    filename: string;
    introduction: string[];
}

export default function Terminal({ filename, introduction }: TerminalProps) {
    return (
        <section className="terminal-container text-white font-mono">
            <div className="terminal-internal-container rounded-lg max-w-maxview mx-auto shadow-2xl border-terminalAccent border-[1px]">
                <ExternalShell filename={filename}></ExternalShell>
                <TextSection text={introduction} />
            </div>
        </section>
    );
}
