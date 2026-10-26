import { motion } from "motion/react";

// Entrada suave de títulos de seção ao aparecerem na tela.
const Revelar = ({ children, className = "", atraso = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 1.1, delay: atraso, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default Revelar;
