import React from "react";
import { ReactFCWithChildren } from "types/ReactTypes";
import Image from "next/image";

interface ExternalShellProps {
    filename: string;
}

const ExternalShell: React.FC<ReactFCWithChildren & ExternalShellProps> = ({ children, filename }) => {
    return (
        <div className="bg-terminalTop rounded-t-lg border-terminalAccent border-[1px] border-b-0 text-white shadow-2xl flex pl-3 pt-2">
            <div className="bg-terminalTabColor pb-2 pt-2 px-3 border-terminalAccent border-[1px] border-b-0 rounded-t-lg font-mono text-base flex items-center gap-1">
                <div className="img-container w-4 h-4">
                    <Image src="/text-file-icon.png" alt="" width={16} height={16} />
                </div>
                {filename}
            </div>
        </div>
    );
};

export default ExternalShell;
