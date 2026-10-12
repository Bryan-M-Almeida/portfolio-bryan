import { useState } from "react";
import { ArrowUp } from "lucide-react";
import frases from "../../Data/frases.json";
import perfil from "../../Data/perfil";
import PrivacyModal from "../PrivacyModal";

const frase = frases.frase[Math.floor(Math.random() * frases.frase.length)];

const Footer = () => {
  const [privacidade, setPrivacidade] = useState(false);

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-semibold text-zinc-100">
            {perfil.nome}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} · Todos os direitos reservados.
          </p>
        </div>

        <p className="font-serif text-lg italic text-zinc-500">“{frase}”</p>

        <div className="flex items-center gap-5 text-sm text-zinc-500">
          <button
            type="button"
            onClick={() => setPrivacidade(true)}
            className="hover:text-zinc-200"
          >
            Privacidade
          </button>
          <a
            href="#inicio"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-zinc-400 transition-colors hover:border-gold/50 hover:text-gold"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>

      <PrivacyModal
        isOpen={privacidade}
        onClose={() => setPrivacidade(false)}
      />
    </footer>
  );
};

export default Footer;
