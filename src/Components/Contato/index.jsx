import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, Copy, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import perfil, { mailto } from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";
import Revelar from "../Revelar";

const REDES = [
  { href: perfil.links.linkedin, icone: FaLinkedinIn, label: "LinkedIn" },
  { href: perfil.links.github, icone: FaGithub, label: "GitHub" },
  { href: perfil.links.instagram, icone: FaInstagram, label: "Instagram" },
];

const Contato = () => {
  const { t } = useI18n();
  const c = t.contato;
  const [modo, setModo] = useState("orcamento");
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      window.location.href = `mailto:${perfil.email}`;
    }
  };

  // Sem backend: monta o e-mail e abre o aplicativo de e-mail do visitante.
  const enviar = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const orcamento = modo === "orcamento";
    const assunto = orcamento
      ? c.assuntoOrcamento(d.tipo, d.nome)
      : c.assuntoMensagem(d.nome);
    const corpo = [
      `${c.rotulos.nome}: ${d.nome}`,
      `${c.rotulos.email}: ${d.email}`,
      orcamento && `${c.rotulos.tipo}: ${d.tipo}`,
      "",
      d.mensagem,
    ]
      .filter((l) => l !== false)
      .join("\n");
    window.location.href = mailto(assunto, corpo);
  };

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 [&>*]:min-w-0">
        <Revelar>
          <h2 className="titulo-secao">{c.titulo}</h2>
          <p className="mt-5 max-w-md text-lg text-slate">{c.subtitulo}</p>

          <div className="mt-10 flex max-w-md items-center gap-2 rounded-2xl bg-paper p-2 pl-5 ring-1 ring-line">
            <a
              href={`mailto:${perfil.email}`}
              className="min-w-0 flex-1 truncate font-medium hover:text-cobalt"
            >
              {perfil.email}
            </a>
            <button
              type="button"
              onClick={copiar}
              aria-label={copiado ? c.copiado : c.copiar}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate hover:bg-porcelain hover:text-ink"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copiado ? "ok" : "copiar"}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copiado ? (
                    <Check size={17} className="text-cobalt" />
                  ) : (
                    <Copy size={17} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
          <p aria-live="polite" className="sr-only">
            {copiado ? c.copiado : ""}
          </p>

          <div className="mt-6 flex gap-2">
            {REDES.map(({ href, icone: Icone, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full bg-paper text-ink ring-1 ring-line transition-colors hover:bg-ink hover:text-paper"
              >
                <Icone size={18} />
              </a>
            ))}
          </div>
        </Revelar>

        <Revelar
          atraso={0.12}
          className="rounded-3xl bg-paper p-6 ring-1 ring-line sm:p-8"
        >
          <div
            role="tablist"
            className="grid grid-cols-2 rounded-full bg-porcelain p-1"
          >
            {["orcamento", "mensagem"].map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={modo === id}
                onClick={() => setModo(id)}
                className={`relative rounded-full py-2.5 text-[15px] font-semibold transition-colors ${
                  modo === id ? "text-ink" : "text-slate hover:text-ink"
                }`}
              >
                {modo === id && (
                  <motion.span
                    layoutId="aba-contato"
                    className="absolute inset-0 rounded-full bg-paper shadow-sm ring-1 ring-line"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="relative">{c.abas[id]}</span>
              </button>
            ))}
          </div>

          <form onSubmit={enviar} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="rotulo">
                  {c.nome}
                </label>
                <input
                  required
                  id="nome"
                  name="nome"
                  autoComplete="name"
                  placeholder={c.placeholderNome}
                  className="campo"
                />
              </div>
              <div>
                <label htmlFor="email" className="rotulo">
                  {c.email}
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder={c.placeholderEmail}
                  className="campo"
                />
              </div>
            </div>

            <AnimatePresence initial={false}>
              {modo === "orcamento" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <label htmlFor="tipo" className="rotulo">
                    {c.tipo}
                  </label>
                  <div className="relative">
                    <select
                      required
                      id="tipo"
                      name="tipo"
                      defaultValue=""
                      className="campo appearance-none pr-11"
                    >
                      <option value="" disabled>
                        {c.selecione}
                      </option>
                      {c.tipos.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="mensagem" className="rotulo">
                {modo === "orcamento" ? c.mensagemOrcamento : c.mensagem}
              </label>
              <textarea
                required
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder={
                  modo === "orcamento"
                    ? c.placeholderOrcamento
                    : c.placeholderMensagem
                }
                className="campo resize-none"
              />
            </div>

            <button type="submit" className="btn btn-primario w-full !py-3.5">
              {modo === "orcamento" ? c.enviarOrcamento : c.enviarMensagem}
              <Send size={16} aria-hidden="true" />
            </button>
            <p className="text-center text-sm text-slate">{c.nota}</p>
          </form>
        </Revelar>
      </div>
    </section>
  );
};

export default Contato;
