/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            spacing: {
                '4.5': '1.125rem',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                heading: ['var(--font-outfit)'],
            },
            colors: {
                light: {
                    gray: '#F5F8FA'
                },
                primary: colors.sky,
                slate: {
                    305: '#c4cfdd',
                    350: '#b0bccd',
                    450: '#7c8ba2',
                    455: '#78879f',
                    850: '#172133',
                    955: '#010314',
                },
                emerald: {
                    450: '#22c68d',
                },
            },
            fontSize: {
                sm: '12px'
            }
        }
    },
    plugins: []
};

export default config;
