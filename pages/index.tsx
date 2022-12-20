//node imports
import { readFile } from "fs/promises";

//types
import { GetStaticProps } from "next";

//components
import Head from "next/head";
import WaveBackdrop from "components/animations/WaveBackdrop";
import Terminal, { TerminalProps } from "components/Code-Terminal.tsx/Terminal";
import SocialMediaIcons, { SocialMediaIconsInfo } from "components/SocialMediaIcons/SocialMediaIcons";

type LandingPageProps = TerminalProps & {
    SocialInfos: SocialMediaIconsInfo[];
}; //new time for future intersections

export default function Home(props: LandingPageProps) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WaveBackdrop>
                <section className="primary-terminal-container pt-8">
                    <Terminal filename={props.filename} introduction={props.introduction} />
                </section>
                <section className="mt-10">
                    <SocialMediaIcons SocialInfos={props.SocialInfos} />
                </section>
            </WaveBackdrop>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const filename = "introduction.txt";

    //read in introduction text
    const fileContents = await readFile(`./data/${filename}`);
    const IntroductionString = fileContents.toString();

    //save as array (save time by preformatting props)
    const introduction = IntroductionString.split(/\r?\n/); //split by new line

    return {
        props: {
            filename,
            introduction,
            SocialInfos: [
                { socialLink: "https://github.com/Parth099", introText: "View my Github", SocialMediaName: "github" },
                { socialLink: "https://www.linkedin.com/in/parth-patel-tu/", introText: "Connect With me on linked in", SocialMediaName: "linkedin" },
            ],
        },
    };
};

/*

SocialMediaIconsInfo {
    socialLink: string;
    introText: string;
    SocialMediaName: string;
}
*/
