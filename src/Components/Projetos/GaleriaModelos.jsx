import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import modelos, { CATEGORIAS_MODELOS } from "../../Data/modelos";
import { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";

const INICIAIS = 8;

const CartaoModelo = ({ modelo }) => {
  const { t, idioma } = useI18n();
  const tm = t.projetos.modelos;
  const nome = modelo.nome[idioma];

  return (
    <motion.li
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-porcelain ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_20px_40px_-24px_rgb(var(--c-sombra))]"
    >
      <a
        href={modelo.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${tm.verDemo}: ${nome}`}
        className="block aspect-[16/10] overflow-hidden"
      >
        <img
          src={modelo.imagem}
          alt={`${tm.altImagem} ${nome}`}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] leading-tight font-semibold tracking-[-0.01em]">
            {nome}
          </h3>
          {modelo.emIngles && (
            <span
              title={tm.emInglesNota}
              className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide text-slate uppercase ring-1 ring-line"
            >
              {tm.emIngles}
            </span>
          )}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href={modelo.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-ink hover:text-cobalt"
          >
            {tm.verDemo}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href={mailto(tm.assunto(nome), tm.corpo(nome))}
            className="text-slate underline-offset-4 hover:text-ink hover:underline"
          >
            {tm.quero}
          </a>
        </div>
      </div>
    </motion.li>
  );
};

const GaleriaModelos = () => {
  const { t } = useI18n();
  const tm = t.projetos.modelos;
  const [categoria, setCategoria] = useState("todos");
  const [todos, setTodos] = useState(false);

  const filtrados =
    categoria === "todos"
      ? modelos
      : modelos.filter((m) => m.categoria === categoria);
  const visiveis = todos ? filtrados : filtrados.slice(0, INICIAIS);

  return (
    <div className="container-page">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold tracking-[-0.02em]">{tm.titulo}</h3>
        <p className="mt-3 text-slate">{tm.texto}</p>
      </div>

      <div
        role="group"
        aria-label={tm.titulo}
        className="mt-8 flex flex-wrap gap-2"
      >
        {CATEGORIAS_MODELOS.map((c) => {
          const ativa = c === categoria;
          const total =
            c === "todos"
              ? modelos.length
              : modelos.filter((m) => m.categoria === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={ativa}
              onClick={() => {
                setCategoria(c);
                setTodos(false);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors duration-300 ${
                ativa
                  ? "bg-ink text-porcelain ring-ink"
                  : "text-slate ring-line hover:text-ink hover:ring-slate"
              }`}
            >
              {tm.categorias[c]}
              <span className={`ml-1.5 ${ativa ? "opacity-60" : "opacity-50"}`}>
                {total}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul
        layout
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visiveis.map((modelo) => (
            <CartaoModelo key={modelo.id} modelo={modelo} />
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtrados.length > INICIAIS && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setTodos(!todos)}
            className="btn btn-secundario"
          >
            {todos ? tm.mostrarMenos : tm.verTodos(filtrados.length)}
          </button>
        </div>
      )}
    </div>
  );
};

export default GaleriaModelos;
