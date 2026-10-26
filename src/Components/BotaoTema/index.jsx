import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "../../i18n/contexto";

const COR_BARRA = { dark: "#0a0f1c", light: "#eef0f3" };

// O tema inicial é aplicado por um script no index.html (escuro por padrão), antes da página aparecer.
const BotaoTema = () => {
  const { t } = useI18n();
  const [tema, setTema] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", COR_BARRA[tema]);
    try {
      localStorage.setItem("portfolio-tema", tema);
    } catch {
      // ignora
    }
  }, [tema]);

  const escuro = tema === "dark";

  return (
    <button
      type="button"
      onClick={() => setTema(escuro ? "light" : "dark")}
      aria-label={escuro ? t.nav.temaClaro : t.nav.temaEscuro}
      title={escuro ? t.nav.temaClaro : t.nav.temaEscuro}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full text-ink ring-1 ring-line transition-colors hover:bg-paper"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={tema}
          initial={{ y: 14, rotate: -60, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -14, rotate: 60, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {escuro ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default BotaoTema;
