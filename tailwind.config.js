/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                dashboard: {
                    background: '#f8fafc',
                    card: '#ffffff',
                    border: '#e2e8f0',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
            }
        },
    },
    plugins: [],
}