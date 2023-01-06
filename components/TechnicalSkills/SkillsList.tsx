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
                duration: 0.6,
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
            <h2 className="text-4xl w-full font-black font-inter border-b-4 border-white mb-7">Technical Skills</h2>
            <section className="TechnicalSkills-grid grid grid-cols-2 xl-max:grid-cols-1">
                <motion.h3 variants={SkillListChildVarients} custom={1} className="text-3xl inline font-black font-inter lg-max:text-xl">
                    Languages
                </motion.h3>
                <motion.section variants={SkillListChildVarients} custom={2} className="mb-8 md-max:mb-5">
                    <TechnicalSkills Skills={Skills.langs} />
                </motion.section>
                <motion.h3 variants={SkillListChildVarients} custom={3} className="text-3xl inline font-black font-inter lg-max:text-xl">
                    Frameworks/Services
                </motion.h3>
                <motion.section variants={SkillListChildVarients} custom={4}>
                    <TechnicalSkills Skills={Skills.frameworks} />
                </motion.section>
            </section>
        </motion.section>
    );
}
