import React from "react";
import TechnicalSkill, { TechnicalSkillProps } from "./TechnicalSkill";

export default function TechnicalSkills({ Skills }: { Skills: TechnicalSkillProps[] }) {
    return (
        <section className="flex flex-wrap">
            {Skills.map((skill, i) => {
                return <TechnicalSkill key={i} skill={skill} />;
            })}
        </section>
    );
}
