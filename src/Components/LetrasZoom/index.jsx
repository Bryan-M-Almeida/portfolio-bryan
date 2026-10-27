import { useEffect, useRef } from "react";

const RAIO = 120; // distância (px) em que a letra começa a crescer
const ESCALA_MAX = 0.28; // +28% na letra mais próxima
const ELEVACAO = 5; // px que a letra sobe no pico

const ativar = () =>
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*
  Lupa tipográfica: cada letra cresce conforme a proximidade do cursor e as
  vizinhas se afastam (como a dock do macOS), sem sobreposição.
  O texto real fica para leitores de tela; as letras separadas são decorativas.
*/
const LetrasZoom = ({ texto, className = "" }) => {
  const raiz = useRef(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || !ativar()) return;
    const letras = [...el.querySelectorAll("[data-letra]")];
    let base = null; // posições sem transformação, em coordenadas da página
    let quadro = 0;
    let px = null;
    let py = null;

    // Posições de layout (offset* ignora transform), em coordenadas da página
    const medir = () => {
      const caixa = el.getBoundingClientRect();
      const x0 = caixa.left + scrollX - el.offsetLeft;
      const y0 = caixa.top + scrollY - el.offsetTop;
      base = letras.map((l) => ({
        cx: x0 + l.offsetLeft + l.offsetWidth / 2,
        cy: y0 + l.offsetTop + l.offsetHeight / 2,
        w: l.offsetWidth,
        linha: l.offsetTop,
      }));
    };

    const pintar = () => {
      quadro = 0;
      if (px === null) {
        letras.forEach((l) => (l.style.transform = ""));
        base = null;
        return;
      }
      if (!base) medir();

      const escalas = base.map((b) => {
        const f = Math.max(0, 1 - Math.hypot(px - b.cx, py - b.cy) / RAIO);
        return f * f * (3 - 2 * f); // smoothstep
      });

      // Deslocamento horizontal por linha: abre espaço a partir do cursor
      const desloc = new Array(letras.length).fill(0);
      const linhas = new Map();
      base.forEach((b, i) => {
        if (!linhas.has(b.linha)) linhas.set(b.linha, []);
        linhas.get(b.linha).push(i);
      });
      for (const idx of linhas.values()) {
        const extra = idx.map((i) => base[i].w * ESCALA_MAX * escalas[i]);
        const aEsquerda = idx.reduce(
          (soma, i, k) => (base[i].cx < px ? soma + extra[k] : soma),
          0,
        );
        let acumulado = 0;
        idx.forEach((i, k) => {
          desloc[i] = acumulado + extra[k] / 2 - aEsquerda;
          acumulado += extra[k];
        });
      }

      letras.forEach((l, i) => {
        const s = escalas[i];
        l.style.transform =
          s > 0.001 || Math.abs(desloc[i]) > 0.1
            ? `translate(${desloc[i]}px, ${-ELEVACAO * s}px) scale(${1 + ESCALA_MAX * s})`
            : "";
      });
    };

    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(pintar);
    };

    const mover = (e) => {
      const caixa = el.getBoundingClientRect();
      const perto =
        e.clientX > caixa.left - RAIO &&
        e.clientX < caixa.right + RAIO &&
        e.clientY > caixa.top - RAIO &&
        e.clientY < caixa.bottom + RAIO;
      if (!perto && px === null) return;
      px = perto ? e.clientX + scrollX : null;
      py = perto ? e.clientY + scrollY : null;
      agendar();
    };

    const invalidar = () => {
      base = null;
    };

    window.addEventListener("pointermove", mover, { passive: true });
    window.addEventListener("resize", invalidar);
    window.addEventListener("scroll", invalidar, { passive: true });
    return () => {
      window.removeEventListener("scroll", invalidar);
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("resize", invalidar);
      cancelAnimationFrame(quadro);
    };
  }, [texto]);

  const palavras = texto.split(" ");

  return (
    <span ref={raiz} data-zoom className={className}>
      <span className="sr-only">{texto}</span>
      <span aria-hidden="true">
        {palavras.map((palavra, i) => (
          <span key={i}>
            <span className="inline-block whitespace-nowrap">
              {[...palavra].map((letra, j) => (
                <span
                  key={j}
                  data-letra
                  className="inline-block origin-bottom transition-transform duration-200 ease-out will-change-transform"
                >
                  {letra}
                </span>
              ))}
            </span>
            {i < palavras.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
};

export default LetrasZoom;
