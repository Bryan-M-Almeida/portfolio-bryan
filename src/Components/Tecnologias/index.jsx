import { Cpu, Database, PanelsTopLeft, Wrench } from "lucide-react";
import tecnologias from "../../Data/tecnologias.json";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import TechIcon from "../TechIcon";

const ICONES_GRUPO = {
  frontend: PanelsTopLeft,
  backend: Database,
  sistemas: Cpu,
  tools: Wrench,
};

const Tecnologias = () => (
  <section id="tecnologias" className="section">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    <div className="container-page">
      <SectionHeader
        eyebrow="Stack"
        title="Tecnologias que uso"
        subtitle="Ferramentas que escolho para cada problema, da interface ao metal."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {tecnologias.grupos.map((grupo, i) => {
          const Icone = ICONES_GRUPO[grupo.id];
          return (
            <Reveal
              key={grupo.id}
              delay={(i % 2) * 100}
              className="card card-hover p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <Icone size={19} />
                </span>
                <div>
                  <h3 className="font-semibold">{grupo.titulo}</h3>
                  <p className="text-sm text-zinc-500">{grupo.descricao}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {grupo.itens.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-zinc-50"
                  >
                    <TechIcon nome={t} size={15} />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="card mt-5 flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="font-semibold">Estudando agora</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Expandindo horizontes e explorando novas fronteiras.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {tecnologias.aprendizado_atual.map((a) => (
            <span
              key={a}
              className="rounded-full border border-gold/25 bg-gold/[0.06] px-3.5 py-1.5 text-sm text-gold-soft"
            >
              {a}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Tecnologias;
