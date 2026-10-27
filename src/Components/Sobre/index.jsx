import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import perfil, { mailto } from "../../Data/perfil";
import useParallax from "../../hooks/useParallax";
import { useI18n } from "../../i18n/contexto";
import Revelar from "../Revelar";
import LetrasZoom from "../LetrasZoom";

const Sobre = () => {
  const { t } = useI18n();
  const { ref: refFoto, y: yFoto } = useParallax(36);

  return (
    <section id="sobre" className="bg-paper py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0 lg:self-start">
          {/* Parallax: a foto desliza dentro da moldura enquanto a seção passa */}
          <div
            ref={refFoto}
            className="aspect-[4/5] overflow-hidden rounded-3xl bg-porcelain"
          >
            <motion.img
              src={perfil.foto}
              alt={perfil.nome}
              loading="lazy"
              decoding="async"
              width={720}
              height={900}
              referrerPolicy="no-referrer"
              style={{ y: yFoto, scale: 1.18 }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Revelar>
          <h2 className="titulo-secao">
            <LetrasZoom texto={t.sobre.titulo} />
          </h2>
          <div className="mt-6 max-w-[38rem] space-y-4 text-lg text-slate">
            {t.sobre.paragrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-bold">{t.sobre.stackTitulo}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {perfil.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-3xl bg-porcelain p-6 sm:p-8">
            <h3 className="text-2xl font-bold tracking-[-0.02em]">
              {t.sobre.recrutadoresTitulo}
            </h3>
            <p className="mt-2 text-slate">{t.sobre.recrutadoresTexto}</p>
            <ul className="mt-5 space-y-2">
              {t.sobre.disponibilidade.map((d) => (
                <li key={d} className="flex items-center gap-3 font-medium">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cobalt"
                    aria-hidden="true"
                  />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={mailto(t.sobre.assuntoCurriculo)}
                className="btn btn-primario"
              >
                <FileText size={17} aria-hidden="true" />
                {t.sobre.pedirCurriculo}
              </a>
              <a
                href={perfil.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secundario"
              >
                <FaLinkedinIn size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={perfil.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secundario"
              >
                <FaGithub size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
};

export default Sobre;
