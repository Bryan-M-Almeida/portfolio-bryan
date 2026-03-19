import { Briefcase, Mail, Send } from "lucide-react";
import "./contato.scss";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contato">
      <div className="contato-container">
        <div className="grid">
          <div className="contato-infos">
            <div className="title-container">
              <h2 className="font-display">Contato</h2>
              <p>Vamos construir algo extraordinário juntos.</p>
              <div className="bar"></div>
            </div>

            <div className="infos">
              <p>
                Estou sempre aberto a discutir novos projetos, ideias criativas
                ou oportunidades de fazer parte de suas visões.|
              </p>

              <div className="profissional">
                <div className="info-prof">
                  <div className="icon">
                    <Mail size={24} />
                  </div>

                  <div className="title">
                    <h4>E-mail Profissional</h4>
                    <p>contato@bryanmaciel.dev</p>
                  </div>
                </div>

                <div className="info-prof">
                  <div className="icon">
                    <Briefcase size={24} />
                  </div>

                  <div className="title">
                    <h4>Localização</h4>
                    <p>Rio de Janeiro, Brasil (Remoto)</p>
                  </div>
                </div>
              </div>

              <div className="social">
                <a href="" className="glass-card">
                  <FaLinkedinIn size={24} />
                </a>

                <a href="" className="glass-card">
                  <FaGithub size={24} />
                </a>

                <a href="" className="glass-card">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <form action="">
              <div className="grid">
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    name="name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    name="email"
                  />
                </div>
              </div>

              <div className="mensagem">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  required
                  name="mensagem"
                  id="mensagem"
                  placeholder="Como posso ajudar?"
                  rows={5}
                ></textarea>
              </div>

              <button type="submit">
                Enviar mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
