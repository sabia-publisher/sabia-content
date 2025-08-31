// Font configuration optimized for Paginar
export default [
  {
    id: 'libre-franklin',
    label: 'Libre Franklin',
    name: '"Libre Franklin", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
    type: 'text', // 'text', 'heading', 'ui'
    defaultTextFont: true,
    fallback: 'sans-serif',
    
    // Font characteristics for Paginar optimization
    characteristics: {
      readability: 'high',
      style: 'humanist',
      usage: 'body-text'
    }
  },
  {
    id: 'inter',
    label: 'Inter',
    name: '"Inter", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
    type: 'ui',
    defaultBaseFont: true,
    fallback: 'sans-serif',
    
    characteristics: {
      readability: 'high',
      style: 'geometric',
      usage: 'interface'
    }
  },
  {
    id: 'open-dyslexic',
    label: 'Open Dyslexic',
    name: '"Open-Dyslexic", sans-serif',
    link: 'https://fonts.cdnfonts.com/css/open-dyslexic',
    type: 'accessibility',
    fallback: 'sans-serif',
    
    characteristics: {
      readability: 'accessibility',
      style: 'dyslexia-friendly',
      usage: 'accessible-reading'
    },
    
    // Accessibility features
    accessibility: {
      dyslexiaFriendly: true,
      letterSpacing: 'increased',
      characterWeight: 'bottom-heavy'
    }
  },
  {
    id: 'atkinson-hyperlegible',
    label: 'Atkinson Hyperlegible',
    name: '"Atkinson Hyperlegible", sans-serif',
    link: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    type: 'accessibility',
    fallback: 'sans-serif',
    
    characteristics: {
      readability: 'maximum',
      style: 'high-contrast',
      usage: 'low-vision'
    },
    
    accessibility: {
      lowVisionOptimized: true,
      highContrast: true,
      distinctCharacters: true
    }
  },
  {
    id: 'faune-text',
    label: 'Faune Text',
    name: '"Faune Text", serif',
    type: 'text',
    fallback: 'serif',
    localFont: true, // Indicates this font is loaded locally
    
    characteristics: {
      readability: 'high',
      style: 'transitional',
      usage: 'long-form-reading'
    },
    
    // Custom font loading configuration
    fontFace: {
      woff2: '/fonts/Faune-Text_Regular.woff2',
      woff: '/fonts/Faune-Text_Regular.woff',
      ttf: '/fonts/Faune-Text_Regular.ttf'
    }
  }
]