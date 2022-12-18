/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                navbar: "#272727",
                body: "#323232",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "Helvetica"],
                montserrat: ["var(--font-montserrat)", "Helvetica"],
            },
        },
    },
    plugins: [],
};
