/* eslint-disable react-refresh/only-export-components */
// Usado só no build (scripts/prerender.mjs) para gerar o HTML de cada idioma.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export { gerarHead, gerarSitemap } from "./seo.js";
export { IDIOMAS } from "./i18n/idiomas.js";

export const render = (idioma) =>
  renderToString(
    <StrictMode>
      <App idioma={idioma} />
    </StrictMode>,
  );
