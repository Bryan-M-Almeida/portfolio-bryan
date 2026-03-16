import "./footer.scss";
import frases from "../../Data/frases.json";
import { useEffect, useState } from "react";
import PrivacyModal from "../PrivacyModal/index";

const Footer = () => {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const i = Math.floor(Math.random() * frases.frase.length);
    setPhrase(frases.frase[i]);
  }, []);

  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  return (
    <footer>
      <div className="container">
        <div className="info-container">
          <p className="font-display">Bryan</p>
          <p className="direitos">
            {" "}
            &copy; 2026 Bryan Developer Portfolio. Todos os direitos reservados.
          </p>
        </div>

        <p className="frase-aleatoria font-display">"{phrase}"</p>

        <div className="termos-container">
          <button onClick={() => setPrivacyModal(true)}>Privacy</button>
          <button onClick={() => setTermsModal(!termsModal)}>Terms</button>
        </div>
      </div>

      <PrivacyModal
        isOpen={privacyModal}
        onClose={() => setPrivacyModal(false)}
      />
    </footer>
  );
};
export default Footer;
