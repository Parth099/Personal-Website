import React from "react";
import { text } from "stream/consumers";

interface TextSectionProps {
    text: string[];
}

export default function TextSection({ text }: TextSectionProps) {
    console.log(text);

    return (
        <section className="bg-terminalTabColor px-4 pt-2 rounded-b-lg">
            {text.map((str, idx) => {
                return (
                    <p key={idx} className="block">
                        <span className="text-[#6e7681]">{idx + 1} </span> {str}
                    </p>
                );
            })}
        </section>
    );
}
