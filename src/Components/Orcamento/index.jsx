import "./orcamento.scss";

const Orcamento = () => {
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
                <label htmlFor="emailOrcamento">Nome</label>
                <input
                  type="email"
                  id="emailOrcamento"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="projectType">Tipo de projeto</label>
              <select name="projectType" id="projectType">
                <option value="web">Web</option>
                <option value="landing">Landing Page</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;
