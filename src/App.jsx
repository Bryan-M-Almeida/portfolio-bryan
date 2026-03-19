import Contato from "./Components/Contato";
import Experiencia from "./Components/Experiencia";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Orcamento from "./Components/Orcamento";
import Projetos from "./Components/Projetos";
import Recrutadores from "./Components/Recrutadores";
import Sobre from "./Components/Sobre";
import Tecnologias from "./Components/Tecnologias";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Tecnologias />
        <Experiencia />
        <Recrutadores />
        <Contato />
        <Orcamento />

        <Footer />
      </main>
    </div>
  );
}

export default App;
