import type { AppProps } from "next/app";
import "/styles/globals.css";
import { Inter } from "@next/font/google";

//components
import Navbar from "@Navbar/Navbar";

//fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                    }
                `}
            </style>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
