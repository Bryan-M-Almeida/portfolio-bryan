import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechIcon from "../TechIcon";
import Capa from "./Capa";

const ProjetoModal = ({ projeto, onClose }) => {
  useEffect(() => {
    if (!projeto) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [projeto, onClose]);

  if (!projeto) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="projeto-modal-titulo"
    >
      <div
        className="card relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-b-none !bg-surface sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/80 text-zinc-300 backdrop-blur hover:text-white"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="group aspect-video overflow-hidden border-b border-line">
          <Capa projeto={projeto} />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gold">
            <span>{projeto.tipo}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-500">{projeto.ano}</span>
          </div>
          <h3 id="projeto-modal-titulo" className="mt-2 text-3xl font-semibold">
            {projeto.title}
          </h3>
          <p className="mt-3 text-lg text-zinc-400">{projeto.descricao}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                O problema
              </h4>
              <p className="mt-2 leading-relaxed text-zinc-300">
                {projeto.problema}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                A solução
              </h4>
              <p className="mt-2 leading-relaxed text-zinc-300">
                {projeto.solucao}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {projeto.tecnologias.map((t) => (
              <span key={t} className="chip">
                <TechIcon nome={t} size={13} /> {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {projeto.site_link && (
              <a
                href={projeto.site_link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Ver online <ExternalLink size={16} />
              </a>
            )}
            <a
              href={projeto.repositorio_link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub size={16} /> Código fonte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoModal;
