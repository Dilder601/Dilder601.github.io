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
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                light: {
                    gray: '#F5F8FA'
                },
                primary: colors.indigo,
                slate: {
                    305: '#c4cfdd',
                    350: '#b0bccd',
                    450: '#7c8ba2',
                    455: '#78879f',
                    550: '#66788e',
                    650: '#4e6179',
                    750: '#37475a',
                    850: '#172133',
                    950: '#0a0f1e',
                    955: '#010314',
                },
                emerald: {
                    450: '#22c68d',
                },
            },
            fontSize: {
                sm: '12px'
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.7', transform: 'scale(1.05)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                blob: {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                orbit: {
                    '0%': { transform: 'translateX(-50%) translateY(-50%) rotate(var(--tilt)) scale(1)' },
                    '50%': { transform: 'translateX(-50%) translateY(calc(-50% - 8px)) rotate(var(--tilt)) scale(1.03)' },
                    '100%': { transform: 'translateX(-50%) translateY(-50%) rotate(var(--tilt)) scale(1)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.6s ease-out both',
                'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
                blink: 'blink 1s step-end infinite',
                blob: 'blob 7s infinite',
                orbit: 'orbit var(--duration, 8s) ease-in-out infinite var(--delay, 0s)',
            },
        }
    },
    plugins: []
};

export default config;
