import Contato from "./Components/Contato";
import Experiencia from "./Components/Experiencia";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projetos from "./Components/Projetos";
import Recrutadores from "./Components/Recrutadores";
import Sobre from "./Components/Sobre";
import Tecnologias from "./Components/Tecnologias";

function App() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para os projetos
      </a>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Tecnologias />
        <Experiencia />
        <Recrutadores />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
