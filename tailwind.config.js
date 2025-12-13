/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Newsreader', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        editorial: {
          'cream': '#FAF8F5',
          'ivory': '#F5F2EC',
          'charcoal': '#1A1A1A',
          'stone': '#78716C',
          'sage': '#7C8B7E',
          'copper': '#B87D5C',
          'mist': '#E8E5E0',
          'ink': '#2D2D2D',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontSize: {
        'display-lg': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.05em',
      },
    },
  },
  plugins: [],
}

