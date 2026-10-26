import { motion } from "motion/react";
import { Check } from "lucide-react";
import { sitesNoAr } from "../../Data/projetos";
import { useI18n } from "../../i18n/contexto";
import PilhaSites from "./PilhaSites";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const { t, idioma } = useI18n();

  return (
    <section id="inicio" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          {/* key no idioma: a frase entra de novo ao trocar a língua */}
          <h1
            key={idioma}
            className="text-[clamp(2.4rem,4.6vw,3.9rem)] leading-[0.98] font-extrabold tracking-[-0.045em]"
          >
            {t.hero.titulo.map((linha, i) => (
              <span key={linha} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease }}
                >
                  {linha}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-7 max-w-[34rem] text-lg text-slate"
          >
            {t.hero.texto}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contato" className="btn btn-primario">
              {t.hero.ctaPrimario}
            </a>
            <a href="#projetos" className="btn btn-secundario">
              {t.hero.ctaSecundario}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 flex items-center gap-2 text-[15px] text-slate"
          >
            <Check size={17} className="text-cobalt" aria-hidden="true" />
            {t.hero.provaSocial(sitesNoAr.length)}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="pt-6"
        >
          <PilhaSites />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
