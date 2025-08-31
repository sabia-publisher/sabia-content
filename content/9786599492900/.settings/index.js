// New modular book settings system
import config from './config.js'

// Utility function to generate legacy format for Paginar compatibility
function generateLegacySettings(config) {
  // Extract CSS variables and component CSS
  const cssVariables = Object.entries(config.theme.cssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ')

  const cssString = `
  :root {
    ${cssVariables}
  }

  ${config.theme.componentCSS}
  `

  // Transform references to legacy format
  const legacyReferences = config.content.references.map(ref => ({
    cit: ref.cit,
    ref: formatReference(ref)
  }))

  // Transform footnotes to legacy format
  const legacyFootnotes = config.content.footnotes

  return {
    // Basic reader settings
    fontSize: config.reader.fontSize,
    fontsOptions: config.fontsOptions.map(font => ({
      label: font.label,
      name: font.name,
      link: font.link,
      defaultTextFont: font.defaultTextFont || false,
      defaultBaseFont: font.defaultBaseFont || false
    })),

    // CSS styling
    cssString: cssString.trim(),

    // Content references
    references: legacyReferences,
    footnotes: legacyFootnotes,

    // Metadata for enhanced functionality
    _metadata: config.metadata,
    _theme: config.theme.name,
    _version: '2.0.0'
  }
}

// Helper function to format structured references into legacy string format
function formatReference(ref) {
  const parts = []

  if (ref.author) parts.push(ref.author)
  if (ref.title) parts.push(`<strong>${ref.title}</strong>`)
  if (ref.subtitle) parts.push(ref.subtitle)
  if (ref.publication) parts.push(ref.publication)
  if (ref.location) parts.push(ref.location)
  if (ref.publisher) parts.push(ref.publisher)
  if (ref.date) parts.push(ref.date)
  if (ref.year) parts.push(ref.year.toString())
  if (ref.pages) parts.push(ref.pages)
  if (ref.edition) parts.push(ref.edition)

  let formatted = parts.join('. ') + '.'

  // Add URL and access date if available
  if (ref.url) {
    formatted += ` Disponível em: ${ref.url}.`
    if (ref.access) {
      formatted += ` Acesso em: ${ref.access}.`
    }
  }

  return formatted
}

// Export both new config and legacy-compatible settings
export default generateLegacySettings(config)

// Named exports for advanced usage
export { config, generateLegacySettings }
