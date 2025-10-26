import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#358F5F', // Primary green from logo
          dark: '#2A6B47', // Darker forest green
          light: '#4DB88D', // Lighter green for hover states
          teal: {
            DEFAULT: '#4DB8C7', // Vibrant teal from logo arrows
            dark: '#2B7B8A', // Darker teal for backgrounds (readable with white text)
            medium: '#3A9DAB', // Medium teal for interactions
            light: '#6BCAD6', // Lighter teal for accents
            pale: '#E8F7F9' // Very light teal for subtle backgrounds
          }
        },
        charcoal: '#1A2332', // Navy from logo text
        ash: '#F5F8F7' // Slightly cool-toned off-white
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 20px 60px rgba(53, 143, 95, 0.25)', // Updated to match new brand green
        'glow-teal': '0 20px 60px rgba(77, 184, 199, 0.25)' // New teal glow option
      },
      backgroundImage: {
        'grid-dark':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: [animate]
};

export default config;
