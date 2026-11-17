// Gera o HTML final de cada idioma (/, /en/, /es/) com o conteúdo já
// renderizado e os metadados de SEO, além do sitemap.xml.
// Roda depois de `vite build` e `vite build --ssr`.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(raiz, "dist");
const ssr = join(raiz, "dist-ssr");

const { render, gerarHead, gerarSitemap, IDIOMAS } = await import(
  pathToFileURL(join(ssr, "entry-server.js")).href
);

const modelo = readFileSync(join(dist, "index.html"), "utf8");
const SEO = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!SEO.test(modelo) || !modelo.includes('<div id="root"></div>'))
  throw new Error("index.html sem os marcadores esperados");

for (const idioma of IDIOMAS) {
  const html = modelo
    .replace(/<html lang="[^"]*"/, `<html lang="${idioma.html}"`)
    .replace(SEO, `<!--seo-->\n${gerarHead(idioma.id)}\n    <!--/seo-->`)
    .replace('<div id="root"></div>', `<div id="root">${render(idioma.id)}</div>`);

  const pasta = join(dist, idioma.caminho);
  mkdirSync(pasta, { recursive: true });
  writeFileSync(join(pasta, "index.html"), html);
  console.log(`prerender: ${idioma.caminho} (${(html.length / 1024).toFixed(0)} KB)`);
}

writeFileSync(
  join(dist, "sitemap.xml"),
  gerarSitemap(new Date().toISOString().slice(0, 10)),
);
rmSync(ssr, { recursive: true, force: true });
console.log("prerender: sitemap.xml");
