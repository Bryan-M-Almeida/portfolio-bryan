import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

const INTERATIVOS =
  'a, button, [role="tab"], [role="radio"], select, label, summary';
const CAMPOS = 'input, textarea, [contenteditable="true"]';

// Só em telas com mouse e para quem não pediu menos movimento.
const deveAtivar = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tamanho do anel em cada estado (o ponto central nunca some, exceto em campos de texto).
const ANEL = { normal: 30, link: 46, zoom: 64, rotulo: 84 };

let idClique = 0;

/*
  Cursor próprio:
  - ponto de 8px exatamente na posição do mouse (é o ponto de clique);
  - anel que acompanha com mola rápida e muda de tamanho conforme o alvo;
  - onda a cada clique, confirmando onde ele aconteceu;
  - mix-blend-difference garante contraste em fundo claro ou escuro.
*/
const Cursor = () => {
  const [ativo] = useState(deveAtivar);
  const [estado, setEstado] = useState("normal");
  const [rotulo, setRotulo] = useState("");
  const [visivel, setVisivel] = useState(false);
  const [pressionado, setPressionado] = useState(false);
  const [cliques, setCliques] = useState([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const anelX = useSpring(x, { stiffness: 900, damping: 50, mass: 0.35 });
  const anelY = useSpring(y, { stiffness: 900, damping: 50, mass: 0.35 });

  useEffect(() => {
    if (!ativo) return;
    const raiz = document.documentElement;
    raiz.classList.add("cursor-proprio");

    const mover = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisivel(true);
      const alvo = e.target instanceof Element ? e.target : null;
      if (!alvo) return;
      const comRotulo = alvo.closest("[data-cursor]");
      if (alvo.closest(CAMPOS)) setEstado("campo");
      else if (alvo.closest(INTERATIVOS)) setEstado("link");
      else if (comRotulo) {
        setEstado("rotulo");
        setRotulo(comRotulo.getAttribute("data-cursor"));
      } else if (alvo.closest("[data-zoom]")) setEstado("zoom");
      else setEstado("normal");
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

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[300] mix-blend-difference"
    >
      {/* Ondas de clique, no ponto exato onde ocorreram */}
      <AnimatePresence>
        {cliques.map((c) => (
          <motion.span
            key={c.id}
            className="absolute top-0 left-0 h-14 w-14 rounded-full border-2 border-white"
            style={{
              x: c.x,
              y: c.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() =>
              setCliques((lista) => lista.filter((i) => i.id !== c.id))
            }
          />
        ))}
      </AnimatePresence>

      {/* Anel */}
      <motion.div
        className="absolute top-0 left-0 grid place-items-center rounded-full border-[1.5px] border-white"
        style={{ x: anelX, y: anelY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: tamanho,
          height: tamanho,
          opacity: !visivel || emCampo ? 0 : 1,
          scale: pressionado ? 0.8 : 1,
          backgroundColor:
            estado === "rotulo" ? "rgb(255,255,255)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        <AnimatePresence>
          {estado === "rotulo" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="text-[12px] font-semibold tracking-wide text-black"
            >
              {rotulo}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ponto: sempre na posição real do mouse */}
      <motion.div
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: !visivel || emCampo || estado === "rotulo" ? 0 : 1,
          scale: pressionado ? 0.6 : estado === "link" ? 1.25 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default Cursor;
