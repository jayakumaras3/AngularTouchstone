import fs from 'node:fs';
import path from 'node:path';

// Extracts PRODUCT_DATA array from ecommerceData.ts and writes it as valid JSON into src/assets/data/product-data.json

const root = process.cwd();
const srcPath = path.join(root, 'app', 'pages', 'apps', 'ecommerce', 'ecommerceData.ts');
const outPath = path.join(root, 'assets', 'data', 'product-data.json');

const text = fs.readFileSync(srcPath, 'utf8');

const markerStart = 'export const PRODUCT_DATA: Element[] =';
const startIndex = text.indexOf(markerStart);
if (startIndex < 0) {
  throw new Error('Could not find PRODUCT_DATA export');
}

const afterStart = text.slice(startIndex + markerStart.length);
const openBracket = afterStart.indexOf('[');
if (openBracket < 0) throw new Error('Could not find opening [');

// Find the matching closing bracket for the array.
let i = openBracket;
let depth = 0;
let inString = false;
let escape = false;
for (; i < afterStart.length; i++) {
  const ch = afterStart[i];

  if (escape) {
    escape = false;
    continue;
  }
  if (ch === '\\') {
    escape = true;
    continue;
  }
  if (ch === '"') {
    inString = !inString;
    continue;
  }
  if (inString) continue;

  if (ch === '[') depth++;
  if (ch === ']') {
    depth--;
    if (depth === 0) {
      i++; // include the closing ']'
      break;
    }
  }
}

const arrayLiteral = afterStart.slice(openBracket, i).trim();

// Convert JS/TS array literal to strict JSON by removing trailing commas.
const noTrailingCommas = arrayLiteral
  .replace(/,\s*(\]|\})/g, '$1');

let parsed;
try {
  parsed = JSON.parse(noTrailingCommas);
} catch (e) {
  console.error('JSON parse failed. You may have non-JSON literals in PRODUCT_DATA.');
  throw e;
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
console.log(`Wrote ${parsed.length} products to ${outPath}`);
