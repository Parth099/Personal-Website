import Link from "next/link";
import React from "react";
import AnimatedLogo from "../animations/AnimatedLogo";

export default function Navbar() {
    return (
        <nav className="bg-navbar text-white font-inter sticky top-0 left-0 z-10" id="#">
            <div className="flex justify-between font-black text-4xl">
                <section className="logo ml-6 flex items-center">
                    <AnimatedLogo firstLetter="P" rest="arth Patel" />
                </section>
                <section className="flex font-semibold text-xl last:pr-6">
                    <Link href="/#" className="nav-link">
                        Home
                    </Link>
                    <Link href="/about-me" className="nav-link">
                        About Me
                    </Link>
                    <Link href="/research" className="nav-link">
                        Research
                    </Link>
                    <Link href="/contact" className="nav-link">
                        Contact Information
                    </Link>
                </section>
            </div>
        </nav>
    );
}
