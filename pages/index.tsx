import WaveBackdrop from "components/animations/WaveBackdrop";
import Terminal from "components/Code-Terminal.tsx/Terminal";
import { GetStaticProps } from "next";
import Head from "next/head";

interface LandingPageProps {
    filename: string;
}

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
                    <Terminal filename={props.filename} />
                </section>
            </WaveBackdrop>
        </>
    );
}

export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            filename: "introduction.txt",
        },
    };
};
