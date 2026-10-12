import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Stack" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

const Logo = () => (
  <a
    href="#inicio"
    className="group flex items-center gap-2"
    aria-label="Início"
  >
    <span className="grid h-9 w-9 place-items-center rounded-xl border border-gold/30 bg-gold/10 font-mono text-sm font-medium text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
      {"</>"}
    </span>
    <span className="text-lg font-semibold tracking-tight text-zinc-50">
      Bryan<span className="text-gold">.</span>
    </span>
  </a>
);

const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState("");

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setAtivo(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
  }, [aberto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          rolou || aberto
            ? "border-line bg-ink/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent"
        }`}
      >
        <Logo />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                ativo === id
                  ? "bg-white/[0.06] text-zinc-50"
                  : "text-zinc-400 hover:text-zinc-50"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="btn btn-primary hidden !px-5 !py-2 md:inline-flex"
        >
          Vamos conversar <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl text-zinc-200 md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-line bg-ink/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          aberto
            ? "max-h-[480px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="Menu mobile">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setAberto(false)}
              className="rounded-xl px-4 py-3 text-base text-zinc-200 hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setAberto(false)}
            className="btn btn-primary mt-2"
          >
            Vamos conversar <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
