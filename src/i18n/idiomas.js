export const IDIOMAS = [
  { id: "pt", rotulo: "PT", nome: "Português", html: "pt-BR" },
  { id: "en", rotulo: "EN", nome: "English", html: "en" },
  { id: "es", rotulo: "ES", nome: "Español", html: "es" },
];

const CHAVE = "portfolio-idioma";
const validos = IDIOMAS.map((i) => i.id);

// Ordem: ?lang= na URL, última escolha, idioma do navegador, português.
export function idiomaInicial() {
  const daUrl = new URLSearchParams(window.location.search).get("lang");
  if (validos.includes(daUrl)) return daUrl;

  try {
    const salvo = localStorage.getItem(CHAVE);
    if (validos.includes(salvo)) return salvo;
  } catch {
    // localStorage indisponível
  }

  const doNavegador = (navigator.language || "pt").slice(0, 2);
  return validos.includes(doNavegador) ? doNavegador : "pt";
}

export function salvarIdioma(id) {
  try {
    localStorage.setItem(CHAVE, id);
  } catch {
    // ignora
  }
}
