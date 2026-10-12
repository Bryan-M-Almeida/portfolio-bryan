import { useState } from "react";
import { ChevronDown, Copy, Check, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import perfil from "../../Data/perfil";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

const TIPOS_PROJETO = [
  "Landing page",
  "Site institucional",
  "Aplicação web",
  "Outro",
];

const REDES = [
  { href: perfil.links.linkedin, icone: FaLinkedinIn, label: "LinkedIn" },
  { href: perfil.links.github, icone: FaGithub, label: "GitHub" },
  { href: perfil.links.instagram, icone: FaInstagram, label: "Instagram" },
];

const Contato = () => {
  const [modo, setModo] = useState("mensagem");
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      window.location.href = `mailto:${perfil.email}`;
    }
  };

  // Sem backend: monta o e-mail e abre o cliente de e-mail do visitante.
  const enviar = (e) => {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(e.currentTarget));
    const assunto =
      modo === "orcamento"
        ? `Orçamento: ${dados.tipo} | ${dados.nome}`
        : `Contato pelo portfólio | ${dados.nome}`;
    const corpo = [
      `Nome: ${dados.nome}`,
      `E-mail: ${dados.email}`,
      modo === "orcamento" && `Tipo de projeto: ${dados.tipo}`,
      "",
      dados.mensagem,
    ]
      .filter((l) => l !== false)
      .join("\n");

    window.location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;
  };

  return (
    <section id="contato" className="section overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] [&>*]:min-w-0">
        <div>
          <SectionHeader
            eyebrow="Contato"
            title="Vamos construir algo juntos?"
            subtitle="Tem um projeto em mente, uma vaga ou só quer trocar uma ideia? Me mande uma mensagem."
          />

          <Reveal delay={100} className="mt-10 space-y-3">
            <div className="card flex items-center gap-4 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <Mail size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-zinc-500">E-mail</p>
                <a
                  href={`mailto:${perfil.email}`}
                  className="block truncate text-zinc-100 hover:text-gold"
                >
                  {perfil.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copiarEmail}
                className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                aria-label="Copiar e-mail"
              >
                {copiado ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            <div className="card flex items-center gap-4 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-xs text-zinc-500">Localização</p>
                <p className="text-zinc-100">{perfil.localizacao}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-3">
              {REDES.map(({ href, icone: Icone, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="card card-hover grid h-12 w-12 place-items-center text-zinc-300 hover:text-gold"
                >
                  <Icone size={19} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} id="orcamento" className="card p-6 sm:p-8">
          <div
            className="grid grid-cols-2 gap-1 rounded-xl border border-line bg-ink/60 p-1"
            role="tablist"
          >
            {[
              ["mensagem", "Mensagem"],
              ["orcamento", "Pedir orçamento"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={modo === id}
                onClick={() => setModo(id)}
                className={`rounded-lg py-2.5 text-sm font-medium transition-colors ${
                  modo === id
                    ? "bg-white/[0.08] text-zinc-50"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={enviar} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="label">
                  Nome
                </label>
                <input
                  required
                  id="nome"
                  name="nome"
                  className="field"
                  placeholder="Seu nome"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="field"
                  placeholder="voce@email.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {modo === "orcamento" && (
              <div>
                <label htmlFor="tipo" className="label">
                  Tipo de projeto
                </label>
                <div className="relative">
                  <select
                    required
                    id="tipo"
                    name="tipo"
                    defaultValue=""
                    className="field appearance-none pr-10"
                  >
                    <option value="" disabled className="bg-ink">
                      Selecione uma opção
                    </option>
                    {TIPOS_PROJETO.map((t) => (
                      <option key={t} value={t} className="bg-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gold"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="mensagem" className="label">
                {modo === "orcamento" ? "Conte sobre o projeto" : "Mensagem"}
              </label>
              <textarea
                required
                id="mensagem"
                name="mensagem"
                rows={5}
                className="field resize-none"
                placeholder={
                  modo === "orcamento"
                    ? "Objetivo, prazo, referências..."
                    : "Como posso ajudar?"
                }
              />
            </div>

            <button type="submit" className="btn btn-primary w-full !py-3.5">
              {modo === "orcamento" ? "Solicitar orçamento" : "Enviar mensagem"}
              <Send size={16} />
            </button>
            <p className="text-center text-xs text-zinc-600">
              O envio abre o seu aplicativo de e-mail com a mensagem pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contato;
