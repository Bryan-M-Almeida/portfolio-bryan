import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../../i18n/contexto";
import { travarRolagem } from "../../utils/rolagem";
import BotaoTema from "../BotaoTema";
import Logo from "../Logo";
import SeletorIdioma from "../SeletorIdioma";

const SECOES = ["projetos", "processo", "sobre", "contato"];

const Header = () => {
  const { t } = useI18n();
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    travarRolagem(aberto);
    const onKey = (e) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        rolou || aberto
          ? "bg-porcelain/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-lg"
          : ""
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {SECOES.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[15px] font-medium text-slate transition-colors hover:text-ink"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SeletorIdioma />
          <BotaoTema />
          <a href="#contato" className="btn btn-primario !px-5 !py-2.5">
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <BotaoTema />
          <button
            type="button"
            onClick={() => setAberto(!aberto)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? t.nav.fecharMenu : t.nav.abrirMenu}
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-paper"
          >
            {aberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.nav
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-porcelain lg:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {SECOES.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setAberto(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="font-display border-b border-line py-4 text-2xl font-semibold"
                >
                  {t.nav[id]}
                </motion.a>
              ))}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-slate">
                  {t.nav.idioma}
                </span>
                <SeletorIdioma />
              </div>
              <a
                href="#contato"
                onClick={() => setAberto(false)}
                className="btn btn-primario mt-6"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
