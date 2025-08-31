// Theme configuration for Paginar component
export default {
    // Theme metadata
    name: 'livro-9786599492938',
    version: '1.0.0',

    // CSS Variables for consistent theming
    cssVariables: {},

    // Component-specific CSS for Paginar's shadow DOM
    componentCSS: `

        main#rootComponent  {
            transition: background-color 200ms linear;
        }

        .cover.columns-double,
        .cover.columns-single {
            background-color: #C86400;
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/capa-livro-clara_plataforma.jpg?alt=media&token=5623508a-dc06-404c-890a-5e32e593d830);
            background-size: cover;
        }

        .cover.columns-double .columnsArea,
        .cover.columns-single .columnsArea {
            column-count: initial !important;
        }

        #rootComponent.cover .viewer-nav {
            color: #fff !important
        }

        #rootComponent.cover .slider-target {
            display: none;
        }

        .gratitudes {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .introduction.columns-double.currentPage-1,
        .introduction.columns-single.currentPage-1,
        .introduction.columns-single.currentPage-2 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-a.columns-double.currentPage-1,
        .part-a.columns-double.currentPage-2,
        .part-a.columns-single.currentPage-1,
        .part-a.columns-single.currentPage-2,
        .part-a.columns-single.currentPage-3 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-b.columns-double.currentPage-1,
        .part-b.columns-double.currentPage-2,
        .part-b.columns-single.currentPage-1,
        .part-b.columns-single.currentPage-2,
        .part-b.columns-single.currentPage-3 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .part-c.columns-double.currentPage-1,
        .part-c.columns-double.currentPage-2,
        .part-c.columns-single.currentPage-1,
        .part-c.columns-single.currentPage-2 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

        .references.columns-double.currentPage-1,
        .references.columns-single.currentPage-1 {
            background: var(--theme-primary, #FFFFFF) !important;
        }

  `,

    // External stylesheet references (for global styles)
    stylesheets: [
        '/9786599492938/css/base.css',
        '/9786599492938/css/style-red.css',
        '/9786599492938/css/style-purple.css',
        '/9786599492938/css/style-green.css',
        '/9786599492938/css/style-bege.css'
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


