import { Check } from "lucide-react";
import experiencias from "../../Data/experiencias.json";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

const periodo = ({ inicio, fim }) =>
  inicio === fim ? inicio : `${inicio} — ${fim}`;

const Experiencia = () => (
  <section id="experiencia" className="section">
    <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeader
          eyebrow="Trajetória"
          title="Experiência"
          subtitle="Projetos para clientes reais, do briefing ao deploy, com foco em resultado."
        />
      </div>

      <ol className="relative space-y-6 border-l border-line pl-8">
        {experiencias.map((exp, i) => (
          <Reveal as="li" key={exp.id} delay={i * 80} className="relative">
            <span className="absolute top-7 -left-[37px] h-3 w-3 rounded-full border-2 border-ink bg-gold ring-4 ring-gold/15" />
            <div className="card card-hover p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-gold">{exp.cliente}</p>
                </div>
                <span className="chip">{periodo(exp)}</span>
              </div>
              <p className="mt-4 text-zinc-400">{exp.descricao}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {exp.atividades.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm text-zinc-400">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experiencia;
