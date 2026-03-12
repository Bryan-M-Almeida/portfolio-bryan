import "./projetos.scss";
import projetos from "../../Data/projetos.json";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Projetos = () => {
  return (
    <>
      <section id="projetos">
        <div className="projetos-container">
          <div className="title-container">
            <h2 className="font-display">Projetos em Destaque</h2>
            <p>
              Uma seleção de projetos que demonstram minha capacidade técnica e
              visão de produto.
            </p>
            <div className="bar"></div>
          </div>

          <div className="projetos">
            {projetos.length ? (
              projetos.map((projeto) => (
                <div key={projeto.id} className="card group glass-card">
                  <div className="imagem-container">
                    <img
                      src={projeto.imagem}
                      className="imagem group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div
                      className="links group-hover:opacity-100 absolute inset-0 opacity-0 transition-opacity bg-[#0A0A0A]/60"
                      alt={projeto.title}
                      title={projeto.title}
                    >
                      <a
                        href={projeto.site_link}
                        target="_blank"
                        className="site text-[#0A0A0A]"
                      >
                        <ExternalLink size={24} />
                      </a>
                      <a
                        href={projeto.repositorio_link}
                        target="_blank"
                        className="site text-[#0A0A0A]"
                      >
                        <BsGithub size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="infos-container">
                    <div className="title">
                      <h3 className="font-display">{projeto.title}</h3>
                      <span className="font-mono text-[#D4AF37]">
                        {projeto.finalidade}
                      </span>
                    </div>

                    <p className="line-clamp-2 desc">{projeto.descricao}</p>

                    <div className="descricao">
                      <div>
                        <h4>Problema</h4>
                        <p>{projeto.problema}</p>
                      </div>

                      <div>
                        <h4>Solução</h4>
                        <p>{projeto.solucao}</p>
                      </div>
                    </div>

                    <div className="tecnologias">
                      {projeto.tecnologias.map((tecnologia) => (
                        <span>{tecnologia}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-red-500">Sem projetos</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Projetos;
