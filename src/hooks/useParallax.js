import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";

// Desloca um elemento verticalmente conforme ele atravessa a tela.
// distancia > 0 move para baixo ao rolar; < 0 move para cima.
export default function useParallax(distancia = 60) {
  const ref = useRef(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduzir ? [0, 0] : [-distancia, distancia],
  );
  return { ref, y, progresso: scrollYProgress };
}
