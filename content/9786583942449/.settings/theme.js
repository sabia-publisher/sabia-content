// Theme configuration for Paginar component
export default {
    // Theme metadata
    name: 'livro-9786583942449',
    version: '1.0.0',

    // CSS Variables for consistent theming
    cssVariables: {
        '--book-primary-color': '#111827',
        '--book-secondary-color': '#374151',
        '--book-accent-color': '#ffffff',
        '--book-text-color': '#333333',
        '--book-background-color': '#ffffff',
        '--book-border-color': '#e5e5e5',

        // Typography
        '--reading-line-height': '1.6',
        '--reading-letter-spacing': '0.01em',
        '--heading-letter-spacing': '-0.02em'
    },

    // Component-specific CSS for Paginar's shadow DOM
    componentCSS: `
    main#rootComponent {
      transition: background-color 200ms linear;
    }

    #summary-menu-dropdown {
        width: 35rem !important;
        max-width: 90vw !important;
        max-height: calc(100vh - 6rem);
        overflow: auto;
    }

    .summary-menu-dropdown-item-title {
        display: block;
        font-weight: bold;
    }

    .summary-menu-dropdown-item-author {
        display: block;
    }

    .praticas-de-leitura-e-analise-de-textos-literarios-editora-sabia.columns-double,
    .praticas-de-leitura-e-analise-de-textos-literarios-editora-sabia.columns-single {
        background-color: rgb(0, 0, 0);
        background-image: url(/9786583942449/images/cover.png);
        background-size: cover;
        background-position: bottom center;
    }

    .contentArea {
      max-width: 65ch;
      margin: 0 auto;
    }
  `,

    // External stylesheet references (for global styles)
    stylesheets: [
        '/9786583942449/css/base.css'
    ],

    // Theme variants for different reading modes
    variants: {
        sepia: {
            '--book-background-color': '#f4f1ea',
            '--book-text-color': '#5c4b37',
            '--book-border-color': '#d3c7b8'
        },

        dark: {
            '--book-background-color': '#1a1a1a',
            '--book-text-color': '#e5e5e5',
            '--book-border-color': '#404040',
            '--book-primary-color': '#4a90e2'
        },

        'high-contrast': {
            '--book-background-color': '#ffffff',
            '--book-text-color': '#000000',
            '--book-border-color': '#000000',
            '--book-primary-color': '#0066cc'
        }
    }
}


