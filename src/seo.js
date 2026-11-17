// Metadados de SEO gerados no build para cada idioma (title, description,
// canonical, hreflang, Open Graph e dados estruturados schema.org).
import modelos from "./Data/modelos";
import perfil from "./Data/perfil";
import { sitesNoAr } from "./Data/projetos";
import { IDIOMAS } from "./i18n/idiomas";
import textos from "./i18n/textos";

export const URL_BASE = "https://www.bryanmaciel.dev";

const urlDe = (id) => URL_BASE + IDIOMAS.find((i) => i.id === id).caminho;

const attr = (v) =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const SERVICOS = {
  pt: [
    "Criação de sites profissionais",
    "Desenvolvimento de landing pages",
    "Sites institucionais para empresas",
    "Desenvolvimento de aplicações web",
    "SEO técnico e otimização de desempenho",
    "Modelos de site por segmento",
  ],
  en: [
    "Professional website development",
    "Landing page design and development",
    "Business websites",
    "Web application development",
    "Technical SEO and performance optimization",
    "Industry website templates",
  ],
  es: [
    "Diseño y desarrollo de páginas web profesionales",
    "Desarrollo de landing pages",
    "Sitios institucionales para empresas",
    "Desarrollo de aplicaciones web",
    "SEO técnico y optimización de rendimiento",
    "Plantillas web por rubro",
  ],
};

const CARGO = {
  pt: "Desenvolvedor Web Full Stack",
  en: "Full Stack Web Developer",
  es: "Desarrollador Web Full Stack",
};

function dadosEstruturados(idioma) {
  const t = textos[idioma];
  const url = urlDe(idioma);
  const idPessoa = `${URL_BASE}/#bryan`;
  const idSite = `${URL_BASE}/#site`;
  const idServico = `${URL_BASE}/#servico`;
  const lingua = IDIOMAS.find((i) => i.id === idioma).html;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": idPessoa,
        name: perfil.nome,
        jobTitle: CARGO[idioma],
        url: URL_BASE + "/",
        image: perfil.foto,
        email: `mailto:${perfil.email}`,
        knowsAbout: [
          ...perfil.stack,
          "SEO",
          "Web performance",
          "Landing pages",
          "UI design",
        ],
        knowsLanguage: ["pt-BR", "en", "es"],
        sameAs: Object.values(perfil.links),
      },
      {
        "@type": "WebSite",
        "@id": idSite,
        url: URL_BASE + "/",
        name: perfil.nome,
        inLanguage: ["pt-BR", "en", "es"],
        publisher: { "@id": idPessoa },
      },
      {
        "@type": "ProfessionalService",
        "@id": idServico,
        name: `${perfil.nome} | ${CARGO[idioma]}`,
        url: URL_BASE + "/",
        image: `${URL_BASE}/og.jpg`,
        description: t.meta.descricao,
        founder: { "@id": idPessoa },
        email: perfil.email,
        areaServed: ["BR", "BO", "US", "Worldwide"],
        availableLanguage: ["Portuguese", "English", "Spanish"],
        knowsAbout: SERVICOS[idioma],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.meta.ogTitulo,
          itemListElement: SERVICOS[idioma].map((nome) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: nome },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#pagina`,
        url,
        name: t.meta.titulo,
        description: t.meta.descricao,
        inLanguage: lingua,
        isPartOf: { "@id": idSite },
        about: { "@id": idPessoa },
        primaryImageOfPage: `${URL_BASE}/og.jpg`,
      },
      {
        "@type": "ItemList",
        name: t.projetos.titulo,
        itemListElement: [
          ...sitesNoAr.map((p) => ({ nome: p.nome, url: p.site })),
          ...modelos.map((m) => ({ nome: m.nome[idioma], url: m.url })),
        ].map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: item.nome,
            url: item.url,
            creator: { "@id": idPessoa },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: lingua,
        mainEntity: t.faq.itens.map((item) => ({
          "@type": "Question",
          name: item.p,
          acceptedAnswer: { "@type": "Answer", text: item.r },
        })),
      },
    ],
  };
}

export function gerarHead(idioma) {
  const t = textos[idioma];
  const atual = IDIOMAS.find((i) => i.id === idioma);
  const url = urlDe(idioma);
  const json = JSON.stringify(dadosEstruturados(idioma)).replace(
    /</g,
    "\\u003c",
  );

  return [
    `<title>${attr(t.meta.titulo)}</title>`,
    `<meta name="description" content="${attr(t.meta.descricao)}" />`,
    `<meta name="keywords" content="${attr(t.meta.palavras.join(", "))}" />`,
    `<meta name="author" content="${attr(perfil.nome)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    ...IDIOMAS.map(
      (i) =>
        `<link rel="alternate" hreflang="${i.html}" href="${urlDe(i.id)}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${urlDe("pt")}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${attr(perfil.nome)}" />`,
    `<meta property="og:locale" content="${atual.og}" />`,
    ...IDIOMAS.filter((i) => i.id !== idioma).map(
      (i) => `<meta property="og:locale:alternate" content="${i.og}" />`,
    ),
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${attr(t.meta.ogTitulo)}" />`,
    `<meta property="og:description" content="${attr(t.meta.ogDescricao)}" />`,
    `<meta property="og:image" content="${URL_BASE}/og.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${attr(t.meta.ogTitulo)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(t.meta.ogTitulo)}" />`,
    `<meta name="twitter:description" content="${attr(t.meta.ogDescricao)}" />`,
    `<meta name="twitter:image" content="${URL_BASE}/og.jpg" />`,
    `<script type="application/ld+json">${json}</script>`,
  ]
    .map((linha) => `    ${linha}`)
    .join("\n");
}

export function gerarSitemap(data) {
  const alternativos = [
    ...IDIOMAS.map(
      (i) =>
        `    <xhtml:link rel="alternate" hreflang="${i.html}" href="${urlDe(i.id)}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlDe("pt")}" />`,
  ].join("\n");

  const urls = IDIOMAS.map(
    (i) => `  <url>
    <loc>${urlDe(i.id)}</loc>
    <lastmod>${data}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${i.id === "pt" ? "1.0" : "0.9"}</priority>
${alternativos}
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
