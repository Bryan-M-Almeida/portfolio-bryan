import Reveal from "../Reveal";

const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }) => (
  <Reveal className={align === "center" ? "mx-auto text-center" : ""}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {subtitle && (
      <p className={`section-subtitle ${align === "center" ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeader;
