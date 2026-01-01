# Copilot Instructions - Sabia Content (Nuxt Ebooks)

**Contexto Rápido:** Repositório para gerenciamento de ebooks interativos usando Nuxt 4 + Nuxt Content v3 + Paginar Web Component.

---

## 📁 Estrutura do Repositório

```
sabia-content/
├── content/                    # Conteúdo dos livros (Markdown)
│   ├── 9786599492907/         # Livro 1 (Design Decolonial)
│   ├── 9786599492938/         # Livro 2 (Inglês)
│   ├── 9786583942494/         # Livro 3
│   └── 9786583942449/         # Livro 4
│
├── public/                     # Assets estáticos (imagens, esquemas)
│   ├── 9786599492907/
│   ├── 9786599492938/
│   └── ...
│
├── components/                 # Componentes Vue (PageFull, ImageFull, etc)
├── pages/                      # Rotas ([isbn]/[...slug].vue)
├── composables/                # Lógica reutilizável
├── layouts/                    # Templates de página
├── assets/                     # CSS global, fontes
│
├── nuxt.config.js             # Configuração Nuxt (rotas pré-renderizadas)
├── tailwind.config.js         # Tailwind CSS
├── package.json               # Dependências
│
└── BOOK_STRUCTURE_GUIDE.md    # 📖 GUIA UNIVERSAL para estruturar novos livros
   (& SPECIFICATION_9786599492907.md para aprofundamento específico)
```

---

## 🎯 Conceitos-Chave

| Conceito | O que é | Localização |
|----------|---------|-------------|
| **ISBN** | Identificador único do livro | Nome da pasta (ex: 9786599492907) |
| **Capítulo** | Arquivo Markdown numerado | `content/{ISBN}/N.slug.md` |
| **.settings/** | Configurações do livro | `content/{ISBN}/.settings/` (6 arquivos obrigatórios) |
| **MDC** | Syntax para componentes Vue no Markdown | Usado em `.md` com `::ComponentName{...}` |
| **Footnotes** | Notas de rodapé | `footnotes.js` + `[texto]{.footnote .footnote1}` |
| **References** | Citações bibliográficas | `references.js` + `(AUTOR, YYYY)` |
| **Paginar** | Web Component do leitor | Carregado via CDN, renderiza o livro |

---

## 🚀 Tarefas Comuns

### Adicionar novo livro
1. Crie `content/{ISBN}/.settings/` com 6 arquivos (config, theme, fonts, etc)
2. Crie capítulos `0.cover.md`, `1.intro.md`, ..., `N.referencias.md`
3. Adicione rotas em `nuxt.config.js`
4. Importe settings em `pages/[isbn]/[...slug].vue`
5. **Ver detalhes:** [BOOK_STRUCTURE_GUIDE.md](../BOOK_STRUCTURE_GUIDE.md) (Seção 11)

### Editar conteúdo de capítulo
1. Abra `content/{ISBN}/N.slug.md`
2. Mantenha front matter YAML intacto
3. Edite conteúdo com Markdown + MDC
4. Use `[texto]{.footnote .footnote1}` para notas
5. Use `(AUTOR, YYYY)` para referências

### Adicionar nota de rodapé
1. Abra `content/{ISBN}/.settings/footnotes.js`
2. Adicione: `{ "id": "footnote20", "text": "Seu texto" }`
3. No `.md`: `[texto]{.footnote .footnote20}`

### Adicionar referência
1. Abra `content/{ISBN}/.settings/references.js`
2. Adicione: `{ "cit": "AUTOR, YYYY", "ref": "..." }`
3. No `.md`: `(AUTOR, YYYY)` inline

### Testar localmente
```bash
npm run dev
# Acesse: http://localhost:3000/{ISBN}/cover
```

### Build e deploy
```bash
npm run build    # Pré-renderiza todas as rotas
npm run preview  # Testa build localmente
```

---

## 📚 Documentação Disponível

| Arquivo | Propósito | Quando Usar |
|---------|-----------|-----------|
| **BOOK_STRUCTURE_GUIDE.md** | Guia universal para estruturar livros | Criar novo livro ou entender padrão geral |
| **SPECIFICATION_9786599492907.md** | Especificação técnica detalhada | Entender estrutura específica de um livro já existente |
| **copilot-instructions.md** (este) | Referência rápida + navegação | Cada prompt (enviado automaticamente) |

---

## 🔧 Arquivos Chave para Editação

```
content/{ISBN}/
├── .settings/
│   ├── config.js          ← Metadados, leitor, recursos
│   ├── theme.js           ← CSS customizado
│   ├── fonts.js           ← Opções de fontes
│   ├── footnotes.js       ← Banco de notas
│   └── references.js      ← Banco de referências
├── 0.cover.md             ← Capa
├── 1.intro.md             ← Capítulo 1
├── N.referencias.md       ← Referências (sempre último)
└── css/base.css           ← CSS adicional (opcional)
```

---

## ⚡ Regras Importantes

1. **Numeração é obrigatória:** `0.cover.md`, `1.intro.md`, ..., `N.referencias.md`
2. **Front matter YAML** em cada arquivo Markdown (title, description, layout, navigation.title)
3. **URLs de assets são absolutas:** `/9786599492907/images/figura.jpg` (não relativas)
4. **CSS do Paginar é embarcado** em `theme.js` (não em CSS externo)
5. **Todas as rotas** devem estar listadas em `nuxt.config.js`
6. **Imports em pages/[isbn]/[...slug].vue** devem estar atualizados

---

## 🛠️ Stack Tecnológico

- **Nuxt 4** - Framework Vue meta
- **Nuxt Content v3** - Gerenciamento de Markdown
- **Paginar** - Web Component para renderização de livros
- **Tailwind CSS** - Utilidades CSS
- **MDC** - Markdown Components

---

## 📖 Próximos Passos

- **Novo livro?** Leia [BOOK_STRUCTURE_GUIDE.md](../BOOK_STRUCTURE_GUIDE.md) seção 11
- **Editar livro existente?** Veja seção 15 de [BOOK_STRUCTURE_GUIDE.md](../BOOK_STRUCTURE_GUIDE.md)
- **Problema?** Consulte [BOOK_STRUCTURE_GUIDE.md](../BOOK_STRUCTURE_GUIDE.md) seção 13 (Troubleshooting)

---

**Última Atualização:** Dezembro 2025  
**Versão:** 1.0
