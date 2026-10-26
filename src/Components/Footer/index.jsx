import { useCallback, useState } from "react";
import { ArrowUp } from "lucide-react";
import perfil from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";
import PrivacyModal from "../PrivacyModal";

const Footer = () => {
  const { t } = useI18n();
  const [privacidade, setPrivacidade] = useState(false);
  const fechar = useCallback(() => setPrivacidade(false), []);

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-slate">
          &copy; {new Date().getFullYear()} {perfil.nome}. {t.rodape.direitos}
        </p>
        <div className="flex items-center gap-5 text-sm">
          <button
            type="button"
            onClick={() => setPrivacidade(true)}
            className="font-medium text-slate hover:text-ink"
          >
            {t.rodape.privacidade}
          </button>
          <a
            href="#inicio"
            aria-label={t.rodape.topo}
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>

      <PrivacyModal aberto={privacidade} onClose={fechar} />
    </footer>
  );
};

export default Footer;
