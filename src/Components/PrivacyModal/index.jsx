import { FaXmark } from "react-icons/fa6";
import "./modal.scss";
import { useEffect } from "react";

function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="modal-overlay" id="privacy-modal" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaXmark size={30} />
        </button>

        <h2>Política de Privacidade</h2>

        <p>
          Este site é um portfólio pessoal criado para apresentar projetos,
          experiências e habilidades em desenvolvimento de software.
        </p>

        <h3>Coleta de Informações</h3>
        <p>
          Nenhuma informação pessoal é coletada automaticamente. Caso você entre
          em contato através de formulários ou e-mail, os dados fornecidos serão
          utilizados apenas para responder sua mensagem.
        </p>

        <h3>Cookies</h3>
        <p>
          Este site pode utilizar cookies ou ferramentas de análise para
          melhorar a experiência do usuário e entender como o site é utilizado.
        </p>

        <h3>Compartilhamento de Dados</h3>
        <p>
          Nenhum dado pessoal é vendido, compartilhado ou distribuído a
          terceiros.
        </p>

        <h3>Contato</h3>
        <p>
          Caso tenha dúvidas sobre esta política de privacidade, entre em
          contato através dos canais disponíveis neste site.
        </p>
      </div>
    </div>
  );
}

export default PrivacyModal;
