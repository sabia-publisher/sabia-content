#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Uso: node convert-to-base64.js <caminho-do-arquivo> [output-arquivo]');
  console.log('');
  console.log('Exemplos:');
  console.log('  node convert-to-base64.js public/9786583942401/fonts/DegularVar-Bold.ttf');
  console.log('  node convert-to-base64.js public/9786583942401/fonts/DegularVar-Bold.ttf output.txt');
  console.log('');
  console.log('Se output-arquivo não for especificado, o resultado será exibido no console.');
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];

if (!fs.existsSync(inputFile)) {
  console.error(`❌ Arquivo não encontrado: ${inputFile}`);
  process.exit(1);
}

try {
  const buffer = fs.readFileSync(inputFile);
  const base64 = buffer.toString('base64');
  const fileName = path.basename(inputFile);

  if (outputFile) {
    fs.writeFileSync(outputFile, base64);
    console.log(`✅ Convertido com sucesso!`);
    console.log(`📄 Arquivo: ${fileName}`);
    console.log(`💾 Salvo em: ${outputFile}`);
    console.log(`📊 Tamanho base64: ${base64.length} caracteres`);
  } else {
    console.log(`\n✅ Base64 para ${fileName}:\n`);
    console.log(base64);
    console.log(`\n📊 Tamanho: ${base64.length} caracteres\n`);
  }
} catch (error) {
  console.error(`❌ Erro ao converter arquivo: ${error.message}`);
  process.exit(1);
}
