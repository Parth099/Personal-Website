import React from "react";
import SocialMdeiaIcon from "./SocialMediaIcon";

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
                    <div key={i}>
                        <SocialMdeiaIcon SocialInfo={SI} />
                    </div>
                );
            })}
        </div>
    );
}
