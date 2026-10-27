import { useState } from "react";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";
import Navegador from "../Navegador";

// Mostra o topo do site; ao passar o cursor carrega a página inteira e a percorre.
const Tela = ({ projeto, percorrer }) => {
  const longa = percorrer && projeto.imagemLonga;
  return (
    <Navegador url={projeto.site}>
      <img
        src={longa ? projeto.imagemLonga : projeto.imagem}
        alt={projeto.nome}
        loading="lazy"
        decoding="async"
        width={1200}
        height={750}
        draggable="false"
        referrerPolicy="no-referrer"
        className={`aspect-[16/10] h-auto w-full ${
          projeto.imagemLonga ? "tela-longa" : "object-cover object-top"
        }`}
      />
    </Navegador>
  );
};

const CasoPublicado = ({ projeto }) => {
  const { t, idioma } = useI18n();
  const [percorrer, setPercorrer] = useState(false);
  const pedir = mailto(
    t.projetos.assuntoPedido(projeto.nome),
    t.projetos.corpoPedido(projeto.nome),
  );

  return (
    <article
      onPointerEnter={() => setPercorrer(true)}
      onFocus={() => setPercorrer(true)}
      className="group grid h-full items-center gap-7 rounded-[1.75rem] bg-paper p-4 ring-1 ring-line sm:p-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:p-8"
    >
      <Tela projeto={projeto} percorrer={percorrer} />

      <div className="px-1 pb-2 lg:px-0 lg:pb-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip !bg-cobalt-soft !text-cobalt-deep">
            {t.projetos.status[projeto.status]}
          </span>
          <span className="chip">{projeto.ano}</span>
          {projeto.local && <span className="chip">{projeto.local}</span>}
        </div>

        <h3 className="mt-4 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
          {projeto.nome}
        </h3>
        <p className="mt-3 text-[15px] text-slate">{projeto.resumo[idioma]}</p>

        <h4 className="sr-only">{t.projetos.entregas}</h4>
        <ul className="mt-5 space-y-2">
          {projeto.entregas[idioma].map((item) => (
            <li key={item} className="flex gap-3 text-[15px]">
              <Check
                size={17}
                className="mt-1 shrink-0 text-cobalt"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-slate">{projeto.stack.join(", ")}</p>

        <div className="mt-6">
          {projeto.site ? (
            <a
              href={projeto.site}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primario group/btn"
            >
              {t.projetos.visitar}
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          ) : (
            <>
              <a href={pedir} className="btn btn-primario">
                <Lock size={16} aria-hidden="true" />
                {t.projetos.pedirAcesso}
              </a>
              <p className="mt-3 max-w-sm text-sm text-slate">
                {t.projetos.privadoNota}
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default CasoPublicado;
