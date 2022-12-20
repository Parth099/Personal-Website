import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface ExternalShellProps {
    filename: string;
}

const showHideVarient = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1 },
    },
};

const controlButtonVarients = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => {
        return {
            opacity: 1,
            transition: { duration: 0.5, delay: i * 0.3 },
        };
    },
};

const ExternalShell: React.FC<ExternalShellProps> = ({ filename }) => {
    //used for animation purposes
    const controlButtonColors = ["bg-red-700", "bg-orange-500", "bg-green-800"];

    return (
        <div className="bg-terminalTop rounded-t-lg border-b-0 flex pl-3 pt-2">
            <motion.div variants={showHideVarient} className="control buttons pr-4 pb-2 self-center flex gap-2">
                {controlButtonColors.map((color, i) => {
                    return <motion.div variants={controlButtonVarients} custom={i} className={`w-4 h-4 rounded-full ${color}`} key={i}></motion.div>;
                })}
            </motion.div>
            <div className="bg-terminalTabColor pb-2 pt-2 px-3 border-terminalAccent border-[1px] border-b-0 text-base rounded-t-xl ">
                <motion.div variants={showHideVarient} className="flex justify-center gap-1">
                    <div className="img-container w-4 h-4 self-center">
                        <Image src="/text-file-icon.png" alt="" width={16} height={16} />
                    </div>
                    <span className="self-center">{filename}</span>
                </motion.div>
            </div>
        </div>
    );
};

export default ExternalShell;
