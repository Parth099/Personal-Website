import Link from "next/link";
import React from "react";
import AnimatedLogo from "../animations/AnimatedLogo";

export default function Navbar() {
    return (
        <nav className="bg-navbar text-white font-inter sticky top-0 left-0 z-10 mid-max:pt-4" id="#">
            <div className="flex justify-between font-black text-4xl mid-max:flex-col mid-max:items-center">
                <section className="logo ml-6 flex items-center mid-max:m-0">
                    <AnimatedLogo firstLetter="Tu" rest="Dev Demo" />
                </section>
                <section className="flex font-semibold text-xl last:pr-6 mid-max:last:p-0 mid-max:flex-wrap mid-max:justify-center md-max:text-base">
                    <Link href="/#" className="nav-link">
                        Home
                    </Link>
                    <Link href="/#timeline" className="nav-link">
                        About Me
                    </Link>
                    <Link href="/#resume" className="nav-link">
                        Resume
                    </Link>
                    <Link href="/#contact" className="nav-link">
                        Contact Information
                    </Link>
                </section>
            </div>
        </nav>
    );
}
