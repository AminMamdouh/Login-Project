/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#edf5fb',
                    100: '#d1e5f4',
                    200: '#a6d2ec',
                    300: '#6eb7e0',
                    400: '#3f9dd4',
                    500: '#2681be',
                    600: '#18537F',
                    700: '#134266',
                    800: '#0e324c',
                    900: '#092233',
                }
            }
        },
    },
    plugins: [],
}
