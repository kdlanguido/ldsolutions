import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    '0%': { backgroundPosition: '100%' },
                    '100%': { backgroundPosition: '-100%' },
                },
            },
            animation: {
                shine: 'shine 5s linear infinite',
            },
        },
    },
    plugins: [],
}
export default config
