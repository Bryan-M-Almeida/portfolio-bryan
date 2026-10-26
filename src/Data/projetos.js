// Projetos do portfólio.
// aba: "publicados" | "desenvolvimento"
// privado: true mostra "Pedir para ver" no lugar do link do código.
// imagemLonga: screenshot da página inteira, que rola ao passar o mouse.
// Textos com { pt, en, es } são traduzidos; os demais valem para todos os idiomas.

const projetos = [
  {
    id: "flavio-pisos",
    nome: "Flávio Pisos e Revestimentos",
    aba: "publicados",
    status: "cliente",
    ano: 2026,
    local: "Paulínia, SP",
    imagem: "/projetos/pisos.jpg",
    imagemLonga: "/projetos/pisos-full.jpg",
    site: "https://flavio-pisos-e-revestimentos.vercel.app",
    privado: true,
    resumo: {
      pt: "Site para uma loja de pisos e revestimentos que vende para clientes finais, construtoras e escritórios de arquitetura.",
      en: "Website for a flooring and wall-covering store that sells to homeowners, builders and architecture firms.",
      es: "Sitio para una tienda de pisos y revestimientos que vende a clientes finales, constructoras y estudios de arquitectura.",
    },
    entregas: {
      pt: [
        "Catálogo de produtos e galeria de obras com fotos e vídeos",
        "Orçamento direto pelo WhatsApp em cada seção",
        "Painel administrativo com login para atualizar o conteúdo",
        "SEO local, pré-renderização e imagens otimizadas para o PageSpeed",
      ],
      en: [
        "Product catalog and project gallery with photos and videos",
        "WhatsApp quote buttons throughout the page",
        "Admin dashboard with login to update the content",
        "Local SEO, prerendering and optimized images for PageSpeed",
      ],
      es: [
        "Catálogo de productos y galería de obras con fotos y videos",
        "Presupuesto directo por WhatsApp en cada sección",
        "Panel de administración con login para actualizar el contenido",
        "SEO local, prerenderizado e imágenes optimizadas para PageSpeed",
      ],
    },
    stack: ["React", "React Router", "Tailwind CSS", "Node.js"],
  },
  {
    id: "aline-aramis",
    nome: "Aline & Aramis",
    aba: "publicados",
    status: "cliente",
    ano: 2026,
    imagem: "/projetos/casamento.jpg",
    imagemLonga: "/projetos/casamento-full.jpg",
    site: "https://aline-e-aramis.vercel.app",
    privado: true,
    resumo: {
      pt: "Site de casamento com lista de presentes paga online, feito a partir de um design no Figma.",
      en: "Wedding website with an online gift registry, built from a Figma design.",
      es: "Sitio de boda con lista de regalos pagada en línea, hecho a partir de un diseño en Figma.",
    },
    entregas: {
      pt: [
        "Lista de presentes com pagamento por Pix e cartão via Mercado Pago",
        "Confirmação de presença que chega pronta no WhatsApp dos noivos",
        "Contagem regressiva, traje e informações para os convidados",
        "Mascote interativo que responde dúvidas comuns",
      ],
      en: [
        "Gift registry with Pix and card payments through Mercado Pago",
        "RSVP form that arrives ready in the couple's WhatsApp",
        "Countdown, dress code and guest information",
        "Interactive mascot that answers common questions",
      ],
      es: [
        "Lista de regalos con pago por Pix y tarjeta vía Mercado Pago",
        "Confirmación de asistencia que llega lista al WhatsApp de los novios",
        "Cuenta regresiva, vestimenta e información para los invitados",
        "Mascota interactiva que responde dudas comunes",
      ],
    },
    stack: ["React", "Tailwind CSS", "Mercado Pago", "Vercel Functions"],
  },
  {
    id: "bem-cuidar",
    nome: "Residencial Bem Cuidar",
    aba: "publicados",
    status: "cliente",
    ano: 2026,
    imagem: "/projetos/residencial.jpg",
    imagemLonga: "/projetos/residencial-full.jpg",
    site: "https://residencial-bem-cuidar.vercel.app",
    privado: true,
    resumo: {
      pt: "Site institucional para um residencial sênior, pensado para passar confiança às famílias.",
      en: "Website for a senior living residence, designed to earn families' trust.",
      es: "Sitio institucional para una residencia de adultos mayores, pensado para dar confianza a las familias.",
    },
    entregas: {
      pt: [
        "Apresentação dos serviços, diferenciais e da equipe",
        "Galeria do espaço",
        "Agendamento de visita e contato rápido por telefone",
      ],
      en: [
        "Services, differentiators and team overview",
        "Photo gallery of the residence",
        "Visit booking and one-tap phone contact",
      ],
      es: [
        "Presentación de servicios, diferenciales y equipo",
        "Galería del espacio",
        "Agenda de visitas y contacto rápido por teléfono",
      ],
    },
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "axyron",
    nome: "Axyron Global",
    aba: "publicados",
    status: "cliente",
    ano: 2026,
    imagem: "/projetos/axyron.jpg",
    imagemLonga: "/projetos/axyron-full.jpg",
    site: "https://www.axyronglobal.com.br",
    resumo: {
      pt: "Site institucional para uma empresa de serviços offshore e energia eólica.",
      en: "Company website for an offshore services and wind energy business.",
      es: "Sitio institucional para una empresa de servicios offshore y energía eólica.",
    },
    entregas: {
      pt: [
        "Páginas de serviços e portfólio de obras",
        "Formulários e contato pelo WhatsApp",
        "SEO e layout responsivo otimizado",
      ],
      en: [
        "Service pages and project portfolio",
        "Contact forms and WhatsApp contact",
        "SEO and an optimized responsive layout",
      ],
      es: [
        "Páginas de servicios y portafolio de obras",
        "Formularios y contacto por WhatsApp",
        "SEO y diseño responsivo optimizado",
      ],
    },
    stack: ["React", "Tailwind CSS"],
  },
  {
    id: "hikari-sushi",
    nome: "Hikari Sushi",
    aba: "publicados",
    status: "modelo",
    ano: 2026,
    imagem: "/projetos/sushi.jpg",
    privado: true,
    resumo: {
      pt: "Landing page para restaurantes japoneses, personalizável para cada cliente só pelo link.",
      en: "Landing page for Japanese restaurants, customized for each client just through the link.",
      es: "Landing page para restaurantes japoneses, personalizable para cada cliente solo con el enlace.",
    },
    entregas: {
      pt: [
        "Abertura animada em que os ingredientes se montam em um sushi ao rolar",
        "Nome, cidade, WhatsApp e Instagram definidos por parâmetros na URL",
        "Cardápio, rodízio, delivery e pedidos pelo WhatsApp",
      ],
      en: [
        "Scroll-driven intro where the ingredients assemble into a sushi piece",
        "Name, city, WhatsApp and Instagram set through URL parameters",
        "Menu, all-you-can-eat, delivery and WhatsApp ordering",
      ],
      es: [
        "Apertura animada en la que los ingredientes se arman en un sushi al hacer scroll",
        "Nombre, ciudad, WhatsApp e Instagram definidos por parámetros en la URL",
        "Menú, rodizio, delivery y pedidos por WhatsApp",
      ],
    },
    stack: ["React", "Motion", "Vite"],
  },

  // Em desenvolvimento
  {
    id: "fintrack",
    nome: "FinTrack",
    aba: "desenvolvimento",
    status: "saas",
    capa: { cor: "#1b1640", detalhe: "#a99bff" },
    codigo: "https://github.com/Bryan-M-Almeida/FinTrack",
    resumo: {
      pt: "Plataforma de gestão financeira pessoal com controle de contas, agendamentos, simulações e painel analítico. Em fase inicial: a navegação está pronta e os módulos estão em construção.",
      en: "Personal finance platform with account tracking, scheduled payments, simulations and an analytics dashboard. Early stage: navigation is done and the modules are under construction.",
      es: "Plataforma de gestión financiera personal con control de cuentas, pagos programados, simulaciones y panel analítico. En fase inicial: la navegación está lista y los módulos están en construcción.",
    },
    stack: ["Next.js", "TypeScript", "Python"],
  },
  {
    id: "nexus",
    nome: "NEXUS",
    aba: "desenvolvimento",
    status: "hackathon",
    imagem: "/projetos/nexus.jpg",
    site: "https://nexus-landing-dun.vercel.app",
    codigo: "https://github.com/Bryan-M-Almeida/nexusAI",
    resumo: {
      pt: "Assistente de IA pessoal desenvolvido para o AMD Developer Hackathon: ACT III (lablab.ai). Funciona inteiramente no computador do usuário, com memória persistente, agenda, tarefas e interface adaptável, sem nuvem nem chaves de API.",
      en: "Personal AI assistant built for the AMD Developer Hackathon: ACT III (lablab.ai). It runs entirely on the user's computer, with persistent memory, calendar, tasks and an adaptive interface, with no cloud or API keys.",
      es: "Asistente de IA personal desarrollado para el AMD Developer Hackathon: ACT III (lablab.ai). Funciona íntegramente en la computadora del usuario, con memoria persistente, agenda, tareas e interfaz adaptable, sin nube ni claves de API.",
    },
    stack: ["Python", "JavaScript", "IA local"],
  },
  {
    id: "laura",
    nome: "Laura: The Temporal Ward",
    aba: "desenvolvimento",
    status: "jogo",
    privado: true,
    capa: { cor: "#2a1f3d", detalhe: "#c9a7ff" },
    resumo: {
      pt: "Metroidvania 2D em Unity 6 inspirado em Hollow Knight, com animação quadro a quadro e poderes de manipular o tempo. Movimentação da protagonista pronta.",
      en: "2D metroidvania in Unity 6 inspired by Hollow Knight, with frame-by-frame animation and time-bending powers. Player movement is done.",
      es: "Metroidvania 2D en Unity 6 inspirado en Hollow Knight, con animación cuadro a cuadro y poderes para manipular el tiempo. El movimiento de la protagonista está listo.",
    },
    stack: ["Unity 6", "C#", "URP 2D"],
  },
  {
    id: "nexus-os",
    nome: "NEXUS.OS",
    aba: "desenvolvimento",
    status: "sistema",
    capa: { cor: "#0d1b2a", detalhe: "#7fd1ff" },
    codigo: "https://github.com/Bryan-M-Almeida/NexusOS",
    resumo: {
      pt: "Sistema operacional bootável escrito do zero em Assembly e C, com sistema de arquivos próprio, shell e interface em três idiomas.",
      en: "Bootable operating system written from scratch in Assembly and C, with its own file system, shell and a three-language interface.",
      es: "Sistema operativo arrancable escrito desde cero en Assembly y C, con sistema de archivos propio, shell e interfaz en tres idiomas.",
    },
    stack: ["C", "Assembly", "QEMU"],
  },
  {
    id: "unity-prototipos",
    nome: "Protótipos em Unity",
    aba: "desenvolvimento",
    status: "jogo",
    privado: true,
    capa: { cor: "#14301f", detalhe: "#9be3b0" },
    resumo: {
      pt: "Jogos 2D e 3D em fase inicial, incluindo uma releitura de Pac-Man, usados para testar mecânicas antes de virarem projetos maiores.",
      en: "Early-stage 2D and 3D games, including a Pac-Man remake, used to test mechanics before they grow into bigger projects.",
      es: "Juegos 2D y 3D en etapa inicial, incluida una versión de Pac-Man, usados para probar mecánicas antes de convertirse en proyectos mayores.",
    },
    stack: ["Unity", "C#"],
  },
];

// Outros sites de clientes em produção, exibidos em grade compacta.
export const outrosClientes = [
  {
    id: "sea",
    nome: "SEA Treinamentos",
    tipo: {
      pt: "Landing page de cursos profissionalizantes",
      en: "Landing page for vocational courses",
      es: "Landing page de cursos profesionales",
    },
    ano: 2025,
    imagem: "/projetos/sea.jpg",
    imagemLonga: "/projetos/sea-full.jpg",
    site: "https://portfolio-sea-treinamentos.vercel.app",
  },
  {
    id: "garcia",
    nome: "Garcia Soluções Elétricas",
    tipo: {
      pt: "Site institucional de serviços elétricos",
      en: "Electrical services company website",
      es: "Sitio institucional de servicios eléctricos",
    },
    ano: 2025,
    imagem: "/projetos/garcia.jpg",
    imagemLonga: "/projetos/garcia-full.jpg",
    site: "https://landing-garcia-solucoes.vercel.app",
  },
  {
    id: "legado",
    nome: "Legado",
    tipo: {
      pt: "Página de vendas de e-book",
      en: "E-book sales page",
      es: "Página de ventas de e-book",
    },
    ano: 2025,
    imagem: "/projetos/legado.jpg",
    imagemLonga: "/projetos/legado-full.jpg",
    site: "http://www.meulegadomasculino.com.br/",
  },
];

// Sites de clientes publicados, usados na apresentação do topo.
export const sitesNoAr = [
  ...projetos.filter((p) => p.aba === "publicados" && p.site),
  ...outrosClientes,
];

export default projetos;
