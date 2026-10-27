import { ArrowUpRight, ChartLine, Cpu, Gamepad2, Lock } from "lucide-react";
import { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";

const ICONES_CAPA = { jogo: Gamepad2, sistema: Cpu, saas: ChartLine };

// Capa desenhada para projetos sem screenshot (jogos, sistemas).
const CapaDesenhada = ({ projeto }) => {
  const Icone = ICONES_CAPA[projeto.status] ?? Cpu;
  return (
    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden border-b border-line bg-porcelain">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 20%, var(--c-borda), transparent 60%)",
        }}
      />
      <Icone
        size={64}
        strokeWidth={1.1}
        aria-hidden="true"
        className="relative text-slate transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
      />
    </div>
  );
};

const CartaoDesenvolvimento = ({ projeto }) => {
  const { t, idioma } = useI18n();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper ring-1 ring-line transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(var(--c-sombra))]">
      {projeto.imagem ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={projeto.imagem}
            alt={projeto.nome}
            loading="lazy"
            decoding="async"
            width={1200}
            height={750}
            referrerPolicy="no-referrer"
            draggable="false"
            className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
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
