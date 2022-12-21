import React from "react";
import TimelineEntry, { TimelineInstanceProps } from "./TimelineEntry";

export default function Timeline({ timeline }: { timeline: TimelineInstanceProps[] }) {
    return (
        <div className="px-2">
            <ol className="border-l border-gray-300">
                {timeline.map((T, i) => {
                    return <TimelineEntry timelineData={T} key={i} />;
                })}
            </ol>
        </div>
    );
}
