const selectorParser = require('postcss-selector-parser');
const plugin = require('windicss/plugin');

module.exports = {
    darkMode: 'class',

    extract: {
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },

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
                    coat: "#454545",
                    dark: "#2D2D2D"
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
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '6': 6,
                '7': 7,
                '8': 8,
                '9': 9
            },

            minHeight: {
                "80": "20rem",
                "88": "22rem",
                "96": "24rem",
                "104": "26rem",
                "112": "28rem",
                "120": "30rem",
                "128": "32rem",
                "136": "38rem",
                "192": "48rem",
                "256": "64rem"
            }
        },

        fontFamily: {
            'display': ['Now', 'Poppins', 'Open-sans', 'sans-serif'],
            'body': ['Hyperlegible', 'Arial', 'sans-serif'],
        }
    },

    variants: {
        scale: ['active', 'group-hover'],
        width: ['hover', 'group-hover', 'responsive'],
        translate: ['active', 'group-hover', 'hover'],
        border: ['hover', 'focus', 'last']
    },

    plugins: [
        require('windicss/plugin/forms'),
        plugin(function ({ addVariant, prefix }) {
            addVariant('high', ({ modifySelectors, separator }) => {
                modifySelectors(({ selector }) => {
                    return selectorParser((selectors) => {
                        selectors.walkClasses((sel) => {
                            sel.value = `high${separator}${sel.value}`;
                            sel.parent.insertBefore(sel, selectorParser().astSync(prefix(`.high `)));
                        });
                    }).processSync(selector);
                });
            });
        })
    ],

    purge: {
        enabled: process.env.NODE_ENV === 'production',

        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],

        options: {
            safelist: [
                'text-6xl',
                'leading-none',
                'doubleColumns',
                'singleColumns',
                /^bg-/,
                /^text-/,
                /swiper/,
                /vue-slider$/,
                'high',
                'por-que-uma-editora-digital',
                'okabayashi-uma-perspectiva-decolonial-para-o-design-no-brasil',
                'engine',
                'reader-component'
            ],

            whitelist: [
                'text-6xl',
                'leading-none',
                'doubleColumns',
                'singleColumns',
                /^bg-/,
                /^text-/,
                /swiper/,
                /vue-slider$/,
                'high',
                'por-que-uma-editora-digital',
                'okabayashi-uma-perspectiva-decolonial-para-o-design-no-brasil',
                'engine',
                'reader-component'
            ],
        },
    },

    variants: {
        backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'high']
    }
}
