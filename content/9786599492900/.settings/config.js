// Main book configuration - clean and focused
import references from './references.js'
import footnotes from './footnotes.js'
import fontOptions from './fonts.js'
import theme from './theme.js'

export default {
  // Basic book metadata
  metadata: {
    isbn: '9786599492900',
    title: 'Livro 9786599492900',
    publisher: 'Editora Sabiá',
    year: 2024,
    language: 'pt-br'
  },

  // Paginar-specific reader settings
  reader: {
    fontSize: 19,
    // Reader interface preferences
    preferences: {
      columnsMode: 'auto', // 'single', 'double', 'auto'
      theme: 'light', // 'light', 'dark', 'sepia'
      lineHeight: 1.6,
      pageMargin: 'medium' // 'small', 'medium', 'large'
    }
  },

  // Font configuration for Paginar
  fontsOptions: fontOptions,

  // CSS theme configuration
  theme: theme,

  // Content organization
  content: {
    references: references,
    footnotes: footnotes,
    // Auto-generate summary from content files
    generateSummary: true,
    // Chapter ordering (if different from file numbering)
    customOrder: null
  },

  // Advanced Paginar features
  features: {
    enableBookmarks: true,
    enableNotes: true,
    enableSearch: true,
    enablePrint: true,
    enableShare: false
  }
}


