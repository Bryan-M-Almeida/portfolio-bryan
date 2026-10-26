import { useEffect, useMemo, useState } from "react";
import { I18nContext } from "./contexto";
import { IDIOMAS, idiomaInicial, salvarIdioma } from "./idiomas";
import textos from "./textos";

const I18nProvider = ({ children }) => {
  const [idioma, setIdioma] = useState(idiomaInicial);

  useEffect(() => {
    const t = textos[idioma];
    document.documentElement.lang = IDIOMAS.find((i) => i.id === idioma).html;
    document.title = t.meta.titulo;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.descricao);
    salvarIdioma(idioma);
  }, [idioma]);

  const valor = useMemo(
    () => ({ idioma, setIdioma, t: textos[idioma] }),
    [idioma],
  );

  return <I18nContext.Provider value={valor}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
