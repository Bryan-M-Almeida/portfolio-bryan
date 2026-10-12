import { useEffect, useState } from "react";

const CACHE_KEY = "gh-repos-cache";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutos

function lerCache() {
  try {
    const salvo = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (salvo && Date.now() - salvo.em < CACHE_TTL) return salvo.repos;
  } catch {
    // sessionStorage indisponível (aba anônima etc.)
  }
  return null;
}

// Uma única requisição compartilhada entre todos os componentes que usam o hook.
let pendente = null;

function buscarRepos(usuario) {
  pendente ??= fetch(
    `https://api.github.com/users/${usuario}/repos?per_page=100&sort=pushed`,
  )
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
      const lista = data
        .filter((r) => !r.fork && !r.archived)
        .map((r) => ({
          nome: r.name,
          descricao: r.description,
          linguagem: r.language,
          estrelas: r.stargazers_count,
          url: r.html_url,
          site: r.homepage,
          atualizado: r.pushed_at,
        }));
      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ em: Date.now(), repos: lista }),
        );
      } catch {
        // ignora falha de cache
      }
      return lista;
    })
    .catch((err) => {
      pendente = null;
      throw err;
    });
  return pendente;
}

// Busca os repositórios públicos do usuário na API do GitHub.
export default function useGithubRepos(usuario) {
  const [repos, setRepos] = useState(() => lerCache());
  const [status, setStatus] = useState(repos ? "ok" : "carregando");

  useEffect(() => {
    if (repos) return;
    let ativo = true;

    buscarRepos(usuario)
      .then((lista) => {
        if (!ativo) return;
        setRepos(lista);
        setStatus("ok");
      })
      .catch(() => ativo && setStatus("erro"));

    return () => {
      ativo = false;
    };
  }, [usuario, repos]);

  return { repos: repos ?? [], status };
}
