import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactMe() {
    return (
        <div className="text-white" id="contact">
            <section className="flex gap-2 items-center flex-wrap">
                <h2 className=" text-xl font-black font-inter text-center md-max:text-base">Contact Me</h2>
                <motion.div
                    whileHover={{ scale: 1.25 }}
                    className="w-contactCircle h-contactCircle rounded-full bg-whiteTransparent shadow-xl relative flex flex-col justify-center items-center"
                >
                    <Link href={"tel:+14848606064"}>
                        <Image className="" src="/social-icons/phone.svg" alt="icon of a phone" width={16} height={16} />
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.25 }}
                    className="w-contactCircle h-contactCircle rounded-full bg-whiteTransparent shadow-xl relative flex flex-col justify-center items-center"
                >
                    <Link href={"mailto:parthnpatel@temple.edu"}>
                        <Image className="" src="/social-icons/email.svg" alt="icon of a phone" width={16} height={16} />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
