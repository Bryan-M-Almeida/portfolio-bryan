import { Menu, X } from "lucide-react";
import "./header.scss";

const Header = ({ isOpen, setOpen }) => {
  return (
    <header
      className={`${isOpen ? "bg-[#0a0a0a]" : "bg-[#0a0a0a]/80 backdrop-blur"}`}
    >
      <div className="desktop">
        <a href="#" className="font-display group logo flex">
          <span className="text-[#D4AF37] group-hover:text-[white]">B</span>
          ryan
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
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="45"
              y1="30"
              x2="55"
              y2="70"
              className="stroke-[#D4AF37] group-hover:stroke-white transition-colors"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M70,30 L85,50 L70,70"
              fill="none"
              className="stroke-[#D4AF37] group-hover:stroke-white transition-colors"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
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

        <div className="md:hidden">
          {isOpen ? (
            <X size={24} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={24} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      <div
        className={`${isOpen ? "flex translate-y-5 opacity-100" : "translate-y-[-350px] opacity-0"} menu-mobile`}
      >
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
          <a href="#orcamento" className="bg-[#D4AF37] text-[#0a0a0a] btn">
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
