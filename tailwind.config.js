// tailwind.config.js or a similar config file
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        // Add other paths to your HTML or JS files here
    ],
    plugins: [
        require('flowbite/plugin')
    ],
};

// Make sure to control body overflow to prevent scrolling issues
document.body.style.overflow = 'hidden';

