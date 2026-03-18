import "./experiencia.scss";
import experiencias from "../../Data/experiencias.json";
import { Zap } from "lucide-react";

const Experiencia = () => {
  return (
    <section id="experiencia">
      <div className="container">
        <div className="title-container">
          <h2 className="font-display">Experiência</h2>
          <p>
            Trajetória profissional focada em resultados e evolução contínua.
          </p>
          <div className="bar"></div>
        </div>

        <div className="experiencias-container">
          {experiencias.map((card) => (
            <div key={card.id} className="card">
              <div className="indice"></div>

              <div className="title-container">
                <div className="title">
                  <h3>{card.title}</h3>
                  <p>{card.cliente}</p>
                </div>
                <span className="year font-mono">
                  {card.inicio} - {card.fim}
                </span>
              </div>

              <p className="descricao">{card.descricao}</p>

              <ul className="atividades">
                {card.atividades.map((atividade) => (
                  <li key={atividade}>
                    {" "}
                    <Zap size={20} className="text-[#D4AF37]" /> {atividade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
