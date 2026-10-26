import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { sitesNoAr } from "../../Data/projetos";
import { useI18n } from "../../i18n/contexto";
import { dominio } from "../../utils/dominio";
import Navegador from "../Navegador";

const INTERVALO = 4500;
const total = sitesNoAr.length;

// Pilha com os sites de clientes em produção: o da frente troca sozinho e abre o site real.
const PilhaSites = () => {
  const { t } = useI18n();
  const reduzir = useReducedMotion();
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [hover, setHover] = useState(false);

  const rodando = !pausado && !hover && !reduzir;
  const site = sitesNoAr[ativo];
  const ir = (passo) => setAtivo((a) => (a + passo + total) % total);

  useEffect(() => {
    if (!rodando) return;
    const id = setTimeout(() => setAtivo((a) => (a + 1) % total), INTERVALO);
    return () => clearTimeout(id);
  }, [rodando, ativo]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="relative aspect-[16/11.4]">
        {sitesNoAr.map((s, i) => {
          const pos = (i - ativo + total) % total;
          const frente = pos === 0;
          return (
            <motion.div
              key={s.id}
              className="absolute inset-x-0 top-0 origin-top"
              style={{ zIndex: total - pos }}
              initial={false}
              animate={{
                y: pos * -20,
                scale: 1 - pos * 0.05,
                opacity: pos > 2 ? 0 : 1 - pos * 0.22,
              }}
              transition={{ type: "spring", stiffness: 170, damping: 24 }}
              aria-hidden={!frente}
            >
              <Navegador url={s.site}>
                <a
                  href={s.site}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={frente ? 0 : -1}
                  aria-label={`${t.hero.abrirSite}: ${s.nome}`}
                  className="block"
                >
                  <img
                    src={s.imagem}
                    alt=""
                    className="aspect-[16/10] w-full object-cover object-top"
                    loading={i < 2 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                  />
                </a>
              </Navegador>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="min-w-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="truncate font-display text-lg font-semibold tracking-[-0.02em]">
                {site.nome}
              </p>
              <a
                href={site.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate transition-colors hover:text-cobalt"
              >
                {dominio(site.site)}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => ir(-1)}
            aria-label={t.hero.anterior}
            className="grid h-10 w-10 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-paper"
          >
            <ChevronLeft size={18} />
          </button>
          {!reduzir && (
            <button
              type="button"
              onClick={() => setPausado(!pausado)}
              aria-label={pausado ? t.hero.continuar : t.hero.pausar}
              className="grid h-10 w-10 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-paper"
            >
              {pausado ? <Play size={15} /> : <Pause size={15} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => ir(1)}
            aria-label={t.hero.proximo}
            className="grid h-10 w-10 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-paper"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Uma barra por site; a do site ativo enche durante o intervalo */}
      <div className="mt-5 flex gap-1.5" aria-hidden="true">
        {sitesNoAr.map((s, i) => (
          <button
            key={s.id}
            type="button"
            tabIndex={-1}
            onClick={() => setAtivo(i)}
            className="h-1 flex-1 overflow-hidden rounded-full bg-line"
          >
            <motion.span
              key={i === ativo ? `ativo-${ativo}-${rodando}` : s.id}
              className="block h-full origin-left rounded-full bg-cobalt"
              initial={{ scaleX: i < ativo ? 1 : 0 }}
              animate={{
                scaleX: i < ativo ? 1 : i === ativo ? (rodando ? 1 : 0.15) : 0,
              }}
              transition={
                i === ativo && rodando
                  ? { duration: INTERVALO / 1000, ease: "linear" }
                  : { duration: 0.3 }
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PilhaSites;
