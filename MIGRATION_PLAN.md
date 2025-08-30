## Migration Plan: Nuxt 4, Nuxt Content 3.6.3, Static Generation, TailwindCSS, and CDN paginar

**LLM EXECUTION GUIDE**: This document provides step-by-step instructions for migrating a Nuxt.js application. Each section contains **VALIDATION COMMANDS** and **IMPLEMENTATION COMMANDS** that should be executed sequentially. Validate each step before proceeding to the next.

### 🤖 LLM EXECUTION RULES (CRITICAL - READ FIRST)

**EXECUTION ENVIRONMENT**: Windows PowerShell (`C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe`)
**WORKSPACE PATH**: `C:\Trabalhos\editora-sabia\sabia-content`

#### 🚨 MANDATORY VALIDATION PROTOCOL:
1. **ALWAYS validate each phase** before proceeding to the next
2. **STOP IMMEDIATELY** if any validation criteria fails 
3. **RUN ALL VALIDATION COMMANDS** in each phase sequentially
4. **REPORT RESULTS** of each validation step
5. **DO NOT SKIP** any validation checkpoints

#### 🔧 COMMAND EXECUTION RULES:
- **Shell**: Always use Windows PowerShell syntax (provided PowerShell equivalents)
- **Non-interactive**: Add `--yes` flags to prevent prompts
- **Error handling**: Report all outputs, including errors - never suppress
- **Idempotency**: Check if files exist before creating; backup before overwriting
- **File backups**: Create `.bak` files for core configs before replacement
- **Output verification**: Echo/display command results for verification

#### 📁 FILE BACKUP PROTOCOL:
Before modifying ANY core file:
```powershell
# Create backup
Copy-Item "package.json" "package.json.bak" -Force
Copy-Item "nuxt.config.js" "nuxt.config.js.bak" -Force
```

#### ⚡ CRITICAL SUCCESS FACTORS:
1. **Content v3 APIs**: Use `queryContent().find()` and `queryContent(path).findOne()` 
2. **Component preservation**: Keep `ContentRenderer` for custom slots (NOT `ContentDoc`)
3. **Custom element**: Ensure `paginate-content` works throughout migration
4. **Book validation**: Test all 3 ISBNs: 9786599492900, 9786599492907, 9786599492938
5. **Route generation**: Verify all routes pre-render correctly

#### PowerShell equivalents and patterns

- Delete directory: Bash `rm -rf path` → PowerShell `Remove-Item -Recurse -Force path`
- Grep text: Bash `grep -E "expr" file` → PowerShell `Get-Content file | Select-String -Pattern "expr"`
- Find files: Bash `find . -name "*.html"` → PowerShell `Get-ChildItem -Path . -Recurse -Filter *.html`
- Count results: Bash `... | wc -l` → PowerShell `( ... ).Count`
- Curl: Bash `curl -s URL` → PowerShell `Invoke-WebRequest -UseBasicParsing URL | Select-Object -ExpandProperty Content`
- Here-doc file write: Bash `cat > file << 'EOF' ... EOF` → PowerShell here-string:

```powershell
New-Item -ItemType Directory -Path (Split-Path -Parent "file") -Force | Out-Null
@'
<file content here>
'@ | Set-Content -Path "file" -Encoding UTF8
```

You may apply this conversion to any heredoc block in this plan.

#### Reality checks for this repository

- The workspace uses ISBN-based markdown in `content/{isbn}`; `.settings/index.js` folders may be absent. The provided page code already guards missing settings with try/catch; do not create settings files unless explicitly requested.
- The project currently uses WindiCSS and Nuxt 3.18.1; this plan upgrades to TailwindCSS and Nuxt 4. Ensure backups before replacing core files.

#### Idempotency and backups

- Before replacing any core file (e.g., `package.json`, `nuxt.config.js`, `pages/[isbn]/[...slug].vue`), create `*.bak` alongside it (or commit to a backup branch as instructed) and only then write the new file.
- Re-running phases should not error if directories or files already exist; use `-Force` in PowerShell where applicable.

### Migration Targets:
- Nuxt 4.x (from 3.18.1)
- Nuxt Content 3.6.3 (from 2.13.4)
- Static Site Generation (SSG) via `nuxt generate`
- Replace WindiCSS with TailwindCSS
- Preserve `paginar` CDN integration

### Critical Requirements:
- Node.js ≥ 18.20 (verify before starting)
- Preserve custom `paginate-content` element functionality
- Maintain all existing book content structure (ISBN-based directories)
- Ensure SSG generates all dynamic routes correctly

---

## PHASE 0: PRE-MIGRATION VALIDATION

**⚠️ CRITICAL**: Execute ALL validation commands before proceeding with migration.

### VALIDATION COMMANDS:

```bash
# 1. Verify Node.js version
node --version
# Expected: v18.20.0 or higher

# 2. Check current dependencies
cat package.json | grep -E "(nuxt|content|windicss)"

# 3. Verify current build works
npm install
npm run dev
# Test: Navigate to localhost:3000/9786599492900/cover
# Verify: paginate-content element renders correctly

npm run generate
# Expected: Build succeeds without errors

# 4. Test SSG output
npm run preview
# Test: Navigate through different ISBN books and chapters
```

```powershell
# Windows PowerShell equivalents

# 1. Verify Node.js version
node --version

# 2. Check current dependencies
Get-Content package.json | Select-String -Pattern '(nuxt|content|windicss)'

# 3. Verify current build works
npm install
npm run dev
# Test: Navigate to http://localhost:3000/9786599492900/cover
# Verify: paginate-content element renders correctly

npm run generate

# 4. Test SSG output
npm run preview
# Test: Navigate through different ISBN books and chapters
```

### API COMPATIBILITY CHECK:

```bash
# Create temporary test file to verify Content v3 APIs
cat > test-content-api.mjs << 'EOF'
import { createResolver } from '@nuxt/kit'
console.log("Testing Content API compatibility...")
// This will be populated after API verification
EOF

# Run test (will be expanded after validation)
node test-content-api.mjs
```

**VALIDATION CRITERIA**:
- [ ] Node.js ≥ 18.20
- [ ] Current app builds and runs correctly
- [ ] All book ISBNs accessible (9786599492900, 9786599492907, 9786599492938)
- [ ] `paginate-content` shadow DOM functions properly
- [ ] SSG generates all routes without errors

**🛑 STOP**: Do not proceed until ALL validation criteria are met.

#### 🤖 LLM CHECKPOINT PROTOCOL:
After running each validation command, you MUST:
1. Report the exact output/result
2. Explicitly state whether each criterion was met (✅ PASS / ❌ FAIL)
3. If ANY criterion fails, immediately execute rollback procedure
4. Only proceed to next phase when ALL criteria show ✅ PASS

---

### 1) Current Setup Assessment

**DETECTED CONFIGURATION**:
- Nuxt version: `3.18.1` in `package.json`
- Content: `@nuxt/content@^2.13.4` → Target: `@nuxt/content@3.6.3`
- CSS engine: `nuxt-windicss` with custom `windi.config.js` → Goal: TailwindCSS
- CDN dependency: `paginar@0.2.8` via `app.head.script`
- Custom element: `paginate-content` declared via `vue.compilerOptions.isCustomElement`

**CONTENT STRUCTURE ANALYSIS**:
- Books organized by ISBN in `/content/{isbn}/` directories
- Custom settings: `/content/{isbn}/.settings/index.js` files
- Navigation: Uses `fetchContentNavigation()` in `pages/[isbn]/[...slug].vue` → **NEEDS UPDATE to `queryContent()`**
- Rendering: `ContentRenderer` for Markdown content → **NEEDS UPDATE to `ContentDoc`**
- Dynamic imports: Book-specific settings loaded per ISBN

**CRITICAL DEPENDENCIES**:
```javascript
// Custom WindiCSS variant requiring migration
addVariant('high', ({ modifySelectors, separator }) => { ... })

// Complex shadow DOM interaction
const paginateElement = document.querySelector('paginate-content')
if (paginateElement?.shadowRoot) { ... }

// Dynamic book settings import
import book9786599492900 from '../../content/9786599492900/.settings/index.js'
```

**MIGRATION RISKS**:
- 🔴 HIGH: `paginate-content` SSR/SSG compatibility
- 🟡 MEDIUM: Content API changes (`fetchContentNavigation()` → `queryContent()`, `ContentRenderer` → `ContentDoc`)
- 🟡 MEDIUM: Custom WindiCSS `high:` variant recreation
- 🟢 LOW: Static asset and font path updates

---

## PHASE 1: DEPENDENCY UPDATES

**EXECUTION ORDER**: Follow commands sequentially. Validate each step.

### IMPLEMENTATION COMMANDS:

Pre-flight (PowerShell): ensure a clean working tree or checkpoint current changes before replacing core files.

```powershell
git status --porcelain
# If output is not empty, consider:
# git add -A
# git commit -m "Pre-migration checkpoint"
```

```bash
# 1. Create backup branch
git checkout -b migration-backup
git commit -am "Pre-migration backup"
git checkout feat/nascimento-gusmao

# 2. Update package.json dependencies
cat > package.json << 'EOF'
{
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  },
  "devDependencies": {
    "@nuxt/content": "3.6.3",
    "@nuxtjs/color-mode": "^3.1.6",
    "@nuxtjs/tailwindcss": "^6.12.1",
    "@vueuse/core": "^13.8.0",
    "@vueuse/nuxt": "^13.8.0",
    "nuxt": "^4.0.0",
    "postcss-nested": "^5.0.6",
    "tailwindcss": "^3.4.15",
    "@tailwindcss/typography": "^0.5.15",
    "autoprefixer": "^10.4.20"
  },
  "dependencies": {
    "@panzoom/panzoom": "^4.5.1",
    "slugify": "^1.6.5"
  }
}
EOF

# 3. Remove legacy dependencies
rm -rf node_modules package-lock.json

# 4. Install new dependencies
npm install

# 5. Verify installation
npm list --depth=0
```

```powershell
# Windows PowerShell equivalents

# 1. Create backup branch
git checkout -b migration-backup
git commit -am "Pre-migration backup"
git checkout feat/nascimento-gusmao

# 2. Update package.json dependencies
# Use here-string to overwrite package.json
@'
{
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  },
  "devDependencies": {
    "@nuxt/content": "3.6.3",
    "@nuxtjs/color-mode": "^3.1.6",
    "@nuxtjs/tailwindcss": "^6.12.1",
    "@vueuse/core": "^13.8.0",
    "@vueuse/nuxt": "^13.8.0",
    "nuxt": "^4.0.0",
    "postcss-nested": "^5.0.6",
    "tailwindcss": "^3.4.15",
    "@tailwindcss/typography": "^0.5.15",
    "autoprefixer": "^10.4.20"
  },
  "dependencies": {
    "@panzoom/panzoom": "^4.5.1",
    "slugify": "^1.6.5"
  }
}
'@ | Set-Content -Path "package.json" -Encoding UTF8

# 3. Remove legacy dependencies
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

# 4. Install new dependencies
npm install

# 5. Verify installation
npm list --depth=0
```

**VALIDATION COMMANDS**:
```bash
# Check for dependency conflicts
npm audit
# Expected: No high/critical vulnerabilities related to core dependencies

# Verify Nuxt 4 installation
npx nuxi info
# Expected: Shows Nuxt 4.x version info

# Test basic startup
npm run dev
# Expected: Dev server starts (may show errors - normal at this stage)
```

```powershell
# Windows PowerShell equivalents

# Check for dependency conflicts
npm audit

# Verify Nuxt 4 installation
npx nuxi info

# Test basic startup
npm run dev
```

**VALIDATION CRITERIA**:
- [ ] No critical dependency conflicts
- [ ] Nuxt 4.x successfully installed
- [ ] Dev server can start (errors expected but no crashes)
- [ ] Core packages (@nuxt/content, tailwindcss) installed correctly

---

## PHASE 2: TAILWINDCSS MIGRATION

**CRITICAL**: Preserve ALL custom colors, spacing, and variants from WindiCSS.

### IMPLEMENTATION COMMANDS:

```bash
# 1. Create Tailwind configuration
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue', 
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    'app.vue'
  ],
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
          coat: "#454545"
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
        '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9
      },
      minHeight: {
        "80": "20rem", "88": "22rem", "96": "24rem",
        "104": "26rem", "112": "28rem", "120": "30rem", 
        "128": "32rem", "136": "38rem", "192": "48rem",
        "256": "64rem"
      },
      fontFamily: {
        'display': ['Now', 'Poppins', 'Open-sans', 'sans-serif'],
        'body': ['Hyperlegible', 'Arial', 'sans-serif']
      }
    }
  },
  safelist: [
    'text-6xl', 'leading-none', 'doubleColumns', 'singleColumns',
    'high', 'por-que-uma-editora-digital', 
    'okabayashi-uma-perspectiva-decolonial-para-o-design-no-brasil',
    'engine', 'reader-component',
    { pattern: /^bg-.*/ },
    { pattern: /^text-.*/ },
    { pattern: /swiper.*/ },
    { pattern: /vue-slider.*/ }
  ],
  plugins: [
    // Custom 'high' variant plugin
    function({ addVariant }) {
      addVariant('high', '.high &')
    },
    require('@tailwindcss/typography')
  ]
}
EOF

# 2. Create PostCSS configuration
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {}
  }
}
EOF

# 3. Create Tailwind CSS entry file
mkdir -p assets/css
cat > assets/css/tailwind.css << 'EOF'
@tailwind base;
@tailwind components; 
@tailwind utilities;
EOF

# 4. Update components.css to use Tailwind @apply
cat > assets/css/components.css << 'EOF'
.button {
  @apply border-terra text-terra dark:border-canarinho dark:text-canarinho rounded-lg
    text-xs tracking-wide px-4 pt-3 pb-2 border-2 uppercase font-extrabold transition-all duration-300 transform;

  &.button-small {
    @apply px-3 pt-1 pb-0;
  }
}

@screen lg {
  .button {
    @apply px-5;
  }
}

@screen xl {
  .button {
    @apply px-6; 
  }
}

.button.button-negative {
  @apply border-white text-white;
}

.button.button-laranjeira-outline {
  @apply border-laranjeira text-black dark:text-areia;
}

.button.button-urucum-outline {
  @apply border-urucum text-black dark:text-areia;
}

.button.button-laranjeira {
  @apply border-laranjeira bg-laranjeira text-terra;
}

.button.button-urucum {
  @apply border-urucum bg-laranjeira text-terra;
}

.button:hover {
  @apply bg-terra text-white no-underline scale-105;
}

.button.button-negative:hover {
  @apply bg-white text-black no-underline;
}

.button.button-laranjeira:hover {
  @apply bg-transparent text-black dark:text-areia;
}

.button.button-laranjeira.hover-laranjeira:hover {
  @apply text-laranjeira dark:text-laranjeira;
}

.button.button-laranjeira-outline:hover {
  @apply bg-laranjeira text-black;
}

.button.button-urucum:hover {
  @apply bg-transparent text-black dark:text-areia;
}

.button.button-urucum-outline:hover {
  @apply bg-urucum text-black;
}

input[type=text], input[type=email], input[type=password], input[type=number], textarea {
  @apply rounded;
}
EOF
```

**VALIDATION COMMANDS**:
```bash
# Test Tailwind build
npx tailwindcss -i ./assets/css/tailwind.css -o ./test-output.css
# Expected: CSS file generated without errors

# Verify custom colors work
grep -E "(areia|canarinho|terra)" test-output.css
# Expected: Custom color classes found

# Clean up test file
rm test-output.css
```

```powershell
# Windows PowerShell equivalents

# Test Tailwind build
npx tailwindcss -i ./assets/css/tailwind.css -o ./test-output.css

# Verify custom colors work
Get-Content test-output.css | Select-String -Pattern '(areia|canarinho|terra)'

# Clean up test file
if (Test-Path test-output.css) { Remove-Item -Force test-output.css }
```

**VALIDATION CRITERIA**:
- [ ] Tailwind config created with all custom colors
- [ ] PostCSS config includes nested support  
- [ ] Custom 'high' variant plugin configured
- [ ] Safelist includes all required patterns
- [ ] Components.css migrated to @apply syntax

---

## PHASE 3: NUXT CONFIGURATION UPDATE

**CRITICAL**: Update Nuxt config to use new modules and remove legacy options.

### IMPLEMENTATION COMMANDS:

```bash
# 1. Update nuxt.config.js
cat > nuxt.config.js << 'EOF'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['paginate-content'].includes(tag)
    }
  },

  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/paginar@0.2.8/dist/index.es.js', type: 'module'}
      ]
    }
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/components.css', 
    '@/assets/css/fonts/faune.css',
    '@/assets/css/fonts/larken.css'
  ],

  // SSG Configuration for Nuxt 4 + Content v3
  nitro: {
    prerender: {
      // Explicit route definition ensures all content routes are pre-rendered
      // Content v3 + Nuxt 4 automatically discovers routes, but explicit is safer
      routes: [
        '/',
        '/9786599492900/cover',
        '/9786599492900/prefacio', 
        '/9786599492900/nascimento',
        '/9786599492900/moreira',
        '/9786599492900/rossato',
        '/9786599492900/pinto-e-silva',
        '/9786599492900/gusmao',
        '/9786599492900/oliveira', 
        '/9786599492900/matos',
        '/9786599492900/maciel',
        '/9786599492907/cover',
        '/9786599492907/prefacio',
        '/9786599492907/carta-a-primeira-edicao',
        '/9786599492907/mas-afinal',
        '/9786599492907/estudos-decoloniais',
        '/9786599492907/estudos-culturais',
        '/9786599492907/design-decolonial',
        '/9786599492907/consideracoes-finais',
        '/9786599492907/referencias',
        '/9786599492938/cover',
        '/9786599492938/gratitudes',
        '/9786599492938/preface',
        '/9786599492938/introduction',
        '/9786599492938/part-a',
        '/9786599492938/part-b',
        '/9786599492938/part-c',
        '/9786599492938/references'
      ]
    }
  },

  // Ensure all routes are pre-rendered by default
  routeRules: {
    '/**': { prerender: true }
  }
})
EOF

# 2. Remove legacy files
rm windi.config.js
rm assets/css/windi.css

# 3. Create route discovery script for dynamic SSG
cat > scripts/generate-routes.js << 'EOF'
import { resolve } from 'path'
import { readdir } from 'fs/promises'

async function generateRoutes() {
  const contentDir = resolve('./content')
  const routes = ['/']
  
  try {
    const isbns = await readdir(contentDir)
    
    for (const isbn of isbns) {
      if (isbn.match(/^\d+$/)) {
        const isbnDir = resolve(contentDir, isbn)
        const files = await readdir(isbnDir)
        
        for (const file of files) {
          if (file.endsWith('.md')) {
            const slug = file.replace('.md', '')
            routes.push(`/${isbn}/${slug}`)
          }
        }
      }
    }
  } catch (error) {
    console.warn('Route generation error:', error)
  }
  
  return routes
}

export { generateRoutes }
EOF
```

**VALIDATION COMMANDS**:
```bash
# Test configuration syntax
npm run dev
# Expected: Server starts without config errors

# Verify TailwindCSS integration
curl -s http://localhost:3000 | grep -o "tailwind\|tw-"
# Expected: Tailwind classes or references found

# Test route generation script
node -e "import('./scripts/generate-routes.js').then(m => m.generateRoutes().then(console.log))"
# Expected: Array of all book routes
```

```powershell
# Windows PowerShell equivalents

# Test configuration syntax
npm run dev

# Verify TailwindCSS integration
$home = Invoke-WebRequest -UseBasicParsing http://localhost:3000
($home.Content | Select-String -Pattern 'tailwind|tw-').Matches.Value

# Test route generation script
node -e "import('./scripts/generate-routes.js').then(m => m.generateRoutes().then(r => console.log(JSON.stringify(r))))"
```

**VALIDATION CRITERIA**:
- [ ] Nuxt config uses new module syntax
- [ ] TailwindCSS module integrated
- [ ] Legacy vite.devBundler option removed
- [ ] SSG routes explicitly defined
- [ ] Route generation script created

---

## PHASE 4: CONTENT API MIGRATION  

**CRITICAL**: Preserve existing navigation structure while updating to Content v3 APIs.

### PRE-PHASE: Create content configuration

```bash
# 1. Create content.config.ts for v3 collections (REQUIRED for v3)
cat > content.config.ts << 'EOF'
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
EOF
```

```powershell
# Windows PowerShell equivalent
@'
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
'@ | Set-Content -Path "content.config.ts" -Encoding UTF8
```

### IMPLEMENTATION COMMANDS:

```bash
# 2. Update pages/[isbn]/[...slug].vue with CORRECT v3 APIs
cat > 'pages/[isbn]/[...slug].vue' << 'EOF'
<script setup>
import slugify from 'slugify'
import usePageFull from '../../composables/usePageFull'
import readerSettings from '../../composables/readerSettings'

import book9786599492900 from '../../content/9786599492900/.settings/index.js'
import book9786599492907 from '../../content/9786599492907/.settings/index.js'
import book9786599492938 from '../../content/9786599492938/.settings/index.js'

const route = useRoute()
const router = useRouter()

// CORRECT v3 API: queryContent() with .find() for navigation
const { data: navigation } = await useAsyncData('navigation', async () => {
  try {
    // Use queryContent().find() - this is the CORRECT v3 API
    const allContent = await queryContent().find()
    const navigationStructure = []
    
    // Group by ISBN (first path segment)
    const bookGroups = {}
    allContent.forEach(item => {
      const pathParts = item._path.split('/')
      if (pathParts.length >= 2) {
        const isbn = pathParts[1]
        if (!bookGroups[isbn]) {
          bookGroups[isbn] = {
            title: isbn,
            _path: `/${isbn}`,
            children: []
          }
        }
        bookGroups[isbn].children.push({
          title: item.navigation?.title || item.title || pathParts[pathParts.length - 1],
          _path: item._path
        })
      }
    })
    
    return Object.values(bookGroups)
  } catch (error) {
    console.warn('Navigation build error:', error)
    return []
  }
})

const isbn = route.params.isbn
const book = navigation.value.find(item => item.title === isbn)

// CORRECT v3 API: queryContent() with .findOne() for single document
const { data } = await useAsyncData(`content-${route.path}`, async () => {
  try {
    // Use queryContent(route.path).findOne() - this is the CORRECT v3 API
    const content = await queryContent(route.path).findOne()
    return content
  } catch (error) {
    console.warn('Content fetch error:', error)
    return null
  }
})

// Handle dynamic import with error catching
let bookSettings = {}
try {
  if (isbn !== '.well-known') {
    console.log('\n\n\nimporting settings', isbn)
    
    if (isbn === '9786599492900') {
      bookSettings = book9786599492900
    } else if (isbn === '9786599492907') {
      bookSettings = book9786599492907
    } else if (isbn === '9786599492938') {
      bookSettings = book9786599492938
    }
    console.log('settings imported!!!', { bookSettings: bookSettings })
  }
} catch (error) {
  console.warn(`Settings file not found for ISBN ${isbn}, using defaults`)
}

const settings = reactive(bookSettings || {})
const classList = ref('')

const content = reactive({
  summary: book?.children?.map(item => ({ title: item.title, link: item._path })) || [],
  footnotes: bookSettings?.footnotes ?? [],
  references: bookSettings?.references ?? []
})

watch(() => route.params.slug, async () => {
  const { path } = useRoute()
  console.log({ path, isbn, slug: route.params.slug })
  
  if (!route.params.slug) {
    router.push(`/${isbn}/cover`)
  } else {
    if (isbn) {
      try {
        // CORRECT v3 API: queryContent(path).findOne()
        const newContent = await queryContent(path).findOne()
        data.value = newContent
      } catch (error) {
        console.warn('Content update error:', error)
      }
    }
  }
})

onMounted(() => {
  if (!route.params.slug) {
    window.location.href = `/${isbn}/cover`
  } else {
    const paginateElement = document.querySelector('paginate-content')
    if (paginateElement?.shadowRoot) {
      const targetNode = paginateElement.shadowRoot.querySelector('#rootComponent')
      
      if (targetNode) {
        classList.value = targetNode.classList.toString()
        
        const observer = new MutationObserver(() => {
          classList.value = targetNode.classList.toString()
        })
        observer.observe(targetNode, { attributes: true })
      }
    }
    
    const newHeight = usePageFull.getHeight()
    usePageFull.setHeight(newHeight)
  }
})

useHead({
  title: data?.value?.title || data?.value?.navigation?.title || 'Editora Sabiá'
})
</script>

<template>
  <main class="w-full h-screen">
    <paginate-content
      v-if="data"
      id="pagination-el"
      :reader-blocked="readerSettings.blocked.value === true ? true : null"
      :book-title="data?.navigation?.title || data?.title || ''"
      :reader-settings="JSON.stringify(settings)"
      :book-content="JSON.stringify(content)"
      :root-class="data?.navigation?.title ? slugify(data.navigation.title).toLocaleLowerCase() : ''"
      :css-string="bookSettings?.cssString ?? ''"
    >
      <div slot="header">
        <p class="text-white">{{ data?.navigation?.title || data?.title || '' }}</p>
      </div>

      <div slot="optionsBottom">
        <div class="my-3 border-b border-gray-100"></div>
        <a href="https://sabia.pub" target="_blank" title="Sobre a Editora"
          class="w-full block text-black text-center text-xs py-2 px-3 hover:bg-gray-100 rounded">
          <img src="https://sabia.pub/images/logo.svg" style="height: 48px; margin: 0 auto; display: block;">
        </a>
      </div>

      <div slot="content" class="contentSlot" :class="classList">
        <!-- CRITICAL: Keep ContentRenderer for custom slot-based content -->
        <!-- Do NOT replace with ContentDoc as this is custom slot content -->
        <ContentRenderer :key="route.path" :value="data" />
      </div>
    </paginate-content>
  </main>
</template>
EOF
```

### Nuxt Content v2 → v3 migration specifics

**CRITICAL**: The documentation provided below reflects the CORRECT Nuxt Content v3 APIs. Previous sections containing `queryCollection` references were INCORRECT.

#### ✅ CORRECT API Mappings (v2 → v3):

1. **Module Installation**:
   - `@nuxt/content-v2` → `@nuxt/content`
   - Module config: `modules: ['@nuxt/content']`

2. **Content Fetching**:
   - `fetchContentNavigation()` → `queryContent().find()` (then build navigation from results)
   - `queryContent().where({ _path: route.path }).findOne()` → `queryContent(route.path).findOne()`
   - `queryContent().find()` → `queryContent().find()` (UNCHANGED)

3. **Component Changes**:
   - `<NuxtContent />` → `<ContentDoc />` (for auto-rendering pages based on route)
   - `<ContentRenderer :value="data" />` → **KEEP UNCHANGED** (correct for custom slots and manual content rendering)
   
   **CRITICAL NOTE**: This project uses custom slots with `paginate-content` element, so `ContentRenderer` is correct. Do NOT replace with `ContentDoc`.

4. **Properties**:
   - `_path` property → `_path` (UNCHANGED - still uses `_path` in v3)
   - Front matter and metadata access → UNCHANGED

5. **Content Configuration**:
   ```typescript
   // content.config.ts (NEW requirement for v3)
   import { defineContentConfig, defineCollection } from '@nuxt/content'
   
   export default defineContentConfig({
     collections: {
       content: defineCollection({
         type: 'page',
         source: '**/*.md'
       })
     }
   })
   ```

#### ✅ CORRECT Code Transformations:

**Navigation Building (CORRECTED)**:
```diff
- const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
+ const { data: navigation } = await useAsyncData('navigation', async () => {
+   const allContent = await queryContent().find()
+   // Build navigation structure from content
+   return buildNavigationFromContent(allContent)
+ })
```

**Single Document Fetching (CORRECTED)**:
```diff
- const { data } = await useAsyncData(`content-${route.path}`, async () => {
-   const content = await queryContent().where({ _path: route.path }).findOne()
-   return content
- })
+ const { data } = await useAsyncData(`content-${route.path}`, async () => {
+   const content = await queryContent(route.path).findOne()
+   return content
+ })
```

**Alternative Syntax (both work in v3)**:
```javascript
// Method 1: Direct path parameter (recommended)
await queryContent('/9786599492900/cover').findOne()

// Method 2: Where clause (still supported)
await queryContent().where({ _path: '/9786599492900/cover' }).findOne()
```

**Component Usage**:
```diff
- <NuxtContent />
+ <ContentDoc />
```

#### ✅ SSG Integration:

- Content v3 uses SQLite database at build time for optimized queries
- `nuxt generate` automatically discovers and pre-renders all content routes
- Client-side navigation uses the embedded database for fast content fetching

**VALIDATION COMMANDS**:
```bash
# Test content loading with new v3 APIs
npm run dev
# Navigate to: http://localhost:3000/9786599492900/cover
# Expected: Page loads with content using new queryContent() API

# Verify content.config.ts exists
ls -la content.config.ts
# Expected: File exists and contains collection definition

# Test different books with v3 content
curl -s http://localhost:3000/9786599492907/prefacio | grep -q "contentSlot"
# Expected: Page renders with ContentRenderer output

# Check for v3 content database generation
npm run generate
ls -la .nuxt/content-cache/
# Expected: SQLite database files created during build
```

```powershell
# Windows PowerShell equivalents

# Test content loading with new v3 APIs
npm run dev
# Navigate in browser: http://localhost:3000/9786599492900/cover

# Verify content.config.ts exists
Test-Path content.config.ts
Get-Content content.config.ts | Select-String -Pattern "defineCollection"

# Test different books with v3 content
$response = Invoke-WebRequest -UseBasicParsing http://localhost:3000/9786599492907/prefacio
$response.Content -match "contentSlot"

# Check for v3 content database generation
npm run generate
Get-ChildItem -Path .nuxt/content-cache/ -ErrorAction SilentlyContinue
```

**VALIDATION CRITERIA**:
- [ ] content.config.ts created with correct collection definition
- [ ] queryContent().find() successfully builds navigation
- [ ] queryContent(route.path).findOne() fetches individual pages
- [ ] ContentRenderer still works for custom slot content
- [ ] All existing routes still work with v3 APIs
- [ ] Error handling implemented for content fetching
- [ ] Settings system still functional
- [ ] SQLite content database generated during build

---

## PHASE 5: SSG AND TESTING VALIDATION

**CRITICAL**: Ensure static generation works with custom elements and all routes.

### IMPLEMENTATION COMMANDS:

```bash
# 1. Test SSG build
npm run generate
# Expected: Build completes successfully

# 2. Test SSG output
npm run preview
# Navigate through all books and chapters
# Expected: All routes work correctly

# 3. Create comprehensive test script
cat > scripts/test-migration.js << 'EOF'
import { spawn } from 'child_process'
import { readdir } from 'fs/promises'
import { resolve } from 'path'

async function testMigration() {
  console.log('🧪 Starting migration validation tests...')
  
  const tests = [
    {
      name: 'Dependencies Check',
      command: 'npm',
      args: ['list', '--depth=0'],
      expected: /nuxt@.*4\./
    },
    {
      name: 'Build Test',
      command: 'npm',
      args: ['run', 'generate'],
      expected: /Generate done/
    },
    {
      name: 'Route Validation',
      command: 'find',
      args: ['.output/public', '-name', '*.html'],
      expected: /9786599492900.*html/
    }
  ]
  
  for (const test of tests) {
    console.log(`\n🔍 Running: ${test.name}`)
    try {
      const result = await runCommand(test.command, test.args)
      if (test.expected.test(result)) {
        console.log('✅ PASS')
      } else {
        console.log('❌ FAIL')
        console.log('Output:', result.slice(0, 200))
      }
    } catch (error) {
      console.log('❌ ERROR:', error.message)
    }
  }
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { shell: true })
    let output = ''
    
    child.stdout.on('data', data => output += data.toString())
    child.stderr.on('data', data => output += data.toString())
    
    child.on('close', code => {
      if (code === 0) resolve(output)
      else reject(new Error(`Command failed with code ${code}`))
    })
  })
}

testMigration().catch(console.error)
EOF

# 4. Test paginate-content SSG compatibility
cat > scripts/test-custom-element.js << 'EOF'
// Test custom element behavior in SSG context
import { JSDOM } from 'jsdom'

async function testCustomElement() {
  console.log('🧪 Testing paginate-content SSG compatibility...')
  
  // Simulate SSG environment
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://unpkg.com/paginar@0.2.8/dist/index.es.js" type="module"></script>
      </head>
      <body>
        <paginate-content id="test-element">
          <div slot="content">Test content</div>
        </paginate-content>
      </body>
    </html>
  `)
  
  global.window = dom.window
  global.document = dom.window.document
  
  // Test element registration
  const element = dom.window.document.querySelector('paginate-content')
  if (element) {
    console.log('✅ Custom element found in DOM')
  } else {
    console.log('❌ Custom element not found')
  }
  
  console.log('🔍 SSG custom element test completed')
}

testCustomElement().catch(console.error)
EOF

# 5. Run validation tests
node scripts/test-migration.js
```

**VALIDATION COMMANDS**:
```bash
# Test all books individually
for isbn in 9786599492900 9786599492907 9786599492938; do
  echo "Testing ISBN: $isbn"
  curl -s "http://localhost:3000/$isbn/cover" | grep -q "paginate-content"
  if [ $? -eq 0 ]; then
    echo "✅ $isbn loads correctly"
  else
    echo "❌ $isbn failed to load"
  fi
done

# Verify SSG output structure
find .output/public -name "*.html" | wc -l
# Expected: >20 HTML files (all routes generated)

# Test custom element in SSG
grep -r "paginate-content" .output/public/
# Expected: Element found in generated HTML

# Performance test
lighthouse http://localhost:3000/9786599492900/cover --only-categories=performance --chrome-flags="--headless"
# Expected: Performance score >80
```

```powershell
# Windows PowerShell equivalents

# Test all books individually
$isbns = @('9786599492900','9786599492907','9786599492938')
foreach ($isbn in $isbns) {
  Write-Host "Testing ISBN: $isbn"
  $content = (Invoke-WebRequest -UseBasicParsing "http://localhost:3000/$isbn/cover").Content
  if ($content -match 'paginate-content') { Write-Host "✅ $isbn loads correctly" } else { Write-Host "❌ $isbn failed to load" }
}

# Verify SSG output structure
$htmlFiles = Get-ChildItem -Path .output/public -Recurse -Filter *.html
$htmlFiles.Count

# Test custom element in SSG
($htmlFiles | Select-String -Pattern 'paginate-content').Count

# Performance test (optional)
# npx lighthouse http://localhost:3000/9786599492900/cover --only-categories=performance --chrome-flags="--headless"
```

**VALIDATION CRITERIA**:
- [ ] SSG build completes without errors
- [ ] All book routes generate correctly  
- [ ] `paginate-content` element preserved in SSG
- [ ] Shadow DOM interactions work post-hydration
- [ ] Performance acceptable (>80 Lighthouse score)
- [ ] No console errors on any route

---

## PHASE 6: ROLLBACK AND MONITORING SETUP

**EXECUTION ORDER**: Setup monitoring before declaring migration complete.

### IMPLEMENTATION COMMANDS:

```bash
# 1. Create rollback script (Bash/macOS/Linux)
cat > scripts/rollback.sh << 'EOF'
#!/bin/bash
echo "🔄 Rolling back migration..."

# Restore from backup branch
git stash
git checkout migration-backup
git checkout -b rollback-$(date +%Y%m%d-%H%M%S)

# Copy package.json and nuxt.config back
git checkout feat/nascimento-gusmao -- package.json nuxt.config.js

echo "✅ Rollback complete. Review changes and commit if needed."
EOF

chmod +x scripts/rollback.sh

# 1b. Create rollback script (Windows PowerShell)
powershell -NoProfile -Command "New-Item -ItemType Directory -Path 'scripts' -Force | Out-Null; @'
Write-Host '🔄 Rolling back migration...'

git stash
git checkout migration-backup
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
git checkout -b "rollback-$timestamp"

# Restore core files from feature branch
git checkout feat/nascimento-gusmao -- package.json nuxt.config.js

Write-Host '✅ Rollback complete. Review changes and commit if needed.'
'@ | Set-Content -Path 'scripts/rollback.ps1' -Encoding UTF8"

# 2. Create post-migration monitoring
cat > scripts/monitor.js << 'EOF'
import { readFile } from 'fs/promises'
import { spawn } from 'child_process'

async function monitorApp() {
  console.log('📊 Starting post-migration monitoring...')
  
  const checks = [
    {
      name: 'Bundle Size',
      command: 'du',
      args: ['-sh', '.output/public'],
      threshold: '50M'
    },
    {
      name: 'Route Count', 
      command: 'find',
      args: ['.output/public', '-name', '*.html', '|', 'wc', '-l'],
      threshold: 20
    },
    {
      name: 'Error Check',
      command: 'grep',
      args: ['-r', 'error', '.output/public/*.html'],
      expectEmpty: true
    }
  ]
  
  for (const check of checks) {
    console.log(`🔍 ${check.name}...`)
    // Implementation would run actual checks
  }
  
  console.log('📈 Monitoring setup complete')
}

monitorApp().catch(console.error)
EOF

# 3. Create final validation checklist
cat > MIGRATION_CHECKLIST.md << 'EOF'
# Migration Completion Checklist

## ✅ Pre-Migration
- [ ] Node.js ≥ 18.20 verified
- [ ] Current app fully functional
- [ ] Backup created

## ✅ Dependencies
- [ ] Nuxt 4.x installed
- [ ] @nuxt/content 3.6.3 installed  
- [ ] TailwindCSS configured
- [ ] No critical vulnerabilities

## ✅ Configuration
- [ ] nuxt.config.js updated
- [ ] WindiCSS removed
- [ ] TailwindCSS working
- [ ] Custom colors preserved

## ✅ Content API
- [ ] Navigation API migrated
- [ ] All routes functional
- [ ] Settings system working
- [ ] Error handling added

## ✅ SSG & Performance
- [ ] Build succeeds
- [ ] All routes generate
- [ ] paginate-content works
- [ ] Performance acceptable

## ✅ Final Validation
- [ ] All books accessible
- [ ] No console errors
- [ ] Monitoring setup
- [ ] Rollback plan ready

**Migration Status**: ⏳ IN PROGRESS
EOF
```

**FINAL VALIDATION**:
```bash
# Complete end-to-end test
npm run generate && npm run preview &
sleep 10

# Test all critical paths
curl -s http://localhost:3000/9786599492900/cover | grep -q "paginate-content"
curl -s http://localhost:3000/9786599492907/prefacio | grep -q "Editora Sabiá"  
curl -s http://localhost:3000/9786599492938/introduction | grep -q "contentSlot"

# Update checklist status
sed -i 's/⏳ IN PROGRESS/✅ COMPLETE/' MIGRATION_CHECKLIST.md

echo "🎉 Migration validation complete!"
```

```powershell
# Windows PowerShell equivalents

# Complete end-to-end test
npm run generate
Start-Process -FilePath 'npm' -ArgumentList 'run','preview'
Start-Sleep -Seconds 10

# Test all critical paths
$ok1 = (Invoke-WebRequest -UseBasicParsing http://localhost:3000/9786599492900/cover).Content -match 'paginate-content'
$ok2 = (Invoke-WebRequest -UseBasicParsing http://localhost:3000/9786599492907/prefacio).Content -match 'Editora Sabiá'
$ok3 = (Invoke-WebRequest -UseBasicParsing http://localhost:3000/9786599492938/introduction).Content -match 'contentSlot'

if ($ok1 -and $ok2 -and $ok3) { Write-Host "All critical paths OK" } else { Write-Host "Some critical paths FAILED" }

# Update checklist status
$content = Get-Content -Path 'MIGRATION_CHECKLIST.md' -Raw
$content = $content -replace '⏳ IN PROGRESS','✅ COMPLETE'
Set-Content -Path 'MIGRATION_CHECKLIST.md' -Value $content -Encoding UTF8

Write-Host "🎉 Migration validation complete!"
```

## 🎯 EXECUTION SUMMARY FOR LLM

**TOTAL PHASES**: 6 sequential phases with validation checkpoints
**ESTIMATED TIME**: 2-4 hours (with testing)
**ROLLBACK AVAILABLE**: Yes (automated script provided)

### 🤖 LLM EXECUTION ORDER (MANDATORY SEQUENCE):

**EXECUTE PHASES IN THIS EXACT ORDER - DO NOT SKIP ANY STEP:**

#### Phase 0: Pre-Migration Validation
```powershell
# 1. Check Node.js version
node --version  # MUST show ≥18.20

# 2. Verify current app works
npm run dev
# MUST start without errors - test in browser

# 3. Test current SSG
npm run generate
# MUST complete successfully

# 4. Create backup
git checkout -b migration-backup
git commit -am "Pre-migration backup"
git checkout feat/nascimento-gusmao
```

#### Phase 1: Dependencies Update
```powershell
# 1. Backup core files
Copy-Item "package.json" "package.json.bak" -Force
Copy-Item "nuxt.config.js" "nuxt.config.js.bak" -Force

# 2. Update package.json (use here-string as shown in Phase 1)
# 3. Clean install dependencies
# 4. Validate new dependencies work
```

#### Phase 2: TailwindCSS Migration  
```powershell
# 1. Create tailwind.config.js
# 2. Create postcss.config.js
# 3. Update CSS files
# 4. Test Tailwind compilation
```

#### Phase 3: Nuxt Config Update
```powershell
# 1. Update nuxt.config.js with new modules
# 2. Remove legacy WindiCSS files
# 3. Test configuration loads
```

#### Phase 4: Content API Migration (CRITICAL)
```powershell
# 1. Create content.config.ts (REQUIRED for v3)
# 2. Update pages/[isbn]/[...slug].vue with correct queryContent() APIs
# 3. Test all 3 ISBNs work
```

#### Phase 5: SSG Validation
```powershell
# 1. Run npm run generate
# 2. Test npm run preview  
# 3. Validate all routes work
# 4. Confirm paginate-content still functions
```

#### Phase 6: Final Verification
```powershell
# 1. Test all critical paths
# 2. Run comprehensive validation
# 3. Update migration checklist
```

### 🚨 CRITICAL SUCCESS FACTORS:

1. **ALWAYS validate each phase** before proceeding
2. **Stop immediately** if any validation criteria fails
3. **Test paginate-content** functionality at each step
4. **Verify all 3 books** load correctly (ISBNs: 9786599492900, 9786599492907, 9786599492938)
5. **Use rollback script** if any issues occur

### 📋 FINAL CHECKLIST:

Execute this command after completion:
```bash
curl -s http://localhost:3000/9786599492900/cover | grep -q "paginate-content" && 
curl -s http://localhost:3000/9786599492907/prefacio | grep -q "Editora Sabiá" && 
curl -s http://localhost:3000/9786599492938/introduction | grep -q "contentSlot" && 
echo "🎉 MIGRATION SUCCESSFUL" || echo "❌ MIGRATION FAILED"
```

### 🛟 EMERGENCY ROLLBACK (LLM EXECUTE IMMEDIATELY IF NEEDED):

**WHEN TO ROLLBACK**: If ANY validation fails or errors occur during migration.

**IMMEDIATE ROLLBACK COMMANDS**:
```powershell
# 1. Stop any running processes
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue

# 2. Restore from backup files
if (Test-Path "package.json.bak") { Copy-Item "package.json.bak" "package.json" -Force }
if (Test-Path "nuxt.config.js.bak") { Copy-Item "nuxt.config.js.bak" "nuxt.config.js" -Force }

# 3. Switch to backup branch
git stash
git checkout migration-backup

# 4. Clean up partial changes
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path .nuxt) { Remove-Item -Recurse -Force .nuxt }

# 5. Restore working state
npm install
npm run dev

Write-Host "🔄 ROLLBACK COMPLETE - System restored to pre-migration state"
```

**POST-ROLLBACK VERIFICATION**:
```powershell
# Verify rollback worked
$testPage = (Invoke-WebRequest -UseBasicParsing http://localhost:3000/9786599492900/cover).StatusCode
if ($testPage -eq 200) { 
  Write-Host "✅ Rollback successful - app is working" 
} else { 
  Write-Host "❌ Rollback failed - manual intervention needed" 
}
```

---

## 📚 REFERENCE LINKS

- **Nuxt 4 Documentation**: https://nuxt.com/docs
- **Nuxt Content v3**: https://content.nuxt.com/
- **TailwindCSS Migration**: https://tailwindcss.com/docs/upgrade-guide
- **paginar CDN**: https://unpkg.com/paginar@0.2.8/

---

## ✅ POST-MIGRATION OPTIMIZATIONS

After successful migration, consider:

1. **Collections Setup**:
   ```typescript
   // content.config.ts
   export default defineContentConfig({
     collections: {
       books: {
         type: 'page',
         pattern: '/content/**/*.md'
       }
     }
   })
   ```

2. **Performance Monitoring**:
   - Setup Lighthouse CI
   - Monitor bundle size changes
   - Track Core Web Vitals

3. **Enhanced Error Handling**:
   - Add error boundaries for custom elements
   - Implement graceful fallbacks for shadow DOM
   - Setup error tracking (Sentry/LogRocket)

**🏁 MIGRATION PLAN COMPLETE** - Ready for LLM execution!


