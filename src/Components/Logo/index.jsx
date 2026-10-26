// Monograma "B" com o ponto final da assinatura "Bryan."
export const Marca = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    aria-hidden="true"
    className={className}
  >
    <rect width="32" height="32" rx="9" fill="var(--c-texto)" />
    <path
      d="M10.5 8.5h6.25a3.6 3.6 0 0 1 0 7.2H10.5m0 0h7.25a3.9 3.9 0 0 1 0 7.8H10.5V8.5"
      fill="none"
      stroke="var(--c-fundo)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24.6" cy="22.3" r="1.9" fill="var(--c-fundo)" />
  </svg>
);

const Logo = () => (
  <a href="#inicio" className="group flex items-center gap-2.5">
    <Marca className="transition-transform duration-300 group-hover:-rotate-6" />
    <span className="font-display text-[19px] font-bold tracking-[-0.025em]">
      Bryan Maciel
    </span>
  </a>
);

export default Logo;
