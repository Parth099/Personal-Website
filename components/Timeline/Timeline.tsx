import React from "react";
import TimelineEntry, { TimelineInstanceProps } from "./TimelineEntry";

//animation
import { motion } from "framer-motion";

const TimelineVarients = {
    hidden: {
        opacity: 0,
        x: "50vw",
    },
    inView: { opacity: 1, x: "0", transition: { duration: 0.75 } },
};

export default function Timeline({ timeline }: { timeline: TimelineInstanceProps[] }) {
    return (
        <div className="px-2">
            <ol className="border-l border-gray-300">
                {timeline.map((T, i) => {
                    return (
                        <motion.div variants={TimelineVarients} initial="hidden" whileInView="inView" viewport={{ once: true }} key={i}>
                            <TimelineEntry timelineData={T} />
                        </motion.div>
                    );
                })}
            </ol>
        </div>
    );
}
