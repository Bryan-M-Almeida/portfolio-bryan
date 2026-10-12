import { FileDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import perfil from "../../Data/perfil";
import Reveal from "../Reveal";

const Recrutadores = () => (
  <section id="recrutadores" className="py-12">
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.12] via-surface to-surface p-8 sm:p-12">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow">Para recrutadores</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Procurando alguém para o seu time?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              Estou aberto a vagas de estágio e júnior em Front-End ou Full
              Stack, presencial ou remoto. Aqui estão os caminhos mais rápidos
              para avaliar meu perfil.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-56 lg:flex-col">
            {perfil.curriculo ? (
              <a href={perfil.curriculo} download className="btn btn-primary">
                <FileDown size={17} /> Baixar currículo
              </a>
            ) : (
              <a
                href={`mailto:${perfil.email}?subject=Currículo`}
                className="btn btn-primary"
              >
                <Mail size={17} /> Pedir currículo
              </a>
            )}
            <a
              href={perfil.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FaLinkedinIn size={16} /> LinkedIn
            </a>
            <a
              href={perfil.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub size={16} /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Recrutadores;
