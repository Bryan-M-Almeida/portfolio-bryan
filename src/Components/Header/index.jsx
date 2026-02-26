import "./header.scss";

const Header = () => (
  <>
    <header className="bg-[#0a0a0a]/80 backdrop-blur">
      <div>
        <a href="#" className="font-display group logo flex">
          <span className="text-[#D4AF37] group-hover:text-[white]">B</span>ryan
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="40"
            height="35"
          >
            <path
              d="M30,30 L15,50 L30,70"
              fill="none"
              className="stroke-[#D4AF37] group-hover:stroke-white transition-colors"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="45"
              y1="30"
              x2="55"
              y2="70"
              className="stroke-[#D4AF37] group-hover:stroke-white transition-colors"
              stroke-width="8"
              stroke-linecap="round"
            />
            <path
              d="M70,30 L85,50 L70,70"
              fill="none"
              className="stroke-[#D4AF37] group-hover:stroke-white transition-colors"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="orcamento" className="bg-[#D4AF37] text-[#0a0a0a] btn">
          Orçamento
        </a>
      </div>
    </header>
  </>
);

export default Header;
