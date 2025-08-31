# Editora Sabiá - Digital Publishing Platform

A modern digital book reader built with Nuxt 4, Nuxt Content v3, and the Paginar web component for an immersive reading experience.

## 🚀 Quick Start

### Prerequisites
- Node.js v22.14.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000` (or alternative port if 3000 is busy).

## 📚 Application Overview

This application is a digital publishing platform that provides:

- **Interactive Book Reader**: Uses the `paginate-content` web component for pagination and enhanced reading experience
- **Multiple Book Support**: Currently supports 3 books with ISBN-based routing
- **Static Site Generation**: Pre-renders all content for optimal SEO and performance
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Nuxt 4 + Content v3**: Latest technology stack for modern web applications

### Architecture

- **Framework**: Nuxt 4.0.3 with Nitro static preset
- **Content Management**: Nuxt Content v3.6.3 with SQLite database
- **Styling**: TailwindCSS with custom color palette
- **Reader Component**: Paginar v0.2.8 web component
- **Database**: Better SQLite3 for content indexing

## 🔧 Available Commands

### Development
```bash
# Start development server with hot reload
npm run dev

# Start development server in background
npm run dev &
```

### Production
```bash
# Generate static site for production
npm run generate

# Preview generated static site
npm run preview

# Build for server deployment (SSR)
npm run build
```

### Content Management
```bash
# Content is automatically processed when files change
# No special commands needed for content updates
```

## 📖 How the Application Works

### Content Structure
```
content/
├── [ISBN]/
│   ├── .settings/
│   │   └── index.js          # Book configuration
│   ├── 1.cover.md            # Numbered for ordering
│   ├── 2.chapter-name.md     # URL becomes /[isbn]/chapter-name
│   └── ...
```

### Routing System
- **Homepage**: `/` → Redirects to default book cover
- **Book Pages**: `/[isbn]/[slug]` → Dynamic routing for all book content
- **ISBN Examples**: 
  - `9786599492907` (Design Decolonial)
  - `9786599492900` (Nascimento, Gusmão, etc.)
  - `9786599492938` (English book)

### Content Processing
1. **Numbered Prefixes**: Files like `1.cover.md` become routes like `/cover` (numbers are for ordering only)
2. **Auto-discovery**: Nuxt Content automatically finds and indexes all markdown files
3. **Collections**: Content is organized into collections for easy querying
4. **Navigation**: Automatic table of contents generation from file structure

### Reader Experience
1. **Server-Side**: Clean fallback HTML content for SEO and fast initial load
2. **Client-Side**: Interactive `paginate-content` component loads after JavaScript
3. **Hydration**: Uses `ClientOnly` wrapper to prevent hydration mismatches
4. **Pagination**: Advanced reader features like font selection, themes, bookmarks

## 📝 Adding New Books

### Step 1: Create Content Structure
```bash
mkdir content/[NEW_ISBN]
mkdir content/[NEW_ISBN]/.settings
```

### Step 2: Create Modular Book Settings

Create the settings directory structure:
```bash
mkdir content/[NEW_ISBN]/.settings
```

Create `content/[NEW_ISBN]/.settings/config.js`:
```javascript
import references from './references.js'
import footnotes from './footnotes.js'
import fontOptions from './fonts.js'
import theme from './theme.js'

export default {
  metadata: {
    isbn: '[NEW_ISBN]',
    title: 'Your Book Title',
    author: 'Author Name',
    year: 2024
  },

  reader: {
    fontSize: 19,
    defaultTextFont: 'Libre Franklin'
  },

  fontsOptions: fontOptions,
  theme: theme,

  content: {
    references: references,
    footnotes: footnotes
  }
}
```

Create `content/[NEW_ISBN]/.settings/references.js`:
```javascript
export default [
  {
    id: "author2024",
    cit: "AUTHOR, 2024", 
    author: "Author, Name",
    title: "Book Title",
    publisher: "Publisher Name",
    year: 2024
  }
]
```

Create `content/[NEW_ISBN]/.settings/theme.js`:
```javascript
export default {
  name: 'your-book-theme',
  cssVariables: {
    '--book-primary-color': '#your-color'
  },
  componentCSS: `
    .capa.columns-double {
      background-color: var(--book-primary-color);
    }
  `
}
```

The system automatically generates the legacy format in `index.js`.

### Step 3: Add Content Files
Create markdown files with numbered prefixes for ordering:
```
content/[NEW_ISBN]/
├── 1.cover.md
├── 2.preface.md
├── 3.chapter-1.md
└── ...
```

### Step 4: Import Book Settings
Add to `pages/[isbn]/[...slug].vue`:
```javascript
import bookNEWISBN from '../../content/[NEW_ISBN]/.settings/index.js'

// Add to the dynamic import section
if (isbn === '[NEW_ISBN]') {
  bookSettings = bookNEWISBN
}
```

### Step 5: Add Routes to Static Generation
Add routes to `nuxt.config.js`:
```javascript
nitro: {
  prerender: {
    routes: [
      // ... existing routes
      '/[NEW_ISBN]/cover',
      '/[NEW_ISBN]/chapter-1',
      // ... all book routes
    ]
  }
}
```

### Step 6: Test and Deploy
```bash
# Test in development
npm run dev

# Generate and test static version
npm run generate
npm run preview
```

## 🎨 Styling and Customization

### TailwindCSS Configuration
The application uses a custom color palette:
- `areia`: "#FFF7E0" (Sand)
- `canarinho`: "#FFDC78" (Canary Yellow)
- `laranjeira`: "#FFA03C" (Orange)
- `urucum`: "#CD2800" (Urucum Red)
- `terra`: "#690000" (Earth Brown)
- `pitaia`: "#FF3CA0" (Dragon Fruit Pink)
- `arara`: "#0028CD" (Macaw Blue)
- `blue.julio`: "#184097" (Julio Blue)

### Custom Components
- **Custom Elements**: `paginate-content` is configured as a custom element
- **Content Renderer**: Uses Nuxt Content's ContentRenderer for markdown
- **Responsive Layout**: Mobile-first design with Tailwind utilities

### Font Loading
- **Faune Family**: Display and text variants with multiple formats (WOFF2, WOFF, TTF, EOT, SVG)
- **Larken Family**: Bold and italic variants
- **Web Font Optimization**: Preloaded critical fonts, prefetched others

## 🚀 Static Site Generation

### How SSG Works
1. **Build Phase**: `npm run generate` pre-renders all routes
2. **Content Processing**: SQLite database indexes all markdown content
3. **Route Discovery**: Automatic route generation from content structure
4. **HTML Generation**: Each route becomes a static HTML file
5. **Asset Optimization**: Images, fonts, and CSS are optimized

### SSG Benefits
- ✅ **SEO Optimized**: Search engines see full content
- ✅ **Fast Loading**: Pre-rendered HTML loads instantly
- ✅ **CDN Friendly**: Can be deployed to any static hosting
- ✅ **Offline Capable**: Works without server after initial load

### Deployment Targets
- **Netlify**: Drag and drop `.output/public` folder
- **Vercel**: Connect GitHub repo with zero config
- **GitHub Pages**: Upload `.output/public` contents
- **AWS S3**: Upload to S3 bucket with static hosting
- **Any CDN**: Standard static file hosting

## 🛠️ Technical Details

### Hydration Strategy
- **Problem**: Web components can cause hydration mismatches
- **Solution**: `ClientOnly` wrapper with semantic fallback
- **Benefit**: SEO content + interactive enhancement

### Content API
```javascript
// Query all content for navigation
const { data: allContent } = await useAsyncData('all-content', () => 
  queryCollection('content').all()
)

// Query specific page content
const { data: doc } = await useAsyncData(`content-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)
```

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Images and fonts optimized
- **Tree Shaking**: Unused code eliminated
- **Compression**: Gzip compression for all assets

## 🐛 Troubleshooting

### Common Issues

**Content Not Showing**
- Check file naming (numbered prefixes for ordering)
- Verify markdown frontmatter is valid
- Ensure content files are in correct directories

**Hydration Errors**
- Web component is wrapped in `ClientOnly`
- Fallback content provides SSR compatibility
- Check browser console for specific errors

**Build Failures**
- Ensure all imported book settings exist
- Check that all routes in `nuxt.config.js` have corresponding content
- Verify Node.js version (v22.14.0+)

**Static Generation Issues**
- Run `npm run generate` to rebuild
- Check `.output/public` contains expected files
- Use `npm run preview` to test before deployment

### Debug Commands
```bash
# Clear Nuxt cache
rm -rf .nuxt node_modules/.cache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check content processing
npm run dev
# Look for Content v3 processing logs
```

## 🎛️ Advanced Book Settings System

### New Modular Architecture

The application now uses a modular book settings system that provides:

- **Separation of Concerns**: References, themes, fonts, and footnotes in separate files
- **Type Safety**: Structured data with validation
- **Backward Compatibility**: Automatically generates legacy format for Paginar
- **Theme System**: CSS variables and component styling
- **Reference Management**: Structured bibliographic data

### File Structure
```
content/[ISBN]/.settings/
├── index.js          # Auto-generated legacy format
├── config.js         # Main configuration
├── references.js     # Bibliographic references
├── footnotes.js      # Book footnotes
├── fonts.js          # Font configurations
└── theme.js          # Visual theme and CSS
```

### Reference Management

**Old Way (Inline):**
```javascript
references: [
  {
    "cit": "AUTHOR, 2024",
    "ref": "AUTHOR, Name. <strong>Long Book Title</strong>. Publisher, 2024. 300p."
  }
]
```

**New Way (Structured):**
```javascript
// references.js
export default [
  {
    id: "author2024",
    cit: "AUTHOR, 2024",
    author: "AUTHOR, Name",
    title: "Long Book Title", 
    publisher: "Publisher",
    year: 2024,
    pages: "300p",
    url: "https://example.com",
    access: "10 jan. 2024"
  }
]
```

### Theme System

**CSS Variables:**
```javascript
// theme.js
cssVariables: {
  '--book-primary-color': '#2563eb',
  '--book-accent-color': '#ffffff',
  '--cover-background-image': 'url(...)'
}
```

**Component CSS:**
```javascript
componentCSS: `
  .capa.columns-double {
    background-color: var(--book-primary-color);
    background-image: var(--cover-background-image);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .capa { background-position: center; }
  }
  
  /* Print optimization */
  @media print {
    .capa { background-image: none !important; }
  }
`
```

### Font Configuration

Enhanced font system with accessibility features:
```javascript
// fonts.js
export default [
  {
    id: 'libre-franklin',
    label: 'Libre Franklin',
    name: '"Libre Franklin", sans-serif',
    link: 'https://fonts.googleapis.com/...',
    type: 'text',
    defaultTextFont: true,
    
    characteristics: {
      readability: 'high',
      style: 'humanist',
      usage: 'body-text'
    }
  },
  
  {
    id: 'open-dyslexic',
    label: 'Open Dyslexic',
    type: 'accessibility',
    
    accessibility: {
      dyslexiaFriendly: true,
      letterSpacing: 'increased'
    }
  }
]
```

### Book Management Utilities

Use the book manager for advanced operations:

```javascript
import { validateBookConfig, createBookTemplate } from '../utils/book-manager.js'

// Validate configuration
const validation = validateBookConfig(bookConfig)
if (!validation.valid) {
  console.error('Config errors:', validation.errors)
}

// Create new book template
const newBook = createBookTemplate('9786599492999', {
  title: 'New Book',
  author: 'Author Name'
})
```

### Migration from Old System

The new system is fully backward compatible. Existing books continue to work while you can gradually migrate:

1. **Keep existing `index.js`** - No immediate changes needed
2. **Create modular files** - Add new structured files gradually  
3. **Update `index.js`** - Use the new generator system
4. **Test thoroughly** - Ensure Paginar compatibility

### Benefits

- ✅ **Better Organization**: Separate files for different concerns
- ✅ **Easier Maintenance**: Structured data instead of long strings
- ✅ **Enhanced Themes**: CSS variables and responsive design
- ✅ **Accessibility**: Better font management with a11y features
- ✅ **Type Safety**: Validation and error checking
- ✅ **Version Control**: Better diffs and collaboration

## 📈 Development Workflow

### Adding Content
1. Create/edit markdown files in appropriate ISBN folder
2. Development server auto-reloads with changes
3. Test in browser at `http://localhost:3000`

### Styling Changes
1. Modify TailwindCSS classes in Vue components
2. Update `tailwind.config.js` for theme changes
3. Hot reload shows changes immediately

### Configuration Updates
1. Update book settings in `.settings/index.js`
2. Modify `nuxt.config.js` for app-level changes
3. Restart dev server for config changes

### Production Deployment
1. `npm run generate` - Build static site
2. `npm run preview` - Test locally
3. Upload `.output/public` to hosting service
4. Configure redirects if needed

## 📄 License & Credits

- **Nuxt 4**: Modern Vue.js framework
- **Nuxt Content v3**: File-based CMS
- **Paginar**: Interactive reading component
- **TailwindCSS**: Utility-first CSS framework
- **Custom Fonts**: Faune and Larken font families

---
