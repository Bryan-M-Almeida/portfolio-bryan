import { ArrowUpRight, ChartLine, Cpu, Gamepad2, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";

const ICONES_CAPA = { jogo: Gamepad2, sistema: Cpu, saas: ChartLine };

// Capa desenhada para projetos sem screenshot (jogos, sistemas).
const CapaDesenhada = ({ projeto }) => {
  const Icone = ICONES_CAPA[projeto.status] ?? Cpu;
  return (
    <div
      className="relative grid aspect-[16/10] place-items-center overflow-hidden"
      style={{ background: projeto.capa.cor }}
    >
      <div
        className="absolute -top-1/3 -right-1/4 h-[140%] w-[80%] rounded-full opacity-30 blur-3xl transition-transform duration-700 group-hover:scale-110"
        style={{ background: projeto.capa.detalhe }}
      />
      <Icone
        size={72}
        strokeWidth={1.25}
        aria-hidden="true"
        className="relative transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
        style={{ color: projeto.capa.detalhe }}
      />
    </div>
  );
};

const CartaoDesenvolvimento = ({ projeto }) => {
  const { t, idioma } = useI18n();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper ring-1 ring-line transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgb(var(--c-sombra))]">
      {projeto.imagem ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={projeto.imagem}
            alt={projeto.nome}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <CapaDesenhada projeto={projeto} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{t.projetos.status[projeto.status]}</span>
          {projeto.privado && (
            <span className="chip gap-1">
              <Lock size={12} aria-hidden="true" />
              {t.projetos.privado}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em]">
          {projeto.nome}
        </h3>
        <p className="mt-2 text-[15px] text-slate">{projeto.resumo[idioma]}</p>
        <p className="mt-4 text-sm text-slate">{projeto.stack.join(", ")}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {projeto.site && (
            <a
              href={projeto.site}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secundario !px-4 !py-2 text-sm"
            >
              {t.projetos.visitar}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {projeto.codigo && (
            <a
              href={projeto.codigo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secundario !px-4 !py-2 text-sm"
            >
              <FaGithub size={15} aria-hidden="true" />
              {t.projetos.codigo}
            </a>
          )}
          {projeto.privado && !projeto.site && (
            <a
              href={mailto(
                t.projetos.assuntoPedido(projeto.nome),
                t.projetos.corpoPedido(projeto.nome),
              )}
              className="btn btn-primario !px-4 !py-2 text-sm"
            >
              {t.projetos.pedirAcesso}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CartaoDesenvolvimento;
