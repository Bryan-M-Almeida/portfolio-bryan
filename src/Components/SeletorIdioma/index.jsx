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
    // Remede quando o seletor fica visível ou muda de tamanho (ex.: celular → desktop)
    const observador = new ResizeObserver(medir);
    observador.observe(botoes.current[idioma]?.parentElement ?? document.body);
    return () => observador.disconnect();
  }, [idioma]);

  return (
    <nav
      aria-label={t.nav.idioma}
      className="relative flex rounded-full bg-paper p-1 ring-1 ring-line"
    >
      {pilula && (
        <motion.span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-0 rounded-full bg-ink"
          initial={{ x: pilula.x, width: pilula.largura }}
          animate={{ x: pilula.x, width: pilula.largura }}
          transition={{ type: "spring", stiffness: 520, damping: 40 }}
        />
      )}
      {IDIOMAS.map((op) => {
        const ativo = op.id === idioma;
        return (
          // Links reais para cada versão (bons para SEO); o clique troca sem recarregar
          <a
            key={op.id}
            ref={(el) => (botoes.current[op.id] = el)}
            href={op.caminho}
            hrefLang={op.html}
            aria-current={ativo ? "true" : undefined}
            aria-label={op.nome}
            lang={op.html}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey) return;
              e.preventDefault();
              setIdioma(op.id);
            }}
            className={`relative z-10 rounded-full px-2.5 py-1 text-[13px] font-semibold transition-colors duration-300 ${
              ativo ? "text-porcelain" : "text-slate hover:text-ink"
            }`}
          >
            {op.rotulo}
          </a>
        );
      })}
    </nav>
  );
};

export default SeletorIdioma;
