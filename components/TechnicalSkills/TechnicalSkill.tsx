import Image from "next/image";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

export interface TechnicalSkillProps {
    path: string;
    technology: string;
}

export default function TechnicalSkill({ skill }: { skill: TechnicalSkillProps }) {
    return (
        <Tooltip title={skill.technology} className="p-1" placement="top" arrow>
            <Image src={skill.path} alt={`icon of ${skill.technology}`} width={50} height={50} />
        </Tooltip>
    );
}
