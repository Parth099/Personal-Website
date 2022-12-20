import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaIconsInfo } from "./SocialMediaIcons";

export default function SocialMediaIcon({ SocialInfo }: { SocialInfo: SocialMediaIconsInfo }) {
    return (
        <section className="flex flex-col gap-2 items-center font-inter text-white font-bold text-xl">
            <p>{SocialInfo.introText}</p>
            <Link href={SocialInfo.socialLink} target="_blank">
                <Image
                    alt={`${SocialInfo.SocialMediaName} icon and link`}
                    src={`/social-icons/${SocialInfo.SocialMediaName}.png`}
                    width={50}
                    height={50}
                />
            </Link>
        </section>
    );
}
