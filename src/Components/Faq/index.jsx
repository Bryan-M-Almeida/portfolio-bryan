import { Plus } from "lucide-react";
import { useI18n } from "../../i18n/contexto";
import Revelar from "../Revelar";
import LetrasZoom from "../LetrasZoom";

// <details> nativo: acessível, funciona sem JavaScript e o texto fica
// no HTML pré-renderizado, visível para buscadores.
const Faq = () => {
  const { t } = useI18n();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Revelar className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="titulo-secao">
            <LetrasZoom texto={t.faq.titulo} />
          </h2>
          <p className="mt-4 max-w-sm text-lg text-slate">{t.faq.subtitulo}</p>
        </Revelar>

        <div className="border-t border-line">
          {t.faq.itens.map((item) => (
            <details key={item.p} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-[-0.01em] transition-colors hover:text-cobalt [&::-webkit-details-marker]:hidden">
                <h3>{item.p}</h3>
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-slate transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[40rem] pb-6 text-[15px] leading-relaxed text-slate">
                {item.r}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
