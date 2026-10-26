// Dados pessoais centralizados: altere aqui e o site inteiro se atualiza.
const perfil = {
  nome: "Bryan Maciel",
  email: "bryanmacieldealmeida06@gmail.com",
  links: {
    github: "https://github.com/Bryan-M-Almeida",
    linkedin: "https://www.linkedin.com/in/bryan-maciel-de-almeida-4705942b9",
    instagram: "https://www.instagram.com/bry.codes",
  },
  foto: "https://res.cloudinary.com/dr2p2zd0x/image/upload/v1772132822/foto_kbfhxn.jpg",
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "C",
    "C#",
    "Unity",
    "Git",
    "Vercel",
  ],
};

export const mailto = (assunto, corpo = "") =>
  `mailto:${perfil.email}?subject=${encodeURIComponent(assunto)}${
    corpo ? `&body=${encodeURIComponent(corpo)}` : ""
  }`;

export default perfil;
