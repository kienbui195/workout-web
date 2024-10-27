/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",], theme: {
        extend: {},
    }, plugins: [plugin(function ({addUtilities}) {
        const newUtilities = addUtilities({
            ".proj-container": {
                maxWidth: "1200px", margin: "0 auto", width: "100%"
            }
        })
    })],
}
