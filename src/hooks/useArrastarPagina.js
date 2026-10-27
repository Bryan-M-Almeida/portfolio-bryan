import { useEffect } from "react";
import { obterLenis } from "../utils/rolagem";

// Onde o arrasto não deve começar: controles, campos, o carrossel (que arrasta na horizontal)
// e o cursor de texto selecionável dos campos.
const IGNORAR =
  'a, button, input, textarea, select, label, [role="tab"], [role="radio"], [contenteditable="true"], [data-cursor], [role="dialog"]';
const LIMIAR = 6;

/*
  Clicar e arrastar em qualquer área livre rola a página inteira, com inércia ao soltar.
  Só começa quando o movimento é vertical, para não atrapalhar a seleção de texto na horizontal.
*/
export default function useArrastarPagina() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const raiz = document.documentElement;
    let inicio = null;
    let ativo = false;
    let ultimoY = 0;
    let ultimoT = 0;
    let velocidade = 0;

    const rolarPara = (alvo, imediato) => {
      const lenis = obterLenis();
      if (lenis) lenis.scrollTo(alvo, { immediate: imediato, lerp: 0.1 });
      else
        window.scrollTo({ top: alvo, behavior: imediato ? "auto" : "smooth" });
    };

    const descer = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      if (e.target instanceof Element && e.target.closest(IGNORAR)) return;
      inicio = { x: e.clientX, y: e.clientY, rolagem: window.scrollY };
      ultimoY = e.clientY;
      ultimoT = performance.now();
      velocidade = 0;
    };

    const mover = (e) => {
      if (!inicio) return;
      const dx = e.clientX - inicio.x;
      const dy = e.clientY - inicio.y;
      if (!ativo) {
        if (Math.abs(dy) < LIMIAR || Math.abs(dy) < Math.abs(dx)) {
          if (Math.abs(dx) > LIMIAR) inicio = null; // virou seleção de texto
          return;
        }
        ativo = true;
        raiz.classList.add("arrastando-pagina");
        window.getSelection()?.removeAllRanges();
      }
      const agora = performance.now();
      const dt = Math.max(agora - ultimoT, 1);
      velocidade = 0.8 * ((e.clientY - ultimoY) / dt) + 0.2 * velocidade;
      ultimoY = e.clientY;
      ultimoT = agora;
      rolarPara(inicio.rolagem - dy, true);
    };

    const soltar = () => {
      if (ativo) {
        // Inércia: continua na direção do arrasto, proporcional à velocidade final
        rolarPara(window.scrollY - velocidade * 320, false);
        raiz.classList.remove("arrastando-pagina");
        // Evita que o "click" do fim do arrasto acione algo
        const bloquear = (ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        };
        window.addEventListener("click", bloquear, {
          capture: true,
          once: true,
        });
        setTimeout(
          () => window.removeEventListener("click", bloquear, true),
          0,
        );
      }
      inicio = null;
      ativo = false;
    };

    window.addEventListener("pointerdown", descer);
    window.addEventListener("pointermove", mover, { passive: true });
    window.addEventListener("pointerup", soltar);
    window.addEventListener("blur", soltar);
    return () => {
      window.removeEventListener("pointerdown", descer);
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerup", soltar);
      window.removeEventListener("blur", soltar);
      raiz.classList.remove("arrastando-pagina");
    };
  }, []);
}
