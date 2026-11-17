import { useCallback, useEffect, useMemo, useState } from "react";
import { I18nContext } from "./contexto";
import {
  IDIOMAS,
  caminhoDoIdioma,
  idiomaDoCaminho,
  salvarIdioma,
} from "./idiomas";
import textos from "./textos";

const URL_BASE = "https://www.bryanmaciel.dev";

// `inicial` vem do pré-render; no navegador o idioma sai da URL.
const I18nProvider = ({ inicial, children }) => {
  const [idioma, setIdiomaEstado] = useState(
    () =>
      inicial ??
      (typeof window === "undefined"
        ? "pt"
        : idiomaDoCaminho(window.location.pathname)),
  );

  // Troca escolhida pelo usuário: atualiza a URL sem recarregar e lembra a escolha
  const setIdioma = useCallback((novo) => {
    setIdiomaEstado(novo);
    salvarIdioma(novo);
    const { hash } = window.location;
    window.history.replaceState(null, "", caminhoDoIdioma(novo) + hash);
  }, []);

  useEffect(() => {
    const t = textos[idioma];
    const url = URL_BASE + caminhoDoIdioma(idioma);
    document.documentElement.lang = IDIOMAS.find((i) => i.id === idioma).html;
    document.title = t.meta.titulo;
    const definir = (seletor, atributo, valor) =>
      document.querySelector(seletor)?.setAttribute(atributo, valor);
    definir('meta[name="description"]', "content", t.meta.descricao);
    definir('link[rel="canonical"]', "href", url);
    definir('meta[property="og:url"]', "content", url);
  }, [idioma]);

  const valor = useMemo(
    () => ({ idioma, setIdioma, t: textos[idioma] }),
    [idioma, setIdioma],
  );

  return <I18nContext.Provider value={valor}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
