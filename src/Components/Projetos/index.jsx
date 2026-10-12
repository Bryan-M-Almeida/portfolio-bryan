import { useCallback, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projetos from "../../Data/projetos.json";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import TechIcon from "../TechIcon";
import Capa from "./Capa";
import GithubRepos from "./GithubRepos";
import ProjetoModal from "./ProjetoModal";

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "fullstack", label: "Full Stack" },
  { id: "sistemas", label: "Sistemas" },
  { id: "freelance", label: "Freelance" },
  { id: "academico", label: "Acadêmico" },
];

const destaques = projetos.filter((p) => p.destaque);
const outros = projetos.filter((p) => !p.destaque);

const contar = (id) =>
  id === "todos"
    ? outros.length
    : outros.filter((p) => p.categorias.includes(id)).length;

const Links = ({ projeto }) => (
  <div className="flex items-center gap-1">
    {projeto.site_link && (
      <a
        href={projeto.site_link}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`Abrir ${projeto.title}`}
        className="grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-gold"
      >
        <ExternalLink size={17} />
      </a>
    )}
    <a
      href={projeto.repositorio_link}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Código de ${projeto.title}`}
      className="grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-gold"
    >
      <FaGithub size={17} />
    </a>
  </div>
);

const Tecnologias = ({ lista, max = 4 }) => (
  <div className="flex flex-wrap gap-1.5">
    {lista.slice(0, max).map((t) => (
      <span key={t} className="chip">
        <TechIcon nome={t} size={12} /> {t}
      </span>
    ))}
    {lista.length > max && <span className="chip">+{lista.length - max}</span>}
  </div>
);

const CardDestaque = ({ projeto, onAbrir, grande }) => (
  <article
    onClick={onAbrir}
    className={`card card-hover group flex h-full cursor-pointer flex-col overflow-hidden ${
      grande ? "lg:grid lg:grid-cols-[1.3fr_1fr]" : ""
    }`}
  >
    <div
      className={`relative overflow-hidden border-b border-line ${
        grande
          ? "aspect-video lg:aspect-auto lg:h-full lg:border-r lg:border-b-0"
          : "aspect-video"
      }`}
    >
      <Capa projeto={projeto} />
    </div>

    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-gold">{projeto.tipo}</span>
        <Links projeto={projeto} />
      </div>
      <h3 className="mt-2 text-2xl font-semibold">{projeto.title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-400">{projeto.descricao}</p>

      {grande && (
        <p className="mt-4 border-l-2 border-gold/40 pl-4 text-sm leading-relaxed text-zinc-400">
          {projeto.solucao}
        </p>
      )}

      <div className="mt-auto pt-6">
        <Tecnologias lista={projeto.tecnologias} max={grande ? 5 : 4} />
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors group-hover:text-gold"
        >
          Ver detalhes
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>
  </article>
);

const CardProjeto = ({ projeto, onAbrir }) => (
  <article
    onClick={onAbrir}
    className="card card-hover group flex h-full cursor-pointer flex-col overflow-hidden"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
      <Capa projeto={projeto} />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-gold">{projeto.tipo}</span>
        <Links projeto={projeto} />
      </div>
      <h3 className="mt-1 text-lg font-semibold">{projeto.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
        {projeto.descricao}
      </p>
      <div className="mt-auto pt-5">
        <Tecnologias lista={projeto.tecnologias} max={3} />
      </div>
    </div>
  </article>
);

const Projetos = () => {
  const [filtro, setFiltro] = useState("todos");
  const [aberto, setAberto] = useState(null);
  const fechar = useCallback(() => setAberto(null), []);

  const lista =
    filtro === "todos"
      ? outros
      : outros.filter((p) => p.categorias.includes(filtro));

  return (
    <section id="projetos" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Portfólio"
          title="Projetos em destaque"
          subtitle="Uma seleção de trabalhos para clientes, produtos próprios e projetos de engenharia que mostram como penso e construo."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destaques.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 100}
              className={i === 0 ? "md:col-span-2 lg:col-span-3" : ""}
            >
              <CardDestaque
                projeto={p}
                grande={i === 0}
                onAbrir={() => setAberto(p)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Mais projetos</h3>
            <p className="mt-2 text-zinc-400">
              Filtre por área para encontrar o que procura.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrar projetos"
          >
            {FILTROS.filter((f) => contar(f.id) > 0).map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filtro === f.id}
                onClick={() => setFiltro(f.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filtro === f.id
                    ? "border-gold bg-gold text-ink"
                    : "border-line text-zinc-400 hover:border-white/20 hover:text-zinc-100"
                }`}
              >
                {f.label}
                <span
                  className={`ml-2 font-mono text-xs ${filtro === f.id ? "text-ink/60" : "text-zinc-600"}`}
                >
                  {contar(f.id)}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <CardProjeto key={p.id} projeto={p} onAbrir={() => setAberto(p)} />
          ))}
        </div>

        <GithubRepos />
      </div>

      <ProjetoModal projeto={aberto} onClose={fechar} />
    </section>
  );
};

export default Projetos;
