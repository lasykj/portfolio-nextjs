const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: "#112031",
                primary: "#D4ECDD",
                secondary: "#152D35",
                strong: "white",

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
