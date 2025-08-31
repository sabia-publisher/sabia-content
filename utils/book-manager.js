// Book Settings Management Utility
// Centralized system for managing book configurations

/**
 * Validates book configuration structure
 * @param {Object} config - Book configuration object
 * @returns {Object} - Validation result with errors array
 */
export function validateBookConfig(config) {
  const errors = []
  
  // Validate metadata
  if (!config.metadata?.isbn) {
    errors.push('Missing required field: metadata.isbn')
  }
  
  if (!config.metadata?.title) {
    errors.push('Missing required field: metadata.title')
  }
  
  // Validate reader settings
  if (!config.reader?.fontSize || config.reader.fontSize < 12 || config.reader.fontSize > 24) {
    errors.push('Invalid fontSize: must be between 12 and 24')
  }
  
  // Validate fonts
  if (!Array.isArray(config.fontsOptions) || config.fontsOptions.length === 0) {
    errors.push('Missing or empty fontsOptions array')
  }
  
  // Check for default fonts
  const hasDefaultText = config.fontsOptions.some(f => f.defaultTextFont)
  const hasDefaultBase = config.fontsOptions.some(f => f.defaultBaseFont)
  
  if (!hasDefaultText) {
    errors.push('No defaultTextFont specified in fontsOptions')
  }
  
  if (!hasDefaultBase) {
    errors.push('No defaultBaseFont specified in fontsOptions')
  }
  
  // Validate theme
  if (!config.theme?.componentCSS) {
    errors.push('Missing theme.componentCSS')
  }
  
  // Validate references
  if (config.content?.references) {
    config.content.references.forEach((ref, index) => {
      if (!ref.cit || !ref.author) {
        errors.push(`Reference ${index}: missing required cit or author field`)
      }
    })
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

/**
 * Generates a new book configuration template
 * @param {string} isbn - Book ISBN
 * @param {Object} options - Configuration options
 * @returns {Object} - New book configuration
 */
export function createBookTemplate(isbn, options = {}) {
  return {
    metadata: {
      isbn: isbn,
      title: options.title || 'New Book Title',
      subtitle: options.subtitle || '',
      author: options.author || 'Author Name',
      publisher: 'Editora Sabiá',
      year: new Date().getFullYear(),
      language: options.language || 'pt-br'
    },

    reader: {
      fontSize: 19,
      defaultTextFont: 'Libre Franklin',
      defaultBaseFont: 'Inter',
      
      preferences: {
        columnsMode: 'auto',
        theme: 'light',
        lineHeight: 1.6,
        pageMargin: 'medium'
      }
    },

    fontsOptions: [
      {
        id: 'libre-franklin',
        label: 'Libre Franklin',
        name: '"Libre Franklin", sans-serif',
        link: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
        defaultTextFont: true,
        fallback: 'sans-serif'
      },
      {
        id: 'inter',
        label: 'Inter',
        name: '"Inter", sans-serif',
        link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
        defaultBaseFont: true,
        fallback: 'sans-serif'
      }
    ],

    theme: {
      name: `book-${isbn}`,
      version: '1.0.0',
      
      cssVariables: {
        '--book-primary-color': '#2563eb',
        '--book-secondary-color': '#1d4ed8',
        '--book-accent-color': '#ffffff',
        '--book-text-color': '#374151',
        '--book-background-color': '#ffffff'
      },

      componentCSS: `
        main#rootComponent {
          transition: background-color 200ms linear;
          font-family: var(--text-font-family);
          line-height: 1.6;
        }

        .capa.columns-double,
        .capa.columns-single {
          background-color: var(--book-primary-color);
          color: var(--book-accent-color);
        }
      `,

      stylesheets: []
    },

    content: {
      references: [],
      footnotes: [],
      generateSummary: true,
      customOrder: null
    },

    features: {
      enableBookmarks: true,
      enableNotes: true,
      enableSearch: true,
      enablePrint: true,
      enableShare: false
    }
  }
}

/**
 * Converts structured reference to citation string
 * @param {Object} reference - Structured reference object
 * @returns {string} - Formatted citation
 */
export function formatCitation(reference) {
  const parts = []
  
  if (reference.author) {
    // Format: LASTNAME, FirstName
    const authorParts = reference.author.split(' ')
    const lastName = authorParts.pop().toUpperCase()
    const firstName = authorParts.join(' ')
    parts.push(firstName ? `${lastName}, ${firstName}` : lastName)
  }
  
  if (reference.year) {
    parts.push(`(${reference.year})`)
  }
  
  if (reference.title) {
    parts.push(`<strong>${reference.title}</strong>`)
  }
  
  if (reference.publication) {
    parts.push(`<em>${reference.publication}</em>`)
  }
  
  if (reference.location) {
    parts.push(reference.location)
  }
  
  if (reference.publisher) {
    parts.push(reference.publisher)
  }
  
  let citation = parts.join('. ')
  
  if (reference.url) {
    citation += `. Disponível em: ${reference.url}`
    if (reference.access) {
      citation += `. Acesso em: ${reference.access}`
    }
  }
  
  return citation + '.'
}

/**
 * Builds CSS from theme configuration
 * @param {Object} theme - Theme configuration
 * @returns {string} - Generated CSS
 */
export function buildThemeCSS(theme) {
  const cssVariables = Object.entries(theme.cssVariables || {})
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')

  return `
:root {
${cssVariables}
}

${theme.componentCSS || ''}
  `.trim()
}

/**
 * Extracts book metadata from markdown frontmatter
 * @param {string} markdownContent - Markdown file content
 * @returns {Object} - Extracted metadata
 */
export function extractMetadata(markdownContent) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/
  const match = markdownContent.match(frontmatterRegex)
  
  if (!match) return {}
  
  const frontmatter = match[1]
  const metadata = {}
  
  // Parse YAML-like frontmatter (simple implementation)
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim()
      metadata[key.trim()] = value.replace(/^['"]|['"]$/g, '')
    }
  })
  
  return metadata
}

/**
 * Generates book summary from content files
 * @param {Array} contentFiles - Array of content file objects
 * @returns {Array} - Generated summary/table of contents
 */
export function generateSummary(contentFiles) {
  return contentFiles
    .filter(file => file.title) // Only files with titles
    .map(file => ({
      title: file.navigation?.title || file.title,
      link: file.path,
      order: file.order || 0
    }))
    .sort((a, b) => a.order - b.order)
}

export default {
  validateBookConfig,
  createBookTemplate,
  formatCitation,
  buildThemeCSS,
  extractMetadata,
  generateSummary
}