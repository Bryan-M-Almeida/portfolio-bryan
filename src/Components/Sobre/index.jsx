import "./sobre.scss";

const Sobre = () => (
  <>
    <section id="sobre">
      <div className="container">
        <div className="grid-container">
          <div className="title-container">
            <div className="title">
              <h2 className="font-display">Sobre mim</h2>
              <p>Transformando complexidade em elegância técnica.</p>
              <div className="bar"></div>
            </div>

            <div className="descricao-container">
              <p>
                Sou estudante de Engenharia de Sistemas com foco em
                desenvolvimento Front-End, construindo minha experiência através
                de projetos práticos e estudo constante.
              </p>

              <p>
                Tenho trabalhado na criação de landing pages e aplicações web
                utilizando HTML, CSS e JavaScript, sempre buscando organização,
                performance e clareza no código. Atualmente, estou aprofundando
                meus conhecimentos em React para desenvolver interfaces mais
                dinâmicas, escaláveis e bem estruturadas.
              </p>

              <p>
                Acredito que um bom desenvolvedor não é apenas quem faz
                funcionar, mas quem entende o porquê das decisões técnicas. Por
                isso, valorizo boas práticas, lógica bem construída e
                aprendizado contínuo como pilares da minha evolução
                profissional.
              </p>

              <div className="skills-container">
                <div className="card">
                  <h4>Performance</h4>
                  <p>
                    Foco em aplicações leves e organizadas, evitando excessos e
                    garantindo uma navegação fluida.
                  </p>
                </div>

                <div className="card">
                  <h4>Escalabilidade</h4>
                  <p>
                    Desenvolvimento com base em componentes reutilizáveis,
                    pensando no crescimento e na manutenção futura do projeto.
                  </p>
                </div>
                <div className="card">
                  <h4>Responsividade</h4>
                  <p>
                    Criação de layouts adaptáveis para diferentes dispositivos,
                    priorizando experiência do usuário.
                  </p>
                </div>

                <div className="card">
                  <h4>Aprendizado Contínuo</h4>
                  <p>
                    Evolução constante através de projetos práticos, estudo
                    aprofundado e desafios técnicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="foto-apresentacao">
            <img
              src="https://res.cloudinary.com/dr2p2zd0x/image/upload/v1772132822/foto_kbfhxn.jpg"
              alt="Foto do desenvolvedor"
              title="Bryan Maciel - Desenvolvedor Front-end"
              className="dev"
              referrerPolicy="no-referrer"
            />
            <div className="blend"></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Sobre;
