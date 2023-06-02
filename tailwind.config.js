module.exports = {
    daisyui : {
        themes: true
    },
    content: [
        "./src/Docs/.fable-build/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [
        require('daisyui'),
    ]
}
