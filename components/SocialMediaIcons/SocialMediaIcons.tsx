import React from "react";
import { motion } from "framer-motion";

import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaIconVarients = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number) => {
        return {
            opacity: 1,
            transition: { duration: 0.5, delay: i * 0.3 + 1 },
        };
    },
};

export interface SocialMediaIconsInfo {
    socialLink: string;
    introText: string;
    SocialMediaName: string;
}

export default function SocialMediaIcons({ SocialInfos }: { SocialInfos: SocialMediaIconsInfo[] }) {
    return (
        <div className="flex gap-10 justify-center">
            {SocialInfos.map((SI, i) => {
                return (
                    <motion.div variants={SocialMediaIconVarients} initial="hidden" animate="visible" custom={i} key={i}>
                        <SocialMediaIcon SocialInfo={SI} />
                    </motion.div>
                );
            })}
        </div>
    );
}
