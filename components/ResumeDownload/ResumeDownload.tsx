import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const ResumeDownloadVarient = {
    hidden: {
        opacity: 0,
    },
    inView: {
        opacity: 1,
        transition: {
            duration: 0.75,
            delay: 0.5,
        },
    },
};

export default function ResumeDownload() {
    return (
        <motion.div
            variants={ResumeDownloadVarient}
            initial="hidden"
            whileInView="inView"
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 text-2xl sm-max:text-xl relative"
        >
            <p className="font-bold font-inter">Download one-page resume </p>
            <Link href="/resume/resume_parth_patel-02-10-23.pdf" target="_blank" download={true}>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Image src="/pdf_dl.svg" alt="download resume pdf link" width={48} height={48} className="sm-max:w-9 sm-max:h-9" />
                </motion.div>
            </Link>
            <div id="resume" className="w-0 h-0 absolute top-[-100px] md-max:top-[-155px] sm-max:top-[-210px]"></div>
        </motion.div>
    );
}
