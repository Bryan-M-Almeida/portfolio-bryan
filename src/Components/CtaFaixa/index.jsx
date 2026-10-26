import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import perfil from "../../Data/perfil";
import { useI18n } from "../../i18n/contexto";

const CtaFaixa = () => {
  const { t } = useI18n();

  return (
    <section className="py-8">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#2d4bff] px-6 py-14 text-white sm:px-14 sm:py-16"
        >
          {/* Monograma ampliado como textura */}
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-16 h-80 w-80 opacity-[0.12]"
          >
            <path
              d="M10.5 8.5h6.25a3.6 3.6 0 0 1 0 7.2H10.5m0 0h7.25a3.9 3.9 0 0 1 0 7.8H10.5V8.5"
              fill="none"
              stroke="#fff"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24.6" cy="22.3" r="1.9" fill="#fff" />
          </svg>

          <div className="relative max-w-2xl">
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.04] font-bold tracking-[-0.035em] !text-white">
              {t.ctaFaixa.titulo}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              {t.ctaFaixa.texto}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="btn group bg-white text-[#0f1a2e] hover:bg-white/90"
              >
                {t.ctaFaixa.botao}
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={`mailto:${perfil.email}`}
                className="btn text-white ring-1 ring-white/40 ring-inset hover:bg-white/10"
              >
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
