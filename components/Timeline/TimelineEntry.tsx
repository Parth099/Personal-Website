import React from "react";

export interface TimelineInstanceProps {
    date: string;
    title: string;
    info?: string[];
}

export default function TimelineEntry({ timelineData }: { timelineData: TimelineInstanceProps }) {
    return (
        <li>
            <div className="flex flex-start items-center pt-3">
                <div className="bg-gray-400 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">{timelineData.date}</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-gray-800 font-semibold text-xl mb-0.5">{timelineData.title}</h4>
                <div className="">
                    {timelineData.info &&
                        timelineData.info.map((detail, i) => {
                            return (
                                <p className="text-gray-500" key={i}>
                                    {detail}
                                </p>
                            );
                        })}
                </div>
            </div>
        </li>
    );
}
