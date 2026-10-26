import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import perfil from "../../Data/perfil";
import useParallax from "../../hooks/useParallax";
import { useI18n } from "../../i18n/contexto";

const CtaFaixa = () => {
  const { t } = useI18n();
  const { ref: refFaixa, y: yTextura } = useParallax(-70);

  return (
    <section ref={refFaixa} className="py-8">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-paper px-6 py-14 ring-1 ring-line sm:px-14 sm:py-16"
        >
          {/* Monograma ampliado como textura */}
          <motion.svg
            style={{ y: yTextura }}
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-16 h-80 w-80 text-ink opacity-[0.05]"
          >
            <path
              d="M10.5 8.5h6.25a3.6 3.6 0 0 1 0 7.2H10.5m0 0h7.25a3.9 3.9 0 0 1 0 7.8H10.5V8.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24.6" cy="22.3" r="1.9" fill="currentColor" />
          </motion.svg>

          <div className="relative max-w-2xl">
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.04] font-bold tracking-[-0.035em]">
              {t.ctaFaixa.titulo}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate">
              {t.ctaFaixa.texto}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contato" className="btn btn-primario group">
                {t.ctaFaixa.botao}
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a href={`mailto:${perfil.email}`} className="btn btn-secundario">
                <Mail size={17} aria-hidden="true" />
                {t.ctaFaixa.secundario}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFaixa;
