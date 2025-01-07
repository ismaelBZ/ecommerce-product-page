/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'orange-500': '#FF7E1B'
            },
            fontFamily: {
                kumbh: '"Kumbh Sans", serif'
            },
            screens: {
                'sm': '375px',
                'mx': '542px',
                'lg': '840px',

            }
        },
    },
    plugins: [],
}

