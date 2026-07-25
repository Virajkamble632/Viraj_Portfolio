export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FBFF',
        surface: '#FFFFFF',
        card: 'rgba(14, 165, 233, 0.06)',
        primary: '#0EA5E9',
        secondary: '#38BDF8',
        accent: '#7DD3FC',
        text: '#0F172A',
        textSecondary: '#475569'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(14, 116, 144, 0.12)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(14,165,233,0.16), transparent 35%), radial-gradient(circle at 20% 10%, rgba(56,189,248,0.12), transparent 22%), radial-gradient(circle at right, rgba(125,211,252,0.14), transparent 25%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
