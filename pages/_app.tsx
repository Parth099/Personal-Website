import type { AppProps } from "next/app";
import "/styles/globals.css";
import { Inter, Montserrat } from "@next/font/google";

//components
import Navbar from "@Navbar/Navbar";

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
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
