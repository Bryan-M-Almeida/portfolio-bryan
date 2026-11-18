// Todos os textos da interface, por idioma.
const textos = {
  pt: {
    meta: {
      titulo: "Bryan Maciel | Criação de Sites Profissionais e Landing Pages",
      descricao:
        "Desenvolvedor web freelancer: criação de sites profissionais, landing pages e aplicações web rápidas, responsivas e otimizadas para o Google. Sites sob medida e modelos prontos para clínicas, restaurantes, lojas e prestadores de serviço.",
      ogTitulo: "Bryan Maciel | Desenvolvedor Web",
      ogDescricao:
        "Presença digital à altura do seu negócio. Sites profissionais, landing pages e aplicações web sob medida.",
      palavras: [
        "criação de sites",
        "criar site profissional",
        "desenvolvedor web",
        "desenvolvedor web freelancer",
        "desenvolvedor de sites",
        "site para empresa",
        "site institucional",
        "landing page",
        "criação de landing page",
        "site responsivo",
        "site otimizado para Google",
        "SEO para sites",
        "site para clínica",
        "site para restaurante",
        "site para pequenas empresas",
        "modelos de site",
        "desenvolvedor React",
        "desenvolvedor Next.js",
        "desenvolvedor front-end",
        "desenvolvedor full stack",
        "programador freelancer",
        "Bryan Maciel",
      ],
    },
    nav: {
      projetos: "Projetos",
      processo: "Processo",
      sobre: "Sobre",
      faq: "Dúvidas",
      contato: "Contato",
      cta: "Solicitar proposta",
      abrirMenu: "Abrir menu",
      fecharMenu: "Fechar menu",
      idioma: "Idioma",
      temaClaro: "Ativar tema claro",
      temaEscuro: "Ativar tema escuro",
    },
    hero: {
      chamada: "Desenvolvedor web · Criação de sites e landing pages",
      titulo: ["Presença digital", "à altura do", "seu negócio."],
      texto:
        "Projeto e desenvolvo sites institucionais, landing pages e aplicações web sob medida, com design refinado, carregamento rápido e estrutura pensada para converter visitantes em clientes.",
      ctaPrimario: "Solicitar proposta",
      ctaSecundario: "Conhecer projetos",
      pausar: "Pausar apresentação",
      continuar: "Continuar apresentação",
      anterior: "Site anterior",
      proximo: "Próximo site",
      abrirSite: "Abrir site",
      cliente: "Cliente",
      modelo: "Modelo",
      provaSocial: (n, m) =>
        `${n} sites em produção e ${m} modelos por segmento`,
    },
    projetos: {
      titulo: "Projetos",
      subtitulo:
        "Uma seleção de sites em produção para clientes e de produtos autorais. Arraste para navegar e passe o cursor sobre um site para percorrer a página.",
      abas: {
        publicados: "Em produção",
        modelos: "Modelos",
        desenvolvimento: "Em desenvolvimento",
      },
      visitar: "Visitar site",
      arrastar: "Arrastar",
      anterior: "Projeto anterior",
      proximo: "Próximo projeto",
      pedirAcesso: "Solicitar demonstração",
      privado: "Acesso restrito",
      privadoNota:
        "Projeto sem demonstração pública. Apresento o trabalho em uma breve chamada.",
      entregas: "Escopo entregue",
      modelos: {
        titulo: "Modelos prontos por segmento",
        texto:
          "Sites completos e publicados para diferentes ramos, personalizados com o nome, a cidade, o WhatsApp e o Instagram do seu negócio. Uma forma rápida e acessível de estar no ar com um site profissional.",
        categorias: {
          todos: "Todos",
          saude: "Saúde",
          alimentacao: "Alimentação",
          beleza: "Beleza e bem-estar",
          servicos: "Serviços",
          comercio: "Comércio",
          casa: "Casa e construção",
          turismo: "Turismo e imóveis",
          educacao: "Educação",
        },
        altImagem: "Modelo de site:",
        emIngles: "Em inglês",
        emInglesNota: "Site em inglês, feito para o mercado dos Estados Unidos",
        verDemo: "Ver demonstração",
        quero: "Quero este modelo",
        verTodos: (n) => `Ver todos os ${n} modelos`,
        mostrarMenos: "Mostrar menos",
        assunto: (nome) => `Quero o modelo ${nome}`,
        corpo: (nome) =>
          `Olá, Bryan. Gostei do modelo "${nome}" do seu portfólio e quero um site assim para o meu negócio.`,
      },
      assuntoPedido: (nome) => `Demonstração do projeto ${nome}`,
      corpoPedido: (nome) =>
        `Olá, Bryan. Conheci o projeto ${nome} pelo seu portfólio e gostaria de agendar uma demonstração.`,
      status: {
        cliente: "Cliente",
        saas: "SaaS",
        hackathon: "Projeto de hackathon",
        jogo: "Jogo em Unity",
        sistema: "Sistema operacional",
      },
    },
    ctaFaixa: {
      titulo: "Seu negócio merece um site que trabalhe por ele.",
      texto:
        "Envie os detalhes do seu projeto e receba uma proposta com escopo, prazo e investimento definidos, sem compromisso.",
      botao: "Solicitar proposta",
      secundario: "Enviar um e-mail",
    },
    processo: {
      titulo: "Processo",
      subtitulo:
        "Um método enxuto e transparente, do primeiro contato à publicação.",
      etapas: [
        {
          titulo: "Diagnóstico",
          texto:
            "Entendo o negócio, o público e os objetivos que o site precisa atingir.",
        },
        {
          titulo: "Proposta e design",
          texto:
            "Escopo, prazo e investimento definidos. O layout é aprovado antes do desenvolvimento.",
        },
        {
          titulo: "Desenvolvimento",
          texto:
            "Código limpo, responsivo e otimizado para desempenho e SEO, com acompanhamento a cada etapa.",
        },
        {
          titulo: "Publicação e suporte",
          texto:
            "Publicação em domínio próprio e suporte após a entrega. Correções de falhas da minha parte não têm custo; alterações e novas funcionalidades são orçadas à parte.",
        },
      ],
    },
    sobre: {
      titulo: "Sobre",
      paragrafos: [
        "Sou desenvolvedor web desde 2024 e estudante de Engenharia de Sistemas. Atuo no desenvolvimento de sites institucionais, landing pages e aplicações web para empresas que precisam de uma presença digital sólida e profissional.",
        "Trabalho com React, Next.js e TypeScript, e minha base em C, Python e C# me permite ir além da interface: integrações de pagamento, painéis administrativos, otimização de desempenho e SEO técnico.",
      ],
      stackTitulo: "Tecnologias",
      recrutadoresTitulo: "Para recrutadores",
      recrutadoresTexto:
        "Disponível para posições de desenvolvimento Front-End ou Full Stack.",
      disponibilidade: [
        "Remoto",
        "Presencial apenas na Bolívia",
        "Disponível para mudança para fora da América Latina",
      ],
      pedirCurriculo: "Solicitar currículo",
      assuntoCurriculo: "Solicitação de currículo",
    },
    faq: {
      titulo: "Perguntas frequentes",
      subtitulo: "O que normalmente me perguntam antes de começar um projeto.",
      itens: [
        {
          p: "Quanto custa criar um site profissional?",
          r: "O investimento depende do escopo: quantidade de páginas, funcionalidades e integrações. Depois de entender o projeto, envio uma proposta com valor, prazo e entregas definidos. Os modelos por segmento são a opção mais acessível para quem quer estar no ar rapidamente.",
        },
        {
          p: "Quanto tempo leva para o site ficar pronto?",
          r: "Um modelo personalizado fica pronto em poucos dias. Um site sob medida costuma levar algumas semanas, conforme o escopo. O prazo exato vem na proposta, antes de qualquer compromisso.",
        },
        {
          p: "O site vai aparecer no Google?",
          r: "Todo site é entregue com SEO técnico: estrutura semântica, títulos e descrições, dados estruturados, sitemap, carregamento rápido e versão para celular. Essa é a base para o Google indexar e posicionar a página; a posição final também depende da concorrência e do conteúdo.",
        },
        {
          p: "O que está incluído na entrega?",
          r: "Design responsivo, desenvolvimento, otimização de desempenho e SEO, integração com WhatsApp e formulários, publicação no seu domínio e suporte após a entrega. Painel administrativo, pagamentos online e outras integrações entram quando o projeto pede.",
        },
        {
          p: "Atende empresas de outras cidades e países?",
          r: "Sim. O trabalho é remoto, com atendimento em português, inglês e espanhol para clientes no Brasil, na Bolívia e em outros países.",
        },
        {
          p: "E depois que o site estiver no ar?",
          r: "Continuo à disposição. Correções de falhas da minha parte não têm custo; alterações de conteúdo, novas páginas e funcionalidades são orçadas à parte.",
        },
      ],
    },
    contato: {
      titulo: "Solicite uma proposta",
      subtitulo:
        "Descreva o seu projeto em poucas linhas. Retorno com as perguntas certas, escopo, prazo e investimento.",
      abas: { orcamento: "Proposta", mensagem: "Mensagem" },
      nome: "Nome",
      email: "E-mail",
      tipo: "Tipo de projeto",
      selecione: "Selecione uma opção",
      tipos: [
        "Site institucional",
        "Landing page",
        "Loja ou catálogo",
        "Aplicação web",
        "Outro",
      ],
      mensagem: "Mensagem",
      mensagemOrcamento: "Sobre o projeto",
      placeholderNome: "Seu nome",
      placeholderEmail: "voce@empresa.com",
      placeholderMensagem: "Como posso ajudar?",
      placeholderOrcamento: "Objetivo, prazo desejado e referências",
      enviarOrcamento: "Solicitar proposta",
      enviarMensagem: "Enviar mensagem",
      nota: "O envio abre o seu aplicativo de e-mail com a mensagem pronta.",
      copiar: "Copiar e-mail",
      copiado: "E-mail copiado",
      assuntoOrcamento: (tipo, nome) => `Proposta: ${tipo} | ${nome}`,
      assuntoMensagem: (nome) => `Contato pelo portfólio | ${nome}`,
      rotulos: { nome: "Nome", email: "E-mail", tipo: "Tipo de projeto" },
    },
    rodape: {
      direitos: "Todos os direitos reservados.",
      privacidade: "Privacidade",
      topo: "Voltar ao topo",
    },
    privacidade: {
      titulo: "Privacidade",
      texto: [
        "Este site não utiliza cookies de rastreamento nem coleta dados automaticamente. As preferências de idioma e tema ficam salvas apenas no seu navegador.",
        "Os formulários não enviam informações a um servidor: eles abrem o seu aplicativo de e-mail com a mensagem pronta. O conteúdo enviado é usado exclusivamente para responder ao seu contato.",
        "Para solicitar a exclusão de qualquer mensagem enviada, escreva para o e-mail de contato.",
      ],
      fechar: "Fechar",
    },
  },

  en: {
    meta: {
      titulo: "Bryan Maciel | Freelance Web Developer: Websites & Landing Pages",
      descricao:
        "Freelance web developer building fast, responsive, SEO-optimized business websites, landing pages and web applications with React and Next.js. Custom work and ready-made templates for clinics, restaurants, shops and local services.",
      ogTitulo: "Bryan Maciel | Web Developer",
      ogDescricao:
        "A digital presence that matches your business. Custom websites, landing pages and web applications.",
      palavras: [
        "freelance web developer",
        "web developer for hire",
        "website developer",
        "website design and development",
        "small business website",
        "business website",
        "landing page developer",
        "landing page design",
        "SEO-friendly website",
        "responsive website",
        "website templates",
        "restaurant website",
        "React developer",
        "Next.js developer",
        "front-end developer",
        "full stack developer",
        "remote web developer",
        "Bryan Maciel",
      ],
    },
    nav: {
      projetos: "Work",
      processo: "Process",
      sobre: "About",
      faq: "FAQ",
      contato: "Contact",
      cta: "Request a proposal",
      abrirMenu: "Open menu",
      fecharMenu: "Close menu",
      idioma: "Language",
      temaClaro: "Switch to light theme",
      temaEscuro: "Switch to dark theme",
    },
    hero: {
      chamada: "Freelance web developer · Websites and landing pages",
      titulo: ["A digital presence", "that matches", "your business."],
      texto:
        "I design and build custom business websites, landing pages and web applications with refined design, fast load times and a structure built to turn visitors into clients.",
      ctaPrimario: "Request a proposal",
      ctaSecundario: "View work",
      pausar: "Pause slideshow",
      continuar: "Resume slideshow",
      anterior: "Previous site",
      proximo: "Next site",
      abrirSite: "Open site",
      cliente: "Client",
      modelo: "Template",
      provaSocial: (n, m) => `${n} websites live and ${m} industry templates`,
    },
    projetos: {
      titulo: "Work",
      subtitulo:
        "A selection of live client websites and original products. Drag to browse and hover over a site to scroll through the page.",
      abas: {
        publicados: "Live",
        modelos: "Templates",
        desenvolvimento: "In development",
      },
      visitar: "Visit site",
      arrastar: "Drag",
      anterior: "Previous project",
      proximo: "Next project",
      pedirAcesso: "Request a demo",
      privado: "Restricted access",
      privadoNota:
        "There is no public demo for this project. I'm happy to walk you through it on a short call.",
      entregas: "Delivered scope",
      modelos: {
        titulo: "Ready-made templates by industry",
        texto:
          "Complete, published websites for different industries, customized with your business name, city, WhatsApp and Instagram. A fast, affordable way to go live with a professional website.",
        categorias: {
          todos: "All",
          saude: "Health",
          alimentacao: "Food",
          beleza: "Beauty and wellness",
          servicos: "Services",
          comercio: "Retail",
          casa: "Home and construction",
          turismo: "Travel and real estate",
          educacao: "Education",
        },
        altImagem: "Website template:",
        emIngles: "English",
        emInglesNota: "English-language website built for the US market",
        verDemo: "View demo",
        quero: "I want this template",
        verTodos: (n) => `View all ${n} templates`,
        mostrarMenos: "Show less",
        assunto: (nome) => `I want the ${nome} template`,
        corpo: (nome) =>
          `Hi Bryan, I liked the "${nome}" template in your portfolio and would like a website like it for my business.`,
      },
      assuntoPedido: (nome) => `Demo of ${nome}`,
      corpoPedido: (nome) =>
        `Hi Bryan, I came across ${nome} in your portfolio and would like to schedule a demo.`,
      status: {
        cliente: "Client",
        saas: "SaaS",
        hackathon: "Hackathon project",
        jogo: "Unity game",
        sistema: "Operating system",
      },
    },
    ctaFaixa: {
      titulo: "Your business deserves a website that works for it.",
      texto:
        "Share the details of your project and receive a proposal with a defined scope, timeline and investment, with no obligation.",
      botao: "Request a proposal",
      secundario: "Send an email",
    },
    processo: {
      titulo: "Process",
      subtitulo: "A lean, transparent method, from first contact to launch.",
      etapas: [
        {
          titulo: "Discovery",
          texto:
            "I learn about the business, the audience and the goals the website needs to meet.",
        },
        {
          titulo: "Proposal and design",
          texto:
            "Scope, timeline and investment are defined. The layout is approved before development starts.",
        },
        {
          titulo: "Development",
          texto:
            "Clean, responsive code optimized for performance and SEO, with updates at every stage.",
        },
        {
          titulo: "Launch and support",
          texto:
            "Deployment on your own domain and post-launch support. Fixes for issues on my end are free of charge; changes and new features are quoted separately.",
        },
      ],
    },
    sobre: {
      titulo: "About",
      paragrafos: [
        "I've been a web developer since 2024 and I'm studying Systems Engineering. I build business websites, landing pages and web applications for companies that need a solid, professional digital presence.",
        "I work with React, Next.js and TypeScript, and my background in C, Python and C# lets me go beyond the interface: payment integrations, admin dashboards, performance tuning and technical SEO.",
      ],
      stackTitulo: "Technologies",
      recrutadoresTitulo: "For recruiters",
      recrutadoresTexto:
        "Available for Front-End or Full Stack development roles.",
      disponibilidade: [
        "Remote",
        "On-site in Bolivia only",
        "Open to relocating outside Latin America",
      ],
      pedirCurriculo: "Request my CV",
      assuntoCurriculo: "CV request",
    },
    faq: {
      titulo: "Frequently asked questions",
      subtitulo: "What clients usually ask before starting a project.",
      itens: [
        {
          p: "How much does a professional website cost?",
          r: "It depends on the scope: number of pages, features and integrations. Once I understand the project, I send a proposal with a defined price, timeline and deliverables. The industry templates are the most affordable option for getting online quickly.",
        },
        {
          p: "How long does it take to build a website?",
          r: "A customized template is ready in a few days. A custom website usually takes a few weeks, depending on the scope. The exact timeline is in the proposal, before any commitment.",
        },
        {
          p: "Will my website show up on Google?",
          r: "Every website ships with technical SEO: semantic structure, titles and descriptions, structured data, a sitemap, fast loading and a mobile-friendly layout. That is the foundation Google needs to index and rank the page; the final position also depends on competition and content.",
        },
        {
          p: "What is included?",
          r: "Responsive design, development, performance and SEO optimization, WhatsApp and form integration, deployment on your domain and post-launch support. Admin dashboards, online payments and other integrations are added when the project needs them.",
        },
        {
          p: "Do you work with clients in other countries?",
          r: "Yes. I work remotely and communicate in English, Portuguese and Spanish, with clients in Brazil, Bolivia and beyond.",
        },
        {
          p: "What happens after launch?",
          r: "I'm still available. Fixes for issues on my end are free of charge; content changes, new pages and features are quoted separately.",
        },
      ],
    },
    contato: {
      titulo: "Request a proposal",
      subtitulo:
        "Describe your project in a few lines. I'll reply with the right questions, scope, timeline and investment.",
      abas: { orcamento: "Proposal", mensagem: "Message" },
      nome: "Name",
      email: "Email",
      tipo: "Project type",
      selecione: "Choose an option",
      tipos: [
        "Business website",
        "Landing page",
        "Shop or catalog",
        "Web application",
        "Other",
      ],
      mensagem: "Message",
      mensagemOrcamento: "About the project",
      placeholderNome: "Your name",
      placeholderEmail: "you@company.com",
      placeholderMensagem: "How can I help?",
      placeholderOrcamento: "Goal, preferred timeline and references",
      enviarOrcamento: "Request a proposal",
      enviarMensagem: "Send message",
      nota: "Sending opens your email app with the message ready to go.",
      copiar: "Copy email",
      copiado: "Email copied",
      assuntoOrcamento: (tipo, nome) => `Proposal: ${tipo} | ${nome}`,
      assuntoMensagem: (nome) => `Portfolio contact | ${nome}`,
      rotulos: { nome: "Name", email: "Email", tipo: "Project type" },
    },
    rodape: {
      direitos: "All rights reserved.",
      privacidade: "Privacy",
      topo: "Back to top",
    },
    privacidade: {
      titulo: "Privacy",
      texto: [
        "This website uses no tracking cookies and collects no data automatically. Your language and theme preferences are stored only in your browser.",
        "The forms don't send anything to a server: they open your email app with the message filled in. Whatever you send is used solely to reply to you.",
        "To request deletion of any message you sent, write to the contact email.",
      ],
      fechar: "Close",
    },
  },

  es: {
    meta: {
      titulo: "Bryan Maciel | Diseño y Desarrollo de Páginas Web Profesionales",
      descricao:
        "Desarrollador web freelance: diseño de páginas web profesionales, landing pages y aplicaciones web rápidas, responsivas y optimizadas para Google. Sitios a medida y plantillas listas para clínicas, restaurantes, tiendas y servicios.",
      ogTitulo: "Bryan Maciel | Desarrollador Web",
      ogDescricao:
        "Presencia digital a la altura de su negocio. Sitios profesionales, landing pages y aplicaciones web a medida.",
      palavras: [
        "diseño de páginas web",
        "desarrollo de páginas web",
        "creación de sitios web",
        "desarrollador web",
        "desarrollador web freelance",
        "página web para empresas",
        "sitio web profesional",
        "landing page",
        "diseño web Bolivia",
        "desarrollo web Bolivia",
        "página web para restaurante",
        "página web para clínica",
        "posicionamiento SEO",
        "plantillas web",
        "programador web",
        "desarrollador React",
        "desarrollador Next.js",
        "desarrollador full stack",
        "Bryan Maciel",
      ],
    },
    nav: {
      projetos: "Proyectos",
      processo: "Proceso",
      sobre: "Perfil",
      faq: "Preguntas",
      contato: "Contacto",
      cta: "Solicitar propuesta",
      abrirMenu: "Abrir menú",
      fecharMenu: "Cerrar menú",
      idioma: "Idioma",
      temaClaro: "Activar tema claro",
      temaEscuro: "Activar tema oscuro",
    },
    hero: {
      chamada: "Desarrollador web · Diseño de páginas web y landing pages",
      titulo: ["Presencia digital", "a la altura de", "su negocio."],
      texto:
        "Diseño y desarrollo sitios institucionales, landing pages y aplicaciones web a medida, con un diseño cuidado, carga rápida y una estructura pensada para convertir visitantes en clientes.",
      ctaPrimario: "Solicitar propuesta",
      ctaSecundario: "Ver proyectos",
      pausar: "Pausar presentación",
      continuar: "Continuar presentación",
      anterior: "Sitio anterior",
      proximo: "Siguiente sitio",
      abrirSite: "Abrir sitio",
      cliente: "Cliente",
      modelo: "Plantilla",
      provaSocial: (n, m) =>
        `${n} sitios en producción y ${m} plantillas por rubro`,
    },
    projetos: {
      titulo: "Proyectos",
      subtitulo:
        "Una selección de sitios en producción para clientes y de productos propios. Arrastre para navegar y pase el cursor sobre un sitio para recorrer la página.",
      abas: {
        publicados: "En producción",
        modelos: "Plantillas",
        desenvolvimento: "En desarrollo",
      },
      visitar: "Visitar sitio",
      arrastar: "Arrastrar",
      anterior: "Proyecto anterior",
      proximo: "Siguiente proyecto",
      pedirAcesso: "Solicitar demostración",
      privado: "Acceso restringido",
      privadoNota:
        "Proyecto sin demostración pública. Lo presento en una breve llamada.",
      entregas: "Alcance entregado",
      modelos: {
        titulo: "Plantillas listas por rubro",
        texto:
          "Sitios completos y publicados para distintos rubros, personalizados con el nombre, la ciudad, el WhatsApp y el Instagram de su negocio. Una forma rápida y accesible de estar en línea con un sitio profesional.",
        categorias: {
          todos: "Todas",
          saude: "Salud",
          alimentacao: "Gastronomía",
          beleza: "Belleza y bienestar",
          servicos: "Servicios",
          comercio: "Comercio",
          casa: "Hogar y construcción",
          turismo: "Turismo e inmuebles",
          educacao: "Educación",
        },
        altImagem: "Plantilla de sitio web:",
        emIngles: "En inglés",
        emInglesNota: "Sitio en inglés, hecho para el mercado de Estados Unidos",
        verDemo: "Ver demostración",
        quero: "Quiero esta plantilla",
        verTodos: (n) => `Ver las ${n} plantillas`,
        mostrarMenos: "Mostrar menos",
        assunto: (nome) => `Quiero la plantilla ${nome}`,
        corpo: (nome) =>
          `Hola, Bryan. Me gustó la plantilla "${nome}" de su portafolio y quiero un sitio así para mi negocio.`,
      },
      assuntoPedido: (nome) => `Demostración del proyecto ${nome}`,
      corpoPedido: (nome) =>
        `Hola, Bryan. Conocí el proyecto ${nome} en su portafolio y me gustaría agendar una demostración.`,
      status: {
        cliente: "Cliente",
        saas: "SaaS",
        hackathon: "Proyecto de hackathon",
        jogo: "Juego en Unity",
        sistema: "Sistema operativo",
      },
    },
    ctaFaixa: {
      titulo: "Su negocio merece un sitio que trabaje para él.",
      texto:
        "Envíe los detalles de su proyecto y reciba una propuesta con alcance, plazo e inversión definidos, sin compromiso.",
      botao: "Solicitar propuesta",
      secundario: "Enviar un correo",
    },
    processo: {
      titulo: "Proceso",
      subtitulo:
        "Un método ágil y transparente, del primer contacto a la publicación.",
      etapas: [
        {
          titulo: "Diagnóstico",
          texto:
            "Comprendo el negocio, el público y los objetivos que el sitio debe alcanzar.",
        },
        {
          titulo: "Propuesta y diseño",
          texto:
            "Alcance, plazo e inversión definidos. El diseño se aprueba antes del desarrollo.",
        },
        {
          titulo: "Desarrollo",
          texto:
            "Código limpio, responsivo y optimizado para rendimiento y SEO, con seguimiento en cada etapa.",
        },
        {
          titulo: "Publicación y soporte",
          texto:
            "Publicación en dominio propio y soporte posterior a la entrega. La corrección de fallas de mi parte no tiene costo; los cambios y nuevas funcionalidades se presupuestan por separado.",
        },
      ],
    },
    sobre: {
      titulo: "Perfil",
      paragrafos: [
        "Soy desarrollador web desde 2024 y estudiante de Ingeniería de Sistemas. Desarrollo sitios institucionales, landing pages y aplicaciones web para empresas que necesitan una presencia digital sólida y profesional.",
        "Trabajo con React, Next.js y TypeScript, y mi formación en C, Python y C# me permite ir más allá de la interfaz: integraciones de pago, paneles de administración, optimización de rendimiento y SEO técnico.",
      ],
      stackTitulo: "Tecnologías",
      recrutadoresTitulo: "Para reclutadores",
      recrutadoresTexto:
        "Disponible para posiciones de desarrollo Front-End o Full Stack.",
      disponibilidade: [
        "Remoto",
        "Presencial solo en Bolivia",
        "Disponible para mudarme fuera de América Latina",
      ],
      pedirCurriculo: "Solicitar CV",
      assuntoCurriculo: "Solicitud de CV",
    },
    faq: {
      titulo: "Preguntas frecuentes",
      subtitulo: "Lo que suelen preguntarme antes de empezar un proyecto.",
      itens: [
        {
          p: "¿Cuánto cuesta una página web profesional?",
          r: "La inversión depende del alcance: cantidad de páginas, funcionalidades e integraciones. Después de entender el proyecto, envío una propuesta con precio, plazo y entregables definidos. Las plantillas por rubro son la opción más accesible para estar en línea rápidamente.",
        },
        {
          p: "¿Cuánto tiempo tarda en estar lista la página?",
          r: "Una plantilla personalizada está lista en pocos días. Un sitio a medida suele llevar algunas semanas, según el alcance. El plazo exacto figura en la propuesta, antes de cualquier compromiso.",
        },
        {
          p: "¿Mi página aparecerá en Google?",
          r: "Cada sitio se entrega con SEO técnico: estructura semántica, títulos y descripciones, datos estructurados, sitemap, carga rápida y versión móvil. Es la base para que Google indexe y posicione la página; la posición final también depende de la competencia y del contenido.",
        },
        {
          p: "¿Qué incluye la entrega?",
          r: "Diseño responsivo, desarrollo, optimización de rendimiento y SEO, integración con WhatsApp y formularios, publicación en su dominio y soporte posterior a la entrega. Paneles de administración, pagos en línea y otras integraciones se suman cuando el proyecto lo requiere.",
        },
        {
          p: "¿Trabaja con empresas de otras ciudades y países?",
          r: "Sí. Trabajo de forma remota, con atención en español, portugués e inglés para clientes en Bolivia, Brasil y otros países.",
        },
        {
          p: "¿Y después de que el sitio esté en línea?",
          r: "Sigo a disposición. La corrección de fallas de mi parte no tiene costo; los cambios de contenido, nuevas páginas y funcionalidades se presupuestan por separado.",
        },
      ],
    },
    contato: {
      titulo: "Solicite una propuesta",
      subtitulo:
        "Describa su proyecto en pocas líneas. Respondo con las preguntas adecuadas, alcance, plazo e inversión.",
      abas: { orcamento: "Propuesta", mensagem: "Mensaje" },
      nome: "Nombre",
      email: "Correo",
      tipo: "Tipo de proyecto",
      selecione: "Seleccione una opción",
      tipos: [
        "Sitio institucional",
        "Landing page",
        "Tienda o catálogo",
        "Aplicación web",
        "Otro",
      ],
      mensagem: "Mensaje",
      mensagemOrcamento: "Sobre el proyecto",
      placeholderNome: "Su nombre",
      placeholderEmail: "usted@empresa.com",
      placeholderMensagem: "¿En qué puedo ayudarle?",
      placeholderOrcamento: "Objetivo, plazo deseado y referencias",
      enviarOrcamento: "Solicitar propuesta",
      enviarMensagem: "Enviar mensaje",
      nota: "Al enviar se abre su aplicación de correo con el mensaje listo.",
      copiar: "Copiar correo",
      copiado: "Correo copiado",
      assuntoOrcamento: (tipo, nome) => `Propuesta: ${tipo} | ${nome}`,
      assuntoMensagem: (nome) => `Contacto desde el portafolio | ${nome}`,
      rotulos: { nome: "Nombre", email: "Correo", tipo: "Tipo de proyecto" },
    },
    rodape: {
      direitos: "Todos los derechos reservados.",
      privacidade: "Privacidad",
      topo: "Volver arriba",
    },
    privacidade: {
      titulo: "Privacidad",
      texto: [
        "Este sitio no utiliza cookies de seguimiento ni recopila datos automáticamente. Las preferencias de idioma y tema se guardan solo en su navegador.",
        "Los formularios no envían información a un servidor: abren su aplicación de correo con el mensaje listo. El contenido enviado se utiliza exclusivamente para responderle.",
        "Para solicitar la eliminación de cualquier mensaje enviado, escriba al correo de contacto.",
      ],
      fechar: "Cerrar",
    },
  },
};

export default textos;
