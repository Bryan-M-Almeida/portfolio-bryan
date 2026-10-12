import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import perfil from "../../Data/perfil";
import projetos from "../../Data/projetos.json";
import tecnologias from "../../Data/tecnologias.json";
import useGithubRepos from "../../hooks/useGithubRepos";
import TechIcon from "../TechIcon";
import { temIcone } from "../TechIcon/icones";

const clientes = projetos.filter((p) => p.tipo === "Freelance").length;
const stack = [...new Set(tecnologias.grupos.flatMap((g) => g.itens))];

const faixa = stack.filter(temIcone);

const CodeCard = () => (
  <div className="card relative overflow-hidden shadow-2xl shadow-black/50">
    <div className="flex items-center gap-2 border-b border-line px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-xs text-zinc-500">bryan.ts</span>
    </div>
    <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-300">
      <code>
        <span className="text-violet-400">const</span>{" "}
        <span className="text-sky-300">dev</span> = {"{"}
        {"\n"} nome: <span className="text-emerald-300">"{perfil.nome}"</span>,
        {"\n"} foco: [<span className="text-emerald-300">"Front-End"</span>,{" "}
        <span className="text-emerald-300">"Full Stack"</span>],
        {"\n"} stack: [<span className="text-emerald-300">"React"</span>,{" "}
        <span className="text-emerald-300">"TypeScript"</span>,{" "}
        <span className="text-emerald-300">"Next.js"</span>],
        {"\n"} baixoNivel: [<span className="text-emerald-300">"C"</span>,{" "}
        <span className="text-emerald-300">"Assembly"</span>],
        {"\n"} formacao:{" "}
        <span className="text-emerald-300">"Eng. de Sistemas"</span>,{"\n"}{" "}
        disponivel: <span className="text-gold">true</span>,{"\n"}
        {"}"};{"\n\n"}
        <span className="text-zinc-500">// do pixel ao kernel ✦</span>
      </code>
    </pre>
  </div>
);

const Hero = () => {
  const { repos } = useGithubRepos(perfil.githubUser);

  const stats = [
    { valor: projetos.length, label: "projetos no portfólio" },
    { valor: clientes, label: "clientes freelance" },
    {
      valor: repos.length ? repos.length : "20+",
      label: "repositórios públicos",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* fundo */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
            Disponível para projetos e oportunidades
          </span>

          <h1 className="mt-7 text-[2.75rem] leading-[1.04] font-semibold sm:text-6xl lg:text-[4rem]">
            Crio produtos web
            <br />
            <span className="font-serif text-[1.08em] font-normal italic text-gradient">
              do pixel ao kernel.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
            Sou{" "}
            <strong className="font-medium text-zinc-100">{perfil.nome}</strong>
            , {perfil.cargo.toLowerCase()} e estudante de Engenharia de
            Sistemas. Construo interfaces modernas com React e TypeScript, e vou
            fundo quando o problema pede: de landing pages que convertem a um
            sistema operacional escrito em C.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="btn btn-primary group">
              Ver projetos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#contato" className="btn btn-ghost">
              Entrar em contato
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={perfil.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-50"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={perfil.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-50"
              >
                <FaLinkedinIn size={19} />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map(({ valor, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-3xl font-semibold text-zinc-50">{valor}</dd>
                <dd className="mt-1 text-sm text-zinc-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-violet-500/10 blur-2xl" />
          <div className="relative rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
            <CodeCard />
          </div>
        </div>
      </div>

      {/* faixa de tecnologias */}
      <div className="relative mt-20 border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...faixa, ...faixa].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2.5 whitespace-nowrap text-sm text-zinc-500"
              aria-hidden={i >= faixa.length}
            >
              <TechIcon nome={t} size={18} />
              {t}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        className="mx-auto mt-10 flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-gold"
      >
        Role para explorar <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
