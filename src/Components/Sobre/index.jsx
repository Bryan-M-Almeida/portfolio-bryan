import { Gauge, Layers, MonitorSmartphone, Sparkles } from "lucide-react";
import perfil from "../../Data/perfil";
import Reveal from "../Reveal";

const PILARES = [
  {
    icone: Gauge,
    titulo: "Performance",
    texto:
      "Aplicações leves e organizadas, sem excessos, com navegação fluida.",
  },
  {
    icone: Layers,
    titulo: "Escalabilidade",
    texto: "Componentes reutilizáveis pensados para crescer e ser mantidos.",
  },
  {
    icone: MonitorSmartphone,
    titulo: "Responsividade",
    texto: "Layouts que se adaptam a qualquer tela, priorizando quem usa.",
  },
  {
    icone: Sparkles,
    titulo: "Aprendizado contínuo",
    texto: "Evolução constante por meio de projetos reais e desafios técnicos.",
  },
];

const Sobre = () => (
  <section id="sobre" className="section">
    <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <Reveal className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0 lg:self-start">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/25 to-transparent blur-xl" />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line">
          <img
            src={perfil.foto}
            alt={`Foto de ${perfil.nome}`}
            className="aspect-[4/5] w-full object-cover grayscale-[30%] transition duration-700 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
            <p className="font-medium text-zinc-50">{perfil.nome}</p>
            <p className="text-sm text-zinc-400">{perfil.localizacao}</p>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="eyebrow">Sobre mim</span>
          <h2 className="section-title">
            Transformando complexidade em{" "}
            <span className="font-serif font-normal italic text-gold">
              clareza técnica.
            </span>
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-400"
        >
          <p>
            Sou estudante de Engenharia de Sistemas e desenvolvedor com foco em
            Front-End. Construo minha experiência com projetos práticos: sites
            para clientes reais, aplicações full stack e projetos que me levam
            para perto do hardware.
          </p>
          <p>
            No dia a dia trabalho com{" "}
            <span className="text-zinc-200">React, Next.js e TypeScript</span>,
            sempre buscando organização, performance e clareza no código. Fora
            da web, escrevo C, Java e Python, o que me dá uma base sólida de
            lógica e de como as coisas funcionam por baixo dos panos.
          </p>
          <p>
            Acredito que um bom desenvolvedor não é apenas quem faz funcionar,
            mas quem entende o porquê das decisões técnicas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PILARES.map(({ icone: Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 80} className="card card-hover p-5">
              <Icone size={20} className="text-gold" />
              <h3 className="mt-4 font-medium">{titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Sobre;
