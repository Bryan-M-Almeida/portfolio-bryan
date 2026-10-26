import { motion } from "motion/react";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";
import Navegador from "../Navegador";

const Tela = ({ projeto }) => {
  const img = (
    <img
      src={projeto.imagemLonga ?? projeto.imagem}
      alt={projeto.nome}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={`aspect-[16/10] w-full ${
        projeto.imagemLonga ? "tela-longa" : "object-cover object-top"
      }`}
    />
  );

  return (
    <Navegador url={projeto.site}>
      {projeto.site ? (
        <a
          href={projeto.site}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block"
        >
          {img}
        </a>
      ) : (
        img
      )}
    </Navegador>
  );
};

const CasoPublicado = ({ projeto, invertido }) => {
  const { t, idioma } = useI18n();
  const pedir = mailto(
    t.projetos.assuntoPedido(projeto.nome),
    t.projetos.corpoPedido(projeto.nome),
  );

  return (
    <article className="group grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={invertido ? "lg:order-2" : ""}
      >
        <Tela projeto={projeto} />
      </motion.div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip !bg-cobalt-soft !text-cobalt-deep">
            {t.projetos.status[projeto.status]}
          </span>
          <span className="chip">{projeto.ano}</span>
          {projeto.local && <span className="chip">{projeto.local}</span>}
        </div>

        <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.05] font-bold tracking-[-0.03em]">
          {projeto.nome}
        </h3>
        <p className="mt-3 text-slate">{projeto.resumo[idioma]}</p>

        <h4 className="sr-only">{t.projetos.entregas}</h4>
        <ul className="mt-6 space-y-2.5">
          {projeto.entregas[idioma].map((item) => (
            <li key={item} className="flex gap-3 text-[15px]">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-cobalt"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-slate">{projeto.stack.join(", ")}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {projeto.site ? (
            <a
              href={projeto.site}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primario"
            >
              {t.projetos.visitar}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <a href={pedir} className="btn btn-primario">
              <Lock size={16} aria-hidden="true" />
              {t.projetos.pedirAcesso}
            </a>
          )}
          {/* Código de projetos de clientes nunca é exibido */}
          {projeto.codigo && projeto.status !== "cliente" && (
            <a
              href={projeto.codigo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secundario"
            >
              <FaGithub size={16} aria-hidden="true" />
              {t.projetos.codigo}
            </a>
          )}
        </div>
        {projeto.privado && !projeto.site && (
          <p className="mt-4 max-w-sm text-sm text-slate">
            {t.projetos.privadoNota}
          </p>
        )}
      </div>
    </article>
  );
};

export default CasoPublicado;
