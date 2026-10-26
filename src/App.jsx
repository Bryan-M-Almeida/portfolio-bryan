import { MotionConfig } from "motion/react";
import Contato from "./Components/Contato";
import CtaFaixa from "./Components/CtaFaixa";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Processo from "./Components/Processo";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import I18nProvider from "./i18n/I18nProvider";

function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <Projetos />
          <CtaFaixa />
          <Processo />
          <Sobre />
          <Contato />
        </main>
        <Footer />
      </MotionConfig>
    </I18nProvider>
  );
}

export default App;
