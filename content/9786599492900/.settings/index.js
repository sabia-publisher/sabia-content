export default {
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Jornalistica Roman',
            name: '"Jornalistica Roman", serif;',
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
        .main#rootComponent div.w-60 {
            width: 35rem !important;
        }
    `,

    references: [],

    footnotes: [
        {
            "id": "footnote1",
            "text": "Suprarrealidade: esse conceito destaca a capacidade da literatura de transcender as limitações do mundo físico e material, oferecendo uma visão enriquecida e mais complexa da existência e das experiências humanas."
        },
    ]
}
