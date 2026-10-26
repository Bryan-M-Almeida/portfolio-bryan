import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../../i18n/contexto";

// Recuo que alinha o primeiro slide com o conteúdo da página (max-w 1180px + padding).
const RECUO = "max(1rem, calc((100vw - 1180px) / 2 + 2rem))";

// Distância entre o início de um slide e o do próximo.
const medirPasso = (el) => {
  const slide = el?.children[0];
  if (!slide) return 1;
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
  return slide.getBoundingClientRect().width + gap;
};

// Carrossel horizontal com snap: arrastar com o mouse, swipe, setas e teclado.
const Carrossel = ({ itens, renderItem, larguraSlide, rotulo }) => {
  const { t } = useI18n();
  const trilho = useRef(null);
  const arrasto = useRef(null);
  const [ativo, setAtivo] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [arrastando, setArrastando] = useState(false);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgresso(max > 0 ? el.scrollLeft / max : 0);
    const i =
      el.scrollLeft >= max - 4
        ? itens.length - 1
        : Math.round(el.scrollLeft / medirPasso(el));
    setAtivo(Math.min(Math.max(i, 0), itens.length - 1));
  }, [itens.length]);

  useEffect(() => {
    const el = trilho.current;
    el.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      el.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, [atualizar]);

  const animacao = useRef(null);

  // Anima a rolagem com curva própria; o snap fica desligado durante o movimento.
  const irPara = (i) => {
    const el = trilho.current;
    const alvo = Math.min(Math.max(i, 0), itens.length - 1);
    const destino = Math.min(
      alvo * medirPasso(el),
      el.scrollWidth - el.clientWidth,
    );
    animacao.current?.stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.scrollLeft = destino;
      return;
    }
    el.style.scrollSnapType = "none";
    animacao.current = animate(el.scrollLeft, destino, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.scrollLeft = v;
      },
      onComplete: () => {
        el.style.scrollSnapType = "";
      },
    });
  };

  // Arrastar com o mouse (toque e trackpad já rolam nativamente)
  const aoPressionar = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    animacao.current?.stop();
    trilho.current.style.scrollSnapType = "";
    arrasto.current = {
      x: e.clientX,
      inicio: trilho.current.scrollLeft,
      moveu: false,
    };
  };
  const aoMover = (e) => {
    const a = arrasto.current;
    if (!a) return;
    const dx = e.clientX - a.x;
    if (!a.moveu && Math.abs(dx) > 6) {
      a.moveu = true;
      setArrastando(true);
    }
    if (a.moveu) trilho.current.scrollLeft = a.inicio - dx;
  };
  const aoSoltar = () => {
    const a = arrasto.current;
    arrasto.current = null;
    if (!a?.moveu) return;
    setArrastando(false);
    const delta = trilho.current.scrollLeft - a.inicio;
    const base = Math.round(a.inicio / medirPasso(trilho.current));
    irPara(Math.abs(delta) > 60 ? base + Math.sign(delta) : base);
  };
  // Evita abrir links ao terminar um arrasto
  const aoClicar = (e) => {
    if (arrastando) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const aoTeclar = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      irPara(ativo + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      irPara(ativo - 1);
    }
  };

  const botao =
    "grid h-11 w-11 place-items-center rounded-full text-ink ring-1 ring-line transition-[background-color,opacity] duration-300 hover:bg-paper disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div
        ref={trilho}
        role="region"
        aria-roledescription="carousel"
        aria-label={rotulo}
        tabIndex={0}
        onKeyDown={aoTeclar}
        onPointerDown={aoPressionar}
        onPointerMove={aoMover}
        onPointerUp={aoSoltar}
        onPointerLeave={aoSoltar}
        onClickCapture={aoClicar}
        style={{ paddingInline: RECUO, scrollPaddingInline: RECUO }}
        className={`relative flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] sm:gap-7 [&::-webkit-scrollbar]:hidden ${
          arrastando
            ? "cursor-grabbing select-none"
            : "snap-x snap-mandatory md:cursor-grab"
        }`}
      >
        {itens.map((item, i) => (
          <div
            key={item.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${itens.length}`}
            className="shrink-0 snap-start"
            style={{ width: larguraSlide }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="container-page mt-8 flex items-center gap-5">
        <p className="w-16 shrink-0 font-display text-sm font-semibold tabular-nums">
          {String(ativo + 1).padStart(2, "0")}
          <span className="text-slate">
            {" "}
            / {String(itens.length).padStart(2, "0")}
          </span>
        </p>
        <div className="h-px flex-1 overflow-hidden bg-line">
          <motion.div
            className="h-full origin-left bg-ink"
            animate={{
              scaleX: Math.max(progresso, 1 / Math.max(itens.length, 1)),
            }}
            transition={{ type: "spring", stiffness: 140, damping: 28 }}
          />
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => irPara(ativo - 1)}
            disabled={progresso <= 0.001}
            aria-label={t.projetos.anterior}
            className={botao}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => irPara(ativo + 1)}
            disabled={progresso >= 0.999}
            aria-label={t.projetos.proximo}
            className={botao}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
