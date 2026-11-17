// Cada idioma tem a sua URL (/, /en/, /es/), pré-renderizada no build para
// que o Google indexe as três versões.
export const IDIOMAS = [
  { id: "pt", rotulo: "PT", nome: "Português", html: "pt-BR", og: "pt_BR", caminho: "/" },
  { id: "en", rotulo: "EN", nome: "English", html: "en", og: "en_US", caminho: "/en/" },
  { id: "es", rotulo: "ES", nome: "Español", html: "es", og: "es_ES", caminho: "/es/" },
];

export const CHAVE_IDIOMA = "portfolio-idioma";

export const idiomaDoCaminho = (caminho = "/") => {
  const prefixo = caminho.split("/")[1];
  return IDIOMAS.some((i) => i.id === prefixo && i.id !== "pt") ? prefixo : "pt";
};

export const caminhoDoIdioma = (id) =>
  IDIOMAS.find((i) => i.id === id)?.caminho ?? "/";

export function salvarIdioma(id) {
  try {
    localStorage.setItem(CHAVE_IDIOMA, id);
  } catch {
    // localStorage indisponível
  }
}
