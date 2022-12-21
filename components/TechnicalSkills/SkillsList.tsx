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
        <section className="text-white">
            <div className="flex items-center mb-5 xl-max:flex-col xl-max:items-start">
                <h3 className="border-r-white  text text-3xl font-black p-3 font-inter grow xl-max:border-0 lg-max:text-xl">Languages</h3>
                <section className="grow-[2]">
                    <TechnicalSkills Skills={Skills.langs} />
                </section>
            </div>
            <div className="flex items-center mb-5 xl-max:flex-col xl-max:items-start">
                <h3 className="border-r-white text text-3xl font-black p-3 font-inter grow xl-max:border-0 lg-max:text-xl">Frameworks/Services</h3>
                <section className="grow-[2]">
                    <TechnicalSkills Skills={Skills.frameworks} />
                </section>
            </div>
        </section>
    );
}
