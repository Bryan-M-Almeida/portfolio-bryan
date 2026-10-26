import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useI18n } from "../../i18n/contexto";
import { travarRolagem } from "../../utils/rolagem";

const PrivacyModal = ({ aberto, onClose }) => {
  const { t } = useI18n();
  const fecharRef = useRef(null);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    travarRolagem(true);
    fecharRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      travarRolagem(false);
    };
  }, [aberto, onClose]);

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-privacidade"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-paper p-7 sm:p-9"
          >
            <button
              ref={fecharRef}
              type="button"
              onClick={onClose}
              aria-label={t.privacidade.fechar}
              className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full text-slate hover:bg-porcelain hover:text-ink"
            >
              <X size={20} />
            </button>
            <h2 id="titulo-privacidade" className="text-2xl font-bold">
              {t.privacidade.titulo}
            </h2>
            <div className="mt-4 space-y-3 text-slate">
              {t.privacidade.texto.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
