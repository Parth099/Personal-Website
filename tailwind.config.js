/** @type {import('tailwindcss').Config} */
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
            },
            fontFamily: {
                inter: ["var(--font-inter)", "Helvetica"],
                montserrat: ["var(--font-montserrat)", "Helvetica"],
            },
            width: {
                maxview: "1280px",
            },
            maxWidth: {
                maxview: "1280px",
            },
        },
    },
    safelist: ["bg-red-700", "bg-orange-500", "bg-green-800", "w-4", "h-4", "rounded-full"],
    plugins: [],
};
