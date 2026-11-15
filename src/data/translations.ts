import type { Language } from '../components/LanguageContext';
import { LOCALES_EXTRA_A } from './localesExtraA';
import { LOCALES_EXTRA_B } from './localesExtraB';

export interface SiteTranslations {
  nav: {
    ariaLabel: string;
    mobileAriaLabel: string;
    links: Array<{ label: string; href: string }>;
    cta: string;
    mobileCta: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    langGroupAria: string;
  };
  hero: {
    city: string;
    tagline: string;
    lightModeBtn: string;
    darkModeBtn: string;
    lightModeAria: string;
    darkModeAria: string;
    headlineLine1: string;
    headlineLine2Prefix: string;
    headlineHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    imageFallback: string;
    imageKicker: string;
    imageCaption: string;
    imageLocation: string;
  };
  marquee: {
    ariaLabel: string;
    headingPrefix: string;
    clients: Array<{
      id: string;
      name: string;
      segment: string;
      mark: 'diamond' | 'arch' | 'shield' | 'frame' | 'crest' | 'compass';
    }>;
  };
  about: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    cta: string;
  };
  metrics: {
    kicker: string;
    title: string;
    subtitle: string;
    stats: Array<{
      id: string;
      target: number;
      prefix?: string;
      suffix?: string;
      label: string;
      context: string;
    }>;
  };
  services: {
    kicker: string;
    title: string;
    topCta: string;
    cardFooterNote: string;
    cardCta: string;
  };
  portfolio: {
    kicker: string;
    title: string;
    filterAria: string;
    categories: {
      all: string;
      websites: string;
      branding: string;
      social: string;
    };
    showing: string;
    projectSingular: string;
    projectPlural: string;
    inCategory: string;
    resetFilter: string;
    openProjectAriaPrefix: string;
    viewDetails: string;
    readDetails: string;
    closeModalAria: string;
    challengeHeading: string;
    solutionHeading: string;
    outcomeLabel: string;
    modalCta: string;
  };
  caseStudies: {
    kicker: string;
    title: string;
    prevAria: string;
    nextAria: string;
    tabListAria: string;
    caseLabel: string;
    problemHeading: string;
    solutionHeading: string;
    implementedHeading: string;
    resultsHeading: string;
    cta: string;
  };
  testimonials: {
    kicker: string;
    title: string;
  };
  pricing: {
    kicker: string;
    title: string;
    helper: string;
    mostPopular: string;
    selected: string;
    addonsKicker: string;
    addonsTitle: string;
    addonsCta: string;
    addonIncluded: string;
    addonSelect: string;
    planSelectedLabel: string;
    planClearedNote: string;
    addonsEmptyPrompt: string;
    addonsSelectedHeading: string;
    addonsClearSelection: string;
    addonsIncludeInQuote: string;
    addonsQuoteMessage: (addonsList: string, planName?: string | null) => string;
  };
  trust: {
    kicker: string;
    title: string;
    subtitle: string;
    badges: Array<{
      id: 'secure-payment' | 'support-24-7' | 'satisfaction-guarantee';
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    whatsappLabel: string;
    instagramLabel: string;
    locationLabel: string;
    locationValue: string;
    successTitle: string;
    successDesc: string;
    sendWhatsAppBtn: string;
    editInfoBtn: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    companyLabel: string;
    companyPlaceholder: string;
    companyError: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneError: string;
    serviceLabel: string;
    serviceOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    directCallLink: string;
    briefGreeting: (name: string, company: string) => string;
    briefInterest: (service: string) => string;
    briefPhone: (phone: string) => string;
    briefDetails: (details: string) => string;
    briefClosing: string;
  };
  footer: {
    summary: string;
    navAria: string;
    themeToLight: string;
    themeToDark: string;
    themeLightLabel: string;
    themeDarkLabel: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterConfirmedPrefix: string;
    newsletterAnotherEmail: string;
    newsletterSrLabel: string;
    newsletterPlaceholder: string;
    newsletterInvalidEmail: string;
    newsletterSubmit: string;
    copyrightSuffix: string;
  };
  floating: {
    tooltipHighlight: string;
    tooltipSuffix: string;
    ariaLabel: string;
    ctaLabel: string;
    scrollToTopAria: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  pt: {
    nav: {
      ariaLabel: 'Navegação principal',
      mobileAriaLabel: 'Menu mobile',
      links: [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Portfólio', href: '#portfolio' },
        { label: 'Planos', href: '#planos' },
        { label: 'Contato', href: '#contato' },
      ],
      cta: 'Solicitar orçamento',
      mobileCta: 'Solicitar orçamento no WhatsApp',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      switchToLight: 'Alternar para Modo Claro',
      switchToDark: 'Alternar para Modo Escuro',
      langGroupAria: 'Selecionar idioma',
    },
    hero: {
      city: 'Porto Alegre, RS',
      tagline: 'Agência de Sites e Presença Digital',
      lightModeBtn: 'Modo Claro',
      darkModeBtn: 'Modo Escuro',
      lightModeAria: 'Ativar tema claro elegante',
      darkModeAria: 'Ativar tema escuro premium',
      headlineLine1: 'O digital está cheio de empresas. Fazemos',
      headlineLine2Prefix: 'a sua empresa ser',
      headlineHighlight: 'impossível de ignorar!',
      description:
        'Criamos sites profissionais, identidades visuais exclusivas e perfis estratégicos para Instagram pensados para pequenas empresas locais que querem profissionalizar o atendimento e conquistar mais clientes todos os dias.',
      primaryCta: 'Solicitar orçamento personalizado',
      secondaryCta: 'Ver projetos realizados',
      imageAlt:
        'Estação de criação da Mocelin Digital Agency exibindo site profissional em preto e dourado',
      imageFallback: 'Mocelin Digital Agency — Porto Alegre',
      imageKicker: 'Design exclusivo · Entrega em 2 a 4 dias',
      imageCaption: 'Presença digital feita para gerar confiança imediata',
      imageLocation: 'Porto Alegre · RS',
    },
    marquee: {
      ariaLabel: 'Empresas e marcas atendidas',
      headingPrefix: 'Empresas de Porto Alegre e região que confiam na',
      clients: [
        { id: 'avant', name: 'Avant Estética', segment: 'Saúde & Beleza', mark: 'diamond' },
        { id: 'aurore', name: 'Bistrô Aurore', segment: 'Gastronomia', mark: 'crest' },
        { id: 'midas', name: 'Midas Club', segment: 'Barbearia', mark: 'shield' },
        { id: 'arcus', name: 'Arcus Arquitetura', segment: 'Arquitetura', mark: 'arch' },
        { id: 'guaiba', name: 'Óptica Guaíba', segment: 'Varejo Local', mark: 'frame' },
        { id: 'vertice', name: 'Studio Vértice', segment: 'Interiores', mark: 'compass' },
      ],
    },
    about: {
      kicker: 'Sobre a agência',
      title: 'Transformamos negócios locais em marcas que inspiram confiança.',
      paragraph1:
        'Na Mocelin Digital Agency, transformamos negócios em marcas que se destacam. Criamos sites profissionais, logotipos exclusivos, identidades visuais e perfis estratégicos para Instagram, desenvolvidos para transmitir confiança, despertar interesse e conquistar mais clientes.',
      paragraph2:
        'Não deixe seus próximos clientes escolherem a concorrência. Entre em contato agora, solicite seu orçamento e dê à sua marca o destaque que ela merece em Porto Alegre e região.',
      cta: 'Falar com um especialista agora',
    },
    metrics: {
      kicker: 'Autoridade comprovada',
      title: 'Números que impactam',
      subtitle:
        'Resultados construídos com atendimento 100% humano, prazo de 2 a 4 dias e foco total em empresas locais.',
      stats: [
        {
          id: 'projetos-concluidos',
          target: 78,
          prefix: '+',
          label: 'Projetos Concluídos',
          context:
            'Sites, identidades visuais e perfis profissionais publicados com entrega ágil.',
        },
        {
          id: 'clientes-satisfeitos',
          target: 54,
          prefix: '+',
          label: 'Clientes Satisfeitos',
          context:
            'Mais de 50 estabelecimentos atendidos em Porto Alegre e região metropolitana.',
        },
        {
          id: 'anos-experiencia',
          target: 4,
          suffix: ' anos',
          label: 'Anos de Experiência',
          context:
            'Atuação dedicada a transformar negócios locais em marcas digitais confiáveis.',
        },
      ],
    },
    services: {
      kicker: 'Nossos serviços',
      title: 'Soluções completas para profissionalizar o atendimento da sua empresa.',
      topCta: 'Solicitar orçamento personalizado',
      cardFooterNote: 'Entrega ágil · Revisão garantida',
      cardCta: 'Quero este serviço',
    },
    portfolio: {
      kicker: 'Portfólio selecionado',
      title: 'Projetos criados para gerar credibilidade e clientes reais.',
      filterAria: 'Filtrar projetos por categoria',
      categories: {
        all: 'Todos',
        websites: 'Websites',
        branding: 'Branding',
        social: 'Social Media',
      },
      showing: 'Exibindo',
      projectSingular: 'projeto',
      projectPlural: 'projetos',
      inCategory: 'em',
      resetFilter: 'Ver todas as categorias',
      openProjectAriaPrefix: 'Abrir detalhes do projeto',
      viewDetails: 'Ver detalhes',
      readDetails: 'Ler detalhes do projeto',
      closeModalAria: 'Fechar detalhes do projeto',
      challengeHeading: 'Desafio do negócio',
      solutionHeading: 'Solução entregue',
      outcomeLabel: 'Resultado observado',
      modalCta: 'Quero um resultado assim',
    },
    caseStudies: {
      kicker: 'Estudos de caso em profundidade',
      title: 'Do problema real à execução e aos resultados mensuráveis.',
      prevAria: 'Estudo de caso anterior',
      nextAria: 'Próximo estudo de caso',
      tabListAria: 'Selecionar estudo de caso',
      caseLabel: 'Estudo de caso',
      problemHeading: 'Problema do cliente',
      solutionHeading: 'Solução da agência',
      implementedHeading: 'O que foi implementado',
      resultsHeading: 'Resultados alcançados',
      cta: 'Quero um projeto assim',
    },
    testimonials: {
      kicker: 'Depoimentos de clientes',
      title: 'Quem já profissionalizou sua marca com a Mocelin Digital Agency.',
    },
    pricing: {
      kicker: 'Investimento transparente',
      title: 'Soluções digitais completas para sua marca crescer, vender e se destacar online.',
      helper:
        'Passe o mouse ou clique em um plano para comparar e solicitar seu orçamento com atendimento humano e revisão garantida.',
      mostPopular: 'Mais escolhido',
      selected: 'Selecionado',
      addonsKicker: 'Serviços adicionais',
      addonsTitle: 'Identidade visual e Instagram para completar sua presença digital',
      addonsCta: 'Solicitar orçamento',
      addonIncluded: 'Incluído',
      addonSelect: 'Selecionar',
      planSelectedLabel: 'Pacote selecionado:',
      planClearedNote:
        'Nenhum pacote de site selecionado — você pode contratar apenas os serviços adicionais abaixo ou escolher um pacote acima.',
      addonsEmptyPrompt: 'Selecione um ou mais adicionais acima para incluir no seu orçamento.',
      addonsSelectedHeading: 'Adicionais selecionados para o projeto:',
      addonsClearSelection: 'Limpar seleção',
      addonsIncludeInQuote: 'Incluir no orçamento',
      addonsQuoteMessage: (addonsList, planName) =>
        planName
          ? `Olá! Gostaria de solicitar um orçamento para ${planName} incluindo os seguintes adicionais: ${addonsList}.`
          : `Olá! Gostaria de solicitar um orçamento somente para: ${addonsList}.`,
    },
    trust: {
      kicker: 'Segurança e compromisso',
      title: 'Garantias pensadas para a tranquilidade do seu negócio',
      subtitle:
        'Contrate com segurança: processo simples, comunicação direta e entrega garantida em 2 a 4 dias.',
      badges: [
        {
          id: 'secure-payment',
          title: 'Pagamento Seguro',
          subtitle: 'Transparência do início ao fim',
          description:
            'Condições combinadas com clareza antes de iniciar o projeto, sem cobranças surpresa ou taxas ocultas.',
        },
        {
          id: 'support-24-7',
          title: 'Suporte Disponível',
          subtitle: 'Atendimento Humano',
          description:
            'Canal direto pelo WhatsApp para tirar dúvidas, acompanhar o andamento e dar suporte à sua empresa.',
        },
        {
          id: 'satisfaction-guarantee',
          title: 'Garantia de Satisfação',
          subtitle: 'Revisão alinhada à sua marca',
          description:
            'Seu projeto conta com rodadas de ajustes para entregar exatamente o visual e a comunicação que você espera.',
        },
      ],
    },
    contact: {
      kicker: 'Contato direto',
      title: 'Vamos tirar o novo posicionamento da sua empresa do papel.',
      description:
        'Preencha seus dados ao lado para montar seu pedido de orçamento ou fale diretamente no nosso WhatsApp. Atendimento 100% humano, sem robôs.',
      whatsappLabel: 'WhatsApp comercial',
      instagramLabel: 'Instagram oficial',
      locationLabel: 'Atuação',
      locationValue: 'Porto Alegre · RS e atendimento online para todo o Brasil',
      successTitle: 'Solicitação pronta para envio',
      successDesc:
        'Recebemos os detalhes do seu negócio. Clique no botão abaixo para abrir a conversa no WhatsApp da Mocelin Digital Agency com seu briefing já preenchido:',
      sendWhatsAppBtn: 'Enviar agora pelo WhatsApp',
      editInfoBtn: 'Editar informações',
      formTitle: 'Solicitar orçamento personalizado',
      formSubtitle:
        'Retorno rápido em horário comercial com prazo estimado de 2 a 4 dias para entrega.',
      nameLabel: 'Seu nome *',
      namePlaceholder: 'Ex.: Mariana Souza',
      nameError: 'Informe seu nome completo para continuarmos.',
      companyLabel: 'Empresa ou segmento *',
      companyPlaceholder: 'Ex.: Clínica Bella Pele',
      companyError: 'Informe o nome da sua empresa ou segmento.',
      phoneLabel: 'WhatsApp com DDD *',
      phonePlaceholder: '(51) 99999-9999',
      phoneError: 'Informe um WhatsApp válido com DDD (ex.: 51 98026-9868).',
      serviceLabel: 'Serviço de interesse',
      serviceOptions: [
        'Site Simples (R$ 180 a R$ 450)',
        'Site Essencial (R$ 540 a R$ 820)',
        'Site Premium (R$ 1.000 a R$ 2.200)',
        'Criação de Logo (R$ 60 a R$ 100)',
        'Criação de Posts para Instagram (R$ 150 a R$ 250)',
        'Biografia e Instagram Profissional (R$ 250 a R$ 300)',
        'Orçamento Personalizado (Projeto sob medida)',
      ],
      messageLabel: 'Conte um pouco sobre seu negócio (opcional)',
      messagePlaceholder:
        'Ex.: Precisamos de um site para apresentar nossos serviços e direcionar clientes para o WhatsApp.',
      submitBtn: 'Preparar pedido no WhatsApp',
      directCallLink: 'Ou chamar direto agora mesmo',
      briefGreeting: (name, company) => `Olá! Me chamo ${name}, da empresa ${company}.`,
      briefInterest: (service) => `Tenho interesse em: ${service}.`,
      briefPhone: (phone) => `Meu WhatsApp para retorno: ${phone}.`,
      briefDetails: (details) => `Detalhes do projeto: ${details}`,
      briefClosing: 'Gostaria de conhecer as opções e solicitar um orçamento personalizado!',
    },
    footer: {
      summary:
        'Porto Alegre, RS · Criação de sites profissionais, identidade visual e Instagram estratégico para empresas locais.',
      navAria: 'Links do rodapé',
      themeToLight: 'Mudar para tema claro',
      themeToDark: 'Mudar para tema escuro',
      themeLightLabel: 'Tema Claro',
      themeDarkLabel: 'Tema Escuro',
      newsletterTitle: 'Dicas de posicionamento e marketing local',
      newsletterDesc:
        'Receba insights práticos da Mocelin Digital Agency para atrair mais clientes pelo Google e Instagram.',
      newsletterConfirmedPrefix: 'Inscrição confirmada para',
      newsletterAnotherEmail: 'Cadastrar outro e-mail',
      newsletterSrLabel: 'E-mail para receber dicas de marketing',
      newsletterPlaceholder: 'seu@email.com.br',
      newsletterInvalidEmail: 'Digite um endereço de e-mail válido.',
      newsletterSubmit: 'Inscrever-se',
      copyrightSuffix: 'Mocelin Digital Agency. Todos os direitos reservados.',
    },
    floating: {
      tooltipHighlight: 'Atendimento imediato',
      tooltipSuffix: 'Solicite seu orçamento agora',
      ariaLabel: 'Solicitar orçamento personalizado pelo WhatsApp',
      ctaLabel: 'Orçamento no WhatsApp',
      scrollToTopAria: 'Voltar ao topo da página',
    },
  },
  en: {
    nav: {
      ariaLabel: 'Main navigation',
      mobileAriaLabel: 'Mobile menu',
      links: [
        { label: 'About', href: '#sobre' },
        { label: 'Services', href: '#servicos' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Pricing', href: '#planos' },
        { label: 'Contact', href: '#contato' },
      ],
      cta: 'Request Quote',
      mobileCta: 'Request Quote on WhatsApp',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchToLight: 'Switch to Light Mode',
      switchToDark: 'Switch to Dark Mode',
      langGroupAria: 'Select language',
    },
    hero: {
      city: 'Porto Alegre, RS · Brazil',
      tagline: 'Websites & Digital Presence Agency',
      lightModeBtn: 'Light Mode',
      darkModeBtn: 'Dark Mode',
      lightModeAria: 'Switch to light theme',
      darkModeAria: 'Switch to dark theme',
      headlineLine1: 'The digital world is crowded. We make',
      headlineLine2Prefix: 'your business',
      headlineHighlight: 'impossible to ignore!',
      description:
        'We craft high-converting websites, exclusive brand identities, and strategic Instagram profiles designed for local businesses looking to elevate their positioning and win clients every day.',
      primaryCta: 'Request a Custom Quote',
      secondaryCta: 'View Selected Work',
      imageAlt:
        'Mocelin Digital Agency creative workstation displaying a dark and gold client website',
      imageFallback: 'Mocelin Digital Agency — Porto Alegre',
      imageKicker: 'Bespoke design · 2 to 4 day delivery',
      imageCaption: 'Digital presence engineered for immediate trust',
      imageLocation: 'Porto Alegre · RS',
    },
    marquee: {
      ariaLabel: 'Featured client businesses',
      headingPrefix: 'Local companies across Porto Alegre & beyond that trust',
      clients: [
        { id: 'avant', name: 'Avant Estética', segment: 'Health & Beauty', mark: 'diamond' },
        { id: 'aurore', name: 'Bistrô Aurore', segment: 'Gastronomy', mark: 'crest' },
        { id: 'midas', name: 'Midas Club', segment: 'Barbershop', mark: 'shield' },
        { id: 'arcus', name: 'Arcus Arquitetura', segment: 'Architecture', mark: 'arch' },
        { id: 'guaiba', name: 'Óptica Guaíba', segment: 'Local Retail', mark: 'frame' },
        { id: 'vertice', name: 'Studio Vértice', segment: 'Interiors', mark: 'compass' },
      ],
    },
    about: {
      kicker: 'About the agency',
      title: 'We turn local businesses into memorable brands built on trust.',
      paragraph1:
        'At Mocelin Digital Agency, we transform everyday businesses into standout brands. We build professional websites, custom logos, cohesive visual identities, and strategic Instagram profiles tailored to earn immediate credibility and drive qualified leads.',
      paragraph2:
        'Do not let your next clients settle for competitors. Reach out today, request your custom quote, and give your business the visual presence it deserves.',
      cta: 'Talk to a Specialist Now',
    },
    metrics: {
      kicker: 'Proven authority',
      title: 'Numbers that drive impact',
      subtitle:
        'Consistent results delivered through 100% human support, 2 to 4 day turnaround, and dedicated focus on local businesses.',
      stats: [
        {
          id: 'projetos-concluidos',
          target: 78,
          prefix: '+',
          label: 'Completed Projects',
          context:
            'Websites, visual identities, and commercial social profiles launched with rapid delivery.',
        },
        {
          id: 'clientes-satisfeitos',
          target: 54,
          prefix: '+',
          label: 'Satisfied Clients',
          context:
            'Over 50 local businesses served across Porto Alegre and the metropolitan region.',
        },
        {
          id: 'anos-experiencia',
          target: 4,
          suffix: ' yrs',
          label: 'Years of Experience',
          context:
            'Hands-on dedication helping local brands establish authoritative digital footprints.',
        },
      ],
    },
    services: {
      kicker: 'Our services',
      title: 'End-to-end digital solutions to elevate how your business serves clients.',
      topCta: 'Request a Custom Quote',
      cardFooterNote: 'Fast delivery · Revision guaranteed',
      cardCta: 'Choose this service',
    },
    portfolio: {
      kicker: 'Selected portfolio',
      title: 'Projects built to inspire credibility and attract real customers.',
      filterAria: 'Filter projects by category',
      categories: {
        all: 'All',
        websites: 'Websites',
        branding: 'Branding',
        social: 'Social Media',
      },
      showing: 'Showing',
      projectSingular: 'project',
      projectPlural: 'projects',
      inCategory: 'in',
      resetFilter: 'View all categories',
      openProjectAriaPrefix: 'Open project details for',
      viewDetails: 'View details',
      readDetails: 'Read project details',
      closeModalAria: 'Close project details',
      challengeHeading: 'Business challenge',
      solutionHeading: 'Delivered solution',
      outcomeLabel: 'Observed outcome',
      modalCta: 'I want results like this',
    },
    caseStudies: {
      kicker: 'In-depth case studies',
      title: 'From real client bottlenecks to tailored execution and measurable growth.',
      prevAria: 'Previous case study',
      nextAria: 'Next case study',
      tabListAria: 'Select case study',
      caseLabel: 'Case Study',
      problemHeading: 'Client problem',
      solutionHeading: 'Agency solution',
      implementedHeading: 'What was implemented',
      resultsHeading: 'Results achieved',
      cta: 'Start a similar project',
    },
    testimonials: {
      kicker: 'Client testimonials',
      title: 'Businesses that upgraded their brand presence with Mocelin Digital Agency.',
    },
    pricing: {
      kicker: 'Transparent investment',
      title: 'Complete digital packages for your brand to grow, sell, and stand out online.',
      helper:
        'Hover or select a plan to compare deliverables and request your quote with direct human support and guaranteed revisions.',
      mostPopular: 'Most popular',
      selected: 'Selected',
      addonsKicker: 'Additional services',
      addonsTitle: 'Brand identity and Instagram upgrades to complete your presence',
      addonsCta: 'Request Quote',
      addonIncluded: 'Included',
      addonSelect: 'Select',
      planSelectedLabel: 'Selected package:',
      planClearedNote:
        'No website package selected — you can hire only the additional services below or pick a package above.',
      addonsEmptyPrompt: 'Select one or more add-ons above to include in your quote.',
      addonsSelectedHeading: 'Selected add-ons for your project:',
      addonsClearSelection: 'Clear selection',
      addonsIncludeInQuote: 'Include in quote',
      addonsQuoteMessage: (addonsList, planName) =>
        planName
          ? `Hello! I would like to request a quote for ${planName} including the following add-ons: ${addonsList}.`
          : `Hello! I would like to request a quote only for: ${addonsList}.`,
    },
    trust: {
      kicker: 'Trust & commitment',
      title: 'Clear guarantees designed for your peace of mind',
      subtitle:
        'Hire with confidence: straightforward process, direct communication, and reliable 2 to 4 day delivery.',
      badges: [
        {
          id: 'secure-payment',
          title: 'Secure Payment',
          subtitle: 'Full clarity from day one',
          description:
            'Terms and scope agreed upfront before starting production, with zero surprise fees or hidden costs.',
        },
        {
          id: 'support-24-7',
          title: 'Dedicated Support',
          subtitle: 'Human Service',
          description:
            'Direct WhatsApp channel to ask questions, follow progress updates, and receive ongoing assistance.',
        },
        {
          id: 'satisfaction-guarantee',
          title: 'Satisfaction Guarantee',
          subtitle: 'Aligned brand revisions',
          description:
            'Every project includes structured revision rounds so your final visual identity and website match your vision.',
        },
      ],
    },
    contact: {
      kicker: 'Direct contact',
      title: "Let's bring your brand's new digital positioning to life.",
      description:
        'Fill out your details on the right to generate your custom brief or reach out directly on WhatsApp. 100% human support, zero bots.',
      whatsappLabel: 'Business WhatsApp',
      instagramLabel: 'Official Instagram',
      locationLabel: 'Service area',
      locationValue: 'Porto Alegre · RS and remote service nationwide',
      successTitle: 'Request ready to send',
      successDesc:
        'We compiled your project brief. Click below to open a WhatsApp chat with Mocelin Digital Agency with your details pre-filled:',
      sendWhatsAppBtn: 'Send Now via WhatsApp',
      editInfoBtn: 'Edit details',
      formTitle: 'Request a Custom Quote',
      formSubtitle:
        'Prompt response during business hours with estimated delivery in 2 to 4 days.',
      nameLabel: 'Your name *',
      namePlaceholder: 'e.g., Mariana Souza',
      nameError: 'Please enter your full name to continue.',
      companyLabel: 'Company or industry *',
      companyPlaceholder: 'e.g., Bella Pele Clinic',
      companyError: 'Please enter your company name or industry.',
      phoneLabel: 'WhatsApp number *',
      phonePlaceholder: '(51) 99999-9999',
      phoneError: 'Please enter a valid phone/WhatsApp number (at least 10 digits).',
      serviceLabel: 'Service of interest',
      serviceOptions: [
        'Simple Website (R$ 180 – R$ 450)',
        'Essential Website (R$ 540 – R$ 820)',
        'Premium Website (R$ 1,000 – R$ 2,200)',
        'Logo Design (R$ 60 – R$ 100)',
        'Instagram Posts Pack (R$ 150 – R$ 250)',
        'Pro Instagram & Bio Setup (R$ 250 – R$ 300)',
        'Custom Quote (Tailored scope)',
      ],
      messageLabel: 'Tell us briefly about your business (optional)',
      messagePlaceholder:
        'e.g., We need a modern website to showcase our services and drive inquiries directly to WhatsApp.',
      submitBtn: 'Prepare WhatsApp Request',
      directCallLink: 'Or message us directly now',
      briefGreeting: (name, company) => `Hello! My name is ${name}, from ${company}.`,
      briefInterest: (service) => `I am interested in: ${service}.`,
      briefPhone: (phone) => `My WhatsApp for reply: ${phone}.`,
      briefDetails: (details) => `Project details: ${details}`,
      briefClosing: 'I would love to review options and request a custom quote!',
    },
    footer: {
      summary:
        'Porto Alegre, RS · Professional websites, brand identity, and strategic Instagram setup for local businesses.',
      navAria: 'Footer links',
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      themeLightLabel: 'Light Theme',
      themeDarkLabel: 'Dark Theme',
      newsletterTitle: 'Positioning & local marketing insights',
      newsletterDesc:
        'Receive actionable tips from Mocelin Digital Agency to attract more customers via Google and Instagram.',
      newsletterConfirmedPrefix: 'Subscription confirmed for',
      newsletterAnotherEmail: 'Subscribe another email',
      newsletterSrLabel: 'Email for marketing tips',
      newsletterPlaceholder: 'you@company.com',
      newsletterInvalidEmail: 'Please enter a valid email address.',
      newsletterSubmit: 'Subscribe',
      copyrightSuffix: 'Mocelin Digital Agency. All rights reserved.',
    },
    floating: {
      tooltipHighlight: 'Direct human support',
      tooltipSuffix: 'Request your quote now',
      ariaLabel: 'Request a custom quote via WhatsApp',
      ctaLabel: 'Quote on WhatsApp',
      scrollToTopAria: 'Scroll back to top',
    },
  },
  ...LOCALES_EXTRA_A,
  ...LOCALES_EXTRA_B,
};
