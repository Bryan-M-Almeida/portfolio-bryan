import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import sitesNoAr from "../../Data/vitrine";
import { useI18n } from "../../i18n/contexto";
import { dominio } from "../../utils/dominio";
import Navegador from "../Navegador";

const INTERVALO = 4500;
const total = sitesNoAr.length;

// Pilha com sites de clientes e modelos publicados: o da frente troca sozinho e abre o site real.
const PilhaSites = () => {
  const { t, idioma } = useI18n();
  const nomeDe = (s) => (typeof s.nome === "string" ? s.nome : s.nome[idioma]);
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
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 1.1,
              }}
              aria-hidden={!frente}
            >
              <Navegador url={s.site}>
                <a
                  href={s.site}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={frente ? 0 : -1}
                  aria-label={`${t.hero.abrirSite}: ${nomeDe(s)}`}
                  className="block"
                >
                  {/* Só carrega as imagens visíveis na pilha (e a que acabou de sair) */}
                  {pos <= 3 || pos === total - 1 ? (
                    <img
                      src={s.imagem}
                      alt=""
                      className="aspect-[16/10] h-auto w-full object-cover object-top"
                      fetchPriority={i === 0 ? "high" : "auto"}
                      decoding="async"
                      width={1200}
                      height={750}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="aspect-[16/10] w-full" />
                  )}
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
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="flex items-center gap-2">
                <span className="truncate font-display text-lg font-semibold tracking-[-0.02em]">
                  {nomeDe(site)}
                </span>
                <span className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide text-slate uppercase ring-1 ring-line">
                  {t.hero[site.tipo]}
                </span>
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

      {/* Contador e barra única: com muitos sites, uma barra por item ficaria minúscula */}
      <div className="mt-5 flex items-center gap-4" aria-hidden="true">
        <span className="font-display text-[13px] font-semibold text-slate tabular-nums">
          {String(ativo + 1).padStart(2, "0")}
          <span className="opacity-50">
            {" "}
            / {String(total).padStart(2, "0")}
          </span>
        </span>
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-line">
          <motion.span
            className="absolute inset-y-0 left-0 rounded-full bg-slate/60"
            initial={false}
            animate={{ width: `${(ativo / total) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            key={`ativo-${ativo}-${rodando}`}
            className="absolute inset-y-0 origin-left rounded-full bg-ink"
            style={{
              left: `${(ativo / total) * 100}%`,
              width: `${100 / total}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: rodando ? 1 : 0.3 }}
            transition={
              rodando
                ? { duration: INTERVALO / 1000, ease: "linear" }
                : { duration: 0.3 }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PilhaSites;
