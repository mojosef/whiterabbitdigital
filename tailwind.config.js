module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            colors: {
                "brand-dark": "#262020",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
