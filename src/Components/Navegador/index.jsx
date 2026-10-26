import { dominio } from "../../utils/dominio";

// Moldura de navegador em volta de uma screenshot.
const Navegador = ({ url, children, className = "" }) => (
  <div
    className={`overflow-hidden rounded-2xl bg-paper shadow-[0_24px_60px_-28px_rgb(var(--c-sombra))] ring-1 ring-line ${className}`}
  >
    <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="flex-1 truncate rounded-full bg-porcelain px-3 py-1 text-center text-xs text-slate">
        {dominio(url) || "localhost"}
      </div>
    </div>
    {children}
  </div>
);

export default Navegador;
