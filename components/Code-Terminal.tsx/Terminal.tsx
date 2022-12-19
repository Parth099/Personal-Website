import React from "react";
import ExternalShell from "./External-Shell";

interface TerminalProps {
    filename: string;
}

export default function Terminal({ filename }: TerminalProps) {
    return (
        <section className="terminal-container">
            <div className="terminal-internal-container max-w-maxview mx-auto">
                <ExternalShell filename={filename}></ExternalShell>
            </div>
        </section>
    );
}
