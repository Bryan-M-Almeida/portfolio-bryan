import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import projetos, { outrosClientes } from "../../Data/projetos";
import { useI18n } from "../../i18n/contexto";
import Navegador from "../Navegador";
import CartaoDesenvolvimento from "./CartaoDesenvolvimento";
import CasoPublicado from "./CasoPublicado";

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

const OutrosClientes = () => {
  const { t, idioma } = useI18n();

  return (
    <div className="mt-28">
      <h3 className="text-2xl font-bold tracking-[-0.02em]">
        {t.projetos.outrosTitulo}
      </h3>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {outrosClientes.map((c) => (
          <li key={c.id}>
            <a
              href={c.site}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Navegador url={c.site}>
                <img
                  src={c.imagemLonga}
                  alt={c.nome}
                  loading="lazy"
                  className="tela-longa aspect-[16/10] w-full"
                />
              </Navegador>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-cobalt">
                    {c.nome}
                  </p>
                  <p className="text-sm text-slate">{c.tipo[idioma]}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-slate transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cobalt"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projetos = () => {
  const { t } = useI18n();
  const [aba, setAba] = useState("publicados");
  const lista = projetos.filter((p) => p.aba === aba);

  return (
    <section id="projetos" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="titulo-secao">{t.projetos.titulo}</h2>
            <p className="mt-4 text-lg text-slate">{t.projetos.subtitulo}</p>
          </div>
          <Abas aba={aba} setAba={setAba} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={aba}
            id="painel-projetos"
            role="tabpanel"
            aria-labelledby={`aba-${aba}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16"
          >
            {aba === "publicados" ? (
              <>
                <div className="space-y-24 md:space-y-32">
                  {lista.map((p, i) => (
                    <CasoPublicado
                      key={p.id}
                      projeto={p}
                      invertido={i % 2 === 1}
                    />
                  ))}
                </div>
                <OutrosClientes />
              </>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {lista.map((p) => (
                  <CartaoDesenvolvimento key={p.id} projeto={p} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projetos;
