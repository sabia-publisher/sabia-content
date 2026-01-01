# Script de Conversão ePub para Markdown

Este script converte automaticamente arquivos ePub (formato XHTML) para o formato Markdown utilizado na aplicação Sabiá Content.

## 📋 Requisitos

- Node.js (v18+)
- Dependência `jsdom` instalada (`npm install jsdom`)

## 🚀 Uso Básico

```bash
node scripts/epub-to-markdown.js <ISBN> [--epub-path <caminho>]
```

### Exemplos

**Conversão com detecção automática do caminho:**
```bash
node scripts/epub-to-markdown.js 9786583942401
```
O script tentará localizar o ePub em `.to_create/<ISBN-formatado>/OEBPS`

**Conversão com caminho explícito:**
```bash
node scripts/epub-to-markdown.js 9786583942401 --epub-path .to_create/978-65-83942-40-1
```

## ⚙️ O que o script faz

1. **Extrai metadados** do arquivo `content.opf`
   - Título do livro
   - Autor
   - Editora
   - Descrição
   - ISBN

2. **Extrai estrutura de capítulos** do arquivo `toc.xhtml`
   - Títulos dos capítulos
   - Ordem dos arquivos
   - Links internos

3. **Converte arquivos XHTML para Markdown**
   - Cria arquivo de capa (0.cover.md)
   - Converte cada capítulo para .md numerado
   - Adiciona front matter YAML
   - Converte HTML para sintaxe Markdown
   - Preserva referências de imagens
   - Mantém notas de rodapé

4. **Organiza estrutura de saída**
   - Cria arquivos em `content/<ISBN>/`
   - Nomeia arquivos com número + slug do título
   - Gera estrutura compatível com Nuxt Content v3

## 📂 Estrutura Esperada

### Entrada (ePub extraído)
```
.to_create/
└── 978-XX-XXXXX-XX-X/
    └── OEBPS/
        ├── content.opf          # Metadados
        ├── toc.xhtml            # Sumário
        ├── cover.xhtml          # Capa
        ├── *.xhtml              # Capítulos
        ├── image/               # Imagens
        └── font/                # Fontes
```

### Saída (Markdown)
```
content/
└── 9786583942401/
    ├── .settings/               # (criado manualmente antes)
    ├── 0.cover.md
    ├── 1.prefacio.md
    ├── 2.capitulo-1.md
    └── ...
```

## 🔄 Conversões Aplicadas

### HTML → Markdown

| Elemento HTML | Conversão Markdown |
|---------------|-------------------|
| `<p class="Cap-tulo">` | `## Título` |
| `<p class="Autoria">` | `### Autor` |
| `<p class="H1">` | `### Heading` |
| `<p class="H2">` | `#### Subheading` |
| `<span class="Italic">` | `*texto*` |
| `<span class="Degular-Bold">` | `**texto**` |
| `<img src="image/fig.jpg">` | `![Imagem](/ISBN/images/fig.jpg)` |
| Nota de rodapé | `[^1]` |

### Front Matter Gerado

```yaml
---
title: 'Título do Capítulo - ISBN'
description: 'Título do Capítulo'
layout: 'default'
navigation:
  title: 'Título do Capítulo'
  author: 'Nome do Autor'  # (se houver)
---
```

## 📊 Saída do Script

O script fornece feedback detalhado:

```
📚 Convertendo ePub 9786583942401 para Markdown...

📖 Extraindo metadados...
   Título: Estudos em história e teoria do design
   Autor: Moema David Oliveira

📑 Extraindo sumário...
   Encontrados 13 capítulos

🎨 Criando arquivo de capa...
   ✅ 0.cover.md

📝 Convertendo capítulos...
   ✅ 1.prefacio.md
   ✅ 2.introducao.md
   ...

==================================================
📊 Resumo da Conversão:
   Total de arquivos: 14
   Sucesso: 14
   Erros: 0
==================================================

✨ Conversão concluída!
```

## ⚠️ Próximos Passos Após a Conversão

1. **Revisar arquivos .md gerados**
   - Verificar formatação
   - Ajustar títulos se necessário
   - Verificar imagens
   - Conferir notas de rodapé

2. **Copiar assets manualmente**
   ```bash
   # Copiar imagens
   cp -r .to_create/978-XX-XXXXX-XX-X/OEBPS/image/* public/<ISBN>/images/
   
   # Copiar fontes
   cp -r .to_create/978-XX-XXXXX-XX-X/OEBPS/font/* public/<ISBN>/fonts/
   ```

3. **Criar arquivos .settings**
   - `config.js` - Configuração geral do livro
   - `theme.js` - Tema visual
   - `fonts.js` - Configuração de fontes
   - `footnotes.js` - Notas de rodapé
   - `references.js` - Referências bibliográficas
   - `index.js` - Exportação consolidada

4. **Atualizar nuxt.config.js**
   ```javascript
   routes: [
     ...
     '/<ISBN>/cover',
     '/<ISBN>/capitulo-1',
     // adicionar todas as rotas
   ]
   ```

5. **Atualizar pages/[isbn]/[...slug].vue**
   ```javascript
   import book<ISBN> from '../../content/<ISBN>/.settings/index.js'
   
   // Adicionar ao switch case:
   else if (isbn === '<ISBN>') {
     bookSettings = book<ISBN>
   }
   ```

6. **Testar localmente**
   ```bash
   npm run dev
   # Acessar: http://localhost:3000/<ISBN>/cover
   ```

## 🛠️ Personalização do Script

O script pode ser customizado editando:

- **Mapeamento de classes CSS**: Função `htmlToMarkdown()`
- **Estrutura de front matter**: Função `convertXHTMLtoMarkdown()`
- **Extração de metadados**: Função `extractMetadata()`
- **Tratamento de capítulos**: Função `extractTableOfContents()`

## 🐛 Troubleshooting

**Erro: "Diretório do ePub não encontrado"**
- Verifique se o ePub foi extraído em `.to_create/`
- Use `--epub-path` para especificar caminho customizado

**Erro: "require is not defined"**
- O projeto usa ES modules
- Verifique se o import/export está correto

**Conversão incorreta de HTML**
- Ajuste os regexes na função `htmlToMarkdown()`
- Adicione novos mapeamentos conforme necessário

**Imagens não aparecem**
- Verifique se as imagens foram copiadas para `public/<ISBN>/images/`
- Confira os caminhos nos arquivos .md gerados

## 📝 Notas

- O script é idempotente: pode ser executado múltiplas vezes sem problemas
- Arquivos existentes serão sobrescritos
- A estrutura `.settings/` deve ser criada manualmente antes
- Revisão manual dos arquivos gerados é sempre recomendada

## 📚 Ver Também

- [BOOK_STRUCTURE_GUIDE.md](../BOOK_STRUCTURE_GUIDE.md) - Guia completo de estrutura de livros
- [.github/copilot-instructions.md](../.github/copilot-instructions.md) - Instruções gerais do projeto
