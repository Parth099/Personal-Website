import React from "react";
import Image from "next/image";

import { ReactFCWithChildren } from "types/ReactTypes";
import { motion } from "framer-motion";

interface ExternalShellProps {
    filename: string;
}

const ExternalShell: React.FC<ReactFCWithChildren & ExternalShellProps> = ({ children, filename }) => {
    return (
        <div className="bg-terminalTop rounded-t-lg border-b-0 flex pl-3 pt-2">
            <div className="control buttons pr-4 pb-2 self-center flex gap-2">
                <div className="w-4 h-4 bg-red-700 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-800 rounded-full"></div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-terminalTabColor pb-2 pt-2 px-3 border-terminalAccent border-[1px] border-b-0 text-base flex items-center gap-1 rounded-t-xl "
            >
                <div className="img-container w-4 h-4">
                    <Image src="/text-file-icon.png" alt="" width={16} height={16} />
                </div>
                {filename}
            </motion.div>
        </div>
    );
};

export default ExternalShell;
