// Todos os textos da interface, por idioma.
const textos = {
  pt: {
    meta: {
      titulo:
        "Bryan Maciel | Desenvolvedor Web: sites institucionais e landing pages",
      descricao:
        "Desenvolvimento de sites institucionais, landing pages e aplicações web de alto desempenho com React, Next.js e TypeScript. Projetos sob medida, otimizados para SEO e conversão.",
    },
    nav: {
      projetos: "Projetos",
      processo: "Processo",
      sobre: "Sobre",
      contato: "Contato",
      cta: "Solicitar proposta",
      abrirMenu: "Abrir menu",
      fecharMenu: "Fechar menu",
      idioma: "Idioma",
      temaClaro: "Ativar tema claro",
      temaEscuro: "Ativar tema escuro",
    },
    hero: {
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
      provaSocial: (n) => `${n} sites em produção`,
    },
    projetos: {
      titulo: "Projetos",
      subtitulo:
        "Uma seleção de sites em produção para clientes e de produtos autorais. Arraste para navegar e passe o cursor sobre um site para percorrer a página.",
      abas: {
        publicados: "Em produção",
        desenvolvimento: "Em desenvolvimento",
      },
      visitar: "Visitar site",
      anterior: "Projeto anterior",
      proximo: "Próximo projeto",
      pedirAcesso: "Solicitar demonstração",
      privado: "Acesso restrito",
      privadoNota:
        "Projeto sem demonstração pública. Apresento o trabalho em uma breve chamada.",
      entregas: "Escopo entregue",
      outrosTitulo: "Outros projetos em produção",
      assuntoPedido: (nome) => `Demonstração do projeto ${nome}`,
      corpoPedido: (nome) =>
        `Olá, Bryan. Conheci o projeto ${nome} pelo seu portfólio e gostaria de agendar uma demonstração.`,
      status: {
        cliente: "Cliente",
        modelo: "Modelo para restaurantes",
        vendas: "Página de vendas",
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
      titulo:
        "Bryan Maciel | Web Developer: business websites and landing pages",
      descricao:
        "High-performance business websites, landing pages and web applications built with React, Next.js and TypeScript. Custom work, optimized for SEO and conversion.",
    },
    nav: {
      projetos: "Work",
      processo: "Process",
      sobre: "About",
      contato: "Contact",
      cta: "Request a proposal",
      abrirMenu: "Open menu",
      fecharMenu: "Close menu",
      idioma: "Language",
      temaClaro: "Switch to light theme",
      temaEscuro: "Switch to dark theme",
    },
    hero: {
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
      provaSocial: (n) => `${n} websites live`,
    },
    projetos: {
      titulo: "Work",
      subtitulo:
        "A selection of live client websites and original products. Drag to browse and hover over a site to scroll through the page.",
      abas: { publicados: "Live", desenvolvimento: "In development" },
      visitar: "Visit site",
      anterior: "Previous project",
      proximo: "Next project",
      pedirAcesso: "Request a demo",
      privado: "Restricted access",
      privadoNota:
        "There is no public demo for this project. I'm happy to walk you through it on a short call.",
      entregas: "Delivered scope",
      outrosTitulo: "More live projects",
      assuntoPedido: (nome) => `Demo of ${nome}`,
      corpoPedido: (nome) =>
        `Hi Bryan, I came across ${nome} in your portfolio and would like to schedule a demo.`,
      status: {
        cliente: "Client",
        modelo: "Restaurant template",
        vendas: "Sales page",
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
      titulo:
        "Bryan Maciel | Desarrollador Web: sitios institucionales y landing pages",
      descricao:
        "Desarrollo de sitios institucionales, landing pages y aplicaciones web de alto rendimiento con React, Next.js y TypeScript. Proyectos a medida, optimizados para SEO y conversión.",
    },
    nav: {
      projetos: "Proyectos",
      processo: "Proceso",
      sobre: "Perfil",
      contato: "Contacto",
      cta: "Solicitar propuesta",
      abrirMenu: "Abrir menú",
      fecharMenu: "Cerrar menú",
      idioma: "Idioma",
      temaClaro: "Activar tema claro",
      temaEscuro: "Activar tema oscuro",
    },
    hero: {
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
      provaSocial: (n) => `${n} sitios en producción`,
    },
    projetos: {
      titulo: "Proyectos",
      subtitulo:
        "Una selección de sitios en producción para clientes y de productos propios. Arrastre para navegar y pase el cursor sobre un sitio para recorrer la página.",
      abas: { publicados: "En producción", desenvolvimento: "En desarrollo" },
      visitar: "Visitar sitio",
      anterior: "Proyecto anterior",
      proximo: "Siguiente proyecto",
      pedirAcesso: "Solicitar demostración",
      privado: "Acceso restringido",
      privadoNota:
        "Proyecto sin demostración pública. Lo presento en una breve llamada.",
      entregas: "Alcance entregado",
      outrosTitulo: "Otros proyectos en producción",
      assuntoPedido: (nome) => `Demostración del proyecto ${nome}`,
      corpoPedido: (nome) =>
        `Hola, Bryan. Conocí el proyecto ${nome} en su portafolio y me gustaría agendar una demostración.`,
      status: {
        cliente: "Cliente",
        modelo: "Plantilla para restaurantes",
        vendas: "Página de ventas",
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
