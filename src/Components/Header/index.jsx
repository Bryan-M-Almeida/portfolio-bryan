import "./header.scss";

const Header = () => (
  <>
    <header className="bg-[#0a0a0a]/80 backdrop-blur">
      <div>
        <a href="#" className="font-display group logo">
          <span className="text-[#d4af37] group-hover:text-[white]">B</span>ryan
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="orcamento" className="bg-[#d4af37] text-[#0a0a0a] btn">
          Orçamento
        </a>
      </div>
    </header>
  </>
);

export default Header;
