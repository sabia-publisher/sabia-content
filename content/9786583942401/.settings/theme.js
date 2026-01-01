// Theme configuration for Paginar component
export default {
    // Theme metadata
    name: 'estudos-historia-teoria-design',
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

    main#rootComponent.estudos-em-historia-e-teoria-do-design-editora-sabia {
        background: url(/9786583942401/images/cover-bg.jpg) no-repeat center;
    }

    main#rootComponent.notas-sobre-a-pos-graduacao-em-design-no-brasil.currentPage-1 {
        background: url(/9786583942401/images/cap1.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.apresentacao.currentPage-1 {
        background: url(/9786583942401/images/cap2.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.das-artes-plasticas-ao-design.currentPage-1 {
        background: url(/9786583942401/images/cap3.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.o-hiato-da-historia-das-artes-aplicadas-no-brasil.currentPage-1 {
        background: url(/9786583942401/images/cap4.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.o-mam-rio-na-historia-do-design-brasileiro.currentPage-1 {
        background: url(/9786583942401/images/cap5.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.trajetorias-do-espaco-expositivo-moderno.currentPage-1 {
        background: url(/9786583942401/images/cap6.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.design-e-autonomia.currentPage-1 {
        background: url(/9786583942401/images/cap7.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.o-drama-e-a-era-do-projeto.currentPage-1 {
        background: url(/9786583942401/images/cap8.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.batalha-das-cadeiras.currentPage-1 {
        background: url(/9786583942401/images/cap9.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.a-oficina-tribiani-e-a-pintura-de-tabuletas-no-rio-de-janeiro.currentPage-1 {
        background: url(/9786583942401/images/cap10.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.memoria-grafica-na-margem.currentPage-1 {
        background: url(/9786583942401/images/cap11.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    main#rootComponent.as-folhas-velhas-da-vista-alegre.currentPage-1 {
        background: url(/9786583942401/images/cap12.png) no-repeat calc(100% + 1rem) 3rem / contain, url(/9786583942401/images/bg-chapters.jpg) repeat-x center;
    }

    #summary-menu .w-60 {
        width: 35rem !important;
        max-width: 90vw !important;
        max-height: calc(100vh - 5.4rem);
        overflow: auto;
    }

    .summary-menu-dropdown-item-title {
        display: block;
        font-weight: bold;
    }

    .summary-menu-dropdown-item-author {
        display: block;
    }

    .capa.columns-double,
    .capa.columns-single {
        background-color: rgb(0, 0, 0);
        background-size: cover;
        background-position: center center;
    }

    .contentArea {
      max-width: 65ch;
      margin: 0 auto;
    }

    /* Estilo para títulos de capítulos */
    .Cap-tulo {
      font-size: 2em;
      font-weight: bold;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.2;
    }

    /* Estilo para autoria */
    .Autoria {
      font-style: italic;
      margin-bottom: 2em;
    }

    /* Estilos para parágrafos */
    .P1---sem-recuo {
      margin-bottom: 1em;
    }

    .P1 {
      text-indent: 2em;
      margin-bottom: 1em;
    }

    /* Heading 1 */
    .H1 {
      font-size: 1.5em;
      font-weight: bold;
      margin-top: 1.5em;
      margin-bottom: 1em;
    }

    /* Estilos para referências de nota de rodapé */
    .Num-Ref {
      vertical-align: super;
      font-size: 0.75em;
    }

    /* Estilos para itálico e negrito */
    .Italic {
      font-style: italic;
    }

    .Degular-Bold {
      font-weight: bold;
    }

    /* Imagens */
    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 1em auto;
    }

    /* Legendas de imagens */
    .Legenda {
      font-size: 0.9em;
      font-style: italic;
      text-align: center;
      margin-top: 0.5em;
      margin-bottom: 1em;
    }
  `,

    // External stylesheet references (for global styles)
    stylesheets: [
        '/9786583942401/css/base.css'
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
