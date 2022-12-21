import type { AppProps } from "next/app";
import "/styles/globals.css";
import { Inter, Montserrat } from "@next/font/google";

//components
import Navbar from "@Navbar/Navbar";
import Head from "next/head";

//fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                        --font-montserrat: ${montserrat.style.fontFamily};
                    }
                `}
            </style>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
