import { motion } from "motion/react";
import { useI18n } from "../../i18n/contexto";
import { IDIOMAS } from "../../i18n/idiomas";

const SeletorIdioma = ({ id = "idioma" }) => {
  const { idioma, setIdioma, t } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.idioma}
      className="relative flex rounded-full bg-porcelain p-1"
    >
      {IDIOMAS.map((op) => {
        const ativo = op.id === idioma;
        return (
          <button
            key={op.id}
            type="button"
            role="radio"
            aria-checked={ativo}
            aria-label={op.nome}
            lang={op.html}
            onClick={() => setIdioma(op.id)}
            className={`relative rounded-full px-2.5 py-1 text-[13px] font-semibold transition-colors ${
              ativo ? "text-paper" : "text-slate hover:text-ink"
            }`}
          >
            {ativo && (
              <motion.span
                layoutId={`pilula-${id}`}
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span className="relative">{op.rotulo}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SeletorIdioma;
