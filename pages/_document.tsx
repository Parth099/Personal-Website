import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: "smooth" }}>
            <Head></Head>
            <body className="bg-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
