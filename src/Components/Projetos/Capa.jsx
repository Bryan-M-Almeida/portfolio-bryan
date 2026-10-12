import TechIcon from "../TechIcon";
import { corDaTecnologia } from "../TechIcon/icones";

// Imagem do projeto ou, quando não houver, uma capa gerada a partir das tecnologias.
const Capa = ({ projeto, className = "" }) => {
  if (projeto.imagem) {
    return (
      <img
        src={projeto.imagem}
        alt={`Prévia do projeto ${projeto.title}`}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] ${className}`}
      />
    );
  }

  const cor = corDaTecnologia(projeto.tecnologias[0]);

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0c0c0e] p-6 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 85% 15%, ${cor}33, transparent 55%), radial-gradient(circle at 10% 100%, #d4af3722, transparent 50%)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative flex items-center gap-2 font-mono text-xs text-zinc-500">
        <span className="text-gold">$</span> ./{projeto.repo}
        <span className="h-3.5 w-1.5 animate-pulse bg-zinc-400" />
      </div>
      <p className="relative font-mono text-3xl font-medium tracking-tight text-zinc-100 transition-transform duration-700 group-hover:translate-x-1 sm:text-4xl">
        {projeto.title}
      </p>
      <div className="relative flex gap-3">
        {projeto.tecnologias.slice(0, 4).map((t) => (
          <span
            key={t}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.04]"
            title={t}
          >
            <TechIcon nome={t} size={18} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Capa;
