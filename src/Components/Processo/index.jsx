import { motion } from "motion/react";
import { useI18n } from "../../i18n/contexto";
import Revelar from "../Revelar";
import LetrasZoom from "../LetrasZoom";

// As etapas são uma sequência real, por isso numeradas.
const Processo = () => {
  const { t } = useI18n();

  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="container-page">
        <Revelar className="max-w-xl">
          <h2 className="titulo-secao">
            <LetrasZoom texto={t.processo.titulo} />
          </h2>
          <p className="mt-4 text-lg text-slate">{t.processo.subtitulo}</p>
        </Revelar>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <motion.span
            aria-hidden="true"
            className="absolute top-5 left-5 hidden h-px origin-left bg-slate/50 md:block"
            style={{ right: "calc(25% - 1.25rem)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
          />
          {t.processo.etapas.map((etapa, i) => (
            <motion.li
              key={etapa.titulo}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.3 }}
            >
              <span className="font-display relative grid h-10 w-10 place-items-center rounded-full bg-ink text-[15px] font-bold text-paper">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em]">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-[15px] text-slate">{etapa.texto}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Processo;
