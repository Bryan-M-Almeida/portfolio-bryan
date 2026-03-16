import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projetos from "./Components/Projetos";
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

        <Footer />
      </main>
    </div>
  );
}

export default App;
