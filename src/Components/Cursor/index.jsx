import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ChevronsUpDown } from "lucide-react";

const INTERATIVOS =
  'a, button, [role="tab"], [role="radio"], select, label, summary';
const CAMPOS = 'input, textarea, [contenteditable="true"]';

// Só em telas com mouse e para quem não pediu menos movimento.
const deveAtivar = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tamanho do anel em cada estado.
const ANEL = { normal: 32, link: 50, zoom: 64, rotulo: 86, arrastando: 44 };

// Contorno duplo (branco por dentro, escuro por fora): visível sobre qualquer fundo,
// inclusive áreas com muito preto e branco juntos.
const CONTORNO =
  "0 0 0 1.5px rgba(255,255,255,0.95), 0 0 0 2.5px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,0,0,0.45)";

let idClique = 0;

/*
  Cursor próprio:
  - ponto de 10px exatamente na posição do mouse (é o ponto de clique), branco com borda escura;
  - anel que acompanha com mola rápida e muda de tamanho conforme o alvo;
  - onda a cada clique, confirmando onde ele aconteceu.
*/
const Cursor = () => {
  const [ativo] = useState(deveAtivar);
  const [estado, setEstado] = useState("normal");
  const [rotulo, setRotulo] = useState("");
  const [visivel, setVisivel] = useState(false);
  const [pressionado, setPressionado] = useState(false);
  const [cliques, setCliques] = useState([]);
  const estadoAtual = useRef("normal");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const anelX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.35 });
  const anelY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.35 });

  useEffect(() => {
    if (!ativo) return;
    const raiz = document.documentElement;
    raiz.classList.add("cursor-proprio");

    const definir = (novo, texto = "") => {
      if (novo === "rotulo") setRotulo(texto);
      if (estadoAtual.current === novo) return;
      estadoAtual.current = novo;
      setEstado(novo);
    };

    const mover = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisivel(true);
      if (raiz.classList.contains("arrastando-pagina"))
        return definir("arrastando");
      const alvo = e.target instanceof Element ? e.target : null;
      if (!alvo) return;
      const comRotulo = alvo.closest("[data-cursor]");
      if (alvo.closest(CAMPOS)) definir("campo");
      else if (alvo.closest(INTERATIVOS)) definir("link");
      else if (comRotulo)
        definir("rotulo", comRotulo.getAttribute("data-cursor"));
      else if (alvo.closest("[data-zoom]")) definir("zoom");
      else definir("normal");
    };
    const sair = () => setVisivel(false);
    const descer = (e) => {
      if (e.pointerType !== "mouse") return;
      setPressionado(true);
      const id = ++idClique;
      setCliques((c) => [...c, { id, x: e.clientX, y: e.clientY }]);
    };
    const subir = () => setPressionado(false);

    window.addEventListener("pointermove", mover, { passive: true });
    raiz.addEventListener("pointerleave", sair);
    window.addEventListener("pointerdown", descer);
    window.addEventListener("pointerup", subir);
    window.addEventListener("blur", sair);
    return () => {
      raiz.classList.remove("cursor-proprio");
      window.removeEventListener("pointermove", mover);
      raiz.removeEventListener("pointerleave", sair);
      window.removeEventListener("pointerdown", descer);
      window.removeEventListener("pointerup", subir);
      window.removeEventListener("blur", sair);
    };
  }, [ativo, x, y]);

  if (!ativo) return null;

  const emCampo = estado === "campo";
  const tamanho = ANEL[estado] ?? ANEL.normal;
  const comRotulo = estado === "rotulo";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[300]"
    >
      {/* Ondas de clique, no ponto exato onde ocorreram */}
      <AnimatePresence>
        {cliques.map((c) => (
          <motion.span
            key={c.id}
            className="absolute top-0 left-0 h-14 w-14 rounded-full"
            style={{
              x: c.x,
              y: c.y,
              translateX: "-50%",
              translateY: "-50%",
              boxShadow: CONTORNO,
            }}
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 1.25, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() =>
              setCliques((lista) => lista.filter((i) => i.id !== c.id))
            }
          />
        ))}
      </AnimatePresence>

      {/* Anel */}
      <motion.div
        className={`absolute top-0 left-0 grid place-items-center rounded-full ${
          comRotulo ? "bg-ink text-porcelain" : "text-white"
        }`}
        style={{
          x: anelX,
          y: anelY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: comRotulo ? "0 8px 24px -6px rgba(0,0,0,0.45)" : CONTORNO,
        }}
        animate={{
          width: tamanho,
          height: tamanho,
          opacity: !visivel || emCampo ? 0 : 1,
          scale: pressionado ? 0.82 : 1,
          backgroundColor:
            estado === "link"
              ? "rgba(255,255,255,0.12)"
              : comRotulo
                ? "var(--c-texto)"
                : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {comRotulo && (
            <motion.span
              key="rotulo"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="text-[12px] font-semibold tracking-wide"
            >
              {rotulo}
            </motion.span>
          )}
          {estado === "arrastando" && (
            <motion.span
              key="arrastando"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="drop-shadow-[0_0_2px_rgba(0,0,0,0.9)]"
            >
              <ChevronsUpDown size={18} strokeWidth={2.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ponto: sempre na posição real do mouse */}
      <motion.div
        className="absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-white"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 0 1.5px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.5)",
        }}
        animate={{
          opacity:
            !visivel || emCampo || comRotulo || estado === "arrastando" ? 0 : 1,
          scale: pressionado ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default Cursor;
