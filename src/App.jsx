import { MotionConfig } from "motion/react";
import Contato from "./Components/Contato";
import CtaFaixa from "./Components/CtaFaixa";
import Faq from "./Components/Faq";
import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Processo from "./Components/Processo";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import useArrastarPagina from "./hooks/useArrastarPagina";
import useRolagemSuave from "./hooks/useRolagemSuave";
import I18nProvider from "./i18n/I18nProvider";

// `idioma` só é passado no pré-render; no navegador ele vem da URL.
function App({ idioma }) {
  useRolagemSuave();
  useArrastarPagina();

  return (
    <I18nProvider inicial={idioma}>
      <MotionConfig reducedMotion="user">
        <Cursor />
        <Header />
        <main>
          <Hero />
          <Projetos />
          <CtaFaixa />
          <Processo />
          <Sobre />
          <Faq />
          <Contato />
        </main>
        <Footer />
      </MotionConfig>
    </I18nProvider>
  );
}

export default App;
