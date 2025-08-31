/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue', 
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    'app.vue'
  ],
  theme: {
    extend: {
      colors: {
        areia: "#FFF7E0",
        canarinho: "#FFDC78", 
        laranjeira: "#FFA03C",
        urucum: "#CD2800",
        terra: "#690000",
        pitaia: "#FF3CA0",
        arara: "#0028CD",
        salmao: "#FFCDAB",
        blue: {
          julio: "#184097"
        },
        gray: {
          ice: "#F5F5F5",
          light: "#EAEAEA", 
          default: "#C4C4C4",
          dark: "#808080",
          coat: "#454545"
        }
      },
      spacing: {
        "80": "20rem",
        "88": "22rem", 
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "192": "48rem",
        "256": "64rem"
      },
      zIndex: {
        '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9
      },
      minHeight: {
        "80": "20rem", "88": "22rem", "96": "24rem",
        "104": "26rem", "112": "28rem", "120": "30rem", 
        "128": "32rem", "136": "38rem", "192": "48rem",
        "256": "64rem"
      },
      fontFamily: {
        'display': ['Now', 'Poppins', 'Open-sans', 'sans-serif'],
        'body': ['Hyperlegible', 'Arial', 'sans-serif']
      }
    }
  },
  safelist: [
    'text-6xl', 'leading-none', 'doubleColumns', 'singleColumns',
    'high', 'por-que-uma-editora-digital', 
    'okabayashi-uma-perspectiva-decolonial-para-o-design-no-brasil',
    'engine', 'reader-component',
    { pattern: /^bg-.*/ },
    { pattern: /^text-.*/ }
  ],
  plugins: [
    // Custom 'high' variant plugin
    function({ addVariant }) {
      addVariant('high', '.high &')
    },
    require('@tailwindcss/typography')
  ]
}