import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
      </main>
    </div>
  );
}

export default App;
