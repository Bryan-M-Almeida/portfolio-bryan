// Apresentação do topo: os melhores sites de clientes primeiro, depois uma
// seleção dos modelos por segmento (imagens em alta em /modelos/hd).
import modelos from "./modelos";
import { sitesNoAr } from "./projetos";

const CLIENTES = [
  "flavio-pisos",
  "aline-aramis",
  "axyron",
  "bem-cuidar",
  "sea",
  "garcia",
];
const MODELOS = [
  "odonto",
  "burger",
  "imobiliaria",
  "bbq",
  "academia",
  "frutosdomar",
  "confeitaria",
  "passeios",
  "steakhouse",
  "surf",
];

const vitrine = [
  ...CLIENTES.map((id) => sitesNoAr.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) => ({
      id: p.id,
      tipo: "cliente",
      nome: p.nome,
      site: p.site,
      imagem: p.imagem,
    })),
  ...MODELOS.map((id) => modelos.find((m) => m.id === id))
    .filter(Boolean)
    .map((m) => ({
      id: `modelo-${m.id}`,
      tipo: "modelo",
      nome: m.nome,
      site: m.url,
      imagem: `/modelos/hd/${m.id}.webp`,
    })),
];

export default vitrine;
