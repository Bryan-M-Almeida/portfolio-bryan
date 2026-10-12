import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import perfil, { reposOcultos } from "../../Data/perfil";
import projetos from "../../Data/projetos.json";
import useGithubRepos from "../../hooks/useGithubRepos";
import { corDaTecnologia } from "../TechIcon/icones";
import Reveal from "../Reveal";

const jaListados = new Set(
  [...projetos.map((p) => p.repo), ...reposOcultos].map((n) => n.toLowerCase()),
);

const formatarData = (iso) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    month: "short",
    year: "numeric",
  });

// Repositórios públicos que ainda não estão no portfólio: aparecem sozinhos.
const GithubRepos = () => {
  const { repos, status } = useGithubRepos(perfil.githubUser);
  const [todos, setTodos] = useState(false);

  const extras = repos.filter((r) => !jaListados.has(r.nome.toLowerCase()));
  const visiveis = todos ? extras : extras.slice(0, 6);

  if (status === "erro" || (status === "ok" && extras.length === 0))
    return null;

  return (
    <Reveal className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Direto do GitHub</h3>
          <p className="mt-2 text-zinc-400">
            Estudos e experimentos mais recentes, atualizados automaticamente.
          </p>
        </div>
        <a
          href={perfil.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-gold"
        >
          <FaGithub size={16} /> @{perfil.githubUser} <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {status === "carregando"
          ? Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="card h-[124px] animate-pulse" />
            ))
          : visiveis.map((r) => (
              <a
                key={r.nome}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="card card-hover group flex flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="truncate font-mono text-sm font-medium text-zinc-100 group-hover:text-gold">
                    {r.nome}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </div>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-zinc-500">
                  {r.descricao ||
                    (r.linguagem
                      ? `Projeto em ${r.linguagem}.`
                      : "Repositório público.")}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                  {r.linguagem && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: corDaTecnologia(r.linguagem) }}
                      />
                      {r.linguagem}
                    </span>
                  )}
                  {r.estrelas > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {r.estrelas}
                    </span>
                  )}
                  <span className="ml-auto">{formatarData(r.atualizado)}</span>
                </div>
              </a>
            ))}
      </div>

      {extras.length > 6 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setTodos(!todos)}
            className="btn btn-ghost"
          >
            {todos ? "Mostrar menos" : `Ver todos (${extras.length})`}
          </button>
        </div>
      )}
    </Reveal>
  );
};

export default GithubRepos;
