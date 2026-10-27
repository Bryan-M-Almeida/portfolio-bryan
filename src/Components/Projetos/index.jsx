import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import projetos from "../../Data/projetos";
import { useI18n } from "../../i18n/contexto";
import Carrossel from "../Carrossel";
import CartaoDesenvolvimento from "./CartaoDesenvolvimento";
import CasoPublicado from "./CasoPublicado";
import Revelar from "../Revelar";
import LetrasZoom from "../LetrasZoom";

const ABAS = ["publicados", "desenvolvimento"];

const Abas = ({ aba, setAba }) => {
  const { t } = useI18n();

  return (
    <div
      role="tablist"
      aria-label={t.projetos.titulo}
      className="grid w-full grid-cols-2 rounded-full bg-paper p-1 ring-1 ring-line sm:inline-grid sm:w-auto"
    >
      {ABAS.map((id) => {
        const ativa = aba === id;
        return (
          <button
            key={id}
            id={`aba-${id}`}
            type="button"
            role="tab"
            aria-selected={ativa}
            aria-controls="painel-projetos"
            onClick={() => setAba(id)}
            className={`relative rounded-full px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors sm:px-5 sm:text-[15px] ${
              ativa ? "text-paper" : "text-slate hover:text-ink"
            }`}
          >
            {ativa && (
              <motion.span
                layoutId="aba-projetos"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 420, damping: 36 }}
              />
            )}
            <span className="relative">{t.projetos.abas[id]}</span>
          </button>
        );
      })}
    </div>
  );
};

const Projetos = () => {
  const { t } = useI18n();
  const [aba, setAba] = useState("publicados");
  const lista = projetos.filter((p) => p.aba === aba);

  return (
    <section id="projetos" className="overflow-hidden bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Revelar className="max-w-xl">
            <h2 className="titulo-secao">
              <LetrasZoom texto={t.projetos.titulo} />
            </h2>
            <p className="mt-4 text-lg text-slate">{t.projetos.subtitulo}</p>
          </Revelar>
          <Abas aba={aba} setAba={setAba} />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={aba}
          id="painel-projetos"
          role="tabpanel"
          aria-labelledby={`aba-${aba}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          {aba === "publicados" ? (
            <Carrossel
              itens={lista}
              rotulo={t.projetos.abas.publicados}
              larguraSlide="min(88vw, 1080px)"
              renderItem={(p) => <CasoPublicado projeto={p} />}
            />
          ) : (
            <Carrossel
              itens={lista}
              rotulo={t.projetos.abas.desenvolvimento}
              larguraSlide="min(82vw, 370px)"
              renderItem={(p) => <CartaoDesenvolvimento projeto={p} />}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projetos;
