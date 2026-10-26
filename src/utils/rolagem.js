// Guarda a instância do Lenis para que menus e modais possam pausar a rolagem suave.
let lenis = null;

export const registrarLenis = (instancia) => {
  lenis = instancia;
};

export const travarRolagem = (travar) => {
  document.body.style.overflow = travar ? "hidden" : "";
  if (travar) lenis?.stop();
  else lenis?.start();
};
