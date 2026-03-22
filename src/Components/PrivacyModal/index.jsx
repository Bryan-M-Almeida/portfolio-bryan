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

        <p className="text-sm opacity-70">Última atualização: Março de 2026</p>

        <h2>Política de Privacidade</h2>

        <p>
          Este site é um portfólio pessoal com o objetivo de apresentar
          projetos, experiências e habilidades em desenvolvimento de software.
        </p>

        <h3>1. Coleta de Informações</h3>
        <p>
          Este site não realiza coleta automática de dados pessoais sensíveis.
          Informações como nome, e-mail ou mensagem só são coletadas caso você
          entre em contato voluntariamente por meio de formulários ou canais
          disponibilizados.
        </p>

        <h3>2. Uso das Informações</h3>
        <p>
          Os dados fornecidos são utilizados exclusivamente para comunicação
          direta, como resposta a mensagens, contatos profissionais ou
          oportunidades de trabalho. Nenhuma informação é utilizada para fins
          comerciais ou marketing automatizado.
        </p>

        <h3>3. Cookies e Tecnologias</h3>
        <p>
          Este site pode utilizar cookies ou ferramentas de análise (como
          métricas de acesso) para melhorar a experiência do usuário e entender
          o comportamento de navegação. Essas informações são anônimas e não
          identificam o usuário individualmente.
        </p>

        <h3>4. Armazenamento de Dados</h3>
        <p>
          Nenhum dado pessoal é armazenado em banco de dados próprio.
          Informações enviadas por formulário podem ser temporariamente
          armazenadas apenas para fins de comunicação.
        </p>

        <h3>5. Compartilhamento de Dados</h3>
        <p>
          Nenhuma informação pessoal é vendida, compartilhada ou distribuída a
          terceiros, exceto quando necessário para cumprimento de obrigações
          legais.
        </p>

        <h3>6. Segurança</h3>
        <p>
          São adotadas boas práticas de desenvolvimento para garantir a
          segurança das informações e proteger contra acessos não autorizados,
          vazamentos ou uso indevido.
        </p>

        <h3>7. Links Externos</h3>
        <p>
          Este site pode conter links para plataformas externas (como GitHub,
          LinkedIn ou outros). Não nos responsabilizamos pelas políticas de
          privacidade desses sites.
        </p>

        <h3>8. Direitos do Usuário</h3>
        <p>
          Você pode solicitar a exclusão de qualquer dado fornecido entrando em
          contato pelos canais disponíveis neste site.
        </p>

        <h3>9. Atualizações</h3>
        <p>
          Esta política pode ser atualizada a qualquer momento para refletir
          melhorias ou mudanças no funcionamento do site.
        </p>

        <h3>10. Contato</h3>
        <p>
          Em caso de dúvidas sobre esta política, utilize os canais de contato
          disponíveis neste site.
        </p>
      </div>
    </div>
  );
}

export default PrivacyModal;
