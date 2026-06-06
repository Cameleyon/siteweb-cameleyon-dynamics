export type ProductStatus =
  | "Disponible"
  | "En développement"
  | "Bientôt disponible";

export type Service = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  title: string;
  subtitle: string;
  intro: string;
  sections: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  conclusion: string;
};

export type Product = {
  name: string;
  description: string;
  status: ProductStatus;
  href: string;
  cta: string;
};

export const siteConfig = {
  company: {
    name: "CAMELEYON Dynamics",
    url: "https://www.cameleyondynamics.com",
    logoPath: "/logo-cameleyon-dynamics.png",
    iconPath: "/logo-cameleyon-icon.png",
    tagline: "Consultation, données et solutions SaaS pour des opérations plus claires.",
    description:
      "CAMELEYON Dynamics accompagne les organisations dans l'analyse, l'optimisation et la transformation de leurs opérations grâce aux données, à la recherche opérationnelle et aux produits SaaS.",
    email: "contact@cameleyondynamics.com",
    linkedInUrl: "https://www.linkedin.com/company/cameleyon-dynamics",
    appointmentUrl: "https://calendar.app.google/sFqmvagnRiTY2Ph89",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  expertise: [
    "Recherche opérationnelle",
    "Analyse de données",
    "Gestion de projet",
    "Développement de logiciels",
  ],
  services: [
    {
      title: "Recherche opérationnelle",
      description:
        "Aide à la décision, optimisation des processus, allocation de ressources, planification, simulation et modélisation mathématique.",
    },
    {
      title: "Analyse de données",
      description:
        "Nettoyage, exploration, analyse prédictive, tableaux de bord, Business Intelligence, rapports Power BI et indicateurs clés.",
    },
    {
      title: "Gestion de projet",
      description:
        "Planification, suivi d'exécution, indicateurs de performance, coordination et accompagnement stratégique.",
    },
    {
      title: "Développement de logiciels",
      description:
        "Conception de logiciels, plateformes SaaS et produits numériques évolutifs pour centraliser les opérations, les données et les workflows métier.",
    },
  ] satisfies Service[],
  serviceDetails: [
    {
      title: "Optimisation et aide à la décision",
      subtitle: "Des solutions intelligentes pour des choix stratégiques",
      intro:
        "Chez CAMELEYON Dynamics, nous croyons que la performance ne se limite pas à l'efficacité: elle repose sur des décisions éclairées, adaptées et durables. Notre approche transforme vos défis opérationnels en leviers de croissance.",
      sections: [
        {
          title: "Une approche sur mesure",
          body:
            "Chaque organisation a son contexte, ses contraintes et ses objectifs. Nous commençons par une analyse approfondie de vos processus, de vos ressources et de vos mécanismes de décision afin de développer des solutions réellement alignées avec vos besoins.",
        },
        {
          title: "Des outils intelligents",
          body:
            "À partir de cette analyse, nous concevons des modèles et des outils intuitifs pour appuyer vos décisions opérationnelles et stratégiques.",
          bullets: [
            "Rationaliser vos opérations",
            "Optimiser l'allocation de vos ressources",
            "Renforcer vos capacités de décision",
            "Réduire les coûts tout en maximisant la valeur",
          ],
        },
        {
          title: "Un accompagnement continu",
          body:
            "Notre engagement ne s'arrête pas à la mise en oeuvre. Nous assurons un suivi régulier, des ajustements dynamiques et une maintenance proactive pour que les solutions restent performantes dans le temps.",
        },
      ],
      conclusion:
        "En combinant les techniques de la recherche opérationnelle et une compréhension concrète du terrain, nous faisons de vos opérations un moteur de croissance durable.",
    },
    {
      title: "Analyse de données",
      subtitle: "Transformez vos données en leviers de performance",
      intro:
        "CAMELEYON Dynamics aide les entreprises à tirer pleinement parti de leurs données pour prendre des décisions plus rapides, plus intelligentes et plus stratégiques. Nous transformons vos flux d'information en insights clairs et actionnables.",
      sections: [
        {
          title: "Apprentissage automatique",
          body:
            "Nous concevons des modèles prédictifs qui apprennent de vos données pour anticiper les tendances, détecter les anomalies et automatiser certaines décisions complexes.",
          bullets: [
            "Produire des prévisions fiables et personnalisées",
            "Détecter les risques et opportunités de façon proactive",
            "Automatiser intelligemment certains processus",
          ],
        },
        {
          title: "Solutions BI sur mesure",
          body:
            "Nous développons des solutions de Business Intelligence qui centralisent, visualisent et rendent vos données accessibles à tous les niveaux de l'organisation.",
          bullets: [
            "Suivre vos indicateurs clés en temps réel",
            "Créer des tableaux de bord interactifs et intuitifs",
            "Faciliter la collaboration entre les équipes",
            "Prendre des décisions fondées sur des analyses claires",
          ],
        },
        {
          title: "Une approche orientée résultats",
          body:
            "Nous partons de vos besoins stratégiques, puis nous concevons des solutions adaptées à votre secteur, vos objectifs et vos contraintes. Les outils évoluent ensuite au rythme de vos données et de votre organisation.",
        },
      ],
      conclusion:
        "En combinant rigueur analytique, innovation technologique et vision stratégique, nous faisons de vos données un avantage concurrentiel durable.",
    },
    {
      title: "Gestion de projet",
      subtitle: "Augmentez l'efficience et l'efficacité de vos projets",
      intro:
        "Un projet bien géré est un levier puissant de croissance, de performance et d'impact durable. CAMELEYON Dynamics accompagne les organisations à chaque étape du cycle de vie de leurs projets.",
      sections: [
        {
          title: "Planification stratégique",
          body:
            "Nous transformons vos idées en plans d'action concrets, structurés et réalistes.",
          bullets: [
            "Définir les objectifs et les résultats attendus",
            "Construire un échéancier réaliste et flexible",
            "Estimer les ressources humaines, matérielles et financières",
            "Analyser et gérer les risques de façon préventive",
          ],
        },
        {
          title: "Mise en oeuvre et coordination",
          body:
            "Nous accompagnons vos équipes dans l'exécution avec rigueur, agilité et clarté.",
          bullets: [
            "Coordonner les parties prenantes",
            "Assurer le respect des délais et du budget",
            "Mettre en place des outils de suivi adaptés",
            "Favoriser une communication claire entre les acteurs du projet",
          ],
        },
        {
          title: "Contrôle et suivi de performance",
          body:
            "Nous mettons en place des mécanismes de suivi pour mesurer les progrès et corriger rapidement les écarts.",
          bullets: [
            "Mesurer les indicateurs clés de performance",
            "Identifier les écarts et proposer des actions correctives",
            "Optimiser l'utilisation des ressources",
            "Renforcer la transparence auprès des partenaires et investisseurs",
          ],
        },
        {
          title: "Évaluation et capitalisation",
          body:
            "La valeur d'un projet se mesure aussi par ses apprentissages. Nous aidons à documenter les résultats, les bonnes pratiques et les pistes d'amélioration.",
          bullets: [
            "Évaluer les impacts et les résultats atteints",
            "Analyser les bonnes pratiques et les défis rencontrés",
            "Produire des rapports utiles à la décision",
            "Capitaliser les acquis pour renforcer les projets futurs",
          ],
        },
      ],
      conclusion:
        "Avec CAMELEYON Dynamics, vos projets ne sont pas seulement menés à bien: ils deviennent des opportunités de croissance, d'innovation et de transformation durable.",
    },
  ] satisfies ServiceDetail[],
  products: [
    {
      name: "CAMELEYON ERP",
      description:
        "Solution ERP pour aider les petites et moyennes entreprises à gérer les ventes, l'inventaire, les opérations et les données.",
      status: "Disponible",
      href: "https://erp.cameleyondynamics.com",
      cta: "Acceder au produit",
    },
    {
      name: "Culinexo",
      description: "",
      status: "En développement",
      href: "https://culinexo.cameleyondynamics.com",
      cta: "Accéder au produit",
    },
    {
      name: "Synova",
      description: "",
      status: "Bientôt disponible",
      href: "https://synova.cameleyondynamics.com",
      cta: "Accéder au produit",
    },
  ] satisfies Product[],
  about: {
    story:
      "CAMELEYON Dynamics est née d'une conviction simple: les organisations progressent plus vite lorsque leurs données, leurs processus et leurs outils numériques travaillent ensemble. La firme combine consultation stratégique, analyse opérationnelle et développement SaaS pour créer des solutions pratiques et durables.",
    whoWeAre: {
      title: "Qui nous sommes",
      intro: [
        "Nous sommes une entreprise de consultation en décision analytique et en gestion de projet. Nous accompagnons les organisations avec une expertise transversale, que ce soit pour des solutions intégrées couvrant plusieurs axes ou pour des interventions ciblées en gestion de projet, analyse d'affaires, optimisation et aide à la décision.",
        "Chez CAMELEYON Dynamics, notre mission va bien au-delà de l'efficacité opérationnelle. Nous croyons que chaque entreprise peut devenir un levier de progrès au sein de sa communauté. C'est pourquoi nos solutions sont conçues pour:",
      ],
      commitments: [
        "Renforcer les capacités des entreprises en leur fournissant des outils accessibles pour gérer, décider et croître de manière durable.",
        "Créer un impact durable sur l'emploi en aidant les organisations à planifier leurs ressources et à se développer de façon équilibrée.",
        "Favoriser une prise de décision plus durable grâce à une approche fondée sur des données objectives et des modèles transparents.",
        "Utiliser divers mécanismes pour rendre nos services aussi accessibles que possible.",
        "Allier intelligence analytique et responsabilité sociale afin que la performance devienne aussi un moteur d'équité, de stabilité et d'impact à long terme.",
      ],
      conclusion: "",
    },
    vision:
      "Faire de CAMELEYON Dynamics un partenaire de référence pour les organisations qui veulent mieux utiliser les données, la technologie et l'optimisation pour améliorer leurs décisions et leurs opérations.",
    mission: [
      "Concevoir des solutions analytiques complexes et sur mesure, répondant aux besoins spécifiques de nos clients.",
      "Accompagner les entreprises dans leur mise en oeuvre, en rendant ces solutions accessibles, concrètes et pleinement intégrées à leurs opérations.",
      "Proposer un service inclusif, pensé pour les petites, moyennes et grandes entreprises.",
    ],
    strategicGoals: [
      "Aider les PME à mieux structurer leurs opérations",
      "Développer des outils SaaS simples, utiles et accessibles",
      "Offrir des services de consultation basés sur les données",
      "Soutenir la prise de décision par des modèles analytiques et opérationnels",
      "Créer un écosystème de solutions numériques interconnectées",
    ],
    values: [
      "Clarté",
      "Fiabilité",
      "Satisfaction",
      "Simplicite",
      "Impact concret",
      "Adaptabilité",
    ],
  },
};
