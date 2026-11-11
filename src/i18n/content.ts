import { siteConfig } from "@/data/site";
import type { Locale } from "./routes";
import { siteCopy } from "./messages";

type TranslatedContent = Pick<typeof siteConfig, "services" | "serviceDetails" | "about"> & {
  companyDescription: string;
  erpDescription: string;
};

const translations = {
  en: {
    companyDescription: "CAMELEYON Dynamics helps organizations analyze, optimize and transform their operations with data, operations research and applications.",
    services: [
      {
        title: "Operations research",
        description: "Decision support, process optimization, resource allocation, scheduling, simulation and mathematical modeling."
      },
      {
        title: "Data analytics",
        description: "Data cleaning and exploration, predictive analytics, dashboards, business intelligence and Power BI reports."
      },
      {
        title: "Project management",
        description: "Planning, implementation tracking, performance metrics, coordination and strategic guidance."
      },
      {
        title: "Software development",
        description: "We design scalable software, applications and digital platforms that bring operations, data and business workflows together."
      }
    ],
    serviceDetails: [
      {
        title: "Optimization and decision support",
        subtitle: "Intelligent solutions for strategic decisions",
        intro: "At CAMELEYON Dynamics, we believe performance goes beyond efficiency. It depends on informed decisions that fit your needs and hold up over time. Our approach turns operational challenges into opportunities for growth.",
        sections: [
          {
            title: "A tailored approach",
            body: "Every organization has its own context, constraints and goals. We begin by examining your processes, resources and decision-making practices to develop solutions that meet your needs."
          },
          {
            title: "Intelligent tools",
            body: "We use that analysis to design intuitive models and tools that support your operational and strategic decisions.",
            bullets: [
              "Streamline your operations",
              "Allocate resources more effectively",
              "Strengthen your ability to make decisions",
              "Reduce costs while maximizing value"
            ]
          },
          {
            title: "Ongoing support",
            body: "Our work continues after implementation. We provide regular follow-up, make adjustments as needed and carry out proactive maintenance to keep your solutions performing well."
          }
        ],
        conclusion: "By combining operations research techniques with practical knowledge of your work, we help make your operations a source of lasting growth."
      },
      {
        title: "Data analytics",
        subtitle: "Use your data to improve performance",
        intro: "CAMELEYON Dynamics helps businesses make the most of their data to make faster, better-informed strategic decisions. We turn streams of information into clear insights you can act on.",
        sections: [
          {
            title: "Machine learning",
            body: "We design predictive models that learn from your data to anticipate trends, detect anomalies and automate certain complex decisions.",
            bullets: [
              "Produce reliable forecasts tailored to your needs",
              "Identify risks and opportunities early",
              "Automate selected processes intelligently"
            ]
          },
          {
            title: "Custom business intelligence",
            body: "We build business intelligence solutions that centralize and visualize your data and make it accessible across the organization.",
            bullets: [
              "Track key metrics in real time",
              "Create intuitive, interactive dashboards",
              "Make it easier for teams to collaborate",
              "Make decisions based on clear analysis"
            ]
          },
          {
            title: "An approach focused on results",
            body: "We start with your strategic needs, then design solutions around your industry, goals and constraints. The tools evolve alongside your data and your organization."
          }
        ],
        conclusion: "We combine analytical rigor, technology and strategic thinking to turn your data into a lasting competitive advantage."
      },
      {
        title: "Project management",
        subtitle: "Make your projects more efficient and effective",
        intro: "A well-managed project can drive growth, improve performance and create lasting impact. CAMELEYON Dynamics supports organizations at every stage of the project lifecycle.",
        sections: [
          {
            title: "Strategic planning",
            body: "We turn your ideas into concrete, structured and realistic action plans.",
            bullets: [
              "Define objectives and expected outcomes",
              "Build a realistic, flexible schedule",
              "Estimate staffing, equipment and funding needs",
              "Identify and manage risks early"
            ]
          },
          {
            title: "Implementation and coordination",
            body: "We help your teams execute the plan with rigor, flexibility and clarity.",
            bullets: [
              "Coordinate stakeholders",
              "Keep work on schedule and within budget",
              "Set up tracking tools that fit the project",
              "Keep communication clear across project teams"
            ]
          },
          {
            title: "Performance monitoring",
            body: "We set up ways to measure progress and address deviations quickly.",
            bullets: [
              "Measure key performance indicators",
              "Identify deviations and propose corrective action",
              "Make better use of resources",
              "Improve transparency for partners and investors"
            ]
          },
          {
            title: "Evaluation and lessons learned",
            body: "Part of a project’s value lies in what you learn. We help document the results, effective practices and areas for improvement.",
            bullets: [
              "Assess impacts and outcomes",
              "Review what worked and what proved challenging",
              "Produce reports that support decisions",
              "Apply lessons learned to future projects"
            ]
          }
        ],
        conclusion: "With CAMELEYON Dynamics, completing a project becomes an opportunity for growth, innovation and lasting change."
      }
    ],
    erpDescription: "An ERP solution that helps small and medium-sized businesses manage sales, inventory, operations and data.",
    about: {
      story: "CAMELEYON Dynamics grew out of a simple belief: organizations move faster when their data, processes and digital tools work together. The firm combines strategic consulting, operational analysis and software development to build practical, lasting solutions.",
      whoWeAre: {
        title: "Who we are",
        intro: [
          "We are a decision analytics and project management consulting firm. We help organizations with integrated solutions or targeted work in project management, business analysis, optimization and decision support.",
          "At CAMELEYON Dynamics, our mission goes beyond operational efficiency. We believe every business can help its community thrive. That’s why our solutions are designed to:"
        ],
        commitments: [
          "Give businesses accessible tools to manage, make decisions and grow sustainably.",
          "Create a lasting impact on employment by helping organizations plan their resources and grow at a sustainable pace.",
          "Encourage more sustainable decisions through objective data and transparent models.",
          "Find ways to make our services as accessible as possible.",
          "Combine analytics with social responsibility so that better performance also supports equity, stability and lasting impact."
        ],
        conclusion: ""
      },
      vision: "To make CAMELEYON Dynamics a trusted partner for organizations that want to use data, technology and optimization to improve their decisions and operations.",
      mission: [
        "Design advanced analytics solutions tailored to each client’s needs.",
        "Help businesses put those solutions into practice by making them accessible, practical and fully integrated into their operations.",
        "Offer inclusive services designed for small, medium-sized and large businesses."
      ],
      strategicGoals: [
        "Help small and medium-sized businesses organize their operations more effectively",
        "Build straightforward, useful and accessible applications",
        "Offer consulting services grounded in data",
        "Support decisions with analytical and operational models",
        "Build a suite of interconnected digital solutions"
      ],
      values: [
        "Clarity",
        "Reliability",
        "Satisfaction",
        "Simplicity",
        "Practical impact",
        "Adaptability"
      ]
    }
  },
  es: {
    companyDescription: "CAMELEYON Dynamics ayuda a las organizaciones a analizar, optimizar y transformar sus operaciones mediante los datos, la investigación de operaciones y las aplicaciones.",
    services: [
      {
        title: "Investigación de operaciones",
        description: "Apoyo a la toma de decisiones, optimización de procesos, asignación de recursos, planificación, simulación y modelización matemática."
      },
      {
        title: "Análisis de datos",
        description: "Limpieza y exploración de datos, análisis predictivo, paneles, inteligencia empresarial e informes en Power BI."
      },
      {
        title: "Gestión de proyectos",
        description: "Planificación, seguimiento de la ejecución, indicadores de rendimiento, coordinación y asesoría estratégica."
      },
      {
        title: "Desarrollo de software",
        description: "Diseñamos software, aplicaciones y plataformas digitales escalables que centralizan las operaciones, los datos y los flujos de trabajo."
      }
    ],
    serviceDetails: [
      {
        title: "Optimización y apoyo a la toma de decisiones",
        subtitle: "Soluciones inteligentes para decisiones estratégicas",
        intro: "En CAMELEYON Dynamics creemos que el rendimiento va más allá de la eficiencia. Depende de decisiones informadas, adaptadas al contexto y sostenibles. Nuestro enfoque convierte los retos operativos en oportunidades de crecimiento.",
        sections: [
          {
            title: "Un enfoque a medida",
            body: "Cada organización tiene su propio contexto, sus limitaciones y sus objetivos. Empezamos por analizar tus procesos, recursos y formas de tomar decisiones para desarrollar soluciones que respondan a tus necesidades."
          },
          {
            title: "Herramientas inteligentes",
            body: "A partir de ese análisis, diseñamos modelos y herramientas intuitivas que respaldan tus decisiones operativas y estratégicas.",
            bullets: [
              "Simplificar tus operaciones",
              "Optimizar la asignación de recursos",
              "Mejorar tu capacidad para tomar decisiones",
              "Reducir los costos y maximizar el valor"
            ]
          },
          {
            title: "Acompañamiento continuo",
            body: "Nuestro trabajo continúa después de la implementación. Hacemos un seguimiento periódico, ajustamos las soluciones según las necesidades y ofrecemos mantenimiento preventivo para conservar su rendimiento."
          }
        ],
        conclusion: "Al combinar técnicas de investigación de operaciones con un conocimiento práctico de tu actividad, ayudamos a que tus operaciones impulsen un crecimiento sostenible."
      },
      {
        title: "Análisis de datos",
        subtitle: "Usa tus datos para mejorar el rendimiento",
        intro: "CAMELEYON Dynamics ayuda a las empresas a aprovechar sus datos para tomar decisiones estratégicas más rápidas y fundamentadas. Transformamos tus flujos de información en conclusiones claras que permiten actuar.",
        sections: [
          {
            title: "Aprendizaje automático",
            body: "Diseñamos modelos predictivos que aprenden de tus datos para anticipar tendencias, detectar anomalías y automatizar determinadas decisiones complejas.",
            bullets: [
              "Generar pronósticos fiables y personalizados",
              "Detectar riesgos y oportunidades con anticipación",
              "Automatizar de forma inteligente determinados procesos"
            ]
          },
          {
            title: "Inteligencia empresarial a medida",
            body: "Desarrollamos soluciones de inteligencia empresarial que centralizan y visualizan tus datos y facilitan el acceso en todos los niveles de la organización.",
            bullets: [
              "Seguir los indicadores clave en tiempo real",
              "Crear paneles intuitivos e interactivos",
              "Facilitar la colaboración entre equipos",
              "Tomar decisiones a partir de análisis claros"
            ]
          },
          {
            title: "Un enfoque orientado a resultados",
            body: "Partimos de tus necesidades estratégicas y diseñamos soluciones adaptadas a tu sector, tus objetivos y tus limitaciones. Las herramientas evolucionan con tus datos y tu organización."
          }
        ],
        conclusion: "Combinamos rigor analítico, tecnología y visión estratégica para convertir tus datos en una ventaja competitiva duradera."
      },
      {
        title: "Gestión de proyectos",
        subtitle: "Mejora la eficiencia y la eficacia de tus proyectos",
        intro: "Un proyecto bien gestionado puede impulsar el crecimiento, mejorar el rendimiento y generar un impacto duradero. CAMELEYON Dynamics acompaña a las organizaciones en todas las etapas de sus proyectos.",
        sections: [
          {
            title: "Planificación estratégica",
            body: "Convertimos tus ideas en planes de acción concretos, estructurados y realistas.",
            bullets: [
              "Definir los objetivos y los resultados esperados",
              "Elaborar un calendario realista y flexible",
              "Estimar los recursos humanos, materiales y financieros",
              "Identificar y gestionar los riesgos con anticipación"
            ]
          },
          {
            title: "Implementación y coordinación",
            body: "Ayudamos a tus equipos a ejecutar el plan con rigor, flexibilidad y claridad.",
            bullets: [
              "Coordinar a las partes interesadas",
              "Cumplir los plazos y el presupuesto",
              "Incorporar herramientas de seguimiento adecuadas",
              "Facilitar la comunicación entre los equipos del proyecto"
            ]
          },
          {
            title: "Control y seguimiento del rendimiento",
            body: "Establecemos mecanismos para medir el progreso y corregir las desviaciones con rapidez.",
            bullets: [
              "Medir los indicadores clave de rendimiento",
              "Identificar desviaciones y proponer medidas correctivas",
              "Optimizar el uso de los recursos",
              "Mejorar la transparencia para socios e inversores"
            ]
          },
          {
            title: "Evaluación y lecciones aprendidas",
            body: "Parte del valor de un proyecto está en lo que se aprende. Ayudamos a documentar los resultados, las buenas prácticas y las oportunidades de mejora.",
            bullets: [
              "Evaluar el impacto y los resultados obtenidos",
              "Analizar las buenas prácticas y las dificultades encontradas",
              "Elaborar informes que faciliten la toma de decisiones",
              "Aplicar lo aprendido para fortalecer proyectos futuros"
            ]
          }
        ],
        conclusion: "Con CAMELEYON Dynamics, completar un proyecto se convierte en una oportunidad de crecimiento, innovación y transformación duradera."
      }
    ],
    erpDescription: "Una solución ERP que ayuda a las pequeñas y medianas empresas a gestionar las ventas, el inventario, las operaciones y los datos.",
    about: {
      story: "CAMELEYON Dynamics nació de una idea sencilla: las organizaciones avanzan más rápido cuando sus datos, procesos y herramientas digitales trabajan en conjunto. La empresa combina consultoría estratégica, análisis operativo y desarrollo de software para crear soluciones prácticas y duraderas.",
      whoWeAre: {
        title: "Quiénes somos",
        intro: [
          "Somos una empresa de consultoría en análisis para la toma de decisiones y gestión de proyectos. Acompañamos a las organizaciones con soluciones integrales o servicios específicos de gestión de proyectos, análisis de negocios, optimización y apoyo a la toma de decisiones.",
          "En CAMELEYON Dynamics, nuestra misión va más allá de la eficiencia operativa. Creemos que toda empresa puede contribuir al progreso de su comunidad. Por eso diseñamos nuestras soluciones para:"
        ],
        commitments: [
          "Ofrecer a las empresas herramientas accesibles para gestionar, tomar decisiones y crecer de forma sostenible.",
          "Generar un impacto duradero en el empleo al ayudar a las organizaciones a planificar sus recursos y crecer de forma equilibrada.",
          "Promover decisiones más sostenibles mediante datos objetivos y modelos transparentes.",
          "Buscar distintas formas de que nuestros servicios sean lo más accesibles posible.",
          "Combinar el análisis de datos con la responsabilidad social para que el rendimiento también impulse la equidad, la estabilidad y un impacto a largo plazo."
        ],
        conclusion: ""
      },
      vision: "Hacer de CAMELEYON Dynamics un aliado de referencia para las organizaciones que quieren aprovechar los datos, la tecnología y la optimización para mejorar sus decisiones y operaciones.",
      mission: [
        "Diseñar soluciones analíticas avanzadas y a medida que respondan a las necesidades de cada cliente.",
        "Acompañar a las empresas en la implementación de soluciones accesibles, prácticas e integradas en sus operaciones.",
        "Ofrecer un servicio inclusivo pensado para pequeñas, medianas y grandes empresas."
      ],
      strategicGoals: [
        "Ayudar a las pymes a organizar mejor sus operaciones",
        "Desarrollar aplicaciones sencillas, útiles y accesibles",
        "Ofrecer servicios de consultoría basados en datos",
        "Apoyar la toma de decisiones mediante modelos analíticos y operativos",
        "Crear un conjunto de soluciones digitales interconectadas"
      ],
      values: [
        "Claridad",
        "Fiabilidad",
        "Satisfacción",
        "Sencillez",
        "Impacto concreto",
        "Adaptabilidad"
      ]
    }
  },
} satisfies Record<Exclude<Locale, "fr">, TranslatedContent>;

export function siteContent(locale: Locale) {
  const content = locale === "fr" ? {
    companyDescription: siteConfig.company.description,
    services: siteConfig.services,
    serviceDetails: siteConfig.serviceDetails,
    about: siteConfig.about,
  } : translations[locale];
  const t = siteCopy(locale);

  return {
    ...content,
    products: siteConfig.products.map((product) => ({
      ...product,
      description: locale !== "fr" && product.id === "erp" ? translations[locale].erpDescription : product.description,
      statusLabel: t(product.status),
      cta: t("productCta"),
    })),
  };
}
