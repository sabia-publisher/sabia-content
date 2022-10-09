export default {
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Crimson',
            name: '"Crimson Text", Georgia, serif',
            link: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap',
            defaultTextFont: true
        },
        {
            label: 'Inter',
            name: '"Inter", sans-serif',
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
            defaultBaseFont: true
        },
        {
            label: 'Open Dyslexic',
            name: '"Open-Dyslexic", sans-serif',
            link: 'https://fonts.cdnfonts.com/css/open-dyslexic'
        },
        {
            label: 'Atkinson Hyperlegible',
            name: 'Atkinson Hyperlegible',
            link: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
    ],

    cssString: `
        main#rootComponent  {
            transition: background-color 200ms linear;
        }

        .gratitudes.columns-double.currentPage-1,
        .gratitudes.columns-single.currentPage-1,
        .gratitudes.columns-single.currentPage-2 {
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
    `
}
