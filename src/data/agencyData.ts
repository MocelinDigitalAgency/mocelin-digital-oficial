import type { Language } from '../components/LanguageContext';
import { AGENCY_LOCALES_A } from './agencyLocalesA';
import { AGENCY_LOCALES_B } from './agencyLocalesB';
import heroAgencyStudioImg from '../assets/images/hero_agency_studio_1794673552890.jpg';
import portfolioClinicWebImg from '../assets/images/portfolio_clinic_web_1794673553337.jpg';
import portfolioBistroBrandImg from '../assets/images/portfolio_bistro_brand_1794673554019.jpg';
import portfolioBarberInstaImg from '../assets/images/portfolio_barber_insta_1794673555125.jpg';
import portfolioArchitectWebImg from '../assets/images/portfolio_architect_web_1794673553963.jpg';
import portfolioJewelerBrandImg from '../assets/images/portfolio_jeweler_branding_1794684736256.jpg';
import portfolioPilatesSocialImg from '../assets/images/portfolio_pilates_social_1794684736553.jpg';

export const SITE_DOMAIN = 'mocelindigital.agency.app.br';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const WHATSAPP_NUMBER = '5551980269868';
export const WHATSAPP_DISPLAY = '(51) 98026-9868';
export const INSTAGRAM_URL = 'https://www.instagram.com/mocelindigital.agency/';
export const INSTAGRAM_HANDLE = '@mocelindigital.agency';

export const PRIMARY_WHATSAPP_MESSAGE =
  'Tenho interesse em criar um site profissional para minha empresa e gostaria de conhecer as opções e solicitar um orçamento personalizado! 🚀';

export const PRIMARY_WHATSAPP_MESSAGE_EN =
  'I am interested in creating a professional website for my business and would like to explore options and request a custom quote! 🚀';

export const PRIMARY_WHATSAPP_MESSAGES: Record<Language, string> = {
  pt: PRIMARY_WHATSAPP_MESSAGE,
  en: PRIMARY_WHATSAPP_MESSAGE_EN,
  es: '¡Estoy interesado en crear un sitio web profesional para mi empresa y me gustaría conocer las opciones y solicitar un presupuesto personalizado! 🚀',
  fr: 'Je souhaite créer un site web professionnel pour mon entreprise et découvrir vos offres ainsi que demander un devis personnalisé ! 🚀',
  de: 'Ich interessiere mich für eine professionelle Website für mein Unternehmen und möchte die Optionen kennenlernen sowie ein individuelles Angebot anfragen! 🚀',
  it: 'Sono interessato a creare un sito web professionale per la mia azienda e vorrei conoscere le opzioni e richiedere un preventivo personalizzato! 🚀',
  nl: 'Ik heb interesse in het laten maken van een professionele website voor mijn bedrijf en wil graag de opties bekijken en een offerte op maat aanvragen! 🚀',
  ja: 'ビジネス向けのプロフェッショナルなWebサイト制作に関心があり、プランの確認と個別見積もりを相談したいです！🚀',
  zh: '我希望为企业打造专业网站，想了解相关方案并申请定制报价！🚀',
  ko: '비즈니스를 위한 전문 웹사이트 제작에 관심이 있어 옵션을 알아보고 맞춤 견적을 요청하고 싶습니다! 🚀',
  ar: 'أنا مهتم بإنشاء موقع إلكتروني احترافي لشركتي وأود الاطلاع على الخيارات وطلب عرض سعر مخصص! 🚀',
  ru: 'Меня интересует создание профессионального сайта для моего бизнеса — хотел бы узнать о вариантах и запросить индивидуальный расчёт! 🚀',
};

export function buildWhatsAppUrl(customMessage?: string, language: Language = 'pt'): string {
  const defaultMsg = PRIMARY_WHATSAPP_MESSAGES[language] ?? PRIMARY_WHATSAPP_MESSAGE;
  const message = customMessage ?? defaultMsg;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = heroAgencyStudioImg;
export const LOGO_IMAGE = `${import.meta.env.BASE_URL}assets/aistudio/Logo_MOCELIN_Digital_Agency_em_Neon_Luxe_bc0bf971.png`;

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  priceRange: string;
  pricePrefix: string;
  delivery: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface AdditionalService {
  id: string;
  name: string;
  pricePrefix: string;
  priceRange: string;
  description: string;
}

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export interface Differential {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
}

export type PortfolioFilterKey = 'all' | 'websites' | 'branding' | 'social';
export type PortfolioCategory = 'Todos' | 'Websites' | 'Branding' | 'Social Media';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  categoryKey: Exclude<PortfolioFilterKey, 'all'>;
  category: string;
  location: string;
  deliveryTime: string;
  outcome: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  city: string;
  service: string;
  quote: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  segment: string;
  location: string;
  deliveryTime: string;
  headline: string;
  headlineMetric: string;
  problem: string;
  solution: string;
  deliverables: string[];
  resultsSummary: string;
  metrics: CaseStudyMetric[];
  image: string;
}

export interface LocalizedAgencyData {
  pricingPlans: PricingPlan[];
  additionalServices: AdditionalService[];
  proofMetrics: ProofMetric[];
  differentials: Differential[];
  services: ServiceItem[];
  portfolioProjects: PortfolioProject[];
  testimonials: Testimonial[];
  caseStudies: CaseStudy[];
}

export const AGENCY_DATA_BY_LANGUAGE: Record<Language, LocalizedAgencyData> = {
  pt: {
    pricingPlans: [
      {
        id: 'site-simples',
        name: 'Site Simples',
        target: 'Ideal para presença inicial rápida no Google e WhatsApp',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 180 a R$ 450',
        delivery: 'Entrega rápida · 2 a 3 dias',
        features: [
          'Site institucional (1 página)',
          'Design moderno e responsivo',
          'Até 3 seções (ex.: sobre, serviços, contato)',
          'Integração com WhatsApp',
          'Entrega rápida',
        ],
        ctaLabel: 'Solicitar orçamento',
      },
      {
        id: 'site-essencial',
        name: 'Site Essencial',
        target: 'Mais procurado por pequenas empresas de Porto Alegre',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 540 a R$ 820',
        delivery: 'Entrega expressa · 2 a 4 dias',
        features: [
          'Site profissional (multipáginas)',
          'Até 6 seções personalizadas',
          'Integração com WhatsApp, redes sociais e Google Maps',
          'Otimização básica (SEO)',
          'Formulário de contato',
          'Suporte inicial',
        ],
        highlighted: true,
        ctaLabel: 'Solicitar orçamento',
      },
      {
        id: 'site-premium',
        name: 'Site Premium',
        target: 'Projeto completo para autoridade e integrações avançadas',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 1.000 a R$ 2.200',
        delivery: 'Escopo dedicado · Até 4 dias',
        features: [
          'Site completo e personalizado',
          'Design exclusivo e estratégico',
          'Até 10+ seções',
          'Otimização avançada (SEO)',
          'Integrações premium (pagamento, e-commerce, agenda, WhatsApp)',
          'Suporte prioritário',
          'Consultoria de presença digital',
        ],
        ctaLabel: 'Solicitar orçamento',
      },
    ],
    additionalServices: [
      {
        id: 'criacao-logo',
        name: 'Criação de Logo',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 60 a R$ 100',
        description:
          'Logotipo exclusivo em alta resolução pronto para redes sociais, site e impressos.',
      },
      {
        id: 'posts-instagram',
        name: 'Criação de Posts para Instagram',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 150 a R$ 250',
        description:
          'Artes estratégicas alinhadas à identidade visual da sua marca para atrair clientes.',
      },
      {
        id: 'bio-instagram',
        name: 'Biografia e Instagram Profissional',
        pricePrefix: 'A partir de',
        priceRange: 'R$ 250 a R$ 300',
        description:
          'Estruturação completa do perfil comercial, bio persuasiva e capas de destaques.',
      },
    ],
    proofMetrics: [
      {
        value: '+50',
        label: 'Estabelecimentos atendidos',
        detail: 'Negócios locais de diversos segmentos com presença digital profissional.',
      },
      {
        value: '2 a 4 dias',
        label: 'Entrega rápida',
        detail: 'Desenvolvimento ágil sem abrir mão da qualidade visual e técnica.',
      },
      {
        value: '100%',
        label: 'Atendimento humano',
        detail: 'Contato direto com quem cria seu projeto, sem respostas automáticas.',
      },
      {
        value: 'Garantida',
        label: 'Revisão alinhada',
        detail: 'Ajustes dedicados para entregar exatamente o resultado que sua marca espera.',
      },
    ],
    differentials: [
      {
        number: '01.',
        title: 'Entrega rápida de 2 a 4 dias',
        description:
          'Seu projeto é desenvolvido com agilidade e método para colocar sua empresa no ar rapidamente, sem abrir mão da qualidade e do profissionalismo.',
      },
      {
        number: '02.',
        title: 'Atendimento 100% humano e personalizado',
        description:
          'Nada de robôs ou respostas prontas. Você conversa diretamente com quem entende do seu projeto e das necessidades reais do seu negócio.',
      },
      {
        number: '03.',
        title: 'Garantia de revisão',
        description:
          'Seu projeto conta com etapas de ajustes para garantir um resultado fiel às suas expectativas, conforme as condições combinadas.',
      },
      {
        number: '04.',
        title: 'Mais de 50 estabelecimentos atendidos',
        description:
          'Experiência prática criando soluções digitais para comércios, clínicas, escritórios e prestadores de serviço em Porto Alegre e região.',
      },
      {
        number: '05.',
        title: 'Design exclusivo e profissional',
        description:
          'Soluções visuais modernas, sob medida e pensadas para transmitir autoridade imediata e destacar sua marca da concorrência.',
      },
    ],
    services: [
      {
        number: '01.',
        title: 'Criação de Sites Profissionais',
        subtitle: 'Conversão e autoridade para empresas locais',
        description:
          'Desenvolvemos sites institucionais e páginas de apresentação rápidas, responsivas e estruturadas para transformar visitantes do Google e das redes sociais em pedidos reais de orçamento no seu WhatsApp.',
        deliverables: [
          'Layout exclusivo adaptado para celular e desktop',
          'Estrutura persuasiva focada em contato direto via WhatsApp',
          'Carregamento veloz e otimização inicial para buscas locais',
        ],
        featured: true,
      },
      {
        number: '02.',
        title: 'Logo e Identidade Visual Profissional',
        subtitle: 'Posicionamento único e memorável',
        description:
          'Construímos logotipos exclusivos, paleta de cores e tipografia que elevam a percepção de valor da sua empresa desde o primeiro contato.',
        deliverables: [
          'Logotipo principal e variações para aplicação digital e impressa',
          'Definição estratégica de cores e tipografia da marca',
          'Arquivos em alta resolução prontos para uso imediato',
        ],
      },
      {
        number: '03.',
        title: 'Criação de Instagram Profissional',
        subtitle: 'Vitrine organizada para atrair clientes',
        description:
          'Estruturamos seu perfil comercial do zero ou renovamos sua apresentação visual para que quem chega ao seu Instagram confie no seu serviço na hora.',
        deliverables: [
          'Configuração completa da conta comercial e botões de contato',
          'Destaques estratégicos com capas alinhadas à identidade visual',
          'Padrão visual inicial para transmitir organização e credibilidade',
        ],
      },
      {
        number: '04.',
        title: 'Biografia Estratégica de Instagram',
        subtitle: 'Clareza imediata em poucas linhas',
        description:
          'Escrevemos uma bio objetiva que comunica o que você faz, onde atende e por que o cliente deve clicar no seu link agora mesmo.',
        deliverables: [
          'Texto persuasivo com posicionamento claro para o seu público',
          'Chamada para ação direta voltada ao atendimento no WhatsApp',
          'Estrutura de link organizado para facilitar o primeiro contato',
        ],
      },
    ],
    portfolioProjects: [
      {
        id: 'clinica-avant-poa',
        title: 'Site Institucional e Agendamento Direto',
        client: 'Avant Estética & Odontologia',
        categoryKey: 'websites',
        category: 'Websites',
        location: 'Moinhos de Vento · Porto Alegre',
        deliveryTime: 'Entregue em 3 dias',
        outcome: '+68% de pedidos de avaliação pelo WhatsApp nos primeiros 45 dias',
        summary:
          'Site institucional rápido e elegante projetado para transmitir segurança clínica e direcionar pacientes diretamente ao agendamento.',
        challenge:
          'A clínica dependia apenas de indicações e perdia contatos vindos do Google por não ter uma página profissional apresentando seus procedimentos.',
        solution:
          'Criamos um site exclusivo com leitura clara no celular, apresentação dos tratamentos e botões diretos de agendamento conectados ao atendimento da recepção.',
        image: portfolioClinicWebImg,
      },
      {
        id: 'bistro-aurore',
        title: 'Logotipo Exclusivo e Papelaria de Marca',
        client: 'Bistrô Aurore Gastronomia',
        categoryKey: 'branding',
        category: 'Branding',
        location: 'Bela Vista · Porto Alegre',
        deliveryTime: 'Entregue em 4 dias',
        outcome: 'Padronização visual completa entre fachada, cardápios e presença online',
        summary:
          'Criação de emblema autoral, tipografia sofisticada e manual prático de aplicação em preto e dourado.',
        challenge:
          'O restaurante precisava substituir uma marca improvisada por uma identidade visual à altura da qualidade do seu salão e carta de vinhos.',
        solution:
          'Desenvolvemos um logotipo atemporal com acabamento metálico e sistema visual completo para cardápios, embalagens de entrega e redes sociais.',
        image: portfolioBistroBrandImg,
      },
      {
        id: 'barbearia-midas',
        title: 'Estruturação de Instagram Profissional e Bio',
        client: 'Midas Club Barbearia',
        categoryKey: 'social',
        category: 'Social Media',
        location: 'Centro Histórico · Porto Alegre',
        deliveryTime: 'Entregue em 2 dias',
        outcome: 'Perfil reorganizado com fluxo contínuo de novos agendamentos locais',
        summary:
          'Reconstrução da bio estratégica, organização de destaques e direção visual de feed para atrair público masculino na região.',
        challenge:
          'O perfil recebia visitas diárias, mas não deixava claro o endereço, os horários nem facilitava o caminho até o WhatsApp da barbearia.',
        solution:
          'Reescrevemos a biografia com chamada direta, criamos capas de destaques sob medida e definimos uma estética coesa em preto e dourado.',
        image: portfolioBarberInstaImg,
      },
      {
        id: 'arcus-arquitetura',
        title: 'Portfólio Digital e Captação de Projetos',
        client: 'Arcus Arquitetura & Interiores',
        categoryKey: 'websites',
        category: 'Websites',
        location: 'Petrópolis · Porto Alegre',
        deliveryTime: 'Entregue em 4 dias',
        outcome: 'Apresentação de alto padrão que elevou o ticket médio dos orçamentos',
        summary:
          'Site portfólio minimalista e de alto contraste desenhado para valorizar projetos residenciais e comerciais.',
        challenge:
          'Enviar portfólio em arquivos pesados pelo WhatsApp atrasava o atendimento e reduzia a percepção de exclusividade do escritório.',
        solution:
          'Entregamos um site leve com galeria curada de obras, história do escritório e formulário integrado ao atendimento comercial.',
        image: portfolioArchitectWebImg,
      },
      {
        id: 'aurelia-joalheria',
        title: 'Identidade Visual de Alta Joalheria e Embalagens',
        client: 'Aurelia Joalheria Fina',
        categoryKey: 'branding',
        category: 'Branding',
        location: 'Auxiliadora · Porto Alegre',
        deliveryTime: 'Entregue em 3 dias',
        outcome: 'Valorização imediata na entrega de peças e kits de presente',
        summary:
          'Desenvolvimento de monograma, tipografia clássica e sistema de papelaria em preto fosco com hot stamping dourado.',
        challenge:
          'A joalheria vendia peças autorais de alto valor, mas suas caixas, tags e cartões não acompanhavam a sofisticação do atendimento presencial.',
        solution:
          'Criamos a assinatura tipográfica, selos personalizados, cartões de garantia e guia de aplicação para embalagens, vitrine e digital.',
        image: portfolioJewelerBrandImg,
      },
      {
        id: 'wellness-move-pilates',
        title: 'Direção de Feed, Bio e Posts Estratégicos',
        client: 'Wellness & Move Pilates Studio',
        categoryKey: 'social',
        category: 'Social Media',
        location: 'Três Figueiras · Porto Alegre',
        deliveryTime: 'Entregue em 3 dias',
        outcome: '+44% de solicitações de aula experimental pelo Instagram em 30 dias',
        summary:
          'Pacote de templates autorais para carrosséis e stories, reorganização de destaques e copy estratégica para perfil comercial.',
        challenge:
          'O estúdio publicava fotos avulsas sem padrão editorial e não convertia visualizações locais em agendamentos de aulas experimentais.',
        solution:
          'Estruturamos um grid harmônico alinhado ao ambiente físico, reescrevemos a bio com foco no bairro e entregamos linha editorial pronta para postar.',
        image: portfolioPilatesSocialImg,
      },
    ],
    testimonials: [
      {
        name: 'Camila Ferreira',
        role: 'Sócia-diretora',
        company: 'Avant Estética & Odontologia',
        city: 'Porto Alegre',
        service: 'Site Profissional',
        quote:
          'Antes dependíamos só de mensagens soltas sem contexto. Em 3 dias estávamos com um site impecável no ar e os pacientes passaram a chegar já confiando no nosso atendimento.',
      },
      {
        name: 'Rafael Mendes',
        role: 'Proprietário',
        company: 'Midas Club Barbearia',
        city: 'Porto Alegre',
        service: 'Instagram + Biografia Estratégica',
        quote:
          'O atendimento foi direto e humano do início ao fim. Reorganizaram nossa bio, os destaques e o visual do perfil — na mesma semana começamos a receber novos clientes perguntando sobre horários.',
      },
      {
        name: 'Henrique Vasconcellos',
        role: 'Arquiteto Titular',
        company: 'Arcus Arquitetura',
        city: 'Porto Alegre',
        service: 'Identidade Visual + Site',
        quote:
          'A precisão nos ajustes e a agilidade na entrega surpreenderam nosso escritório. Hoje enviamos o link do nosso site com orgulho e fechamos reuniões com clientes muito mais qualificados.',
      },
    ],
    caseStudies: [
      {
        id: 'case-avant-estetica',
        number: '01',
        client: 'Avant Estética & Odontologia',
        segment: 'Site Institucional & Captação Local',
        location: 'Moinhos de Vento · Porto Alegre',
        deliveryTime: 'Entregue em 3 dias',
        headline:
          'De atendimento dependente de indicações a uma agenda previsível via Google e WhatsApp.',
        headlineMetric: '+68% avaliações agendadas em 45 dias',
        problem:
          'Apesar do alto índice de satisfação presencial, a clínica era invisível nas buscas locais de Porto Alegre. Visitantes vindos do Instagram encontravam apenas um número de telefone sem contexto sobre procedimentos, formação da equipe ou diferenciais clínicos, gerando dúvidas repetitivas e abandono antes da marcação.',
        solution:
          'Estruturamos um site institucional rápido e focado em leitura mobile, com páginas dedicadas para cada protocolo estético, prova visual do consultório e botões estratégicos de agendamento que já abrem o WhatsApp da recepção com o procedimento pré-selecionado.',
        deliverables: [
          'Arquitetura persuasiva orientada a dispositivos móveis',
          'Páginas de serviços com foco em busca local (SEO Porto Alegre)',
          'Integração direta com WhatsApp da recepção com mensagem guiada',
        ],
        resultsSummary:
          'Nos primeiros 45 dias no ar, a clínica reduziu o tempo de triagem no atendimento e passou a receber pacientes já decididos pela avaliação presencial.',
        metrics: [
          {
            value: '+68%',
            label: 'Pedidos de avaliação pelo WhatsApp nos primeiros 45 dias',
          },
          {
            value: '3 dias',
            label: 'Prazo entre o alinhamento inicial e a publicação no ar',
          },
          {
            value: '1,2 s',
            label: 'Carregamento médio da página principal em rede móvel 4G',
          },
        ],
        image: portfolioClinicWebImg,
      },
      {
        id: 'case-bistro-aurore',
        number: '02',
        client: 'Bistrô Aurore Gastronomia',
        segment: 'Identidade Visual & Vitrine Digital',
        location: 'Bela Vista · Porto Alegre',
        deliveryTime: 'Entregue em 4 dias',
        headline:
          'Reposicionamento de marca que elevou a percepção de valor e multiplicou reservas antecipadas.',
        headlineMetric: '+52% reservas de fim de semana em 60 dias',
        problem:
          'O restaurante entregava alta gastronomia no salão, mas utilizava uma identidade improvisada e um cardápio em PDF pesado que travava no celular. Novos clientes tinham dificuldade para conferir pratos, horários e reservar mesas com antecedência.',
        solution:
          'Desenvolvemos uma identidade visual atemporal em preto e dourado metálico aplicada a cardápios, fachada e redes sociais, somada a uma página leve com menu navegável no navegador e reserva rápida de mesa em dois cliques.',
        deliverables: [
          'Logotipo exclusivo e manual prático de cores e tipografia',
          'Padronização de cardápios físicos, embalagens e perfil comercial',
          'Página web rápida com cardápio interativo e link direto de reserva',
        ],
        resultsSummary:
          'A marca ganhou unidade visual entre experiência presencial e digital, convertendo curiosos do Google Maps e Instagram em mesas reservadas.',
        metrics: [
          {
            value: '+52%',
            label: 'Reservas antecipadas para jantares de sexta e sábado em 60 dias',
          },
          {
            value: '100%',
            label: 'Unificação visual entre fachada, cardápio e Instagram',
          },
          {
            value: '4 dias',
            label: 'Entrega simultânea da nova identidade visual e página web',
          },
        ],
        image: portfolioBistroBrandImg,
      },
      {
        id: 'case-arcus-arquitetura',
        number: '03',
        client: 'Arcus Arquitetura & Interiores',
        segment: 'Portfólio Digital & Qualificação Comercial',
        location: 'Petrópolis · Porto Alegre',
        deliveryTime: 'Entregue em 4 dias',
        headline:
          'Portfólio editorial sob medida que qualificou leads e elevou o ticket médio dos projetos.',
        headlineMetric: '2,4x no ticket médio em 90 dias',
        problem:
          'Cada solicitação de orçamento exigia o envio manual de arquivos PDF com dezenas de megabytes pelo WhatsApp. Além de atrasar o atendimento comercial, o formato reduzia a sofisticação percebida pelos clientes residenciais e corporativos.',
        solution:
          'Criamos um portfólio digital minimalista de alto contraste com galeria curada por tipologia de obra, apresentação do método autoral do escritório e formulário inteligente que coleta metragem, bairro e prazo antes do contato direto.',
        deliverables: [
          'Portfólio editorial com carregamento progressivo de fotografias de obras',
          'Fluxo de pré-qualificação comercial conectado ao WhatsApp dos sócios',
          'Otimização técnica para pesquisas de arquitetura em Porto Alegre',
        ],
        resultsSummary:
          'Em três meses, o escritório eliminou o envio manual de apresentações pesadas e passou a iniciar reuniões apenas com clientes alinhados ao seu padrão.',
        metrics: [
          {
            value: '2,4x',
            label: 'Aumento no ticket médio dos projetos contratados em 90 dias',
          },
          {
            value: '-70%',
            label: 'Redução no tempo gasto pela equipe comercial na triagem inicial',
          },
          {
            value: '4 dias',
            label: 'Do primeiro briefing à entrada oficial no ar com SEO ativo',
          },
        ],
        image: portfolioArchitectWebImg,
      },
    ],
  },
  en: {
    pricingPlans: [
      {
        id: 'site-simples',
        name: 'Simple Website',
        target: 'Ideal for fast initial visibility on Google and WhatsApp',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 180 – R$ 450',
        delivery: 'Fast delivery · 2 to 3 days',
        features: [
          'Institutional website (1 page)',
          'Modern, mobile-responsive layout',
          'Up to 3 sections (about, services, contact)',
          'Direct WhatsApp integration',
          'Rapid turnaround',
        ],
        ctaLabel: 'Request Quote',
      },
      {
        id: 'site-essencial',
        name: 'Essential Website',
        target: 'Most popular among small businesses in Porto Alegre',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 540 – R$ 820',
        delivery: 'Express delivery · 2 to 4 days',
        features: [
          'Professional multi-section website',
          'Up to 6 tailored sections',
          'WhatsApp, social media, and Google Maps integration',
          'Foundational on-page SEO',
          'Lead capture contact form',
          'Initial post-launch support',
        ],
        highlighted: true,
        ctaLabel: 'Request Quote',
      },
      {
        id: 'site-premium',
        name: 'Premium Website',
        target: 'Full-scale project built for authority and custom integrations',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 1,000 – R$ 2,200',
        delivery: 'Dedicated scope · Up to 4 days',
        features: [
          'Complete custom-engineered website',
          'Exclusive strategic brand design',
          '10+ tailored sections',
          'Advanced local SEO optimization',
          'Premium integrations (checkout, booking, WhatsApp)',
          'Priority support',
          'Digital presence consulting',
        ],
        ctaLabel: 'Request Quote',
      },
    ],
    additionalServices: [
      {
        id: 'criacao-logo',
        name: 'Logo Design',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 60 – R$ 100',
        description:
          'Bespoke high-resolution logotype ready for social media, websites, and print materials.',
      },
      {
        id: 'posts-instagram',
        name: 'Instagram Post Pack',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 150 – R$ 250',
        description:
          'Strategic post templates aligned with your visual identity to attract qualified followers.',
      },
      {
        id: 'bio-instagram',
        name: 'Pro Instagram & Bio Setup',
        pricePrefix: 'Starting at',
        priceRange: 'R$ 250 – R$ 300',
        description:
          'Complete business profile optimization, persuasive bio copywriting, and highlight covers.',
      },
    ],
    proofMetrics: [
      {
        value: '+50',
        label: 'Businesses served',
        detail: 'Local companies across diverse sectors equipped with professional digital presence.',
      },
      {
        value: '2–4 days',
        label: 'Fast turnaround',
        detail: 'Agile execution without compromising visual craft or technical performance.',
      },
      {
        value: '100%',
        label: 'Human support',
        detail: 'Direct communication with the team building your project—zero automated scripts.',
      },
      {
        value: 'Guaranteed',
        label: 'Aligned revisions',
        detail: 'Dedicated refinement rounds to deliver the exact result your brand expects.',
      },
    ],
    differentials: [
      {
        number: '01.',
        title: 'Fast 2 to 4 day delivery',
        description:
          'Your project is built with an agile, structured process to get your business live quickly without sacrificing polish or professionalism.',
      },
      {
        number: '02.',
        title: '100% human, personalized service',
        description:
          'No chatbots or canned replies. You work directly with the specialists designing your project around real business goals.',
      },
      {
        number: '03.',
        title: 'Revision guarantee',
        description:
          'Every engagement includes structured refinement steps so the final delivery matches your expectations.',
      },
      {
        number: '04.',
        title: 'Over 50 businesses served',
        description:
          'Hands-on experience crafting websites and brand systems for clinics, restaurants, retail shops, and studios across Porto Alegre.',
      },
      {
        number: '05.',
        title: 'Exclusive, high-trust design',
        description:
          'Modern custom visuals engineered to establish immediate authority and separate your brand from local competitors.',
      },
    ],
    services: [
      {
        number: '01.',
        title: 'Professional Website Creation',
        subtitle: 'Conversion and authority for local companies',
        description:
          'We design and build fast, mobile-first institutional websites structured to turn Google and social visitors into qualified quote requests directly on WhatsApp.',
        deliverables: [
          'Custom layout tailored for both mobile and desktop screens',
          'Persuasive page flow focused on direct WhatsApp inquiries',
          'Fast page loads with foundational local search optimization',
        ],
        featured: true,
      },
      {
        number: '02.',
        title: 'Logo & Visual Identity',
        subtitle: 'Memorable, distinctive positioning',
        description:
          'We craft custom logos, color palettes, and typographic systems that elevate how prospects perceive your business from the first glance.',
        deliverables: [
          'Primary logotype plus variations for web and print use',
          'Strategic brand color and typography guidelines',
          'High-resolution production files ready for immediate rollout',
        ],
      },
      {
        number: '03.',
        title: 'Professional Instagram Setup',
        subtitle: 'Organized storefront to attract clients',
        description:
          'We build your commercial profile from scratch or overhaul your visual presentation so every profile visitor trusts your work immediately.',
        deliverables: [
          'Complete business account configuration and contact buttons',
          'Strategic story highlights with custom-branded cover icons',
          'Cohesive initial grid direction to project credibility',
        ],
      },
      {
        number: '04.',
        title: 'Strategic Instagram Bio',
        subtitle: 'Immediate clarity in just a few lines',
        description:
          'We write a crisp bio that communicates what you offer, where you operate, and why visitors should tap your link right away.',
        deliverables: [
          'Persuasive positioning copy tailored to your target audience',
          'Clear call to action directing leads to WhatsApp',
          'Streamlined bio link structure for frictionless inquiries',
        ],
      },
    ],
    portfolioProjects: [
      {
        id: 'clinica-avant-poa',
        title: 'Institutional Website & Direct Booking',
        client: 'Avant Estética & Odontologia',
        categoryKey: 'websites',
        category: 'Websites',
        location: 'Moinhos de Vento · Porto Alegre',
        deliveryTime: 'Delivered in 3 days',
        outcome: '+68% WhatsApp consultation requests within the first 45 days',
        summary:
          'Fast, refined institutional website crafted to project clinical credibility and route patients straight into appointment scheduling.',
        challenge:
          'The clinic relied solely on word of mouth and missed local Google inquiries because it lacked a professional page detailing its treatments.',
        solution:
          'We created a bespoke mobile-first site showcasing clinical protocols with pre-filled WhatsApp booking buttons routed to front-desk staff.',
        image: portfolioClinicWebImg,
      },
      {
        id: 'bistro-aurore',
        title: 'Bespoke Logotype & Brand Stationery',
        client: 'Bistrô Aurore Gastronomia',
        categoryKey: 'branding',
        category: 'Branding',
        location: 'Bela Vista · Porto Alegre',
        deliveryTime: 'Delivered in 4 days',
        outcome: 'Complete visual alignment across signage, menus, and digital channels',
        summary:
          'Authorial emblem design, refined typography, and practical black-and-gold application guidelines.',
        challenge:
          'The restaurant needed to replace an improvised mark with a visual identity matching the caliber of its dining room and wine program.',
        solution:
          'We designed a timeless metallic logotype and unified visual system across printed menus, takeaway packaging, and social feeds.',
        image: portfolioBistroBrandImg,
      },
      {
        id: 'barbearia-midas',
        title: 'Pro Instagram Restructuring & Bio',
        client: 'Midas Club Barbearia',
        categoryKey: 'social',
        category: 'Social Media',
        location: 'Historic Center · Porto Alegre',
        deliveryTime: 'Delivered in 2 days',
        outcome: 'Restructured profile driving steady local appointment requests',
        summary:
          'Strategic bio rewrite, highlight covers, and cohesive feed art direction tailored to local male grooming clients.',
        challenge:
          'Daily profile visitors could not easily find opening hours, neighborhood location, or a frictionless WhatsApp booking link.',
        solution:
          'We rewrote the bio with clear local hooks, designed custom highlight icons, and established a crisp black-and-gold feed aesthetic.',
        image: portfolioBarberInstaImg,
      },
      {
        id: 'arcus-arquitetura',
        title: 'Digital Portfolio & Lead Qualification',
        client: 'Arcus Arquitetura & Interiores',
        categoryKey: 'websites',
        category: 'Websites',
        location: 'Petrópolis · Porto Alegre',
        deliveryTime: 'Delivered in 4 days',
        outcome: 'Elevated studio positioning that increased average project value',
        summary:
          'High-contrast minimalist portfolio site designed to showcase residential and commercial architectural projects.',
        challenge:
          'Sending heavy PDF portfolios manually on WhatsApp slowed down sales follow-ups and diluted the studio’s premium positioning.',
        solution:
          'We launched a lightweight digital portfolio with curated project galleries, studio methodology, and a structured inquiry brief.',
        image: portfolioArchitectWebImg,
      },
      {
        id: 'aurelia-joalheria',
        title: 'Fine Jewelry Brand Identity & Packaging',
        client: 'Aurelia Joalheria Fina',
        categoryKey: 'branding',
        category: 'Branding',
        location: 'Auxiliadora · Porto Alegre',
        deliveryTime: 'Delivered in 3 days',
        outcome: 'Immediate uplift in unboxing experience and gift presentation',
        summary:
          'Monogram design, classic serif pairing, and matte-black stationery system finished with gold foil accents.',
        challenge:
          'Although the jeweler crafted high-ticket pieces, its boxes, tags, and guarantee cards did not reflect in-store luxury.',
        solution:
          'We built an elevated typographic wordmark, embossed wax-seal motifs, warranty cards, and packaging guidelines.',
        image: portfolioJewelerBrandImg,
      },
      {
        id: 'wellness-move-pilates',
        title: 'Feed Direction, Bio & Post Templates',
        client: 'Wellness & Move Pilates Studio',
        categoryKey: 'social',
        category: 'Social Media',
        location: 'Três Figueiras · Porto Alegre',
        deliveryTime: 'Delivered in 3 days',
        outcome: '+44% trial class requests via Instagram within 30 days',
        summary:
          'Custom carousel and story template suite, highlight structure, and local conversion copywriting for a boutique studio.',
        challenge:
          'Ad-hoc posts lacked visual consistency and failed to convert neighborhood views into booked introductory sessions.',
        solution:
          'We designed a cohesive editorial grid echoing the studio space, updated the bio for local discovery, and delivered ready-to-publish templates.',
        image: portfolioPilatesSocialImg,
      },
    ],
    testimonials: [
      {
        name: 'Camila Ferreira',
        role: 'Managing Partner',
        company: 'Avant Estética & Odontologia',
        city: 'Porto Alegre',
        service: 'Professional Website',
        quote:
          'We used to rely on fragmented messages with no context. Within 3 days we had an impeccable site live, and patients began reaching out already trusting our clinic.',
      },
      {
        name: 'Rafael Mendes',
        role: 'Owner',
        company: 'Midas Club Barbearia',
        city: 'Porto Alegre',
        service: 'Instagram + Strategic Bio',
        quote:
          'Communication was direct and human from start to finish. They revamped our bio, highlights, and profile aesthetic—that same week new clients started messaging about openings.',
      },
      {
        name: 'Henrique Vasconcellos',
        role: 'Principal Architect',
        company: 'Arcus Arquitetura',
        city: 'Porto Alegre',
        service: 'Visual Identity + Website',
        quote:
          'Their attention to refinements and delivery speed surprised our team. Today we share our website link with pride and book meetings with much better-qualified clients.',
      },
    ],
    caseStudies: [
      {
        id: 'case-avant-estetica',
        number: '01',
        client: 'Avant Estética & Odontologia',
        segment: 'Institutional Website & Local Capture',
        location: 'Moinhos de Vento · Porto Alegre',
        deliveryTime: 'Delivered in 3 days',
        headline:
          'From referral-only inquiries to a predictable consultation pipeline via Google and WhatsApp.',
        headlineMetric: '+68% booked assessments in 45 days',
        problem:
          'Despite high client satisfaction in person, the clinic was invisible in local Google searches. Instagram visitors landed on a bare phone number with zero clarity on clinical protocols or team credentials, causing repetitive questions and pre-booking drop-off.',
        solution:
          'We built a fast, mobile-oriented institutional website with dedicated protocol pages, studio trust markers, and smart booking buttons that open the front-desk WhatsApp with the chosen treatment pre-filled.',
        deliverables: [
          'Persuasive mobile-first layout architecture',
          'Local search optimized service pages (Porto Alegre SEO)',
          'Direct WhatsApp reception routing with pre-filled inquiry context',
        ],
        resultsSummary:
          'Within the first 45 days live, the clinic cut manual screening time and began welcoming patients ready to schedule in-person evaluations.',
        metrics: [
          {
            value: '+68%',
            label: 'WhatsApp assessment requests during the first 45 days',
          },
          {
            value: '3 days',
            label: 'Total turnaround from initial briefing to live launch',
          },
          {
            value: '1.2 s',
            label: 'Average first-page load speed on 4G mobile connections',
          },
        ],
        image: portfolioClinicWebImg,
      },
      {
        id: 'case-bistro-aurore',
        number: '02',
        client: 'Bistrô Aurore Gastronomia',
        segment: 'Brand Identity & Digital Showcase',
        location: 'Bela Vista · Porto Alegre',
        deliveryTime: 'Delivered in 4 days',
        headline:
          'Brand repositioning that elevated perceived value and multiplied weekend table reservations.',
        headlineMetric: '+52% weekend bookings in 60 days',
        problem:
          'The restaurant offered fine dining in-house yet used an improvised logo and a heavy PDF menu that stalled on smartphones, discouraging spontaneous visitors from checking dishes and booking ahead.',
        solution:
          'We crafted a timeless black-and-gold identity applied across menus, signage, and social media, paired with a lightweight web showcase featuring a browsable browser menu and two-tap table reservations.',
        deliverables: [
          'Bespoke logotype with practical color and typography guidelines',
          'Unified visual system across menus, packaging, and social media',
          'Fast-loading web showcase with interactive menu and reservation CTA',
        ],
        resultsSummary:
          'The brand achieved full visual consistency between dining room and digital touchpoints, converting Google Maps and Instagram browsers into reserved tables.',
        metrics: [
          {
            value: '+52%',
            label: 'Advance reservations for Friday & Saturday dinners in 60 days',
          },
          {
            value: '100%',
            label: 'Visual unification across storefront, print menus, and Instagram',
          },
          {
            value: '4 days',
            label: 'Simultaneous delivery of brand identity and web showcase',
          },
        ],
        image: portfolioBistroBrandImg,
      },
      {
        id: 'case-arcus-arquitetura',
        number: '03',
        client: 'Arcus Arquitetura & Interiores',
        segment: 'Digital Portfolio & Sales Qualification',
        location: 'Petrópolis · Porto Alegre',
        deliveryTime: 'Delivered in 4 days',
        headline:
          'Bespoke editorial portfolio that pre-qualified leads and raised average project value.',
        headlineMetric: '2.4x higher average ticket in 90 days',
        problem:
          'Every quote inquiry required manually sending multi-megabyte PDF decks over WhatsApp, delaying commercial responses and undermining the exclusivity expected by high-end residential and corporate clients.',
        solution:
          'We engineered a high-contrast minimalist portfolio featuring curated project galleries by typology, studio philosophy, and a structured qualification form capturing floor area, neighborhood, and timeline prior to WhatsApp contact.',
        deliverables: [
          'Editorial portfolio with progressive project photography loading',
          'Commercial pre-qualification flow connected to partners’ WhatsApp',
          'Technical local SEO optimization for Porto Alegre architecture queries',
        ],
        resultsSummary:
          'Within three months, the studio eliminated manual PDF attachments and began holding discovery calls exclusively with aligned prospects.',
        metrics: [
          {
            value: '2.4x',
            label: 'Increase in average contracted project ticket within 90 days',
          },
          {
            value: '-70%',
            label: 'Reduction in sales team time spent on initial lead screening',
          },
          {
            value: '4 days',
            label: 'From initial creative alignment to live launch with active SEO',
          },
        ],
        image: portfolioArchitectWebImg,
      },
    ],
  },
  ...AGENCY_LOCALES_A,
  ...AGENCY_LOCALES_B,
};

// Backward-compatible default Portuguese exports
export const PRICING_PLANS = AGENCY_DATA_BY_LANGUAGE.pt.pricingPlans;
export const ADDITIONAL_SERVICES = AGENCY_DATA_BY_LANGUAGE.pt.additionalServices;
export const PROOF_METRICS = AGENCY_DATA_BY_LANGUAGE.pt.proofMetrics;
export const DIFFERENTIALS = AGENCY_DATA_BY_LANGUAGE.pt.differentials;
export const SERVICES = AGENCY_DATA_BY_LANGUAGE.pt.services;
export const PORTFOLIO_PROJECTS = AGENCY_DATA_BY_LANGUAGE.pt.portfolioProjects;
export const TESTIMONIALS = AGENCY_DATA_BY_LANGUAGE.pt.testimonials;
export const CASE_STUDIES = AGENCY_DATA_BY_LANGUAGE.pt.caseStudies;
