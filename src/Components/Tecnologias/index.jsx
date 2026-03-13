import "./tecnologias.scss";
import tecnologias from "../../Data/tecnologias.json";
import { Database, PanelsTopLeft, Settings } from "lucide-react";

const Tecnologias = () => {
  return (
    <>
      <section id="tecnologias">
        <div className="container">
          <div className="title">
            <h2 className="font-display">Tecnologias</h2>
            <p>
              O arsenal técnico que utilizo para dar vida a projetos ambiciosos.
            </p>
            <div className="bar"></div>
          </div>

          <div className="tecnologias-container">
            <div className="tecnologia-card glass-card">
              <div className="title-container">
                <PanelsTopLeft size={24} className="text-[#d4af37]" />
                <h3>Front-End</h3>
              </div>
              <ul>
                {tecnologias.frontend.map((tecnologia) => (
                  <li>
                    <div className="ico"></div>
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tecnologia-card glass-card">
              <div className="title-container">
                <Database size={24} className="text-[#d4af37]" />
                <h3>Back-End</h3>
              </div>
              <ul>
                {tecnologias.backend.map((tecnologia) => (
                  <li>
                    <div className="ico"></div>
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tecnologia-card glass-card">
              <div className="title-container">
                <Settings size={24} className="text-[#d4af37]" />
                <h3>Tools & Concepts</h3>
              </div>
              <ul>
                {tecnologias.tools.map((tecnologia) => (
                  <li>
                    <div className="ico"></div>
                    {tecnologia}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="aprendizado-atual glass-card">
            
            <div className="aprendizado-container">

              <div className="title">
                <h3 className="font-display">Aprendizados Atuais</h3>
                <p>
                  Expandindo horizontes e explorando novas fronteiras
                  tecnológicas.
                </p>
              </div>

              <div className="aprendizados">
                {tecnologias.aprendizado_atual.map((aprendizado) => (
                  <span>{aprendizado}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
