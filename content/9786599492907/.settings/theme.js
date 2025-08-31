// Theme configuration for Paginar component
export default {
    // Theme metadata
    name: 'design-decolonial',
    version: '1.0.0',

    // CSS Variables for consistent theming
    cssVariables: {},

    // Component-specific CSS for Paginar's shadow DOM
    componentCSS: `

        main#rootComponent  {
            transition: background-color 200ms linear;
        }

        .capa.columns-double,
        .capa.columns-single {
            background-color: rgb(24, 64, 151);
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-size: cover;
        }

        .capa.columns-double .columnsArea,
        .capa.columns-single .columnsArea {
            column-count: initial !important;
        }

        #rootComponent.capa .viewer-nav {
            color: #fff !important
        }

        #rootComponent.capa .slider-target {
            display: none;
        }

        .estudos-decoloniais.columns-double.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-1,
        .estudos-decoloniais.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .estudos-culturais-do-design.columns-double.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-1,
        .estudos-culturais-do-design.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

        .design-decolonial.columns-double.currentPage-1,
        .design-decolonial.columns-single.currentPage-1,
        .design-decolonial.columns-single.currentPage-2 {
            background-image: url(https://firebasestorage.googleapis.com/v0/b/editora-sabia.appspot.com/o/okabayashi.jpg?alt=media&token=614c19c5-15bf-4c0f-a0a8-48a1381ac662);
            background-color: rgb(24, 64, 151);
            background-size: cover;
        }

  `,

    // External stylesheet references (for global styles)
    stylesheets: [
        '/9786599492907/css/base.css', // Chapter-specific styles
        // Add more stylesheets as needed
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
