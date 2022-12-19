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
    plugins: [],
};
