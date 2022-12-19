//node imports
import { readFile } from "fs/promises";

//types
import { GetStaticProps } from "next";

//components
import Head from "next/head";
import WaveBackdrop from "components/animations/WaveBackdrop";
import Terminal, { TerminalProps } from "components/Code-Terminal.tsx/Terminal";

type LandingPageProps = TerminalProps; //new time for future intersections

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
                <section className="primary-terminal-container pt-4">
                    <Terminal filename={props.filename} introduction={props.introduction} />
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
    const introduction = IntroductionString.split("\r?\n"); //split by new line

    return {
        props: {
            filename,
            introduction,
        },
    };
};
