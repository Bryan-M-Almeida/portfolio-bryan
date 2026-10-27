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
    imagem: "/projetos/pisos.webp",
    imagemLonga: "/projetos/pisos-full.webp",
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
    imagem: "/projetos/casamento.webp",
    imagemLonga: "/projetos/casamento-full.webp",
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
    imagem: "/projetos/residencial.webp",
    imagemLonga: "/projetos/residencial-full.webp",
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
    imagem: "/projetos/axyron.webp",
    imagemLonga: "/projetos/axyron-full.webp",
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
    id: "sea",
    nome: "SEA Treinamentos",
    aba: "publicados",
    status: "cliente",
    ano: 2025,
    imagem: "/projetos/sea.webp",
    imagemLonga: "/projetos/sea-full.webp",
    site: "https://portfolio-sea-treinamentos.vercel.app",
    resumo: {
      pt: "Landing page para uma escola de cursos técnicos, supletivos e certificações, voltada à captação de alunos.",
      en: "Landing page for a school offering technical courses, adult education and certifications, built to attract new students.",
      es: "Landing page para una escuela de cursos técnicos, educación para adultos y certificaciones, orientada a captar alumnos.",
    },
    entregas: {
      pt: [
        "Vitrine de cursos com chamadas diretas para matrícula",
        "Depoimentos, perguntas frequentes e galeria de fotos",
        "Formulário e atendimento integrados ao WhatsApp",
        "Layout responsivo otimizado para conversão",
      ],
      en: [
        "Course showcase with direct enrollment calls to action",
        "Testimonials, FAQ and photo gallery",
        "Form and support integrated with WhatsApp",
        "Responsive layout optimized for conversion",
      ],
      es: [
        "Vitrina de cursos con llamados directos a la inscripción",
        "Testimonios, preguntas frecuentes y galería de fotos",
        "Formulario y atención integrados con WhatsApp",
        "Diseño responsivo optimizado para la conversión",
      ],
    },
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "garcia",
    nome: "Garcia Soluções Elétricas",
    aba: "publicados",
    status: "cliente",
    ano: 2025,
    local: "Macaé, RJ",
    imagem: "/projetos/garcia.webp",
    imagemLonga: "/projetos/garcia-full.webp",
    site: "https://landing-garcia-solucoes.vercel.app",
    resumo: {
      pt: "Site institucional para uma empresa de soluções elétricas que atende Macaé, Rio das Ostras e região.",
      en: "Company website for an electrical services business serving Macaé, Rio das Ostras and the surrounding area.",
      es: "Sitio institucional para una empresa de soluciones eléctricas que atiende Macaé, Rio das Ostras y la región.",
    },
    entregas: {
      pt: [
        "Portfólio de obras em carrossel e apresentação dos serviços",
        "Conteúdo estruturado para transmitir credibilidade",
        "Contato pelo WhatsApp e mapa de localização",
      ],
      en: [
        "Project portfolio carousel and service overview",
        "Content structured to convey credibility",
        "WhatsApp contact and location map",
      ],
      es: [
        "Portafolio de obras en carrusel y presentación de servicios",
        "Contenido estructurado para transmitir credibilidad",
        "Contacto por WhatsApp y mapa de ubicación",
      ],
    },
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "legado",
    nome: "Legado",
    aba: "publicados",
    status: "vendas",
    ano: 2025,
    imagem: "/projetos/legado.webp",
    imagemLonga: "/projetos/legado-full.webp",
    site: "http://www.meulegadomasculino.com.br/",
    resumo: {
      pt: "Página de vendas para um e-book de educação financeira, com domínio próprio.",
      en: "Sales page for a personal finance e-book, on its own domain.",
      es: "Página de ventas para un e-book de educación financiera, con dominio propio.",
    },
    entregas: {
      pt: [
        "Estrutura de página de vendas com chamadas para compra",
        "Seções de conteúdo do livro e depoimentos",
        "Layout responsivo e carregamento rápido",
      ],
      en: [
        "Sales page structure with purchase calls to action",
        "Book content sections and testimonials",
        "Responsive layout and fast loading",
      ],
      es: [
        "Estructura de página de ventas con llamados a la compra",
        "Secciones de contenido del libro y testimonios",
        "Diseño responsivo y carga rápida",
      ],
    },
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "hikari-sushi",
    nome: "Hikari Sushi",
    aba: "publicados",
    status: "modelo",
    ano: 2026,
    imagem: "/projetos/sushi.webp",
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
    privado: true,
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
    imagem: "/projetos/nexus.webp",
    site: "https://nexus-landing-dun.vercel.app",
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
    privado: true,
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
    resumo: {
      pt: "Jogos 2D e 3D em fase inicial, incluindo uma releitura de Pac-Man, usados para testar mecânicas antes de virarem projetos maiores.",
      en: "Early-stage 2D and 3D games, including a Pac-Man remake, used to test mechanics before they grow into bigger projects.",
      es: "Juegos 2D y 3D en etapa inicial, incluida una versión de Pac-Man, usados para probar mecánicas antes de convertirse en proyectos mayores.",
    },
    stack: ["Unity", "C#"],
  },
];

// Sites de clientes publicados, usados na apresentação do topo.
export const sitesNoAr = projetos.filter(
  (p) => p.aba === "publicados" && p.site,
);

export default projetos;
