import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
      </main>
    </div>
  );
}

export default App;
