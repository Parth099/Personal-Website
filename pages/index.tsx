//node imports
import { readFile } from "fs/promises";
import TimelineData from "../data/Timeline.json";
import Skills from "../data/Skills.json";

//types
import { GetStaticProps } from "next";

//animation
import { motion } from "framer-motion";

//components
import Head from "next/head";
import WaveBackdrop from "components/animations/WaveBackdrop";
import Terminal, { TerminalProps } from "components/Code-Terminal/Terminal";
import SocialMediaIcons, { SocialMediaIconsInfo } from "components/SocialMediaIcons/SocialMediaIcons";
import Timeline from "components/Timeline/Timeline";
import { TimelineInstanceProps } from "components/Timeline/TimelineEntry";
import SkillsList, { TSkills } from "components/TechnicalSkills/SkillsList";
import ContactMe from "components/footer/ContactMe";
import ResumeDownload from "components/ResumeDownload/ResumeDownload";

//animation
const TimelineVarients = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5,
            when: "beforeChildren",
        },
    },
};

type LandingPageProps = TerminalProps & {
    SocialInfos: SocialMediaIconsInfo[];
    Timeline: TimelineInstanceProps[];
    Skills: TSkills;
}; //new time for future intersections

export default function Home(props: LandingPageProps) {
    return (
        <main className="">
            <Head>
                <title>Parth Patel</title>
                <meta
                    name="description"
                    content="Hi, my name is Parth. I am a student at TempleU studying Math and CS. I built this website to highlight all my skills and achievements in an single easy to access place."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href="parthpatel.dev" />
            </Head>
            <WaveBackdrop wavecolor="#fff" height="200px" bodycolorclass="bg-body">
                <section className="primary-terminal-container pt-8">
                    <Terminal filename={props.filename} introduction={props.introduction} />
                </section>
                <section className="mt-10">
                    <SocialMediaIcons SocialInfos={props.SocialInfos} />
                </section>
            </WaveBackdrop>
            <section className="bg-white">
                <div className="timeline-container overflow-x-hidden relative mb-6 md-max:px-4">
                    <div className="absolute top-[-100px] md-max:top-[-155px] sm-max:top-[-210px]" id="timeline"></div>
                    <motion.div
                        variants={TimelineVarients}
                        initial="hidden"
                        animate="visible"
                        className="timeline-container-internal mx-auto 2xl:max-w-maxview xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-sm"
                    >
                        <h2 className="text-body text-4xl w-full font-black font-inter border-b-4 border-body mb-4">Timeline</h2>
                        <Timeline timeline={props.Timeline} />
                    </motion.div>
                </div>
                <section className="md-max:mt-10">
                    <ResumeDownload />
                </section>
            </section>
            <WaveBackdrop wavecolor="#333333" height="200px" bodycolorclass="bg-white"></WaveBackdrop>
            <section className="tech-skills bg-body mb-20 md-max:px-4">
                <div className="mx-auto 2xl:max-w-maxview xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-sm">
                    <SkillsList Skills={props.Skills} />
                </div>
            </section>
            <footer className="bg-navbar py-5 md-max:px-4">
                <div className="mx-auto 2xl:max-w-maxview xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-sm">
                    <ContactMe />
                </div>
            </footer>
        </main>
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
                { socialLink: "https://www.linkedin.com/in/parth-patel-tu/", introText: "Connect With me on Linkedin", SocialMediaName: "linkedin" },
            ],
            Timeline: TimelineData,
            Skills,
        },
    };
};
