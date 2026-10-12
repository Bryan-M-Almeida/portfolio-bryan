import { Code2 } from "lucide-react";
import { ICONES } from "./icones";

const TechIcon = ({ nome, size = 16, colorido = true, className = "" }) => {
  const [Icone, cor] = ICONES[nome] ?? [Code2, "#a1a1aa"];
  return (
    <Icone
      size={size}
      className={className}
      style={colorido ? { color: cor } : undefined}
      aria-hidden="true"
    />
  );
};

export default TechIcon;
