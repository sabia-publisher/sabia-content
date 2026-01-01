# Guia de Estrutura de Ebooks - Editora Sabiá

**Documento Genérico de Referência**  
**Versão:** 1.0  
**Objetivo:** Padronizar a estrutura de ebooks para fácil conversão e manutenção  
**Audiência:** LLMs, Agents, Desenvolvedores, Editores  

---

## 1. Visão Geral

Todos os ebooks da Editora Sabiá seguem um padrão padronizado para renderização web interativa:

- **Framework:** Nuxt 4 com Nuxt Content v3
- **Formato de Conteúdo:** Markdown com sintaxe MDC (Markdown Components)
- **Renderização:** Single Page Application (SPA) com pré-renderização estática (SSG)
- **Leitor:** Web Component Paginar (CDN externo)
- **Integração:** Notas de rodapé, Referências e Temas customizáveis

Este documento serve como **guia universal para estruturar qualquer novo livro** seguindo o padrão.

---

## 2. Estrutura de Diretórios - Template Padrão

### 2.1 Estrutura Completa

```
content/{ISBN}/
├── .settings/              # ✓ OBRIGATÓRIO - Configurações do livro
│   ├── index.js           # ✓ Exporta configuração consolidada
│   ├── config.js          # ✓ Configuração principal
│   ├── theme.js           # ✓ Tema CSS para Paginar Web Component
│   ├── fonts.js           # ✓ Opções de fontes
│   ├── footnotes.js       # ✓ Banco de notas de rodapé (pode ser vazio)
│   └── references.js      # ✓ Banco de referências (pode ser vazio)
│
├── css/                    # ○ OPCIONAL - Estilos do livro
│   └── base.css           # CSS customizado (carregado via <link>)
│
├── 0.cover.md             # ✓ OBRIGATÓRIO - Capa (sempre primeiro)
├── 1.{slug}.md            # ✓ OBRIGATÓRIO - Capítulos numerados
├── 2.{slug}.md
├── N.referencias.md       # ✓ OBRIGATÓRIO - Referências (sempre último)
│
└── public/{ISBN}/
    ├── css/               # ○ OPCIONAL - CSS customizado
    │   └── base.css
    ├── images/            # ○ OPCIONAL - Imagens do livro
    ├── schemes/           # ○ OPCIONAL - Diagramas/SVGs
    ├── tables/            # ○ OPCIONAL - Tabelas
    └── texts/             # ○ OPCIONAL - Títulos em SVG
```

**Legenda:**
- ✓ = Obrigatório (sempre necessário)
- ○ = Opcional (crie apenas se houver conteúdo)

### 2.2 Exemplos Reais

**Exemplo 1 - Português (9 capítulos):**
```
9786599492907/
├── .settings/
├── css/
├── 0.cover.md
├── 1.prefacio.md
├── 2.carta-a-primeira-edicao.md
├── 3.mas-afinal.md
├── 4.estudos-decoloniais.md
├── 5.estudos-culturais.md
├── 6.design-decolonial.md
├── 7.consideracoes-finais.md
└── 8.referencias.md
```

**Exemplo 2 - Inglês (8 capítulos):**
```
9786599492938/
├── .settings/
├── 0.cover.md
├── 1.gratitudes.md
├── 2.preface.md
├── 3.introduction.md
├── 4.part-a.md
├── 5.part-b.md
├── 6.part-c.md
└── 7.references.md
```

### 2.3 Convenções de Nomeação

| Elemento | Padrão | Exemplo | Notas |
|----------|--------|---------|-------|
| **Diretório do Livro** | `{ISBN}` | `9786599492907` | ISBN sem formatação/hífens |
| **Arquivo Capítulo** | `{N}.{slug}.md` | `1.prefacio.md` | Numeração é essencial |
| **Slug** | lowercase + hífens | `estudos-decoloniais` | Sem acentos, espaços→hífens |
| **Slug Padrão** | `cover`, `referencias` | - | Sempre estes nomes |
| **Direito Ordenação** | Número primeiro | `0.cover`, `1....`, `8.referencias` | Ordena automaticamente |
| **Arquivo Settings** | Função clara | `config.js`, `fonts.js` | Nomes específicos obrigatórios |

**Importante:** A numeração (0.cover, 1.intro, 2.cap1, ..., N.referencias) é **essencial** para que Nuxt Content descubra arquivos na ordem correta.

---

## 3. Arquivos Markdown - Front Matter Obrigatório

### 3.1 Template de Front Matter

Cada arquivo `.md` DEVE começar com este bloco YAML:

```yaml
---
title: '[TÍTULO DO LIVRO] - [TÍTULO DO CAPÍTULO]'
description: '[Descrição breve do conteúdo do capítulo]'
layout: 'default'
navigation:
  title: '[Texto curto para menu]'
---
```

**Campos Obrigatórios:**
- `title`: Título completo (usado em meta tags, importante para SEO)
- `description`: Descrição breve (1-2 linhas)
- `layout`: Sempre `'default'` (não mude)
- `navigation.title`: Texto curto que aparece no índice do livro

### 3.2 Exemplos de Front Matter

**Capa:**
```yaml
---
title: 'Uma perspectiva decolonial para o design no Brasil - Capa'
description: 'Página de capa do livro.'
layout: 'default'
navigation:
  title: 'Capa'
---
```

**Capítulo Regular:**
```yaml
---
title: 'Uma perspectiva decolonial para o design no Brasil - Prefácio'
description: 'Prefácio do livro com reflexões sobre design decolonial.'
layout: 'default'
navigation:
  title: 'Prefácio'
---
```

**Referências:**
```yaml
---
title: 'Uma perspectiva decolonial para o design no Brasil - Referências'
description: 'Lista de referências bibliográficas do livro.'
layout: 'default'
navigation:
  title: 'Referências'
---
```

### 3.3 Após o Front Matter

Logo após o YAML, inclua (se houver CSS customizado):

```html
<link rel="stylesheet" href="/{ISBN}/css/base.css">
```

Substitua `{ISBN}` pelo ISBN real (ex: `/9786599492907/css/base.css`)

---

## 4. Conteúdo Markdown - Sintaxe

### 4.1 Markdown Padrão

Use sintaxe Markdown comum:

```markdown
# Título H1
## Título H2
### Título H3

**Negrito**
*Itálico*
~~Tachado~~

- Item lista
- Outro item

1. Numerado
2. Numerado

[Link](https://example.com)
![Imagem](​/9786599492907/images/figura.jpg)
```

### 4.2 Componentes Vue (MDC - Markdown Components)

Para usar componentes Vue, use sintaxe especial:

**Sintaxe:**
```mdc
::ComponentName{.classe-tailwind .outra-classe prop="valor"}
Conteúdo aqui (slot padrão)
::
```

**Exemplo - Página Inteira:**
```mdc
::PageFull{.flex .flex-col .justify-center}

# TÍTULO GRANDE

## Subtítulo

Parágrafo de conteúdo...

::
```

**Exemplo - Imagem em Página Inteira:**
```mdc
::ImageFull
![Descrição da imagem](​/9786599492907/images/figura-importante.jpg)
::
```

**Exemplo - Quebra de Página:**
```mdc
:PageBreak
```

**Exemplo - Esquema/Diagrama:**
```mdc
::SchemeFull{.bg-gray-100 .p-8}
<svg>...</svg>
::
```

---

## 5. Sistema de Notas de Rodapé (Footnotes)

### 5.1 Arquivo de Configuração: `.settings/footnotes.js`

Cada nota é um objeto no array:

```javascript
export default [
    {
        "id": "footnote1",
        "text": "Texto da primeira nota de rodapé"
    },
    {
        "id": "footnote2",
        "text": "Texto da segunda nota. Pode incluir <em>HTML</em> simples"
    },
    {
        "id": "footnote3",
        "text": "Texto com <strong>HTML formatting</strong> e <a href='#'>links</a>"
    }
]
```

**Se não houver notas, deixe vazio:**
```javascript
export default []
```

### 5.2 Marcação no Markdown

Para ligar uma nota de rodapé ao texto:

```markdown
Este é um trecho com uma nota[de rodapé]{.footnote .footnote1} que será processada.
```

**Sintaxe:** `[texto]{.footnote .footnoteN}`

- `.footnote` = marca como nota
- `.footnoteN` = referencia o ID em footnotes.js (N = número)

**Exemplo Completo:**

Em `4.estudos-decoloniais.md`:
```markdown
A colonialidade seguiu existindo[estruturalmente na sociedade]{.footnote .footnote3}...
```

Em `.settings/footnotes.js`:
```javascript
{
    "id": "footnote3",
    "text": "O neodesenvolvimentismo é comumente utilizado para descrever as políticas econômicas..."
}
```

### 5.3 Renderização Automática

O Paginar Web Component:
- Lê `bookSettings.footnotes`
- Identifica notas marcadas com `.footnote`
- Renderiza como nota de rodapé ou popup
- **Sem necessidade de código adicional**

---

## 6. Sistema de Referências Bibliográficas

### 6.1 Arquivo de Configuração: `.settings/references.js`

Cada referência é um objeto com `cit` (citação) e `ref` (referência completa):

```javascript
export default [
    {
        "cit": "AUTOR, 2020",
        "ref": "AUTOR, Nome. <strong>Título do Livro</strong>. Cidade: Editora, 2020."
    },
    {
        "cit": "SILVA et al., 2019",
        "ref": "SILVA, João; SANTOS, Maria. <strong>Título do Artigo</strong>. Revista X, v. 10, n. 2, p. 100-120, 2019."
    },
    {
        "cit": "GAMA, 2019",
        "ref": "GAMA, Mara. <strong>As três rotas que trouxeram a Bauhaus ao Brasil</strong>. Folha de São Paulo, 2019."
    }
]
```

**Se não houver referências:**
```javascript
export default []
```

**Campos:**
- `cit`: Citação abreviada (ex: "AUTOR, YYYY" ou "SMITH et al., 2020")
- `ref`: Referência completa em HTML (pode usar `<strong>`, `<em>`, `<a>`)

### 6.2 Marcação no Markdown

Use a citação abreviada entre parênteses inline:

```markdown
Segundo Escobar (ESCOBAR, 2016), a modernidade é inseparável da colonialidade.
```

**Sintaxe:** `(CITAÇÃO_ABREVIADA)`

O Paginar linkará automaticamente à referência em `references.js`

**Exemplo Completo:**

Em `4.estudos-decoloniais.md`:
```markdown
Segundo diferentes autores (ESCOBAR, 2016), as estruturas de poder...
```

Em `.settings/references.js`:
```javascript
{
    "cit": "ESCOBAR, 2016",
    "ref": "ESCOBAR, Arturo. <strong>Autonomía y Diseño: la realización del comunal</strong>, Colômbia: Editorial Universidad del Cauca, 2016"
}
```

### 6.3 Página de Referências

Crie um capítulo final (`N.referencias.md`) que liste todas as referências:

```markdown
---
title: 'Título do Livro - Referências'
description: 'Referências bibliográficas'
layout: 'default'
navigation:
  title: 'Referências'
---

## REFERÊNCIAS

ACOSTA, Alberto. Extrativismo e neoextrativismo: Duas faces da mesma maldição...

ANI, Marimba. **Yurugu: An Afrikan-Centered Critique of European Cultural Thought and Behaviour**. 1. ed. Trenton: Africa World Press, 1994.

ESCOBAR, Arturo. **Autonomía y Diseño: la realización del comunal**. Colômbia: Editorial Universidad del Cauca, 2016.

... (lista de todas as referências)
```

---

## 7. Arquivos de Configuração - Templates

### 7.1 `.settings/config.js` - OBRIGATÓRIO

**Template Universal (Personalize os valores):**

```javascript
import references from './references.js'
import footnotes from './footnotes.js'
import fontOptions from './fonts.js'
import theme from './theme.js'

export default {
  // PERSONALIZE ESTES CAMPOS
  metadata: {
    isbn: '9786599492907',              // Substitua pelo ISBN
    title: 'Título Completo do Livro',  // Título exato
    subtitle: 'Subtítulo (opcional)',   // Opcional
    author: 'Nome do Autor',            // Autor
    publisher: 'Editora Sabiá',         // Não mude
    year: 2024,                         // Ano
    language: 'pt-br'                   // 'pt-br', 'en', 'es', etc
  },

  // Configurações do leitor Paginar
  reader: {
    fontSize: 19,                       // Tamanho padrão em px (típico: 16-20)
    defaultTextFont: 'Libre Franklin',  // Fonte principal padrão
    defaultBaseFont: 'Inter',           // Fonte alternativa
    
    preferences: {
      columnsMode: 'auto',              // 'single', 'double', 'auto'
      theme: 'light',                   // 'light', 'dark', 'sepia'
      lineHeight: 1.6,                  // Altura de linha
      pageMargin: 'medium'              // 'small', 'medium', 'large'
    }
  },

  // Importações - NÃO MUDE
  fontsOptions: fontOptions,
  theme: theme,

  // Conteúdo
  content: {
    references: references,
    footnotes: footnotes,
    generateSummary: true,
    customOrder: null
  },

  // Recursos opcionais
  features: {
    enableBookmarks: true,
    enableNotes: true,
    enableSearch: true,
    enablePrint: true,
    enableShare: false
  }
}
```

**O que Personalizar:**
- `metadata.*` (isbn, title, author, year, language)
- `reader.fontSize` (ajuste conforme necessário)
- `features.*` (ativar/desativar recursos)

**O que NÃO Mude:**
- Estrutura de imports
- Nome das propriedades
- publisher

### 7.2 `.settings/fonts.js` - OBRIGATÓRIO

**Mínimo (apenas padrão):**
```javascript
export default [
    {
        label: 'Padrão',
        name: 'var(--font-sans)',
        link: null,
        defaultTextFont: true,
        defaultBaseFont: false
    }
]
```

**Completo (com múltiplas opções):**
```javascript
export default [
    {
        label: 'Padrão',
        name: 'var(--font-sans)',
        link: null,
        defaultTextFont: true,
        defaultBaseFont: false
    },
    {
        label: 'Faune',
        name: 'Faune',
        link: '/fonts/faune.css',
        defaultTextFont: false,
        defaultBaseFont: false
    },
    {
        label: 'OpenDyslexic (Acessibilidade)',
        name: 'OpenDyslexic',
        link: 'https://fonts.googleapis.com/css2?family=OpenDyslexic',
        defaultTextFont: false,
        defaultBaseFont: false
    }
]
```

**Campos:**
- `label`: Texto exibido no menu de fontes
- `name`: Nome CSS da fonte
- `link`: URL do CSS/font ou `null` para fonte do sistema
- `defaultTextFont`: `true` = fonte padrão para corpo de texto
- `defaultBaseFont`: `true` = fonte alternativa padrão

**Regra:** Sempre tenha uma com `defaultTextFont: true`

### 7.3 `.settings/theme.js` - OBRIGATÓRIO

**Mínimo:**
```javascript
export default {
    name: 'meu-livro',
    version: '1.0.0',
    
    cssVariables: {},
    
    componentCSS: `
        main#rootComponent {
            transition: background-color 200ms linear;
        }
    `
}
```

**Completo (com tema customizado):**
```javascript
export default {
    name: 'design-decolonial',
    version: '1.0.0',
    
    cssVariables: {
        '--book-primary-color': 'rgb(24, 64, 151)',
        '--book-accent-color': '#fff',
        '--book-text-color': '#333'
    },
    
    componentCSS: `
        :root {
            --book-primary-color: rgb(24, 64, 151);
            --book-accent-color: #fff;
        }
        
        main#rootComponent {
            transition: background-color 200ms linear;
        }
        
        .capa.columns-double,
        .capa.columns-single {
            background-color: var(--book-primary-color);
            background-image: url(https://cdn.example.com/cover.jpg);
            background-size: cover;
        }
        
        #rootComponent.capa .viewer-nav {
            color: var(--book-accent-color) !important;
        }
    `
}
```

**Por que CSS é embarcado aqui?** Paginar é um Web Component com Shadow DOM isolado. CSS externo não funciona. O CSS precisa estar aqui.

**Seletores Úteis do Paginar:**
- `main#rootComponent` = Container principal
- `.capa` = Classe para capa/capas especiais
- `.columnsArea` = Área de colunas
- `.viewer-nav` = Navegação do leitor
- `.columns-single` / `.columns-double` = Modo de coluna

### 7.4 `.settings/index.js` - BOILERPLATE (Não Mude)

Use este template sem modificações:

```javascript
import config from './config.js'
import references from './references.js'
import footnotes from './footnotes.js'

function generateLegacySettings(config) {
    const cssVariables = Object.entries(config.theme.cssVariables || {})
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n  ')

    const cssString = `
        :root {
            ${cssVariables}
        }
        ${config.theme.componentCSS}
    `.trim()

    const legacyReferences = (config.content.references || []).map(ref => ({
        cit: ref.cit,
        ref: ref.ref
    }))

    const legacyFootnotes = config.content.footnotes || []

    return {
        fontSize: config.reader.fontSize,
        fontsOptions: config.fontsOptions || [],
        cssString: cssString,
        references: legacyReferences,
        footnotes: legacyFootnotes,
        _metadata: config.metadata,
        _theme: config.theme.name
    }
}

export default generateLegacySettings(config)
```

Este arquivo é **quase sempre boilerplate**. Copie como está.

---

## 8. Componentes Vue Disponíveis

### 8.1 Lista de Componentes

| Componente | Uso | Exemplo |
|-----------|-----|---------|
| `PageFull` | Página inteira | `::PageFull{...}conteúdo::` |
| `PageBreak` | Quebra de página | `:PageBreak` |
| `ImageFull` | Imagem em página inteira | `::ImageFull![alt](...)::` |
| `ImageRegular` | Imagem no fluxo | `::ImageRegular![alt](...)::` |
| `ImageSignature` | Logo/assinatura pequena | `::ImageSignature![logo](...)::` |
| `SchemeFull` | Diagrama em página inteira | `::SchemeFull<svg>...</svg>::` |
| `SchemeDiagrams` | Diagrama em coluna | `::SchemeDiagrams<svg>...</svg>::` |
| `TimeLine` | Linha do tempo | `::TimeLine{...}conteúdo::` |
| `TextWrapper` | Wrapper de texto | `::TextWrapper{...}conteúdo::` |

### 8.2 Exemplos Práticos

```mdc
::PageFull{.flex .flex-col .justify-center .items-center}

# Título Centralizado

Parágrafo centrado

::
```

```mdc
::ImageFull
![Imagem importante](​/9786599492907/images/figura-grande.jpg)
::
```

```mdc
:PageBreak
```

```mdc
::SchemeFull{.bg-gray-100 .p-8}
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" />
</svg>
::
```

### 8.3 Classes Tailwind Úteis

```mdc
::PageFull{.flex .flex-col .justify-center .items-center .gap-4}
Conteúdo com espaçamento
::
```

Classes comuns:
- `.flex` `.flex-col` `.flex-row` = Layout flexbox
- `.justify-center` `.items-center` = Alinhamento
- `.gap-4` `.gap-8` = Espaçamento entre elementos
- `.bg-gray-100` `.bg-blue-500` = Cores
- `.p-4` `.px-8` `.py-4` = Padding
- `.text-center` `.text-right` = Alinhamento de texto

---

## 9. Assets (Imagens, Esquemas, Tabelas)

### 9.1 Estrutura de Diretório Público

```
public/{ISBN}/
├── css/
│   └── base.css              # Estilos customizados (opcional)
├── images/                   # Imagens do livro
│   ├── figura-1.jpg
│   ├── figura-2.png
│   └── ...
├── schemes/                  # Diagramas e SVGs
│   ├── diagrama-1.svg
│   └── ...
├── tables/                   # Tabelas
│   ├── tabela-1.html
│   └── ...
└── texts/                    # Títulos em SVG, logos
    ├── cap-1-titulo.svg
    └── ...
```

### 9.2 URLs no Markdown

**SEMPRE use paths absolutos iniciando com `/`:**

```markdown
![Descrição](​/9786599492907/images/figura-1.jpg)
<img src="/9786599492907/texts/cap-1.svg" alt="Título" />
```

**NUNCA use paths relativos:**
```markdown
![Errado](./images/figura.jpg)          ✗
![Errado](images/figura.jpg)            ✗
```

### 9.3 Organização por Tipo

| Tipo | Extensão | Diretório | Compressão |
|------|----------|-----------|-----------|
| Imagens | `.jpg`, `.png`, `.webp` | `images/` | Comprima com TinyPNG |
| Esquemas | `.svg` (preferido), `.png` | `schemes/` | SVG não precisa comprimir |
| Tabelas | `.html`, `.png` | `tables/` | HTML = sem compressão |
| Títulos/Logos | `.svg` | `texts/` | SVG é melhor |

### 9.4 Otimização

- **JPGs:** Comprima com [TinyPNG](https://tinypng.com/) ou similares
- **SVGs:** Use vetorial sempre que possível (qualidade em zoom)
- **Nomes:** Minúsculas com hífens (`figura-capitulo-1.jpg`, não `FiguraCapitulo1.JPG`)
- **Tamanho:** Cada arquivo <= 2MB

---

## 10. Roteamento e Fluxo de Renderização

### 10.1 Padrão de URL

```
/{ISBN}/{slug}
```

Exemplos:
- `/9786599492907/cover` → `0.cover.md`
- `/9786599492907/prefacio` → `1.prefacio.md`
- `/9786599492907/estudos-decoloniais` → `4.estudos-decoloniais.md`
- `/9786599492907/referencias` → `8.referencias.md`

### 10.2 Fluxo Completo de Renderização

```
1. Usuário acessa /9786599492907/estudos-decoloniais
   ↓
2. Nuxt router match para pages/[isbn]/[...slug].vue
   ↓
3. Sistema carrega:
   - Configurações (.settings/index.js)
   - Markdown do capítulo
   ↓
4. Nuxt Content processa Markdown:
   - Parseia YAML front matter
   - Converte MDC → componentes Vue
   - Renderiza Markdown → HTML
   ↓
5. Vue renderiza template:
   - Layout padrão
   - ContentRenderer
   - Paginar Web Component
   ↓
6. Paginar renderiza:
   - CSS do theme.js
   - Conteúdo em leitor de páginas
   - Notas de rodapé (footnotes.js)
   - Referências (references.js)
   ↓
7. Usuário interage:
   - Navega páginas
   - Muda fonte/tamanho/tema
   - Clica notas/referências
```

---

## 11. Guia Passo a Passo - Criar Novo Livro

### 11.1 Passo 1: Estrutura de Diretórios

```bash
mkdir -p content/{ISBN}/.settings
mkdir -p content/{ISBN}/css
mkdir -p public/{ISBN}/{images,schemes,tables,texts,css}
```

### 11.2 Passo 2: Arquivos de Configuração

Copie/adapte os 6 arquivos em `.settings/`:
1. **config.js** - Template seção 7.1, personalize metadata
2. **fonts.js** - Template seção 7.2
3. **theme.js** - Template seção 7.3, customize CSS
4. **footnotes.js** - `export default []` ou com notas
5. **references.js** - `export default []` ou com referências
6. **index.js** - Boilerplate seção 7.4 (copie literal)

### 11.3 Passo 3: Markdown dos Capítulos

Crie 0.cover.md, 1.{cap1}.md, ..., N.referencias.md

Template para cada:
```markdown
---
title: '[LIVRO] - [Título do Capítulo]'
description: '[Descrição breve]'
layout: 'default'
navigation:
  title: '[Título Curto]'
---

<link rel="stylesheet" href="/{ISBN}/css/base.css">

## Conteúdo aqui
```

### 11.4 Passo 4: Assets Públicos

Coloque imagens/esquemas em:
- `public/{ISBN}/images/`
- `public/{ISBN}/schemes/`
- etc.

### 11.5 Passo 5: Registrar Rotas

Em `nuxt.config.js`, adicione ao `nitro.prerender.routes`:

```javascript
'/9786599492907/cover',
'/9786599492907/prefacio',
'/9786599492907/referencias',
// ... todas as rotas do livro
```

### 11.6 Passo 6: Importar em Componente de Rota

Edite `pages/[isbn]/[...slug].vue`:

```javascript
import book9786599492907 from '../../content/9786599492907/.settings/index.js'

// No try-catch:
} else if (isbn === '9786599492907') {
    bookSettings = book9786599492907
}
```

### 11.7 Passo 7: Testar

```bash
npm run dev
# Acesse: http://localhost:3000/9786599492907/cover
```

### 11.8 Passo 8: Build e Deploy

```bash
npm run build
npm run preview
# Se tudo OK: deploy
```

---

## 12. Checklist de Validação

Antes de publicar um livro novo, verifique:

**Estrutura de Diretórios:**
- [ ] `content/{ISBN}/.settings/` com 6 arquivos (todos obrigatórios)
- [ ] `public/{ISBN}/` com subpastas conforme conteúdo

**Arquivos de Configuração:**
- [ ] `config.js`: metadata, reader, features
- [ ] `theme.js`: componentCSS e cssVariables
- [ ] `fonts.js`: array com `defaultTextFont: true`
- [ ] `index.js`: boilerplate não modificado
- [ ] `footnotes.js` e `references.js`: arrays válidos

**Arquivos Markdown:**
- [ ] Front matter YAML completo em cada arquivo
- [ ] `title`, `description`, `layout: 'default'`, `navigation.title` presentes
- [ ] Link para CSS (se houver): `<link rel="stylesheet" href="/{ISBN}/css/base.css">`
- [ ] Componentes MDC bem formados
- [ ] Notas marcadas: `[texto]{.footnote .footnote1}`
- [ ] Referências inline: `(AUTOR, YYYY)`
- [ ] Nenhum erro de sintaxe Markdown

**Assets:**
- [ ] URLs absolutas (começam com `/`)
- [ ] Nomes em lowercase com hífens
- [ ] Tamanhos <= 2MB por arquivo
- [ ] Formatos apropriados (jpg/png para imagens, svg para esquemas)

**Roteamento:**
- [ ] Todas as rotas listadas em `nuxt.config.js`
- [ ] Import de settings em `pages/[isbn]/[...slug].vue`
- [ ] Case statement completo no try-catch

**Testes:**
- [ ] Build sem erros: `npm run build`
- [ ] Rota acessível localmente
- [ ] Páginas carregam corretamente
- [ ] Notas de rodapé funcionam
- [ ] Referências funcionam
- [ ] Mudança de fonte/tamanho funciona

---

## 13. Troubleshooting Comum

| Problema | Causa | Solução |
|----------|-------|---------|
| Notas não aparecem | ID em `footnotes.js` ≠ `.footnoteN` no MD | Verificar `id: "footnote3"` vs `{.footnote .footnote3}` |
| Referências vazias | `references.js` sem entrada com `cit` | Adicionar referência em `references.js` |
| CSS não aplica | `theme.js` vazio ou seletor errado | Verificar `componentCSS` e usar seletores Paginar |
| Imagens não carregam | URL relativa ou ISBN errado | Usar `/9786599492907/images/...` |
| Menu vazio | `navigation.title` faltando | Adicionar em todos os `.md` |
| Componentes não renderizam | Sintaxe MDC quebrada | Verificar `::Component{...}conteúdo::` |
| Build falha | Rota missing em `nuxt.config.js` | Listar todas as rotas em `nitro.prerender.routes` |
| Settings não carregam | Import missing em componente rota | Adicionar `import book...` e case no try-catch |

---

## 14. Exemplos de Livros na Plataforma

| ISBN | Idioma | Capítulos | Status |
|------|--------|-----------|--------|
| 9786599492907 | Português | 9 | ✓ Ativo |
| 9786599492938 | Inglês | 8 | ✓ Ativo |
| 9786583942494 | Português | 11 | ✓ Ativo |
| 9786583942449 | Português | 4 | ✓ Ativo |

---

## 15. Recursos Externos

- **Paginar Web Component:** https://unpkg.com/paginar@0.3.4/
- **Nuxt 4:** https://nuxt.com/
- **Nuxt Content v3:** https://content.nuxt.com/
- **MDC (Markdown Components):** https://content.nuxt.com/usage/markdown
- **Tailwind CSS:** https://tailwindcss.com/
- **Font Awesome Icons:** https://fontawesome.com/

---

## 16. Notas Finais

Este documento é um **guia prático, genérico e reutilizável** para estruturação de qualquer ebook na plataforma Editora Sabiá.

Serve como referência para:
- **LLMs e Agents**: Entender arquitetura e criar novos livros
- **Desenvolvedores**: Manter consistência
- **Editores**: Compreender fluxo técnico

**Versão:** 1.0  
**Última Atualização:** Dezembro 2025  
**Tipo:** Documentação Genérica

---

**Compartilhe este documento com novos agentes/desenvolvedores antes de trabalhar com ebooks!**
