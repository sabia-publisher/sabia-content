#!/usr/bin/env node

/**
 * Script para converter ePub para formato Markdown da aplicação Sabiá Content
 *
 * Uso: node scripts/epub-to-markdown.js <isbn> [--epub-path <caminho>]
 *
 * Exemplo:
 * node scripts/epub-to-markdown.js 9786583942401
 * node scripts/epub-to-markdown.js 9786583942401 --epub-path .to_create/978-65-83942-40-1
 */

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const args = process.argv.slice(2);
const isbn = args[0];
const epubPathIndex = args.indexOf('--epub-path');
const formattedIsbn = isbn.replace(/(\d{3})(\d{2})(\d{3})(\d{4})(\d{2})(\d{1})/, '$1-$2-$3-$4-$5');
const epubBasePath = epubPathIndex > -1 ? args[epubPathIndex + 1] : `.to_create/${formattedIsbn}`;

if (!isbn) {
  console.error('❌ Por favor, forneça o ISBN como argumento');
  console.log('Uso: node scripts/epub-to-markdown.js <isbn>');
  process.exit(1);
}

const EPUB_CONTENT_PATH = path.join(epubBasePath, 'OEBPS');
const OUTPUT_CONTENT_PATH = path.join('content', isbn);
const OUTPUT_PUBLIC_PATH = path.join('public', isbn);

console.log(`📚 Convertendo ePub ${isbn} para Markdown...\n`);

/**
 * Extrai metadados do content.opf
 */
function extractMetadata() {
  const opfPath = path.join(EPUB_CONTENT_PATH, 'content.opf');

  if (!fs.existsSync(opfPath)) {
    console.error(`❌ Arquivo content.opf não encontrado em ${opfPath}`);
    return null;
  }

  const opfContent = fs.readFileSync(opfPath, 'utf-8');
  const dom = new JSDOM(opfContent, { contentType: 'text/xml' });
  const doc = dom.window.document;

  const metadata = {
    title: doc.querySelector('dc\\:title, title')?.textContent || 'Título não encontrado',
    author: doc.querySelector('dc\\:creator, creator')?.textContent || 'Autor não encontrado',
    publisher: doc.querySelector('dc\\:publisher, publisher')?.textContent || 'Editora Sabiá',
    description: doc.querySelector('dc\\:description, description')?.textContent || '',
    year: new Date().getFullYear(),
    isbn: isbn
  };

  return metadata;
}

/**
 * Extrai estrutura de capítulos do toc.xhtml
 */
function extractTableOfContents() {
  const tocPath = path.join(EPUB_CONTENT_PATH, 'toc.xhtml');

  if (!fs.existsSync(tocPath)) {
    console.warn('⚠️  Arquivo toc.xhtml não encontrado');
    return [];
  }

  const tocContent = fs.readFileSync(tocPath, 'utf-8');
  const dom = new JSDOM(tocContent);
  const doc = dom.window.document;

  const chapters = [];
  const links = doc.querySelectorAll('nav[epub\\:type="toc"] a, nav[id="toc"] a');

  links.forEach((link, index) => {
    const href = link.getAttribute('href');
    const title = link.textContent.trim();

    if (href && !href.includes('cover.xhtml')) {
      chapters.push({
        index: index,
        file: href.split('#')[0],
        title: title,
        anchor: href.split('#')[1] || null
      });
    }
  });

  return chapters;
}

/**
 * Converte HTML para Markdown simplificado
 */
function htmlToMarkdown(html) {
  // Remove tags de quebra de página
  html = html.replace(/<div[^>]*role="doc-pagebreak"[^>]*>.*?<\/div>/gs, '\n');

  // Converte parágrafos
  html = html.replace(/<p class="P1---sem-recuo"[^>]*>(.*?)<\/p>/gs, '\n$1\n');
  html = html.replace(/<p class="P1"[^>]*>(.*?)<\/p>/gs, '\n$1\n');
  html = html.replace(/<p class="Cap-tulo"[^>]*>(.*?)<\/p>/gs, '\n## $1\n');
  html = html.replace(/<p class="Autoria"[^>]*>(.*?)<\/p>/gs, '\n### $1\n');
  html = html.replace(/<p class="H1"[^>]*>(.*?)<\/p>/gs, '\n### $1\n');
  html = html.replace(/<p class="H2"[^>]*>(.*?)<\/p>/gs, '\n#### $1\n');
  html = html.replace(/<p[^>]*>(.*?)<\/p>/gs, '\n$1\n');

  // Converte spans de estilo
  html = html.replace(/<span class="Italic"[^>]*>(.*?)<\/span>/gs, '*$1*');
  html = html.replace(/<span class="Degular-Bold"[^>]*>(.*?)<\/span>/gs, '**$1**');
  html = html.replace(/<em>(.*?)<\/em>/gs, '*$1*');
  html = html.replace(/<strong>(.*?)<\/strong>/gs, '**$1**');

  // Converte imagens
  html = html.replace(/<img[^>]*src="image\/(.*?)"[^>]*>/gs, (match, imgPath) => {
    return `\n![Imagem](/${isbn}/images/${imgPath})\n`;
  });

  // Converte notas de rodapé
  html = html.replace(/<a[^>]*class="_idFootnoteLink"[^>]*href="#footnote-(\d+)"[^>]*>(\d+)<\/a>/gs, '[^$2]');

  // Remove br
  html = html.replace(/<br\s*\/?>/g, '\n');

  // Remove divs e outros containers
  html = html.replace(/<\/?div[^>]*>/g, '');
  html = html.replace(/<\/?section[^>]*>/g, '');

  // Remove spans restantes
  html = html.replace(/<\/?span[^>]*>/g, '');

  // Remove outras tags HTML
  html = html.replace(/<[^>]+>/g, '');

  // Decodifica entidades HTML
  html = html.replace(/&nbsp;/g, ' ');
  html = html.replace(/&lt;/g, '<');
  html = html.replace(/&gt;/g, '>');
  html = html.replace(/&amp;/g, '&');
  html = html.replace(/&quot;/g, '"');

  // Limpa linhas vazias múltiplas
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

/**
 * Converte um arquivo XHTML para Markdown
 */
function convertXHTMLtoMarkdown(xhtmlFile, chapterInfo, chapterNumber) {
  const xhtmlPath = path.join(EPUB_CONTENT_PATH, xhtmlFile);

  if (!fs.existsSync(xhtmlPath)) {
    console.warn(`⚠️  Arquivo não encontrado: ${xhtmlFile}`);
    return null;
  }

  const xhtmlContent = fs.readFileSync(xhtmlPath, 'utf-8');
  const dom = new JSDOM(xhtmlContent);
  const doc = dom.window.document;

  // Extrai o título do capítulo
  const titleEl = doc.querySelector('.Cap-tulo, h1, h2');
  const title = chapterInfo.title || titleEl?.textContent.trim() || 'Capítulo sem título';

  // Extrai o autor (se houver)
  const authorEl = doc.querySelector('.Autoria');
  const author = authorEl?.textContent.trim() || null;

  // Extrai o corpo do conteúdo
  const bodyEl = doc.querySelector('body');
  let bodyHTML = bodyEl?.innerHTML || '';

  // Converte HTML para Markdown
  const markdown = htmlToMarkdown(bodyHTML);

  // Cria slug do título
  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);

  // Gera front matter
  const frontMatter = `---
title: '${title} - ${isbn}'
description: '${title}'
layout: 'default'
navigation:
  title: '${title}'${author ? `\n  author: '${author}'` : ''}
---

<link rel="stylesheet" href="/${isbn}/css/base.css">

`;

  const fullContent = frontMatter + markdown;

  return {
    filename: `${chapterNumber}.${slug}.md`,
    content: fullContent,
    title: title,
    author: author
  };
}

/**
 * Cria arquivo de capa
 */
function createCoverFile(metadata) {
  const coverContent = `---
title: '${metadata.title} - Editora Sabiá'
description: '${metadata.title}'
layout: 'default'
navigation:
  title: 'Capa'
---

<link rel="stylesheet" href="/${isbn}/css/base.css">

::PageFull{.flex .flex-col .justify-center}

# ${metadata.title}

### <span class="thin">org.</span><br/>${metadata.author}

::

::PageFull
&nbsp;
::
`;

  return {
    filename: '0.cover.md',
    content: coverContent
  };
}

/**
 * Função principal
 */
async function main() {
  try {
    // Verifica se o diretório do ePub existe
    if (!fs.existsSync(EPUB_CONTENT_PATH)) {
      console.error(`❌ Diretório do ePub não encontrado: ${EPUB_CONTENT_PATH}`);
      console.log(`\n💡 Dica: Use --epub-path para especificar o caminho do ePub`);
      process.exit(1);
    }

    // Cria diretórios de saída se não existirem
    if (!fs.existsSync(OUTPUT_CONTENT_PATH)) {
      fs.mkdirSync(OUTPUT_CONTENT_PATH, { recursive: true });
      console.log(`✅ Diretório criado: ${OUTPUT_CONTENT_PATH}`);
    }

    // Extrai metadados
    console.log('📖 Extraindo metadados...');
    const metadata = extractMetadata();
    if (!metadata) {
      console.error('❌ Não foi possível extrair metadados');
      process.exit(1);
    }
    console.log(`   Título: ${metadata.title}`);
    console.log(`   Autor: ${metadata.author}\n`);

    // Extrai índice
    console.log('📑 Extraindo sumário...');
    const chapters = extractTableOfContents();
    console.log(`   Encontrados ${chapters.length} capítulos\n`);

    // Cria arquivo de capa
    console.log('🎨 Criando arquivo de capa...');
    const cover = createCoverFile(metadata);
    const coverPath = path.join(OUTPUT_CONTENT_PATH, cover.filename);
    fs.writeFileSync(coverPath, cover.content, 'utf-8');
    console.log(`   ✅ ${cover.filename}\n`);

    // Converte capítulos
    console.log('📝 Convertendo capítulos...');
    let successCount = 0;
    let errorCount = 0;

    chapters.forEach((chapter, index) => {
      try {
        const chapterNumber = index + 1;
        const result = convertXHTMLtoMarkdown(chapter.file, chapter, chapterNumber);

        if (result) {
          const outputPath = path.join(OUTPUT_CONTENT_PATH, result.filename);
          fs.writeFileSync(outputPath, result.content, 'utf-8');
          console.log(`   ✅ ${result.filename}`);
          successCount++;
        }
      } catch (error) {
        console.error(`   ❌ Erro ao converter ${chapter.file}: ${error.message}`);
        errorCount++;
      }
    });

    // Resumo
    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 Resumo da Conversão:`);
    console.log(`   Total de arquivos: ${chapters.length + 1}`);
    console.log(`   Sucesso: ${successCount + 1}`);
    console.log(`   Erros: ${errorCount}`);
    console.log(`${'='.repeat(50)}\n`);

    console.log('✨ Conversão concluída!');
    console.log(`\n📁 Arquivos criados em: ${OUTPUT_CONTENT_PATH}`);
    console.log(`\n⚠️  Próximos passos:`);
    console.log(`   1. Revisar os arquivos .md gerados`);
    console.log(`   2. Ajustar formatação se necessário`);
    console.log(`   3. Adicionar rotas ao nuxt.config.js`);
    console.log(`   4. Atualizar pages/[isbn]/[...slug].vue\n`);

  } catch (error) {
    console.error(`\n❌ Erro fatal: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

// Executa o script
main();
