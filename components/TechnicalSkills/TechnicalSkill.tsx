import Image from "next/image";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

export interface TechnicalSkillProps {
    path: string;
    technology: string;
}


export default function TechnicalSkill({ skill }: { skill: TechnicalSkillProps }) {
    return (
        <Tooltip title={skill.technology} className="" placement="top" arrow>
            <Image src={skill.path} alt={`icon of ${skill.technology}`} width="75" height="75" className="object-contain w-auto h-imgInit md-max:h-14 mid-max:h-16" />
        </Tooltip>
    );
}
