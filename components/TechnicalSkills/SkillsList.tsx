import React from "react";

import { TechnicalSkillProps } from "./TechnicalSkill";
import TechnicalSkills from "./TechnicalSkills";

export interface TSkills {
    langs: TechnicalSkillProps[];
    frameworks: TechnicalSkillProps[];
}

interface SkillsListProps {
    Skills: TSkills;
}

export default function SkillsList({ Skills }: SkillsListProps) {
    return (
        <div className="flex text-white items-center mb-5 xl-max:flex-col xl-max:items-start">
            <h3 className="border-r-white border-r-4 text text-3xl font-black p-3 font-inter grow xl-max:border-0">Languages</h3>
            <section className="grow-[2]">
                <TechnicalSkills Skills={Skills.langs} />
            </section>
        </div>
    );
}
