import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import "./styles-experiences.css";
import Eye from "./components/EyeMark.jsx";
import SecurityLab from "./components/SecurityLab.jsx";
import OperatorView from "./components/OperatorView.jsx";

const panels = [
  "vision",
  "risk",
  "iris",
  "securityLab",
  "operatorView",
  "technology",
  "story",
  "impact",
  "feedback",
];
const words = {
  "pt-BR": {
    nav: [
      "Visão",
      "O risco",
      "IRIS",
      "SECURITY LAB",
      "OPERATOR VIEW",
      "Tecnologia",
      "Nossa história",
      "Experiência",
      "Feedback",
    ],
    skipContent: "Pular para o conteúdo",
    skip: "Pular intro",
    online: "Sistema online",
    status: "Status IRIS",
    ready: "IRIS pronta",
    concept: "Arquitetura conceitual · hardware agnóstico",
    product: "Secure visor",
    overline: "Segurança inteligente. Visão além do risco.",
    vision: "Protegemos a informação\nno momento da decisão.",
    explore: "Explorar o sistema",
    winner: "1º lugar nacional",
    challenge: "Desafio GrandPrix Petrobras / SENAI",
    participants: "participantes",
    participantsNumber: "27 MIL+",
    states: "de todos os estados do Brasil",
    origin: "Da Bahia para o Brasil.",
    panel: "Painel IRIS",
    riskTitle: "IA no campo.\nRiscos no visor.",
    riskSub:
      "Quando a tecnologia chega ao ambiente crítico, a segurança precisa chegar junto.",
    threats: [
      [
        "Identidade vulnerável",
        "Óculos perdidos, roubados ou emprestados podem expor sistemas críticos.",
        "ACCESS RISK",
        "Uma mudança de utilizador exige nova validação de identidade.",
      ],
      [
        "Dados em trânsito",
        "Redes Wi-Fi industriais ou 5G público ampliam a superfície de ataque.",
        "TRAFFIC INTERCEPTED",
        "TLS 1.3 e mTLS protegem o canal de comunicação.",
      ],
      [
        "Respostas sem filtro",
        "Assistentes de IA podem exibir informações sensíveis diretamente no visor.",
        "SENSITIVE DATA BLOCKED",
        "A camada DLP filtra a resposta antes da exibição.",
      ],
    ],
    response: "Camada de resposta",
    irisTitle: "A camada segura\nno visor.",
    conceptual: "DESIGN CONCEITUAL · ARQUITETURA AGNÓSTICA",
    selectPoint: "Selecione um ponto do visor",
    features: [
      [
        "Câmera",
        "1080p / 60fps",
        "Visão computacional",
        "Biometria simulada por câmera",
      ],
      [
        "HUD",
        "MicroLED conceitual",
        "Informação contextual",
        "Visibilidade externa",
      ],
      [
        "Voz",
        "Comandos hands-free",
        "Cancelamento de ruído conceitual",
        "Interação sem toque",
      ],
      [
        "Autonomia",
        "Até 8h de operação conceitual",
        "Meta arquitetural",
        "Dependente do hardware escolhido",
      ],
    ],
    pillars: ["Validar", "Entender", "Filtrar", "Agir"],
    pillarText: [
      "Autenticação multifator contínua por PIN, voz e biometria simulada por visão computacional.",
      "Assistente de IA / LLM para responder perguntas e organizar dados complexos.",
      "Camada DLP que bloqueia automaticamente informações sensíveis antes da exibição.",
      "Informação contextual entregue via HUD para decisões rápidas com as mãos livres.",
    ],
    pillarLabel: "Quatro etapas. Uma camada de confiança.",
    flowTitle: "Segurança em cada\npassagem de dados.",
    flowSub:
      "Arquitetura modular que valida, protege e filtra antes de cada resposta chegar ao visor.",
    nodes: [
      "Óculos AR",
      "MFA contínua",
      "Gateway seguro",
      "IA / LLM",
      "DLP em tempo real",
      "Sistemas corporativos",
    ],
    cloud: "Modo nuvem",
    offline: "Modo offline",
    connected: "Conectividade disponível",
    disconnected: "Conectividade indisponível · regras locais ativas",
    simulate: "Simular queda de conexão",
    restore: "Restaurar conexão",
    techTitle: "Tecnologia com\npropósito operacional.",
    techSub:
      "Ferramentas citadas na arquitetura proposta. Selecione uma para ver o papel de cada camada.",
    tech: [
      [
        "Kong CE",
        "Gateway para controlar e encaminhar solicitações de forma centralizada.",
      ],
      [
        "OAuth 2.0 / OIDC",
        "Padrões de autorização e identidade para integrar o acesso.",
      ],
      [
        "JWT",
        "Token assinado para carregar declarações de identidade e autorização.",
      ],
      [
        "TLS 1.3",
        "Criptografia de transporte para proteger dados em trânsito.",
      ],
      ["mTLS", "Autenticação mútua entre cliente e serviço."],
      [
        "AD / Azure AD",
        "Integração planejada com provedores de identidade corporativos.",
      ],
      [
        "Zero Trust",
        "Verificar continuamente identidade, contexto e autorização.",
      ],
      [
        "Docker / Kubernetes",
        "Empacotamento e implantação modular na infraestrutura do cliente.",
      ],
      [
        "OpenCV / ML",
        "Visão computacional para uma simulação biométrica conceitual.",
      ],
    ],
    metrics: "Indicadores do projeto",
    metricNames: [
      "Autenticação",
      "DLP filtrado",
      "Latência adicionada",
      "Disponibilidade",
    ],
    metricsNote:
      "Metas e métricas conceituais do material do projeto — não são resultados de produção.",
    valueReuse: "Viabilidade por reutilização",
    valueNote:
      "Cenário estimado de valor potencial protegido. Não representa economia garantida.",
    estimate: "ESTIMATIVA · CENÁRIO POTENCIAL",
    noLicense: "ZERO LICENÇAS",
    reuse: "Busca reutilizar infraestrutura existente",
    existing: "AD / Azure AD · Docker / Kubernetes · SIEM",
    stack: "Kong CE · Keycloak · OpenCV · React",
    storyTitle: "Quatro estudantes.\nUma ideia.\nUm desafio nacional.",
    storyLead:
      "O projeto foi desenvolvido por estudantes de Desenvolvimento de Sistemas do SENAI CIMATEC e SENAI de Lauro de Freitas.",
    story:
      "Viemos da Bahia movidos pela tecnologia, pela vontade de criar e pela certeza de que inovação só faz sentido quando pode alcançar todos. A conquista nasceu da colaboração entre quatro estudantes.",
    teamPhotoAlt: "Os quatro estudantes do CtrlSec celebram a conquista nacional do projeto.",
    team: ["Áttila Machado", "Brahyan Dias", "Lucca Romano", "Jonatas Felipe"],
    teamLocation: "BAHIA, BRASIL",
    vlibrasLabel: "Abrir VLibras",
    vlibrasLoading: "VLibras carregando. Toque para abrir assim que estiver pronto.",
    vlibrasRetry: "VLibras indisponível. Toque para tentar novamente.",
    identityTitle: "O QUE A LOGO CARREGA",
    logoAlt: "Logo oficial da IRIS: um olho, cores azul e vermelha e o Farol da Barra.",
    logoTagline: "VISÃO QUE PROTEGE.\nORIGEM QUE IDENTIFICA.",
    identityEyeTitle: "OLHO",
    identityEyeCopy: "A identidade da IRIS e a visão contínua.",
    identityBahiaTitle: "BAHIA",
    identityBahiaCopy: "As cores que representam nossa origem.",
    identitySalvadorTitle: "SALVADOR",
    identitySalvadorCopy: "O Farol da Barra no centro do símbolo.",
    impactTitle: "Uma ideia que atravessou o país.",
    reach: "ALCANCE DO DESAFIO",
    impactTitle2: "Da Bahia para o Brasil.",
    impactText:
      "Quatro jovens baianos. Mais de 27 mil participantes de todos os estados do Brasil. Uma proposta reconhecida com o 1º lugar nacional no desafio GrandPrix Petrobras / SENAI.",
    demoTitle: "IRIS em operação",
    demoSub:
      "Experimente como a camada de segurança diferencia informação restrita de conteúdo operacional.",
    operator: "Operador",
    sensitive: "IRIS, mostrar relatórios financeiros da plataforma P-51.",
    safe: "IRIS, abrir manual de manutenção da bomba P-101A.",
    test: "Testar IRIS",
    denied: "Conteúdo sensível detectado",
    granted: "Manual carregado",
    blocked: "Solicitação bloqueada antes de chegar ao visor.",
    safeText: "Acesso autorizado · diagrama técnico disponível no HUD.",
    denyFlag: "ACCESS DENIED",
    grantFlag: "ACCESS GRANTED",
    dlp: "DLP ativo",
    conceptNote:
      "Demonstração conceitual · nenhum dado é enviado para um servidor.",
    feedbackTitle: "E você?\nConfiaria na IRIS?",
    feedbackQuestion:
      "Você usaria uma camada de segurança como a IRIS em um ambiente industrial?",
    yes: "Sim",
    no: "Não",
    why: "Por quê?",
    placeholder:
      "Conte o que você mudaria, melhoraria ou gostaria de ver na IRIS...",
    send: "Enviar feedback",
    saved: "FEEDBACK REGISTRADO",
    thanks: "Obrigado por ajudar a evoluir a tecnologia.",
    accessGranted: "ACCESS GRANTED ✓",
    feedbackReceived: "FEEDBACK RECEIVED",
    choose: "Escolha uma resposta antes de enviar.",
    accessibility: "Acessibilidade",
    appearance: "Aparência",
    dark: "Escuro",
    light: "Claro",
    language: "Idioma",
    voice: "Leitura por voz",
    voiceHint: "Selecione um trecho da interface para ouvir.",
    play: "Reproduzir",
    pause: "Pausar",
    stop: "Parar",
    speed: "Velocidade",
    reduced: "Reduzir movimentos",
    highlight: "Destacar links",
    contrast: "Alto contraste",
    vlibras: "VLibras",
    vlibrasHint: "Abre o widget oficial de tradução para Libras.",
    close: "Fechar",
    yesStatus: "Segura",
    network: "Rede",
    encrypted: "Criptografada",
    active: "Ativo",
    identity: "Identidade",
    zeroTrust: "Zero Trust",
    scan: "SCAN",
    scanDone: "AMBIENTE ANALISADO",
    scanSafe: "NENHUMA AMEAÇA DETECTADA",
    endTitle: "Segurança inteligente.\nVisão além do risco.",
    endSub: "Protegemos a informação no momento da decisão.",
    exploreAgain: "Explorar novamente",
    navLabel: "Navegação principal",
    openMenu: "Abrir navegação",
    closeMenu: "Fechar navegação",
    endExperience: "Encerrar experiência",
  },
  en: {
    nav: [
      "Overview",
      "The risk",
      "IRIS",
      "SECURITY LAB",
      "OPERATOR VIEW",
      "Technology",
      "Who we are",
      "Experience",
      "Feedback",
    ],
    skipContent: "Skip to content",
    skip: "Skip intro",
    online: "System online",
    status: "IRIS status",
    ready: "IRIS ready",
    concept: "Concept architecture · hardware agnostic",
    product: "Secure visor",
    overline: "Intelligent security. Vision beyond risk.",
    vision: "We protect information\nat the moment of decision.",
    explore: "Explore the system",
    winner: "National 1st place",
    challenge: "GrandPrix Petrobras / SENAI challenge",
    participants: "participants",
    participantsNumber: "27K+",
    states: "from every Brazilian state",
    origin: "From Bahia to Brazil.",
    panel: "IRIS control layer",
    riskTitle: "AI in the field.\nRisk in the visor.",
    riskSub:
      "When technology reaches critical environments, security must come along.",
    threats: [
      [
        "Vulnerable identity",
        "Lost, stolen or shared glasses can expose critical systems.",
        "ACCESS RISK",
        "A user change requires identity revalidation.",
      ],
      [
        "Data in transit",
        "Industrial Wi-Fi or public 5G expands the attack surface.",
        "TRAFFIC INTERCEPTED",
        "TLS 1.3 and mTLS protect the communication channel.",
      ],
      [
        "Unfiltered answers",
        "AI assistants may display sensitive information directly in the visor.",
        "SENSITIVE DATA BLOCKED",
        "The DLP layer filters the response before display.",
      ],
    ],
    response: "Response layer",
    irisTitle: "The secure layer\nin the visor.",
    conceptual: "CONCEPT DESIGN · HARDWARE-AGNOSTIC ARCHITECTURE",
    selectPoint: "Select a visor point",
    features: [
      [
        "Camera",
        "1080p / 60fps",
        "Computer vision",
        "Camera-based biometric simulation",
      ],
      [
        "HUD",
        "Conceptual MicroLED",
        "Contextual information",
        "Outdoor visibility",
      ],
      [
        "Voice",
        "Hands-free commands",
        "Conceptual noise cancellation",
        "Touch-free interaction",
      ],
      [
        "Autonomy",
        "Up to 8h conceptual operation",
        "Architectural target",
        "Depends on selected hardware",
      ],
    ],
    pillars: ["Validate", "Understand", "Filter", "Act"],
    pillarText: [
      "Continuous multi-factor authentication through PIN, voice and computer-vision biometric simulation.",
      "AI / LLM assistant to answer questions and organize complex data.",
      "DLP layer that automatically blocks sensitive information before display.",
      "Contextual information delivered via HUD for quick hands-free decisions.",
    ],
    pillarLabel: "Four steps. One layer of trust.",
    flowTitle: "Security at every\ndata handoff.",
    flowSub:
      "A modular architecture that validates, protects and filters before each response reaches the visor.",
    nodes: [
      "AR glasses",
      "Continuous MFA",
      "Secure gateway",
      "AI / LLM",
      "Real-time DLP",
      "Corporate systems",
    ],
    cloud: "Cloud mode",
    offline: "Offline mode",
    connected: "Connectivity available",
    disconnected: "Connectivity unavailable · local rules active",
    simulate: "Simulate connection loss",
    restore: "Restore connection",
    techTitle: "Technology with\noperational purpose.",
    techSub:
      "Tools referenced in the proposed architecture. Select one to see its role.",
    tech: [
      ["Kong CE", "Gateway to centrally control and route requests."],
      [
        "OAuth 2.0 / OIDC",
        "Authorization and identity standards for access integration.",
      ],
      ["JWT", "Signed token carrying identity and authorization claims."],
      ["TLS 1.3", "Transport encryption to protect data in transit."],
      ["mTLS", "Mutual authentication between client and service."],
      [
        "AD / Azure AD",
        "Planned integration with corporate identity providers.",
      ],
      [
        "Zero Trust",
        "Continuously verify identity, context and authorization.",
      ],
      [
        "Docker / Kubernetes",
        "Modular packaging and deployment in customer infrastructure.",
      ],
      ["OpenCV / ML", "Computer vision for a conceptual biometric simulation."],
    ],
    metrics: "Project indicators",
    metricNames: [
      "Authentication",
      "DLP filtered",
      "Added latency",
      "Availability",
    ],
    metricsNote:
      "Conceptual targets and metrics from project materials — not production results.",
    valueReuse: "Value through reuse",
    valueNote:
      "Estimated scenario of potential value protected. Not guaranteed savings.",
    estimate: "ESTIMATE · POTENTIAL SCENARIO",
    noLicense: "ZERO LICENSES",
    reuse: "Designed to reuse existing infrastructure",
    existing: "AD / Azure AD · Docker / Kubernetes · SIEM",
    stack: "Kong CE · Keycloak · OpenCV · React",
    storyTitle: "Four students.\nOne idea.\nA national challenge.",
    storyLead:
      "The project was developed by Systems Development students from SENAI CIMATEC and SENAI Lauro de Freitas.",
    story:
      "We came from Bahia, driven by technology, the desire to create, and the belief that innovation only matters when it can reach everyone. Our achievement grew from collaboration among four students.",
    teamPhotoAlt: "The four CtrlSec students celebrating the project’s national award.",
    team: ["Áttila Machado", "Brahyan Dias", "Lucca Romano", "Jonatas Felipe"],
    teamLocation: "BAHIA, BRAZIL",
    vlibrasLabel: "Open VLibras",
    vlibrasLoading: "VLibras is loading. Activate to open as soon as it is ready.",
    vlibrasRetry: "VLibras is unavailable. Activate to try again.",
    identityTitle: "WHAT THE LOGO CARRIES",
    logoAlt: "Official IRIS logo: an eye, blue and red colors, and the Farol da Barra lighthouse.",
    logoTagline: "VISION THAT PROTECTS.\nORIGIN THAT IDENTIFIES.",
    identityEyeTitle: "EYE",
    identityEyeCopy: "The identity of IRIS and continuous vision.",
    identityBahiaTitle: "BAHIA",
    identityBahiaCopy: "The colors that represent our origin.",
    identitySalvadorTitle: "SALVADOR",
    identitySalvadorCopy: "The Farol da Barra at the center of the symbol.",
    impactTitle: "An idea that crossed the country.",
    reach: "CHALLENGE REACH",
    impactTitle2: "From Bahia to Brazil.",
    impactText:
      "Four young people from Bahia. More than 27,000 participants from every Brazilian state. A proposal recognized with national 1st place in the GrandPrix Petrobras / SENAI challenge.",
    demoTitle: "IRIS in operation",
    demoSub:
      "See how the security layer distinguishes restricted information from operational content.",
    operator: "Operator",
    sensitive: "IRIS, show financial reports for platform P-51.",
    safe: "IRIS, open the maintenance manual for pump P-101A.",
    test: "Test IRIS",
    denied: "Sensitive content detected",
    granted: "Manual loaded",
    blocked: "Request blocked before reaching the visor.",
    safeText: "Access granted · technical diagram available in the HUD.",
    denyFlag: "ACCESS DENIED",
    grantFlag: "ACCESS GRANTED",
    dlp: "DLP active",
    conceptNote: "Conceptual demonstration · no data is sent to a server.",
    feedbackTitle: "What about you?\nWould you trust IRIS?",
    feedbackQuestion:
      "Would you use a security layer like IRIS in an industrial environment?",
    yes: "Yes",
    no: "No",
    why: "Why?",
    placeholder:
      "Tell us what you would change, improve or like to see in IRIS...",
    send: "Send feedback",
    saved: "FEEDBACK REGISTERED",
    thanks: "Thank you for helping this technology evolve.",
    accessGranted: "ACCESS GRANTED ✓",
    feedbackReceived: "FEEDBACK RECEIVED",
    choose: "Choose an answer before sending.",
    accessibility: "Accessibility",
    appearance: "Appearance",
    dark: "Dark",
    light: "Light",
    language: "Language",
    voice: "Voice reading",
    voiceHint: "Select a passage of the interface to hear it.",
    play: "Play",
    pause: "Pause",
    stop: "Stop",
    speed: "Speed",
    reduced: "Reduce motion",
    highlight: "Highlight links",
    contrast: "High contrast",
    vlibras: "VLibras",
    vlibrasHint:
      "Opens the official Brazilian Sign Language translation widget.",
    close: "Close",
    yesStatus: "Secure",
    network: "Network",
    encrypted: "Encrypted",
    active: "Active",
    identity: "Identity",
    zeroTrust: "Zero Trust",
    scan: "SCAN",
    scanDone: "ENVIRONMENT SCANNED",
    scanSafe: "NO THREATS DETECTED",
    endTitle: "Intelligent security.\nVision beyond risk.",
    endSub: "We protect information at the moment of decision.",
    exploreAgain: "Explore again",
    navLabel: "Main navigation",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    endExperience: "End experience",
  },
  es: {
    nav: [
      "Visión",
      "El riesgo",
      "IRIS",
      "SECURITY LAB",
      "OPERATOR VIEW",
      "Tecnología",
      "Quiénes somos",
      "Experiencia",
      "Feedback",
    ],
    skipContent: "Saltar al contenido",
    skip: "Saltar intro",
    online: "Sistema en línea",
    status: "Estado IRIS",
    ready: "IRIS lista",
    concept: "Arquitectura conceptual · hardware agnóstico",
    product: "Visor seguro",
    overline: "Seguridad inteligente. Visión más allá del riesgo.",
    vision: "Protegemos la información\nen el momento de decidir.",
    explore: "Explorar el sistema",
    winner: "1.er lugar nacional",
    challenge: "Desafío GrandPrix Petrobras / SENAI",
    participants: "participantes",
    participantsNumber: "27 MIL+",
    states: "de todos los estados de Brasil",
    origin: "De Bahía para Brasil.",
    panel: "Panel IRIS",
    riskTitle: "IA en campo.\nRiesgos en el visor.",
    riskSub:
      "Cuando la tecnología llega al entorno crítico, la seguridad debe acompañarla.",
    threats: [
      [
        "Identidad vulnerable",
        "Gafas perdidas, robadas o compartidas pueden exponer sistemas críticos.",
        "RIESGO DE ACCESO",
        "Un cambio de usuario exige una nueva validación de identidad.",
      ],
      [
        "Datos en tránsito",
        "Wi-Fi industrial o 5G público amplía la superficie de ataque.",
        "TRÁFICO INTERCEPTADO",
        "TLS 1.3 y mTLS protegen el canal de comunicación.",
      ],
      [
        "Respuestas sin filtro",
        "Asistentes de IA pueden mostrar información sensible directamente en el visor.",
        "DATO SENSIBLE BLOQUEADO",
        "La capa DLP filtra la respuesta antes de mostrarla.",
      ],
    ],
    response: "Capa de respuesta",
    irisTitle: "La capa segura\nen el visor.",
    conceptual: "DISEÑO CONCEPTUAL · ARQUITECTURA AGNÓSTICA",
    selectPoint: "Selecciona un punto del visor",
    features: [
      [
        "Cámara",
        "1080p / 60fps",
        "Visión computacional",
        "Biometría simulada por cámara",
      ],
      [
        "HUD",
        "MicroLED conceptual",
        "Información contextual",
        "Visibilidad exterior",
      ],
      [
        "Voz",
        "Comandos manos libres",
        "Cancelación de ruido conceptual",
        "Interacción sin contacto",
      ],
      [
        "Autonomía",
        "Hasta 8h de operación conceptual",
        "Meta arquitectónica",
        "Depende del hardware elegido",
      ],
    ],
    pillars: ["Validar", "Entender", "Filtrar", "Actuar"],
    pillarText: [
      "Autenticación multifactor continua por PIN, voz y biometría simulada por visión computacional.",
      "Asistente de IA / LLM para responder preguntas y organizar datos complejos.",
      "Capa DLP que bloquea automáticamente información sensible antes de mostrarla.",
      "Información contextual en HUD para decisiones rápidas con manos libres.",
    ],
    pillarLabel: "Cuatro etapas. Una capa de confianza.",
    flowTitle: "Seguridad en cada\npaso de datos.",
    flowSub:
      "Arquitectura modular que valida, protege y filtra antes de que cada respuesta llegue al visor.",
    nodes: [
      "Gafas AR",
      "MFA continua",
      "Gateway seguro",
      "IA / LLM",
      "DLP en tiempo real",
      "Sistemas corporativos",
    ],
    cloud: "Modo nube",
    offline: "Modo offline",
    connected: "Conectividad disponible",
    disconnected: "Conectividad no disponible · reglas locales activas",
    simulate: "Simular pérdida de conexión",
    restore: "Restaurar conexión",
    techTitle: "Tecnología con\npropósito operativo.",
    techSub:
      "Herramientas citadas en la arquitectura propuesta. Selecciona una para ver su función.",
    tech: [
      [
        "Kong CE",
        "Gateway para controlar y encaminar solicitudes centralizadamente.",
      ],
      [
        "OAuth 2.0 / OIDC",
        "Estándares de autorización e identidad para integrar el acceso.",
      ],
      ["JWT", "Token firmado con datos de identidad y autorización."],
      ["TLS 1.3", "Cifrado de transporte para proteger datos en tránsito."],
      ["mTLS", "Autenticación mutua entre cliente y servicio."],
      [
        "AD / Azure AD",
        "Integración prevista con proveedores de identidad corporativos.",
      ],
      [
        "Zero Trust",
        "Verificar continuamente identidad, contexto y autorización.",
      ],
      [
        "Docker / Kubernetes",
        "Empaquetado y despliegue modular en infraestructura del cliente.",
      ],
      [
        "OpenCV / ML",
        "Visión computacional para simulación biométrica conceptual.",
      ],
    ],
    metrics: "Indicadores del proyecto",
    metricNames: [
      "Autenticación",
      "DLP filtrado",
      "Latencia añadida",
      "Disponibilidad",
    ],
    metricsNote:
      "Metas y métricas conceptuales del material del proyecto — no son resultados de producción.",
    valueReuse: "Valor mediante reutilización",
    valueNote:
      "Escenario estimado de valor potencial protegido. No representa ahorros garantizados.",
    estimate: "ESTIMACIÓN · ESCENARIO POTENCIAL",
    noLicense: "CERO LICENCIAS",
    reuse: "Busca reutilizar infraestructura existente",
    existing: "AD / Azure AD · Docker / Kubernetes · SIEM",
    stack: "Kong CE · Keycloak · OpenCV · React",
    storyTitle: "Cuatro estudiantes.\nUna idea.\nUn desafío nacional.",
    storyLead:
      "El proyecto fue desarrollado por estudiantes de Desarrollo de Sistemas de SENAI CIMATEC y SENAI Lauro de Freitas.",
    story:
      "Venimos de Bahía, impulsados por la tecnología, las ganas de crear y la certeza de que la innovación solo tiene sentido cuando puede llegar a todos. El logro nació de la colaboración entre cuatro estudiantes.",
    teamPhotoAlt: "Los cuatro estudiantes de CtrlSec celebran el reconocimiento nacional del proyecto.",
    team: ["Áttila Machado", "Brahyan Dias", "Lucca Romano", "Jonatas Felipe"],
    teamLocation: "BAHÍA, BRASIL",
    vlibrasLabel: "Abrir VLibras",
    vlibrasLoading: "VLibras se está cargando. Toca para abrirlo cuando esté listo.",
    vlibrasRetry: "VLibras no está disponible. Toca para volver a intentarlo.",
    identityTitle: "LO QUE REPRESENTA EL LOGO",
    logoAlt: "Logo oficial de IRIS: un ojo, colores azul y rojo y el faro Farol da Barra.",
    logoTagline: "VISIÓN QUE PROTEGE.\nORIGEN QUE IDENTIFICA.",
    identityEyeTitle: "OJO",
    identityEyeCopy: "La identidad de IRIS y la visión continua.",
    identityBahiaTitle: "BAHÍA",
    identityBahiaCopy: "Los colores que representan nuestro origen.",
    identitySalvadorTitle: "SALVADOR",
    identitySalvadorCopy: "El Farol da Barra en el centro del símbolo.",
    impactTitle: "Una idea que cruzó el país.",
    reach: "ALCANCE DEL DESAFÍO",
    impactTitle2: "De Bahía para Brasil.",
    impactText:
      "Cuatro jóvenes de Bahía. Más de 27.000 participantes de todos los estados de Brasil. Una propuesta reconocida con el 1.er lugar nacional en el desafío GrandPrix Petrobras / SENAI.",
    demoTitle: "IRIS en operación",
    demoSub:
      "Experimenta cómo la capa de seguridad distingue información restringida del contenido operativo.",
    operator: "Operador",
    sensitive: "IRIS, mostrar informes financieros de la plataforma P-51.",
    safe: "IRIS, abrir el manual de mantenimiento de la bomba P-101A.",
    test: "Probar IRIS",
    denied: "Contenido sensible detectado",
    granted: "Manual cargado",
    blocked: "Solicitud bloqueada antes de llegar al visor.",
    safeText: "Acceso autorizado · diagrama técnico disponible en el HUD.",
    denyFlag: "ACCESO DENEGADO",
    grantFlag: "ACCESO AUTORIZADO",
    dlp: "DLP activo",
    conceptNote:
      "Demostración conceptual · ningún dato se envía a un servidor.",
    feedbackTitle: "¿Y tú?\n¿Confiarías en IRIS?",
    feedbackQuestion:
      "¿Usarías una capa de seguridad como IRIS en un entorno industrial?",
    yes: "Sí",
    no: "No",
    why: "¿Por qué?",
    placeholder:
      "Cuéntanos qué cambiarías, mejorarías o te gustaría ver en IRIS...",
    send: "Enviar feedback",
    saved: "FEEDBACK REGISTRADO",
    thanks: "Gracias por ayudar a evolucionar la tecnología.",
    accessGranted: "ACCESO AUTORIZADO ✓",
    feedbackReceived: "FEEDBACK RECIBIDO",
    choose: "Elige una respuesta antes de enviar.",
    accessibility: "Accesibilidad",
    appearance: "Apariencia",
    dark: "Oscuro",
    light: "Claro",
    language: "Idioma",
    voice: "Lectura por voz",
    voiceHint: "Selecciona un fragmento de la interfaz para escucharlo.",
    play: "Reproducir",
    pause: "Pausar",
    stop: "Detener",
    speed: "Velocidad",
    reduced: "Reducir movimiento",
    highlight: "Resaltar enlaces",
    contrast: "Alto contraste",
    vlibras: "VLibras",
    vlibrasHint:
      "Abre el widget oficial de traducción a Lengua de Señas Brasileña.",
    close: "Cerrar",
    yesStatus: "Segura",
    network: "Red",
    encrypted: "Cifrada",
    active: "Activo",
    identity: "Identidad",
    zeroTrust: "Zero Trust",
    scan: "SCAN",
    scanDone: "ENTORNO ANALIZADO",
    scanSafe: "NO SE DETECTARON AMENAZAS",
    endTitle: "Seguridad inteligente.\nVisión más allá del riesgo.",
    endSub: "Protegemos la información en el momento de decidir.",
    exploreAgain: "Explorar de nuevo",
    navLabel: "Navegación principal",
    openMenu: "Abrir navegación",
    closeMenu: "Cerrar navegación",
    endExperience: "Finalizar experiencia",
  },
};

const micro = {
  "pt-BR": {
    intro: [
      "VERIFICAÇÃO BIOMÉTRICA",
      "ANALISANDO IDENTIDADE",
      "SISTEMA SEGURO",
    ],
    field: "SISTEMA DE CAMPO",
    secure: "CAMADA SEGURA",
    match: "PONTUAÇÃO / DEMO",
    vectors: "03 VETORES",
    product: "CAMADA DE PRODUTO CTRLSEC",
    hardware: "HARDWARE AGNÓSTICO",
    trust: "ARQUITETURA DE CONFIANÇA",
    nodes: [
      "DISPOSITIVO",
      "IDENTIDADE",
      "GATEWAY DE POLÍTICAS",
      "INTELIGÊNCIA",
      "PROTEÇÃO DE DADOS",
      "CORPORATIVO",
    ],
    engineering: "TECNOLOGIAS",
    modular: "MODULAR",
    design: "POR PROJETO",
    targets: "METAS DO PROJETO / CONCEITUAIS",
    tools: "TECNOLOGIAS DO MATERIAL",
    open: "CÓDIGO ABERTO · INFRAESTRUTURA DO CLIENTE",
    people: "PESSOAS POR TRÁS DO SISTEMA",
    journey: "TRAJETÓRIA",
    human: "PARTICIPAÇÃO HUMANA",
    analyzing: "Analisando solicitação…",
    validating: "Validando acesso…",
    system: "SISTEMA INTERATIVO",
    origin: "ORIGEM / BR",
  },
  en: {
    intro: ["BIOMETRIC VERIFICATION", "ANALYZING IDENTITY", "SYSTEM SECURE"],
    field: "FIELD SYSTEM",
    secure: "SECURE LAYER",
    match: "MATCH SCORE / DEMO",
    vectors: "03 VECTORS",
    product: "CTRLSEC PRODUCT LAYER",
    hardware: "HARDWARE AGNOSTIC",
    trust: "TRUST ARCHITECTURE",
    nodes: [
      "EDGE DEVICE",
      "IDENTITY",
      "POLICY GATEWAY",
      "INTELLIGENCE",
      "DATA PROTECTION",
      "ENTERPRISE",
    ],
    engineering: "ENGINEERING STACK",
    modular: "MODULAR",
    design: "BY DESIGN",
    targets: "PROJECT TARGETS / CONCEPTUAL",
    tools: "TOOLS FROM PROJECT MATERIALS",
    open: "OPEN SOURCE · CUSTOMER INFRASTRUCTURE",
    people: "PEOPLE BEHIND THE SYSTEM",
    journey: "THE JOURNEY",
    human: "HUMAN-IN-THE-LOOP",
    analyzing: "Analisando solicitação…",
    validating: "Validando acesso…",
    system: "INTERACTIVE SYSTEM",
    origin: "ORIGIN / BR",
  },
  es: {
    intro: [
      "VERIFICACIÓN BIOMÉTRICA",
      "ANALIZANDO IDENTIDAD",
      "SISTEMA SEGURO",
    ],
    field: "SISTEMA DE CAMPO",
    secure: "CAPA SEGURA",
    match: "PUNTUACIÓN / DEMO",
    vectors: "03 VECTORES",
    product: "CAPA DE PRODUCTO CTRLSEC",
    hardware: "HARDWARE AGNÓSTICO",
    trust: "ARQUITECTURA DE CONFIANZA",
    nodes: [
      "DISPOSITIVO",
      "IDENTIDAD",
      "GATEWAY DE POLÍTICAS",
      "INTELIGENCIA",
      "PROTECCIÓN DE DATOS",
      "CORPORATIVO",
    ],
    engineering: "TECNOLOGÍAS",
    modular: "MODULAR",
    design: "POR DISEÑO",
    targets: "METAS DEL PROYECTO / CONCEPTUALES",
    tools: "TECNOLOGÍAS DEL MATERIAL",
    open: "CÓDIGO ABIERTO · INFRAESTRUCTURA DEL CLIENTE",
    people: "PERSONAS DETRÁS DEL SISTEMA",
    journey: "RECORRIDO",
    human: "INTERACCIÓN HUMANA",
    analyzing: "Analizando solicitud…",
    validating: "Validando acceso…",
    system: "SISTEMA INTERACTIVO",
    origin: "ORIGEN / BR",
  },
};

const techLabels = [
  "Kong CE",
  "OAuth 2.0 / OIDC",
  "JWT",
  "TLS 1.3",
  "mTLS",
  "AD / Azure AD",
  "Zero Trust",
  "Docker / Kubernetes",
  "OpenCV / ML",
];

function Lines({ text }) {
  return text.split("\n").map((line, i) => (
    <span key={i} className={i ? "accent-line" : ""}>
      {line}
    </span>
  ));
}

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("iris-locale") || "pt-BR",
  );
  const t = words[lang] || words["pt-BR"];
  const m = micro[lang] || micro["pt-BR"];
  const [active, setActive] = useState("vision"),
    [intro, setIntro] = useState(!sessionStorage.getItem("iris-intro-seen")),
    [skipShown, setSkipShown] = useState(false),
    [menu, setMenu] = useState(false),
    [access, setAccess] = useState(false),
    [status, setStatus] = useState(false),
    [scan, setScan] = useState(false),
    [finale, setFinale] = useState(false);
  const [dark, setDark] = useState(
      localStorage.getItem("iris-theme") !== "light",
    ),
    [reduce, setReduce] = useState(
      localStorage.getItem("iris-reduced") === "true" ||
        matchMedia("(prefers-reduced-motion: reduce)").matches,
    ),
    [highlight, setHighlight] = useState(
      localStorage.getItem("iris-highlight") === "true",
    ),
    [contrast, setContrast] = useState(
      localStorage.getItem("iris-contrast") === "true",
    );
  const [impactPlus, setImpactPlus] = useState(false),
    [identityFocus, setIdentityFocus] = useState(0);
  const [vlibrasReady, setVlibrasReady] = useState(false),
    [vlibrasState, setVlibrasState] = useState("loading"),
    [vlibrasAttempt, setVlibrasAttempt] = useState(0);
  const [risk, setRisk] = useState(0),
    [feature, setFeature] = useState(0),
    [pillar, setPillar] = useState(0),
    [tech, setTech] = useState(0),
    [offline, setOffline] = useState(false),
    [demo, setDemo] = useState(0),
    [demoBusy, setDemoBusy] = useState(false),
    [choice, setChoice] = useState(""),
    [comment, setComment] = useState(""),
    [sent, setSent] = useState(false),
    [error, setError] = useState(""),
    [speed, setSpeed] = useState(1),
    [selected, setSelected] = useState(""),
    [voice, setVoice] = useState("");
  const main = useRef(null),
    vlibrasSlot = useRef(null),
    pendingVlibOpen = useRef(false),
    statusTrigger = useRef(null),
    accessTrigger = useRef(null),
    statusPanel = useRef(null),
    accessPanel = useRef(null),
    finaleDialog = useRef(null),
    introTimers = useRef([]),
    demoTimer = useRef(null);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("iris-locale", lang);
  }, [lang]);
  useEffect(() => {
    localStorage.setItem("iris-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("iris-reduced", String(reduce));
  }, [reduce]);
  useEffect(() => {
    localStorage.setItem("iris-highlight", String(highlight));
  }, [highlight]);
  useEffect(() => {
    localStorage.setItem("iris-contrast", String(contrast));
  }, [contrast]);
  useEffect(() => {
    if (active !== "impact") return;
    setImpactPlus(false);
    const countTimer = window.setTimeout(
      () => setImpactPlus(true),
      reduce ? 100 : 850,
    );
    return () => window.clearTimeout(countTimer);
  }, [active, reduce]);
  useEffect(() => {
    if (!intro) return;
    const skip = window.setTimeout(() => setSkipShown(true), 1000),
      finish = window.setTimeout(finishIntro, reduce ? 700 : 4700);
    introTimers.current = [skip, finish];
    return () => introTimers.current.forEach(clearTimeout);
  }, [intro, reduce]);
  useEffect(() => {
    if (intro) return;
    let alive = true;
    let attempts = 0;
    let timer;
    const alignButton = () => {
      if (!alive) return;
      const button = window.VLibrasWidget?.initBtn;
      const slot = vlibrasSlot.current;
      if (button?.style && slot) {
        const buttonSize =
          window.getComputedStyle(slot).getPropertyValue("--vlibras-icon-size").trim() || "38px";
        button.style.setProperty("position", "static", "important");
        button.style.setProperty("inset", "auto", "important");
        button.style.setProperty("width", buttonSize, "important");
        button.style.setProperty("height", buttonSize, "important");
        button.style.setProperty("margin", "0", "important");
        button.style.setProperty("padding", "0", "important");
        button.style.setProperty("border", "0", "important");
        button.style.setProperty("overflow", "hidden", "important");
        button.style.setProperty("box-sizing", "border-box", "important");
        button.style.setProperty("line-height", "0", "important");
        button.style.setProperty("transform", "none", "important");
        button.style.setProperty("z-index", "auto", "important");
        if (button.parentElement !== slot) slot.appendChild(button);
        setVlibrasReady(true);
        setVlibrasState("ready");
        if (pendingVlibOpen.current) {
          pendingVlibOpen.current = false;
          button.click();
        }
        return;
      }
      if (attempts++ < 40) timer = window.setTimeout(alignButton, 250);
      else setVlibrasState("failed");
    };
    let script = document.querySelector("script[data-vlibras]");
    if (script?.dataset.failed === "true") {
      script.remove();
      script = null;
    }
    setVlibrasState("loading");
    if (!script) {
      script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.dataset.vlibras = "true";
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          alignButton();
        },
        { once: true },
      );
      script.addEventListener(
        "error",
        () => {
          script.dataset.failed = "true";
          if (alive) {
            setVlibrasReady(false);
            setVlibrasState("failed");
          }
        },
        { once: true },
      );
      document.body.appendChild(script);
    } else if (script.dataset.loaded === "true" || window.VLibrasWidget?.initBtn) {
      alignButton();
    } else {
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        alignButton();
      }, { once: true });
      script.addEventListener("error", () => {
        script.dataset.failed = "true";
        if (alive) {
          setVlibrasReady(false);
          setVlibrasState("failed");
        }
      }, { once: true });
    }
    window.addEventListener("resize", alignButton);
    return () => {
      alive = false;
      window.clearTimeout(timer);
      window.removeEventListener("resize", alignButton);
    };
  }, [intro, vlibrasAttempt]);
  useEffect(() => {
    if (!status) return;
    const opener = statusTrigger.current;
    const frame = window.requestAnimationFrame(() => statusPanel.current?.querySelector("button")?.focus({ preventScroll: true }));
    return () => {
      window.cancelAnimationFrame(frame);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [status]);
  useEffect(() => {
    if (!access) return;
    const opener = accessTrigger.current;
    const frame = window.requestAnimationFrame(() => accessPanel.current?.querySelector("button")?.focus({ preventScroll: true }));
    return () => {
      window.cancelAnimationFrame(frame);
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [access]);
  useEffect(() => {
    if (!finale) return;
    const opener = document.activeElement;
    const dialog = finaleDialog.current;
    const focusable = () => Array.from(dialog?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])') || []);
    const focusFrame = window.requestAnimationFrame(() => dialog?.querySelector(".finale-close")?.focus({ preventScroll: true }));
    const trapFocus = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setFinale(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) {
        event.preventDefault();
        dialog?.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (!dialog?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trapFocus, true);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", trapFocus, true);
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, [finale]);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        setMenu(false);
        setAccess(false);
        setStatus(false);
        setScan(false);
        setFinale(false);
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (e.target instanceof Element && e.target.closest('button, a[href], input, textarea, select, [role="switch"], [role="slider"], [role="tab"], [contenteditable="true"], [contenteditable=""]')) return;
        const i = panels.indexOf(active),
          next = Math.min(panels.length - 1, Math.max(0, i + (e.key === "ArrowDown" ? 1 : -1)));
        if (next !== i) {
          e.preventDefault();
          go(panels[next]);
        }
      }
    };
    const selection = () =>
      setSelected(window.getSelection()?.toString().trim() || "");
    document.addEventListener("keydown", key);
    document.addEventListener("selectionchange", selection);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("selectionchange", selection);
    };
  }, [active]);
  useEffect(
    () => () => {
      clearTimeout(demoTimer.current);
      window.speechSynthesis?.cancel();
    },
    [],
  );
  function finishIntro() {
    introTimers.current.forEach(clearTimeout);
    sessionStorage.setItem("iris-intro-seen", "true");
    setIntro(false);
  }
  function go(id) {
    setActive(id);
    setMenu(false);
    setAccess(false);
    setStatus(false);
    main.current?.focus({ preventScroll: true });
  }
  function showScan() {
    setScan(true);
    window.setTimeout(() => setScan(false), reduce ? 900 : 2200);
  }
  function runDemo() {
    clearTimeout(demoTimer.current);
    setDemo(1);
    setDemoBusy(true);
    demoTimer.current = window.setTimeout(
      () => {
        setDemo(2);
        demoTimer.current = window.setTimeout(
          () => {
            setDemo(3);
            setDemoBusy(false);
          },
          reduce ? 350 : 1100,
        );
      },
      reduce ? 350 : 1100,
    );
  }
  function feedback(e) {
    e.preventDefault();
    if (!choice) {
      setError(t.choose);
      return;
    }
    try {
      const old = JSON.parse(localStorage.getItem("iris-feedback") || "[]");
      localStorage.setItem(
        "iris-feedback",
        JSON.stringify([
          ...old,
          { choice, comment: comment.trim(), at: new Date().toISOString() },
        ]),
      );
      setSent(true);
      setError("");
    } catch {
      setError(t.choose);
    }
  }
  function speak(action) {
    if (!("speechSynthesis" in window)) {
      setVoice("unsupported");
      return;
    }
    if (action === "play" && speechSynthesis.paused) {
      speechSynthesis.resume();
      setVoice("playing");
      return;
    }
    if (action === "pause") {
      speechSynthesis.pause();
      setVoice("paused");
      return;
    }
    if (action === "stop") {
      speechSynthesis.cancel();
      setVoice("");
      return;
    }
    const text = selected || main.current?.innerText?.slice(0, 500);
    if (!text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === "pt-BR" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
    u.rate = speed;
    u.onend = () => setVoice("");
    speechSynthesis.speak(u);
    setVoice("playing");
  }
  function openVlib() {
    const button = window.VLibrasWidget?.initBtn;
    if (vlibrasReady && button && typeof button.click === "function") {
      button.click();
      return;
    }
    pendingVlibOpen.current = true;
    if (vlibrasState === "failed" || vlibrasState === "ready") {
      setVlibrasReady(false);
      setVlibrasState("loading");
      setVlibrasAttempt((attempt) => attempt + 1);
    }
  }
  function toggleStatus(event) {
    const opening = !status;
    if (opening) {
      statusTrigger.current = event.currentTarget;
      setAccess(false);
    }
    setStatus(opening);
  }
  function toggleAccess(event) {
    const opening = !access;
    if (opening) {
      accessTrigger.current = event.currentTarget;
      setStatus(false);
    }
    setAccess(opening);
  }
  const identityPoints = [
    { title: t.identityEyeTitle, copy: t.identityEyeCopy, kind: "eye" },
    { title: t.identityBahiaTitle, copy: t.identityBahiaCopy, kind: "bahia" },
    {
      title: t.identitySalvadorTitle,
      copy: t.identitySalvadorCopy,
      kind: "salvador",
    },
  ];
  const index = useMemo(() => panels.indexOf(active), [active]);
  const vlibrasControlLabel =
    vlibrasState === "failed"
      ? t.vlibrasRetry
      : vlibrasState === "loading"
        ? t.vlibrasLoading
        : t.vlibrasLabel;
  const vlibrasStatusText =
    vlibrasState === "failed"
      ? t.vlibrasRetry
      : vlibrasState === "loading"
        ? t.vlibrasLoading
        : t.vlibrasLabel;
  const cls = [
    "app-shell",
    dark ? "theme-dark" : "theme-light",
    reduce ? "reduce-motion" : "",
    highlight ? "highlight-links" : "",
    contrast ? "high-contrast" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <a className="skip-link" href="#main-content">
        {t.skipContent}
      </a>
      <div className="grain" aria-hidden="true" />
      {intro && (
        <div
          className={`intro-screen ${reduce ? "intro-screen--reduced" : ""}`}
          role="dialog"
          aria-label={t.status}
        >
          <div className="intro-orbit">
            <span className="intro-core" />
            <span className="intro-ring" />
            <img src="/assets/iris-macro.webp" alt="" />
          </div>
          <div className="intro-copy">
            <span className="eyebrow">CTRLSEC / IRIS</span>
            <strong>
              {lang === "pt-BR"
                ? "Inicializando IRIS"
                : lang === "en"
                  ? "Initializing IRIS"
                  : "Iniciando IRIS"}
              <i className="typing-dot">.</i>
            </strong>
            <div className="intro-steps">
              <span>{m.intro[0]}</span>
              <span>{m.intro[1]}</span>
              <span>{m.intro[2]}</span>
            </div>
          </div>
          {skipShown && (
            <button className="intro-skip" onClick={finishIntro}>
              {t.skip}
              <span>↗</span>
            </button>
          )}
          <div className="intro-progress">
            <span />
          </div>
        </div>
      )}
      <header className="topbar">
        <button
          className="brand-lockup"
          onClick={() => go("vision")}
          aria-label="CTRLSEC IRIS — início"
        >
          <Eye small />
          <span className="brand-name">
            CTRLSEC <b>/ IRIS</b>
          </span>
        </button>
        <div className="topbar-center">
          <i className="live-dot" />
          {t.online}
          <i className="topbar-divider" />
          {t.concept}
        </div>
        <div className="topbar-actions">
          <button
            className="status-button"
            onClick={toggleStatus}
            aria-expanded={status}
            aria-haspopup="dialog"
            aria-controls="status-popover"
          >
            <i className="live-dot" />
            <span className="status-text">IRIS {t.ready}</span>
            <span className="chevron">⌄</span>
          </button>
          <button
            className="icon-button scan-trigger"
            onClick={showScan}
            aria-label={t.scan}
            title={t.scan}
          >
            <span className="scan-glyph">⌖</span>
          </button>
          <button
            className="icon-button access-trigger"
            onClick={toggleAccess}
            aria-expanded={access}
            aria-haspopup="dialog"
            aria-controls="access-panel"
            aria-label={t.accessibility}
          >
            <span className="access-glyph">◉</span>
            <span className="access-label">{t.accessibility}</span>
          </button>
          <div
            className={`vlibras-control ${vlibrasReady ? "vlibras-control--ready" : ""}`}
            role="group"
            tabIndex={0}
            aria-label={vlibrasControlLabel}
            aria-busy={vlibrasState === "loading"}
            aria-describedby="vlibras-status"
            onClick={(event) => {
              if (event.target === event.currentTarget || event.target === vlibrasSlot.current) openVlib();
            }}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openVlib();
              }
            }}
          >
            <button
              className="vlibras-fallback"
              type="button"
              onClick={openVlib}
              aria-label={vlibrasControlLabel}
              title={vlibrasControlLabel}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10V4.8a1.5 1.5 0 0 1 3 0V10V5.8a1.5 1.5 0 0 1 3 0v5.6V8.3a1.5 1.5 0 0 1 3 0v6.1c0 3.7-2.8 6.6-6.2 6.6h-1.1c-2.2 0-4.1-1.1-5.4-2.9L3.6 14a1.7 1.7 0 0 1 2.5-2.3L7 13.2" />
              </svg>
              <span>LIBRAS</span>
            </button>
            <div className="vlibras-slot" ref={vlibrasSlot} />
            <span className="experience-sr-only" id="vlibras-status" role="status" aria-live="polite" aria-atomic="true">{vlibrasStatusText}</span>
          </div>
          <button
            className="menu-trigger"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? t.closeMenu : t.openMenu}
            aria-expanded={menu}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {status && (
        <div className="status-popover" id="status-popover" ref={statusPanel} role="dialog" aria-label={t.status}>
          <div className="popover-head">
            <Eye small />
            <b>{t.status}</b>
            <button onClick={() => setStatus(false)} aria-label={t.close}>
              ×
            </button>
          </div>
          {[
            [t.identity, t.yesStatus],
            [t.network, t.offline ? t.disconnected : t.connected],
            [t.dlp, t.active],
            [t.zeroTrust, t.active],
          ].map(([a, b]) => (
            <div className="status-row" key={a}>
              <span>{a}</span>
              <b>
                <i className="live-dot" />
                {b}
              </b>
            </div>
          ))}
        </div>
      )}
      {access && (
        <div
          className="access-panel"
          id="access-panel"
          ref={accessPanel}
          role="dialog"
          aria-label={t.accessibility}
        >
          <div className="access-head">
            <div>
              <span className="eyebrow">CTRLSEC / IRIS</span>
              <h2>{t.accessibility}</h2>
            </div>
            <button
              className="icon-button"
              onClick={() => setAccess(false)}
              aria-label={t.close}
            >
              ×
            </button>
          </div>
          <div className="access-row">
            <span>{t.appearance}</span>
            <div className="segmented">
              <button
                className={dark ? "selected" : ""}
                onClick={() => setDark(true)}
              >
                {t.dark}
              </button>
              <button
                className={!dark ? "selected" : ""}
                onClick={() => setDark(false)}
              >
                {t.light}
              </button>
            </div>
          </div>
          <div className="access-row">
            <span>{t.language}</span>
            <div className="segmented language-options">
              {[
                ["pt-BR", "PT"],
                ["en", "EN"],
                ["es", "ES"],
              ].map(([v, n]) => (
                <button
                  key={v}
                  className={lang === v ? "selected" : ""}
                  onClick={() => setLang(v)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          {[
            [t.reduced, reduce, setReduce, "a11y-reduced"],
            [t.highlight, highlight, setHighlight, "a11y-highlight"],
            [t.contrast, contrast, setContrast, "a11y-contrast"],
          ].map(([label, value, setter, id]) => (
            <div className="access-toggle" key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                id={id}
                type="checkbox"
                checked={value}
                onChange={(e) => setter(e.target.checked)}
              />
            </div>
          ))}
          <div className="voice-controls">
            <div>
              <b>{t.voice}</b>
              <small>{t.voiceHint}</small>
            </div>
            <div className="voice-actions">
              <button onClick={() => speak("play")} aria-label={t.play}>
                ▶
              </button>
              <button onClick={() => speak("pause")} aria-label={t.pause}>
                Ⅱ
              </button>
              <button onClick={() => speak("stop")} aria-label={t.stop}>
                ■
              </button>
              <label className="speed-select">
                <span>{t.speed}</span>
                <select
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  aria-label={t.speed}
                >
                  {[0.75, 1, 1.25, 1.5].map((x) => (
                    <option key={x} value={x}>
                      {x}x
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {voice === "unsupported" && (
              <small role="status">
                Text-to-speech is not available in this browser.
              </small>
            )}
          </div>
          <button className="vlibras-launch" onClick={openVlib}>
            <span className="sign-icon">手</span>
            <span>
              <b>{t.vlibras}</b>
              <small>{t.vlibrasHint}</small>
            </span>
            <span>↗</span>
          </button>
        </div>
      )}
      <nav
        className={`side-nav ${menu ? "side-nav--open" : ""}`}
        aria-label={t.navLabel}
      >
        {panels.map((id, i) => (
          <button
            key={id}
            className={`nav-item ${active === id ? "active" : ""}`}
            onClick={() => go(id)}
            aria-current={active === id ? "page" : undefined}
            aria-label={`${String(i + 1).padStart(2, "0")} ${t.nav[i]}`}
          >
            <span className="nav-number">{String(i + 1).padStart(2, "0")}</span>
            <span className="nav-copy">{t.nav[i]}</span>
            <span className="nav-line" />
          </button>
        ))}
      </nav>
      <main id="main-content" ref={main} tabIndex={-1} className="main-stage">
        <div className="panel-frame" key={active}>
          {active === "vision" && (
            <section className="panel hero-panel">
              <div
                className="hero-image"
                role="img"
                aria-label="Instalação industrial de energia à noite"
              >
                <div className="hero-shade" />
              </div>
              <div className="hero-content">
                <div className="hero-wordmark">
                  <span>IRIS</span>
                  <i>{t.product}</i>
                </div>
                <div className="eyebrow hero-eyebrow">
                  <i className="live-dot" />
                  {t.overline}
                </div>
                <h1>
                  <Lines text={t.vision} />
                </h1>
                <div className="hero-footer">
                  <button className="primary-button" onClick={() => go("risk")}>
                    {t.explore}
                    <span>↗</span>
                  </button>
                  <div className="hero-achievement">
                    <span className="gold-star">✳</span>
                    <div>
                      <b>{t.winner}</b>
                      <small>{t.challenge}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-stat" aria-label={`${t.participantsNumber} ${t.participants} ${t.states}`}>
                <b>{t.participantsNumber}</b>
                <span>{t.participants}</span>
                <small>{t.states}</small>
              </div>
            </section>
          )}
          {active === "risk" && (
            <section className="panel risk-panel">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    <i className="live-dot live-dot--alert" />
                    {t.response} / {m.vectors}
                  </span>
                  <h1>
                    <Lines text={t.riskTitle} />
                  </h1>
                  <p>{t.riskSub}</p>
                </div>
                <div className={`risk-scope risk-scope--${risk}`}>
                  <div className="scope-ring" />
                  <div className="scope-ring scope-ring--inner" />
                  <span className="scope-center">{["◉", "⌁", "◈"][risk]}</span>
                  <i className="scope-sweep" />
                  <small>{t.threats[risk][2]}</small>
                </div>
              </div>
              <div className="risk-list">
                {t.threats.map((item, i) => (
                  <button
                    key={item[0]}
                    className={`risk-row ${risk === i ? "selected" : ""}`}
                    onMouseEnter={() => setRisk(i)}
                    onFocus={() => setRisk(i)}
                    onClick={() => setRisk(i)}
                  >
                    <span className="risk-num">0{i + 1}</span>
                    <span className="risk-title">{item[0]}</span>
                    <span className="risk-desc">{item[1]}</span>
                    <span className="risk-indicator">↗</span>
                  </button>
                ))}
              </div>
              <div className="risk-response">
                <i className="response-pulse" />
                <div>
                  <small>
                    {t.response} / {t.threats[risk][2]}
                  </small>
                  <b>{t.threats[risk][3]}</b>
                </div>
                <span className="response-state">
                  {risk === 2 ? t.denied || "DLP ACTIVE" : t.online}
                </span>
              </div>
              <div className="panel-foot">
                <span>01 / THREAT SURFACE</span>
                <span>ZERO TRUST · DLP · MFA</span>
              </div>
            </section>
          )}
          {active === "iris" && (
            <section className="panel iris-panel">
              <div className="iris-copy">
                <span className="eyebrow">03 / {m.product}</span>
                <h1>
                  <Lines text={t.irisTitle} />
                </h1>
                <p className="concept-stamp">◉ {t.conceptual}</p>
                <div className="feature-detail">
                  <span className="feature-index">
                    0{feature + 1} / 04 · {t.selectPoint}
                  </span>
                  <h2>{t.features[feature][0]}</h2>
                  <ul>
                    {t.features[feature].slice(1).map((x) => (
                      <li key={x}>
                        <span>+</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="feature-tabs">
                  {t.features.map((x, i) => (
                    <button
                      key={x[0]}
                      className={i === feature ? "active" : ""}
                      onClick={() => setFeature(i)}
                      aria-label={x[0]}
                    >
                      <span>{["◉", "⌗", "⌁", "◌"][i]}</span>
                      <small>{x[0]}</small>
                    </button>
                  ))}
                </div>
              </div>
              <div className="visor-stage">
                <div
                  className="visor-image"
                  role="img"
                  aria-label="Render conceitual de óculos industriais de realidade aumentada"
                />
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className={`visor-hotspot hotspot-${["camera", "hud", "voice", "power"][i]} ${feature === i ? "active" : ""}`}
                    onClick={() => setFeature(i)}
                    aria-label={t.features[i][0]}
                  >
                    <span>0{i + 1}</span>
                    <i />
                  </button>
                ))}
                <div className="visor-caption">
                  <span>IRIS / CONCEPT 01</span>
                  <span>{m.hardware}</span>
                </div>
                <div className="visor-crosshair">+</div>
              </div>
              <div className="pillars-block">
                <div className="pillars-heading">
                  <span className="eyebrow">{t.pillarLabel}</span>
                  <div className="pillar-progress">
                    <i style={{ width: `${(pillar + 1) * 25}%` }} />
                  </div>
                </div>
                <div className="orbital-system">
                  <div className="orbit orbit--one" />
                  <div className="orbit orbit--two" />
                  <div className="orbit-center">
                    <Eye />
                    <span>IRIS</span>
                  </div>
                  {t.pillars.map((x, i) => (
                    <button
                      key={x}
                      className={`orbit-node orbit-node--${i} ${pillar === i ? "selected" : ""}`}
                      onClick={() => setPillar(i)}
                      aria-pressed={pillar === i}
                    >
                      <span>0{i + 1}</span>
                      {x}
                    </button>
                  ))}
                </div>
                <div className="pillar-explain">
                  <b>{t.pillars[pillar]}</b>
                  <p>{t.pillarText[pillar]}</p>
                </div>
              </div>
              <div className="panel-foot">
                <span>DESIGN CONCEITUAL</span>
                <span>PIN + VOZ + ÍRIS SIMULADA</span>
              </div>
            </section>
          )}
          {active === "securityLab" && (
            <SecurityLab
              t={t}
              m={m}
              lang={lang}
              reduce={reduce}
              offline={offline}
              setOffline={setOffline}
            />
          )}
          {active === "operatorView" && (
            <OperatorView lang={lang} reduce={reduce} />
          )}
          {active === "technology" && (
            <section className="panel technology-panel">
              <div className="technology-head">
                <div>
                  <span className="eyebrow">06 / {m.engineering}</span>
                  <h1>
                    <Lines text={t.techTitle} />
                  </h1>
                  <p>{t.techSub}</p>
                </div>
              </div>
              <div className="tech-content">
                <div className="tech-map">
                  {techLabels.map((x, i) => (
                    <button
                      key={x}
                      className={`tech-chip ${tech === i ? "selected" : ""}`}
                      onMouseEnter={() => setTech(i)}
                      onFocus={() => setTech(i)}
                      onClick={() => setTech(i)}
                    >
                      <span className="chip-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{x}</span>
                      <i>↗</i>
                    </button>
                  ))}
                </div>
                <div className="tech-detail">
                  <span className="eyebrow">
                    LAYER / {String(tech + 1).padStart(2, "0")}
                  </span>
                  <h2>{t.tech[tech][0]}</h2>
                  <p>{t.tech[tech][1]}</p>
                  <div className="tech-detail-line">
                    <i className="live-dot" /> {t.online}
                  </div>
                </div>
              </div>
              <div className="metrics-strip">
                <div className="metrics-head">
                  <span className="eyebrow">{t.metrics}</span>
                  <small>{m.targets}</small>
                </div>
                <div className="metrics-grid">
                  {[">95%", "100%", "<200ms", "99.5%"].map((x, i) => (
                    <div className="metric-cell" key={x}>
                      <b>{x}</b>
                      <span>{t.metricNames[i]}</span>
                    </div>
                  ))}
                </div>
                <small className="metrics-footnote">{t.metricsNote}</small>
              </div>
              <div className="viability-strip">
                <div>
                  <span className="eyebrow">{t.valueReuse}</span>
                  <small>{t.valueNote}</small>
                </div>
                <strong>
                  <span className="viability-amount">R$ 33,75M</span>
                  <small>{t.estimate}</small>
                </strong>
                <div className="viability-stack">
                  <b>{t.noLicense}</b>
                  <details className="viability-details">
                    <summary>{t.reuse}</summary>
                    <div>
                      <small>{t.existing}</small>
                      <small>{t.stack}</small>
                    </div>
                  </details>
                </div>
              </div>
              <div className="panel-foot">
                <span>{m.tools}</span>
                <span>{m.open}</span>
              </div>
            </section>
          )}
          {active === "story" && (
            <section className="panel story-panel">
              <header className="story-editorial">
                <div className="story-heading">
                  <span className="eyebrow">07 / {t.nav[6]}</span>
                  <h1>
                    <Lines text={t.storyTitle} />
                  </h1>
                  <p className="story-lead">{t.storyLead}</p>
                </div>
                <div className="story-narrative">
                  <p className="story-text">{t.story}</p>
                  <span className="story-signature">CTRLSEC <i /> BAHIA · BRASIL</span>
                </div>
              </header>
              <div className="story-showcase">
                <figure className="team-photo-frame">
                  <img
                    src="/assets/team-award.webp"
                    alt={t.teamPhotoAlt}
                    width="1672"
                    height="941"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="team-photo-caption">
                    <span>
                      {t.team.map((name) => name.split(" ")[0]).join(" · ")}
                    </span>
                    <b>{t.teamLocation}</b>
                  </figcaption>
                </figure>
                <section
                  className={`identity-console identity-console--${identityPoints[identityFocus].kind}`}
                  aria-label={t.identityTitle}
                >
                  <span className="eyebrow identity-eyebrow">{t.identityTitle}</span>
                  <div className="official-logo-plaque">
                    <img
                      src="/assets/iris-official-transparent.png"
                      alt={t.logoAlt}
                      width="1536"
                      height="1024"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="logo-focus-ring" aria-hidden="true" />
                    <span className="logo-scan-line" aria-hidden="true" />
                  </div>
                  <div className="logo-wordmark">
                    <strong>IRIS</strong>
                    <span>{t.logoTagline}</span>
                  </div>
                  <div className="identity-points">
                    {identityPoints.map((point, i) => (
                      <button
                        key={point.kind}
                        className={`identity-point ${identityFocus === i ? "active" : ""}`}
                        onClick={() => setIdentityFocus(i)}
                        aria-pressed={identityFocus === i}
                        aria-label={`${point.title}: ${point.copy}`}
                      >
                        <span className={`identity-symbol identity-symbol--${point.kind}`} aria-hidden="true">
                          {point.kind === "eye" ? (
                            <svg viewBox="0 0 32 32">
                              <path d="M3 16s4.6-8 13-8 13 8 13 8-4.6 8-13 8S3 16 3 16Z" />
                              <circle cx="16" cy="16" r="4.2" />
                            </svg>
                          ) : point.kind === "bahia" ? (
                            <span className="bahia-colors"><i /><i /><i /></span>
                          ) : (
                            <svg viewBox="0 0 32 32">
                              <path d="M7 27h18M10 27l2-15h8l2 15M11 16h10M13 12V8a3 3 0 0 1 6 0v4M10 8h12M5 30c3-2 6-2 9 0s6 2 9 0 4-2 6-1" />
                              <path d="m12 6-5-3m13 3 5-3" />
                            </svg>
                          )}
                        </span>
                        <span className="identity-point-copy">
                          <b>{point.title}</b>
                          <small>{point.copy}</small>
                        </span>
                        <span className="identity-point-index">0{i + 1}</span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>
              <div className="story-achievements" aria-label={t.winner}>
                <div>
                  <b>{t.participantsNumber}</b>
                  <span>{t.participants}</span>
                </div>
                <div>
                  <b>1º</b>
                  <span>{t.winner}</span>
                </div>
                <div>
                  <b>GRANDPRIX</b>
                  <span>PETROBRAS / SENAI</span>
                </div>
              </div>
            </section>
          )}
          {active === "impact" && (
            <section className="panel impact-panel">
              <div className="impact-background" aria-hidden="true">
                <svg viewBox="0 0 600 500" className="brazil-wire">
                  <path d="m252 31 45 19 27-9 30 26 19 8 12 32 32 13 1 34 29 22-12 27 16 20-22 23 2 27-27 17-4 29-32 5-9 31-29 9-5 29-29 13-30-7-17-29-32-4-11-32-28-8-2-39-19-20 10-30-18-26 23-23-2-36 23-11 15-38 22-15 8-36 38-16Z" />
                  <path
                    d="M70 184 193 203m-123-19 74 68m-2-140 125-35M102 291l102-39m7 92 73-29m-97-173 103 17m68 68 115 30m-109 26 90 57"
                    className="brazil-lines"
                  />
                </svg>
                <i className="map-dot map-dot--bahia" />
                <i className="map-dot map-dot--north" />
                <i className="map-dot map-dot--south" />
                <i className="map-path" />
              </div>
              <div className="impact-copy">
                <span className="eyebrow">
                  <i className="gold-star">✳</i>
                  {t.reach} / GRANDPRIX PETROBRAS · SENAI
                </span>
                <h1>{t.impactTitle}</h1>
                <div className="impact-number">
                  {lang === "en" ? "27,000" : "27.000"}
                  <span
                    className={
                      impactPlus
                        ? "count-plus"
                        : "count-plus count-plus--hidden"
                    }
                  >
                    +
                  </span>
                  <small>{t.participants}</small>
                </div>
                <div className="impact-subline">{t.states}</div>
                <div className="impact-award">
                  <span className="award-seal">
                    1<span>º</span>
                  </span>
                  <div>
                    <b>{t.winner}</b>
                    <small>{t.challenge}</small>
                  </div>
                </div>
                <p className="impact-body">{t.impactText}</p>
                <div className="impact-origin">
                  <span>{t.origin}</span>
                  <i>↗</i>
                </div>
                <button
                  className="primary-button"
                  onClick={() => go("feedback")}
                >
                  {t.nav[8]}
                  <span>↗</span>
                </button>
              </div>
              <div className="panel-foot">
                <span>08 / NATIONAL RECOGNITION</span>
                <span>PROJECT DEVELOPED FOR THE CHALLENGE</span>
              </div>
            </section>
          )}
          {active === "feedback" && (
            <section className="panel feedback-panel">
              <div className="feedback-left">
                <span className="eyebrow">09 / {m.human}</span>
                <h1>
                  <Lines text={t.feedbackTitle} />
                </h1>
                <div className="feedback-eye">
                  <img
                    src="/assets/iris-macro.webp"
                    alt="Íris azul em imagem conceitual"
                  />
                  <i className="feedback-eye-ring" />
                  <i className="feedback-scan" />
                </div>
                <div className="feedback-closing">
                  <span>CTRLSEC / IRIS</span>
                  <b>{t.endSub}</b>
                </div>
              </div>
              <div className="feedback-right">
                <div className="demo-shell">
                  <div className="demo-header">
                    <i className="live-dot" />
                    <b>{t.demoTitle}</b>
                    <span>SIM / 01</span>
                  </div>
                  <p className="demo-intro">{t.demoSub}</p>
                  <div className="demo-dialogue">
                    <div className="dialogue-row">
                      <span className="dialogue-avatar">OP</span>
                      <div>
                        <small>{t.operator}</small>
                        <p>“{t.sensitive}”</p>
                      </div>
                    </div>
                    {demo >= 1 && (
                      <div className="dialogue-row dialogue-row--system">
                        <span className="dialogue-avatar iris-avatar">
                          <Eye small />
                        </span>
                        <div>
                          <small>IRIS / DLP</small>
                          <p className={demo >= 2 ? "text-alert" : ""}>
                            {demo >= 2 ? t.denied : m.analyzing}
                          </p>
                          {demo >= 2 && (
                            <div className="system-result system-result--denied">
                              <b>{t.denyFlag}</b>
                              <span>{t.blocked}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="dialogue-row dialogue-row--second">
                      <span className="dialogue-avatar">OP</span>
                      <div>
                        <small>{t.operator}</small>
                        <p>“{t.safe}”</p>
                      </div>
                    </div>
                    {demo >= 2 && (
                      <div className="dialogue-row dialogue-row--system">
                        <span className="dialogue-avatar iris-avatar">
                          <Eye small />
                        </span>
                        <div>
                          <small>IRIS / POLICY</small>
                          <p className={demo >= 3 ? "text-success" : ""}>
                            {demo >= 3 ? t.granted : m.validating}
                          </p>
                          {demo >= 3 && (
                            <div className="system-result system-result--granted">
                              <b>{t.grantFlag}</b>
                              <span>{t.safeText}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="demo-controls">
                    <button
                      className="primary-button"
                      onClick={runDemo}
                      disabled={demoBusy}
                    >
                      {demoBusy ? "…" : t.test}
                      <span>↗</span>
                    </button>
                    <small className="concept-note">{t.conceptNote}</small>
                  </div>
                </div>
                <div className="audience-prompt">
                  <span className="eyebrow">{t.feedbackQuestion}</span>
                  <div className="answer-buttons">
                    <button
                      className={choice === "yes" ? "selected" : ""}
                      onClick={() => {
                        setChoice("yes");
                        setError("");
                      }}
                    >
                      <span>✓</span>
                      {t.yes}
                    </button>
                    <button
                      className={choice === "no" ? "selected" : ""}
                      onClick={() => {
                        setChoice("no");
                        setError("");
                      }}
                    >
                      <span>×</span>
                      {t.no}
                    </button>
                  </div>
                  <div
                    className={`audience-result ${choice ? `audience-result--${choice}` : ""}`}
                    role="status"
                    aria-live="polite"
                  >
                    {choice && (
                      <>
                        <span>{choice === "yes" ? "✓" : "◉"}</span>
                        <b>
                          {choice === "yes"
                            ? t.accessGranted
                            : t.feedbackReceived}
                        </b>
                      </>
                    )}
                  </div>
                  <form onSubmit={feedback}>
                    <label htmlFor="feedback-comment">{t.why}</label>
                    <textarea
                      id="feedback-comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t.placeholder}
                      rows="3"
                      maxLength="500"
                    />
                    <div className="form-actions">
                      <span>{comment.length}/500</span>
                      <button className="submit-button" type="submit">
                        {t.send}
                        <span>↗</span>
                      </button>
                    </div>
                  </form>
                  {error && (
                    <p className="form-error" role="alert">
                      {error}
                    </p>
                  )}
                  {sent && (
                    <div className="feedback-success" role="status">
                      <span>✓</span>
                      <div>
                        <b>{t.saved}</b>
                        <small>{t.thanks}</small>
                      </div>
                    </div>
                  )}
                </div>
                <button className="end-card" onClick={() => setFinale(true)}>
                  <Eye small />
                  <span>
                    <b>{t.endExperience}</b>
                    <small>
                      {t.winner} · {t.origin}
                    </small>
                  </span>
                  <span>↗</span>
                </button>
              </div>
              <div className="panel-foot">
                <span>09 / AUDIENCE FEEDBACK</span>
                <span>LOCAL STORAGE · NO BACKEND</span>
              </div>
            </section>
          )}
        </div>
      </main>
      <div className="mobile-progress" aria-hidden="true">
        <span style={{ width: `${((index + 1) / panels.length) * 100}%` }} />
      </div>
      {scan && (
        <div className="scan-overlay" role="status">
          <div className="scan-overlay-mark">
            <Eye />
          </div>
          <span className="eyebrow">{t.scanDone}</span>
          <b>{t.scanSafe}</b>
          <small>{t.ready}</small>
          <i className="scan-overlay-line" />
        </div>
      )}
      {finale && (
        <div className="finale-overlay" ref={finaleDialog} role="dialog" aria-modal="true" aria-labelledby="finale-title" aria-describedby="finale-description" tabIndex={-1}>
          <img className="finale-iris" src="/assets/iris-macro.webp" alt="" />
          <div className="finale-copy">
            <span className="eyebrow">
              CTRLSEC / IRIS · GRANDPRIX PETROBRAS / SENAI
            </span>
            <h1 id="finale-title">{t.endTitle}</h1>
            <p id="finale-description">{t.endSub}</p>
            <div className="finale-award">
              ✳ {t.winner} · {t.origin}
            </div>
            <button
              onClick={() => {
                setFinale(false);
                go("vision");
              }}
            >
              {t.exploreAgain}
              <span>↗</span>
            </button>
            <button
              className="finale-close"
              onClick={() => setFinale(false)}
              aria-label={t.close}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </div>
  );
}
