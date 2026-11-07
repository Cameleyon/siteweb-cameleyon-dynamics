import type { Locale } from "./routes";

const languageIndex: Record<Locale, number> = { fr: 0, en: 1, es: 2 };

type Translation = readonly [french: string, english: string, spanish: string];

function translator<Key extends string>(messages: Record<Key, Translation>, locale: Locale) {
  return (key: Key) => messages[key][languageIndex[locale]];
}

const messages = {
  navLabel: [
    "Navigation principale",
    "Main navigation",
    "Navegación principal",
  ],
  language: [
    "Langue",
    "Language",
    "Idioma",
  ],
  brandSubtitle: [
    "Solutions & consultation",
    "Solutions & consulting",
    "Soluciones y consultoría",
  ],
  contactUs: [
    "Nous contacter",
    "Contact us",
    "Contáctanos",
  ],
  home: [
    "Accueil",
    "Home",
    "Inicio",
  ],
  solutions: [
    "Solutions",
    "Solutions",
    "Soluciones",
  ],
  about: [
    "À propos",
    "About",
    "Quiénes somos",
  ],
  contact: [
    "Contact",
    "Contact",
    "Contacto",
  ],
  quickLinks: [
    "Liens rapides",
    "Quick links",
    "Enlaces rápidos",
  ],
  copyright: [
    "Tous droits réservés.",
    "All rights reserved.",
    "Todos los derechos reservados.",
  ],
  homeTitle: [
    "Décision analytique, données et logiciels",
    "Decision analytics, data and software",
    "Análisis para la toma de decisiones, datos y software",
  ],
  homeMeta: [
    "CAMELEYON Dynamics accompagne les organisations en recherche opérationnelle, analyse de données, gestion de projet et développement de logiciels.",
    "CAMELEYON Dynamics helps organizations with operations research, data analytics, project management and software development.",
    "CAMELEYON Dynamics ayuda a las organizaciones con investigación de operaciones, análisis de datos, gestión de proyectos y desarrollo de software.",
  ],
  solutionsMeta: [
    "Services de consultation et applications de CAMELEYON Dynamics: recherche opérationnelle, données, Power BI, gestion de projet et optimisation.",
    "Consulting services and applications from CAMELEYON Dynamics: operations research, data, Power BI, project management and optimization.",
    "Servicios de consultoría y aplicaciones de CAMELEYON Dynamics: investigación de operaciones, datos, Power BI, gestión de proyectos y optimización.",
  ],
  aboutMeta: [
    "Vision, mission, histoire, objectifs stratégiques et valeurs de CAMELEYON Dynamics.",
    "The vision, mission, history, strategic goals and values of CAMELEYON Dynamics.",
    "Visión, misión, historia, objetivos estratégicos y valores de CAMELEYON Dynamics.",
  ],
  contactMeta: [
    "Contactez CAMELEYON Dynamics pour une consultation, une application, une intégration de données ou un rendez-vous.",
    "Contact CAMELEYON Dynamics about consulting, applications, data integration or booking a meeting.",
    "Contacta con CAMELEYON Dynamics para una consulta, una aplicación, una integración de datos o una cita.",
  ],
  heroTitle: [
    "Des décisions plus claires, des opérations mieux structurées.",
    "Clearer decisions, better organized operations.",
    "Decisiones más claras, operaciones mejor organizadas.",
  ],
  heroDescription: [
    "Nous aidons les organisations à transformer leurs données, leurs processus et leurs idées en solutions concrètes: consultation analytique, optimisation opérationnelle et applications évolutives.",
    "We help organizations turn their data, processes and ideas into practical solutions through analytics consulting, operational optimization and scalable applications.",
    "Ayudamos a las organizaciones a convertir sus datos, procesos e ideas en soluciones concretas mediante consultoría analítica, optimización operativa y aplicaciones escalables.",
  ],
  discover: [
    "Découvrir nos solutions",
    "Explore our solutions",
    "Descubre nuestras soluciones",
  ],
  ourMission: [
    "Notre mission",
    "Our mission",
    "Nuestra misión",
  ],
  missionTitle: [
    "Accompagner la transformation des opérations par la donnée et la technologie.",
    "Helping organizations transform their operations with data and technology.",
    "Acompañar la transformación de las operaciones mediante los datos y la tecnología.",
  ],
  missionDescription: [
    "CAMELEYON Dynamics combine recherche opérationnelle, analyse de données, gestion de projet et développement de logiciels pour bâtir des outils utiles, simples et adaptés aux réalités des organisations.",
    "CAMELEYON Dynamics combines operations research, data analytics, project management and software development to build practical, straightforward tools that meet organizations’ needs.",
    "CAMELEYON Dynamics combina investigación de operaciones, análisis de datos, gestión de proyectos y desarrollo de software para crear herramientas útiles, sencillas y adaptadas a las necesidades de las organizaciones.",
  ],
  expertise: [
    "Expertises",
    "Expertise",
    "Especialidades",
  ],
  mainServices: [
    "Services principaux",
    "Core services",
    "Servicios principales",
  ],
  mainServicesDescription: [
    "Des interventions ciblées pour comprendre, mesurer, optimiser et automatiser les opérations.",
    "Focused services to understand, measure, optimize and automate operations.",
    "Servicios específicos para comprender, medir, optimizar y automatizar las operaciones.",
  ],
  applications: [
    "Applications",
    "Applications",
    "Aplicaciones",
  ],
  applicationTitle: [
    "Solutions disponibles et à venir",
    "Available and upcoming solutions",
    "Soluciones disponibles y próximas",
  ],
  applicationDescription: [
    "Un écosystème d’applications pensées pour connecter les opérations, les données et les équipes.",
    "A suite of applications designed to connect operations, data and teams.",
    "Un conjunto de aplicaciones diseñadas para conectar las operaciones, los datos y los equipos.",
  ],
  seeDetails: [
    "Voir tous les détails",
    "See all details",
    "Ver todos los detalles",
  ],
  clearApproach: [
    "Approche claire",
    "Clear approach",
    "Enfoque claro",
  ],
  clearApproachDescription: [
    "Des diagnostics compréhensibles, des priorités bien structurées et des livrables utiles.",
    "Clear assessments, well-defined priorities and useful deliverables.",
    "Diagnósticos claros, prioridades bien definidas y entregables útiles.",
  ],
  scalableSolutions: [
    "Solutions évolutives",
    "Scalable solutions",
    "Soluciones escalables",
  ],
  scalableSolutionsDescription: [
    "Une architecture pensée pour accueillir paiement, portail client, authentification et intégrations.",
    "An architecture designed to support payments, a customer portal, authentication and integrations.",
    "Una arquitectura diseñada para incorporar pagos, un portal de clientes, autenticación e integraciones.",
  ],
  measurableImpact: [
    "Impact mesurable",
    "Measurable impact",
    "Impacto medible",
  ],
  measurableImpactDescription: [
    "Des indicateurs, modèles et tableaux de bord orientés vers les décisions concrètes.",
    "Metrics, models and dashboards built to support practical decisions.",
    "Indicadores, modelos y paneles orientados a la toma de decisiones concretas.",
  ],
  serviceApps: [
    "Services et applications",
    "Services and applications",
    "Servicios y aplicaciones",
  ],
  solutionsTitle: [
    "Des solutions pour mieux piloter les opérations et les données.",
    "Solutions to better manage operations and data.",
    "Soluciones para gestionar mejor las operaciones y los datos.",
  ],
  solutionsDescription: [
    "CAMELEYON Dynamics intervient autant dans la consultation que dans la création d’applications pour aider les organisations à gagner en clarté, en efficacité et en capacité de décision.",
    "CAMELEYON Dynamics offers consulting and builds applications to help organizations gain clarity, improve efficiency and make better decisions.",
    "CAMELEYON Dynamics ofrece consultoría y desarrolla aplicaciones para ayudar a las organizaciones a ganar claridad, mejorar la eficiencia y tomar mejores decisiones.",
  ],
  fields: [
    "Domaines d’expertise",
    "Areas of expertise",
    "Áreas de especialización",
  ],
  servicesByArea: [
    "Services par domaine",
    "Services by area",
    "Servicios por área",
  ],
  fieldsDescription: [
    "Chaque domaine peut être mobilisé séparément ou combiné dans une approche complète de transformation.",
    "Each service area can be used independently or combined as part of a broader transformation.",
    "Cada área de servicio puede abordarse por separado o combinarse como parte de una transformación integral.",
  ],
  detailedApproach: [
    "Approche détaillée",
    "Our approach",
    "Nuestro enfoque",
  ],
  howWeWork: [
    "Comment nous intervenons",
    "How we work",
    "Cómo trabajamos",
  ],
  ourApps: [
    "Nos applications",
    "Our applications",
    "Nuestras aplicaciones",
  ],
  appsOverview: [
    "Découvrez nos applications et leur disponibilité.",
    "Explore our applications and see what’s available.",
    "Descubre nuestras aplicaciones y consulta su disponibilidad.",
  ],
  solutionsCtaTitle: [
    "Vous voulez évaluer une solution ou cadrer un besoin?",
    "Want to evaluate a solution or define what you need?",
    "¿Quieres evaluar una solución o definir lo que necesitas?",
  ],
  solutionsCtaDescription: [
    "Planifions une discussion pour identifier les priorités, les données disponibles et le meilleur chemin de mise en œuvre.",
    "Let’s talk about your priorities, the data you have and the best way to move forward.",
    "Conversemos sobre tus prioridades, los datos disponibles y la mejor forma de avanzar.",
  ],
  aboutTitle: [
    "Une firme bâtie pour relier stratégie, données et solutions numériques.",
    "A firm built to connect strategy, data and digital solutions.",
    "Una empresa creada para conectar la estrategia, los datos y las soluciones digitales.",
  ],
  ourIdentity: [
    "Notre identité",
    "Our identity",
    "Nuestra identidad",
  ],
  vision: [
    "Vision",
    "Vision",
    "Visión",
  ],
  mission: [
    "Mission",
    "Mission",
    "Misión",
  ],
  values: [
    "Valeurs",
    "Values",
    "Valores",
  ],
  valuesTitle: [
    "Ce qui guide nos décisions",
    "What guides our decisions",
    "Lo que guía nuestras decisiones",
  ],
  contactTitle: [
    "Parlons de vos opérations, de vos données ou de votre prochaine application.",
    "Let’s talk about your operations, your data or your next application.",
    "Hablemos de tus operaciones, tus datos o tu próxima aplicación.",
  ],
  contactDetails: [
    "Coordonnées",
    "Contact details",
    "Datos de contacto",
  ],
  bookMeeting: [
    "Prendre rendez-vous",
    "Book a meeting",
    "Reserva una cita",
  ],
  bookDescription: [
    "Réservez directement un créneau dans le calendrier de CAMELEYON Dynamics pour discuter de vos besoins.",
    "Book a time directly on the CAMELEYON Dynamics calendar to discuss your needs.",
    "Reserva un horario directamente en el calendario de CAMELEYON Dynamics para hablar sobre tus necesidades.",
  ],
  calendar: [
    "Ouvrir le calendrier",
    "Open the calendar",
    "Abrir el calendario",
  ],
  ctaTitle: [
    "Prêt à structurer vos opérations avec plus de clarté?",
    "Ready to bring more clarity to your operations?",
    "¿Quieres organizar tus operaciones con más claridad?",
  ],
  ctaDescription: [
    "Discutons de vos données, de vos processus et des solutions numériques qui peuvent soutenir votre croissance.",
    "Let’s discuss your data, your processes and the digital solutions that can support your growth.",
    "Hablemos de tus datos, tus procesos y las soluciones digitales que pueden impulsar tu crecimiento.",
  ],
  seeSolutions: [
    "Voir les solutions",
    "See our solutions",
    "Ver las soluciones",
  ],
  productCta: [
    "Accéder au produit",
    "Open application",
    "Abrir la aplicación",
  ],
  available: [
    "Disponible",
    "Available",
    "Disponible",
  ],
  development: [
    "En développement",
    "In development",
    "En desarrollo",
  ],
  upcoming: [
    "Bientôt disponible",
    "Coming soon",
    "Próximamente",
  ],
} satisfies Record<string, Translation>;

const formMessages = {
  name: [
    "Nom",
    "Name",
    "Nombre",
  ],
  namePlaceholder: [
    "Votre nom",
    "Your name",
    "Tu nombre",
  ],
  email: [
    "Email",
    "Email",
    "Correo electrónico",
  ],
  emailPlaceholder: [
    "vous@entreprise.com",
    "you@company.com",
    "tu@empresa.com",
  ],
  subject: [
    "Sujet",
    "Subject",
    "Asunto",
  ],
  subjectPlaceholder: [
    "Consultation, application, partenariat...",
    "Consulting, application, partnership...",
    "Consultoría, aplicación, colaboración...",
  ],
  message: [
    "Message",
    "Message",
    "Mensaje",
  ],
  messagePlaceholder: [
    "Décrivez votre besoin ou votre projet.",
    "Tell us about your needs or project.",
    "Cuéntanos qué necesitas o en qué consiste tu proyecto.",
  ],
  submit: [
    "Envoyer",
    "Send",
    "Enviar",
  ],
  required: [
    "Veuillez remplir tous les champs avant l'envoi.",
    "Please complete all fields before submitting.",
    "Completa todos los campos antes de enviar.",
  ],
  received: [
    "Merci. Votre message a été reçu.",
    "Thank you. Your message has been received.",
    "Gracias. Hemos recibido tu mensaje.",
  ],
} satisfies Record<string, Translation>;

export function siteCopy(locale: Locale) {
  return translator(messages, locale);
}

export type ContactCopy = Record<keyof typeof formMessages, string>;

export function contactCopy(locale: Locale): ContactCopy {
  const t = translator(formMessages, locale);
  const keys = Object.keys(formMessages) as (keyof ContactCopy)[];
  return Object.fromEntries(keys.map((key) => [key, t(key)])) as ContactCopy;
}
