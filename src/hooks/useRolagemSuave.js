import { useEffect } from "react";
import Lenis from "lenis";
import { registrarLenis } from "../utils/rolagem";

// Rolagem com inércia suave (desligada para quem prefere menos movimento).
export default function useRolagemSuave() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      anchors: { offset: -80 },
      autoRaf: true,
    });
    registrarLenis(lenis);

    return () => {
      lenis.destroy();
      registrarLenis(null);
    };
  }, []);
}
