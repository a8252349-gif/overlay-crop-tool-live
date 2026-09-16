import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const locales = ["en", "ko", "ja", "es"];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

let updated = 0;
for (const locale of locales) {
  const localeDir = path.join(outDir, locale);
  for (const file of walk(localeDir)) {
    if (!file.endsWith(".html")) continue;
    const source = fs.readFileSync(file, "utf8");
    let next = source.replace(/<html\b([^>]*?)\blang=("[^"]*"|'[^']*')/i, (match, before) => `<html${before}lang="${locale}"`);
    if (next === source && /<html\b/i.test(source)) {
      next = source.replace(/<html\b/i, `<html lang="${locale}"`);
    }
    if (next !== source) {
      fs.writeFileSync(file, next);
      updated += 1;
    }
  }
}

console.log(`Updated lang attributes in ${updated} localized HTML files.`);
