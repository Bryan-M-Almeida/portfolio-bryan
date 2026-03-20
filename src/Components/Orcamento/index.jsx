import "./orcamento.scss";
import CustomSelect from "../CustomSelect";
import { Send } from "lucide-react";

const Orcamento = () => {
  const options = [
    { value: "web", label: "Web" },
    { value: "landing", label: "Landing Page" },
    { value: "other", label: "Outro" },
  ];
  return (
    <section id="orcamento">
      <div className="orcamento-container">
        <div className="title-container">
          <h2 className="font-display">Orçamento</h2>
          <p>
            Tem um projeto em mente? Preencha os detalhes abaixo e retornarei
            com uma proposta estratégica.
          </p>
          <div className="bar"></div>
        </div>

        <div className="glass-card">
          <form action="">
            <div className="grid">
              <div>
                <label htmlFor="nameOrcamento">Nome</label>
                <input type="text" id="nameOrcamento" placeholder="Seu nome" />
              </div>

              <div>
                <label htmlFor="emailOrcamento">Email</label>
                <input
                  type="email"
                  id="emailOrcamento"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="select">
              <label htmlFor="projectType">Tipo de projeto</label>
              <CustomSelect
                options={options}
                placeholder="Selecione uma opção"
                name="categoria"
              />
            </div>

            <div className="mensagemOrcamento-container">
              <label htmlFor="mensagemOrcamento">Mensagem</label>
              <textarea
                name="mensagemOrcamento"
                id="mensagemOrcamento"
                rows="5"
                placeholder="Como posso ajudar?"
              ></textarea>
            </div>

            <button type="submit" className="orcamentoSubmit">
              Enviar mensagem
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;
