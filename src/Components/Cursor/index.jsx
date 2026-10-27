import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERATIVOS =
  'a, button, [role="tab"], [role="radio"], select, label, summary';
const CAMPOS = 'input, textarea, [contenteditable="true"]';

// Só em telas com mouse e para quem não pediu menos movimento.
const deveAtivar = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Cursor próprio: ponto preciso + anel que segue com mola.
// mix-blend-difference mantém o contraste em fundo claro ou escuro.
const Cursor = () => {
  const [ativo] = useState(deveAtivar);
  const [estado, setEstado] = useState("normal"); // normal | link | rotulo | campo
  const [rotulo, setRotulo] = useState("");
  const [visivel, setVisivel] = useState(false);
  const [pressionado, setPressionado] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const anelX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const anelY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (!ativo) return;
    document.documentElement.classList.add("cursor-proprio");

    const mover = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisivel(true);
      const alvo = e.target instanceof Element ? e.target : null;
      const comRotulo = alvo?.closest("[data-cursor]");
      if (alvo?.closest(CAMPOS)) {
        setEstado("campo");
      } else if (comRotulo && !alvo.closest(INTERATIVOS)) {
        setEstado("rotulo");
        setRotulo(comRotulo.getAttribute("data-cursor"));
      } else if (alvo?.closest(INTERATIVOS)) {
        setEstado("link");
      } else {
        setEstado("normal");
      }
    };
    const sair = () => setVisivel(false);
    const descer = () => setPressionado(true);
    const subir = () => setPressionado(false);

    window.addEventListener("pointermove", mover, { passive: true });
    document.documentElement.addEventListener("pointerleave", sair);
    window.addEventListener("pointerdown", descer);
    window.addEventListener("pointerup", subir);
    return () => {
      document.documentElement.classList.remove("cursor-proprio");
      window.removeEventListener("pointermove", mover);
      document.documentElement.removeEventListener("pointerleave", sair);
      window.removeEventListener("pointerdown", descer);
      window.removeEventListener("pointerup", subir);
    };
  }, [ativo, x, y]);

  if (!ativo) return null;

  const tamanhoAnel = { normal: 34, link: 56, rotulo: 88, campo: 0 }[estado];
  const escondido = !visivel || estado === "campo";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[300] mix-blend-difference"
    >
      <motion.div
        className="absolute top-0 left-0 grid place-items-center rounded-full border border-white text-[11px] font-semibold tracking-wide text-white"
        style={{ x: anelX, y: anelY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: tamanhoAnel,
          height: tamanhoAnel,
          opacity: escondido ? 0 : 1,
          scale: pressionado ? 0.85 : 1,
          backgroundColor:
            estado === "rotulo" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {estado === "rotulo" && (
          <span className="text-black mix-blend-normal">{rotulo}</span>
        )}
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: escondido || estado === "rotulo" ? 0 : 1,
          scale: estado === "link" ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default Cursor;
