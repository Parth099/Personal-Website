/** @type {import('tailwindcss').Config} */

max_view_width = "1280px";
contactCircle = "32px";

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                navbar: "#272727",
                body: "#333333",
                terminalTop: "#161b22",
                terminalAccent: "#30363d",
                terminalTabColor: "#24292f",
                whiteTransparent: "rgba(255, 255, 255, 0.5)",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "Helvetica"],
                montserrat: ["var(--font-montserrat)", "Helvetica"],
            },
            width: {
                maxview: max_view_width,
                contactCircle,
            },
            height: {
                contactCircle,
                imgInit: "75px",
            },
            maxWidth: {
                maxview: max_view_width,
                sm: "640px",
                md: "768px",
                lg: "1024px",
            },
            screens: {
                "2xl-max": { max: "1535px" },
                "xl-max": { max: "1279px" },
                "lg-max": { max: "1023px" },
                "mid-max": { max: "900px" },
                "md-max": { max: "767px" },
                "sm-max": { max: "639px" },
            },
            extend: {
                flexGrow: {
                    2: 2,
                },
            },
        },
    },
    safelist: ["bg-red-700", "bg-orange-500", "bg-green-800", "w-4", "h-4", "rounded-full", "bg-body"],
    plugins: [],
};
