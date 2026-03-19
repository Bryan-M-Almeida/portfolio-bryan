import { FileDownIcon } from "lucide-react";
import "./recrutadores.scss";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

const Recrutadores = () => {
  return (
    <section id="recrutadores">
      <div className="container-recrutadores">
        <h2 className="font-display">Área para Recrutadores</h2>
        <p>
          Interessado em levar minha expertise para sua equipe? Aqui estão as
          formas mais rápidas de avaliar meu perfil.
        </p>
        <div className="interesses">
          <button>
            <FileDownIcon size={20} />
            Baixar currículo (PDF)
          </button>

          <a href="#" className="glass-card">
            <LiaLinkedinIn size={24} className="text-[#0077B5]" /> LinkedIn
          </a>

          <a href="#" className="glass-card">
            <BsGithub size={24} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recrutadores;
