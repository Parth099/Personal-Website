import React from "react";
import { motion } from "framer-motion";

import { TechnicalSkillProps } from "./TechnicalSkill";
import TechnicalSkills from "./TechnicalSkills";

export interface TSkills {
    langs: TechnicalSkillProps[];
    frameworks: TechnicalSkillProps[];
}

interface SkillsListProps {
    Skills: TSkills;
}

const SkillListVarients = {
    hidden: {
        opacity: 0,
        x: "-50vw",
    },
    inView: { opacity: 1, x: "0", transition: { duration: 0.75, delay: 0.5, when: "beforeChildren" } },
};

const SkillListChildVarients = {
    hidden: {
        opacity: 0,
    },
    inView: (i: number) => {
        return {
            opacity: 1,
            transition: {
                duration: 0.75,
                delay: i * 0.3,
            },
        };
    },
};

export default function SkillsList({ Skills }: SkillsListProps) {
    return (
        <motion.section
            className="text-white overflow-x-hidden"
            variants={SkillListVarients}
            initial="hidden"
            whileInView="inView"
            viewport={{ once: true }}
        >
            <h2 className="text-4xl w-full font-black font-inter border-b-4 border-white mb-4">Technical Skills</h2>
            <motion.div variants={SkillListChildVarients} custom={1} className="flex items-center mb-5 xl-max:flex-col xl-max:items-start">
                <h3 className="border-r-white  text text-3xl font-black font-inter grow xl-max:border-0 lg-max:text-xl">Languages</h3>
                <section className="grow-[2]">
                    <TechnicalSkills Skills={Skills.langs} />
                </section>
            </motion.div>
            <motion.div variants={SkillListChildVarients} custom={2} className="flex items-center mb-5 xl-max:flex-col xl-max:items-start">
                <h3 className="border-r-white text text-3xl font-black font-inter grow xl-max:border-0 lg-max:text-xl">Frameworks/Services</h3>
                <section className="grow-[2]">
                    <TechnicalSkills Skills={Skills.frameworks} />
                </section>
            </motion.div>
        </motion.section>
    );
}
