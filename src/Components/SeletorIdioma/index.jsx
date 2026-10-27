import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useI18n } from "../../i18n/contexto";
import { IDIOMAS } from "../../i18n/idiomas";

// Indicador medido e animado só no eixo X: desliza na horizontal entre as opções,
// sem depender de animação de layout (que salta dentro do cabeçalho fixo).
const SeletorIdioma = () => {
  const { idioma, setIdioma, t } = useI18n();
  const botoes = useRef({});
  const [pilula, setPilula] = useState(null);

  useLayoutEffect(() => {
    const medir = () => {
      const el = botoes.current[idioma];
      if (el) setPilula({ x: el.offsetLeft, largura: el.offsetWidth });
    };
    medir();
    document.fonts?.ready.then(medir);
  }, [idioma]);

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.idioma}
      className="relative flex rounded-full bg-paper p-1 ring-1 ring-line"
    >
      {pilula && (
        <motion.span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-0 rounded-full bg-ink"
          initial={false}
          animate={{ x: pilula.x, width: pilula.largura }}
          transition={{ type: "spring", stiffness: 520, damping: 40 }}
        />
      )}
      {IDIOMAS.map((op) => {
        const ativo = op.id === idioma;
        return (
          <button
            key={op.id}
            ref={(el) => (botoes.current[op.id] = el)}
            type="button"
            role="radio"
            aria-checked={ativo}
            aria-label={op.nome}
            lang={op.html}
            onClick={() => setIdioma(op.id)}
            className={`relative z-10 rounded-full px-2.5 py-1 text-[13px] font-semibold transition-colors duration-300 ${
              ativo ? "text-porcelain" : "text-slate hover:text-ink"
            }`}
          >
            {op.rotulo}
          </button>
        );
      })}
    </div>
  );
};

export default SeletorIdioma;
