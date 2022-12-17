import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-navbar text-white font-inter">
            <div className="flex justify-between">
                <span className="">P</span>
                <section className="flex">
                    <Link href="/" className="py-4 px-4">
                        Home
                    </Link>
                    <Link href="/about-me" className="py-4 px-4">
                        About Me
                    </Link>
                    <Link href="/research" className="py-4 px-4">
                        Research
                    </Link>
                    <Link href="/contact" className="py-4 px-4">
                        Contact Information
                    </Link>
                </section>
            </div>
        </nav>
    );
}
