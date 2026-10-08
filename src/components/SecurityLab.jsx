import { useEffect, useRef, useState } from "react";
import Eye from "./EyeMark.jsx";

const locales = {
  "pt-BR": {
    eyebrow: "04 / IRIS SECURITY LAB",
    title: "Veja a segurança acontecendo em tempo real.",
    lead: "Da validação de identidade à política de dados, acompanhe uma sessão segura conceitual.",
    concept: "SIMULAÇÃO CONCEITUAL",
    scanner: "BIOMETRIC SCAN / CÂMERA CONCEITUAL",
    scanReady: "AGUARDANDO INICIALIZAÇÃO",
    scanButton: "INITIATE BIOMETRIC SCAN",
    scanAgain: "RESTART BIOMETRIC SCAN",
    matchNote: "98,4% é um valor fictício desta demonstração, não um resultado biométrico real.",
    scanImageAlt: "Imagem conceitual de íris azul; não há captura biométrica.",
    demoScoreLabel: "Pontuação fictícia de demonstração: 98,4%.",
    noBioMeasurementLabel: "Sem medição biométrica real.",
    scanProgressLabel: "Progresso da simulação de leitura biométrica",
    checkVerified: "verificado na simulação",
    checkPending: "pendente na simulação",
    secure: "SESSÃO SEGURA",
    pending: "Aguardando verificação",
    authenticated: "OPERATOR / AUTHENTICATED",
    waitingOperator: "OPERATOR / AGUARDANDO SCAN",
    checks: ["MFA", "BIOMETRICS", "DEVICE", "SESSION"],
    zeroTrust: "ZERO TRUST ACTIVE",
    zeroTrustPending: "ZERO TRUST / AGUARDANDO SESSÃO",
    layersTitle: "DEFENSE LAYERS",
    layersSub: "Selecione ou toque em uma camada para inspecionar a decisão.",
    core: "CAMADA DE CONFIANÇA",
    layers: [
      ["IDENTIDADE", "Quem está acessando?", "A identidade do operador é verificada antes de abrir a sessão. Esta representação não captura nem compara biometria real."],
      ["SESSÃO", "A sessão continua confiável?", "MFA, dispositivo e estado da sessão são reavaliados ao longo do fluxo conceitual."],
      ["CONTEXTO", "O que o operador está tentando fazer?", "A intenção da solicitação e o contexto de acesso alimentam a decisão de política."],
      ["DLP", "Essa informação pode ser exibida?", "O conteúdo é classificado antes de chegar ao visor; solicitações confidenciais podem ser bloqueadas."],
    ],
    architectureTitle: "SECURITY ARCHITECTURE",
    architectureSub: "A sequência acende após a verificação e representa a criação de uma sessão segura.",
    architecture: ["BIOMETRIA", "OAUTH 2.0 / OIDC", "JWT", "TLS 1.3 + mTLS", "DLP", "ZERO TRUST"],
    architectureWaiting: "INICIE O SCAN PARA ANIMAR A SESSÃO",
    architectureReady: "SESSÃO CONCEITUAL ESTABELECIDA",
    flowEyebrow: "ARQUITETURA DA PROPOSTA",
    flowLabel: "CONTINUIDADE DO FLUXO ORIGINAL · ONLINE / OFFLINE",
    flowConcept: "O modo offline representa uma alternativa conceitual com regras locais.",
    simulationNote: "Protótipo visual local. Não realiza autenticação, análise biométrica, conexão corporativa ou proteção operacional real.",
  },
  en: {
    eyebrow: "04 / IRIS SECURITY LAB",
    title: "See security happening in real time.",
    lead: "Follow a conceptual secure session, from identity validation to data policy.",
    concept: "CONCEPTUAL SIMULATION",
    scanner: "BIOMETRIC SCAN / CONCEPT CAMERA",
    scanReady: "AWAITING INITIALIZATION",
    scanButton: "INITIATE BIOMETRIC SCAN",
    scanAgain: "RESTART BIOMETRIC SCAN",
    matchNote: "98.4% is a fictional demonstration value, not a real biometric result.",
    scanImageAlt: "Conceptual blue iris image; no biometric capture takes place.",
    demoScoreLabel: "Fictional demonstration score: 98.4%.",
    noBioMeasurementLabel: "No real biometric measurement.",
    scanProgressLabel: "Biometric scan simulation progress",
    checkVerified: "verified in simulation",
    checkPending: "pending in simulation",
    secure: "SECURE SESSION",
    pending: "Awaiting verification",
    authenticated: "OPERATOR / AUTHENTICATED",
    waitingOperator: "OPERATOR / AWAITING SCAN",
    checks: ["MFA", "BIOMETRICS", "DEVICE", "SESSION"],
    zeroTrust: "ZERO TRUST ACTIVE",
    zeroTrustPending: "ZERO TRUST / AWAITING SESSION",
    layersTitle: "DEFENSE LAYERS",
    layersSub: "Select or tap a layer to inspect the decision.",
    core: "TRUST LAYER",
    layers: [
      ["IDENTITY", "Who is accessing?", "The operator identity is checked before opening a session. This representation does not capture or compare real biometrics."],
      ["SESSION", "Is the session still trusted?", "MFA, device and session state are re-evaluated throughout the conceptual flow."],
      ["CONTEXT", "What is the operator trying to do?", "Request intent and access context inform the policy decision."],
      ["DLP", "Can this information be displayed?", "Content is classified before reaching the visor; confidential requests can be blocked."],
    ],
    architectureTitle: "SECURITY ARCHITECTURE",
    architectureSub: "The sequence lights up after verification to represent secure-session creation.",
    architecture: ["BIOMETRICS", "OAUTH 2.0 / OIDC", "JWT", "TLS 1.3 + mTLS", "DLP", "ZERO TRUST"],
    architectureWaiting: "START THE SCAN TO ANIMATE THE SESSION",
    architectureReady: "CONCEPTUAL SESSION ESTABLISHED",
    flowEyebrow: "PROPOSED ARCHITECTURE",
    flowLabel: "PRESERVED ORIGINAL FLOW · ONLINE / OFFLINE",
    flowConcept: "Offline mode represents a conceptual alternative with local rules.",
    simulationNote: "Local visual prototype. It does not perform authentication, biometric analysis, corporate connectivity or real operational protection.",
  },
  es: {
    eyebrow: "04 / IRIS SECURITY LAB",
    title: "Mira la seguridad en tiempo real.",
    lead: "Sigue una sesión segura conceptual, desde la validación de identidad hasta la política de datos.",
    concept: "SIMULACIÓN CONCEPTUAL",
    scanner: "BIOMETRIC SCAN / CÁMARA CONCEPTUAL",
    scanReady: "A LA ESPERA DE INICIALIZACIÓN",
    scanButton: "INITIATE BIOMETRIC SCAN",
    scanAgain: "RESTART BIOMETRIC SCAN",
    matchNote: "98,4% es un valor ficticio de esta demostración, no un resultado biométrico real.",
    scanImageAlt: "Imagen conceptual de iris azul; no hay captura biométrica.",
    demoScoreLabel: "Puntuación ficticia de demostración: 98,4%.",
    noBioMeasurementLabel: "Sin medición biométrica real.",
    scanProgressLabel: "Progreso de la simulación de lectura biométrica",
    checkVerified: "verificado en la simulación",
    checkPending: "pendiente en la simulación",
    secure: "SESIÓN SEGURA",
    pending: "Esperando verificación",
    authenticated: "OPERATOR / AUTHENTICATED",
    waitingOperator: "OPERATOR / A LA ESPERA DEL SCAN",
    checks: ["MFA", "BIOMETRICS", "DEVICE", "SESSION"],
    zeroTrust: "ZERO TRUST ACTIVE",
    zeroTrustPending: "ZERO TRUST / A LA ESPERA DE SESIÓN",
    layersTitle: "DEFENSE LAYERS",
    layersSub: "Selecciona o toca una capa para inspeccionar la decisión.",
    core: "CAPA DE CONFIANZA",
    layers: [
      ["IDENTIDAD", "¿Quién está accediendo?", "La identidad del operador se verifica antes de abrir una sesión. Esta representación no captura ni compara biometría real."],
      ["SESIÓN", "¿La sesión sigue siendo confiable?", "MFA, dispositivo y estado de sesión se reevalúan a lo largo del flujo conceptual."],
      ["CONTEXTO", "¿Qué intenta hacer el operador?", "La intención de la solicitud y el contexto de acceso informan la decisión de política."],
      ["DLP", "¿Se puede mostrar esta información?", "El contenido se clasifica antes de llegar al visor; las solicitudes confidenciales pueden bloquearse."],
    ],
    architectureTitle: "SECURITY ARCHITECTURE",
    architectureSub: "La secuencia se ilumina tras la verificación para representar la creación de una sesión segura.",
    architecture: ["BIOMETRÍA", "OAUTH 2.0 / OIDC", "JWT", "TLS 1.3 + mTLS", "DLP", "ZERO TRUST"],
    architectureWaiting: "INICIA EL SCAN PARA ANIMAR LA SESIÓN",
    architectureReady: "SESIÓN CONCEPTUAL ESTABLECIDA",
    flowEyebrow: "ARQUITECTURA PROPUESTA",
    flowLabel: "FLUJO ORIGINAL CONSERVADO · ONLINE / OFFLINE",
    flowConcept: "El modo offline representa una alternativa conceptual con reglas locales.",
    simulationNote: "Prototipo visual local. No realiza autenticación, análisis biométrico, conexión corporativa ni protección operativa real.",
  },
};

const scanSequence = [
  "CAMERA ACTIVE",
  "BIOMETRIC SCAN",
  "IDENTITY ANALYSIS",
  "98.4% MATCH SCORE",
  "IDENTITY VERIFIED",
  "SECURE SESSION",
];

export default function SecurityLab({ t, m, lang, reduce, offline, setOffline }) {
  const copy = locales[lang] || locales["pt-BR"];
  const [scanStage, setScanStage] = useState(-1);
  const [selectedLayer, setSelectedLayer] = useState(0);
  const [architectureStage, setArchitectureStage] = useState(-1);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), []);

  function schedule(callback, delay) {
    timers.current.push(window.setTimeout(callback, delay));
  }

  function initiateScan() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setScanStage(0);
    setArchitectureStage(-1);
    const interval = reduce ? 48 : 620;
    scanSequence.forEach((_, index) => {
      schedule(() => {
        setScanStage(index);
        if (index === scanSequence.length - 1) {
          copy.architecture.forEach((__, step) => {
            schedule(() => setArchitectureStage(step), reduce ? 60 * (step + 1) : 410 * (step + 1));
          });
        }
      }, reduce ? 45 * index : [0, 560, 1180, 1840, 2540, 3220][index]);
    });
  }

  const verified = scanStage >= 4;
  const sessionReady = scanStage >= 5;

  return (
    <section className="panel security-lab-panel" aria-label={copy.eyebrow} data-testid="security-lab-panel">
      <header className="security-lab-heading">
        <div>
          <span className="eyebrow"><i className="live-dot" />{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>
        </div>
        <span className="simulation-stamp"><i />{copy.concept}</span>
      </header>

      <div className="security-lab-overview">
        <section className={`biometric-console ${scanStage >= 0 ? "biometric-console--active" : ""} ${verified ? "biometric-console--verified" : ""}`} aria-label={copy.scanner}>
          <div className="biometric-console-top">
            <span className="eyebrow">{copy.scanner}</span>
            <span className={`console-state ${sessionReady ? "is-ready" : ""}`}><i />{sessionReady ? copy.secure : copy.scanReady}</span>
          </div>
          <div className={`iris-scanner ${scanStage >= 0 ? "is-scanning" : ""} ${verified ? "is-verified" : ""}`}>
            <img src="/assets/iris-macro.webp" alt={copy.scanImageAlt} width="1280" height="853" decoding="async" />
            <span className="iris-scanner-shade" />
            <span className="iris-reticle iris-reticle--outer" />
            <span className="iris-reticle iris-reticle--inner" />
            <span className="iris-cross iris-cross--h" />
            <span className="iris-cross iris-cross--v" />
            <span className="iris-scan-beam" />
            <span className="iris-target-corner iris-target-corner--tl" />
            <span className="iris-target-corner iris-target-corner--tr" />
            <span className="iris-target-corner iris-target-corner--bl" />
            <span className="iris-target-corner iris-target-corner--br" />
            <span className="iris-match-chip" aria-label={scanStage >= 3 ? copy.demoScoreLabel : copy.noBioMeasurementLabel}>{scanStage >= 3 ? "98.4%" : "IRIS / DEMO"}</span>
          </div>
          <div className="biometric-console-bottom">
            <div className="scan-sequence" aria-live="polite" aria-atomic="true">
              <div className="scan-sequence-top"><span>{scanStage < 0 ? copy.pending : scanSequence[scanStage]}</span><b>{scanStage < 0 ? "—" : `0${scanStage + 1} / 06`}</b></div>
              <div className="scan-progress-track" role="progressbar" aria-label={copy.scanProgressLabel} aria-valuemin="0" aria-valuemax="6" aria-valuenow={Math.max(0, scanStage + 1)} aria-valuetext={scanStage < 0 ? copy.pending : scanSequence[scanStage]}><i style={{ width: `${Math.max(0, ((scanStage + 1) / scanSequence.length) * 100)}%` }} /></div>
              <div className="scan-sequence-list">
                {scanSequence.map((item, index) => <span key={item} className={scanStage >= index ? "reached" : ""}><i>{scanStage >= index ? "✓" : String(index + 1).padStart(2, "0")}</i>{item}</span>)}
              </div>
            </div>
            <button type="button" className="lab-scan-trigger" onClick={initiateScan} aria-label={verified ? copy.scanAgain : copy.scanButton}>
              <span className="scan-trigger-symbol">⌖</span>{verified ? copy.scanAgain : copy.scanButton}<span className="button-arrow">↗</span>
            </button>
            <p className="lab-metric-note">{copy.matchNote}</p>
          </div>
        </section>

        <aside className={`operator-auth-card ${verified ? "operator-auth-card--verified" : ""}`} aria-live="polite">
          <div className="auth-card-heading"><span className="eyebrow">SESSION / 01</span><span className="auth-card-pulse"><i />{sessionReady ? "SECURE" : "PENDING"}</span></div>
          <div className="auth-operator-mark"><Eye small /><span>IRIS IDENTITY GATE</span></div>
          <div className="auth-operator-name"><small>{copy.authenticated.split(" / ")[0]} /</small><b>{verified ? copy.authenticated.split(" / ")[1] : copy.waitingOperator.split(" / ")[1]}</b></div>
          <div className="auth-checklist">
            {copy.checks.map((item, index) => <div className={sessionReady || (verified && index < 2) ? "check-done" : ""} key={item}><span>{item}</span><b aria-label={sessionReady || (verified && index < 2) ? copy.checkVerified : copy.checkPending}>{sessionReady || (verified && index < 2) ? "✓" : "—"}</b></div>)}
          </div>
          <div className={`zero-trust-status ${sessionReady ? "active" : ""}`}><i />{sessionReady ? copy.zeroTrust : copy.zeroTrustPending}</div>
          <div className="auth-card-foot"><span>LOCAL DEMO</span><span>NO BIOMETRIC DATA</span></div>
        </aside>
      </div>

      <section className="defense-section" aria-labelledby="defense-title">
        <div className="security-section-heading">
          <div><span className="eyebrow">02 / TRUST BOUNDARY</span><h2 id="defense-title">{copy.layersTitle}</h2><p>{copy.layersSub}</p></div>
          <span className="defense-counter">0{selectedLayer + 1} <i>/</i> 04</span>
        </div>
        <div className="defense-constellation">
          <button type="button" className={`security-layer security-layer--identity ${selectedLayer === 0 ? "selected" : ""}`} onClick={() => setSelectedLayer(0)} onMouseEnter={() => setSelectedLayer(0)} onFocus={() => setSelectedLayer(0)} aria-pressed={selectedLayer === 0} aria-controls="layer-details">
            <span className="layer-number">01</span><span className="layer-title">{copy.layers[0][0]}</span><small>{copy.layers[0][1]}</small><i className="layer-signal" />
          </button>
          <button type="button" className={`security-layer security-layer--session ${selectedLayer === 1 ? "selected" : ""}`} onClick={() => setSelectedLayer(1)} onMouseEnter={() => setSelectedLayer(1)} onFocus={() => setSelectedLayer(1)} aria-pressed={selectedLayer === 1} aria-controls="layer-details">
            <span className="layer-number">02</span><span className="layer-title">{copy.layers[1][0]}</span><small>{copy.layers[1][1]}</small><i className="layer-signal" />
          </button>
          <button type="button" className={`security-layer security-layer--context ${selectedLayer === 2 ? "selected" : ""}`} onClick={() => setSelectedLayer(2)} onMouseEnter={() => setSelectedLayer(2)} onFocus={() => setSelectedLayer(2)} aria-pressed={selectedLayer === 2} aria-controls="layer-details">
            <span className="layer-number">03</span><span className="layer-title">{copy.layers[2][0]}</span><small>{copy.layers[2][1]}</small><i className="layer-signal" />
          </button>
          <button type="button" className={`security-layer security-layer--dlp ${selectedLayer === 3 ? "selected" : ""}`} onClick={() => setSelectedLayer(3)} onMouseEnter={() => setSelectedLayer(3)} onFocus={() => setSelectedLayer(3)} aria-pressed={selectedLayer === 3} aria-controls="layer-details">
            <span className="layer-number">04</span><span className="layer-title">{copy.layers[3][0]}</span><small>{copy.layers[3][1]}</small><i className="layer-signal" />
          </button>
          <div className="defense-core"><span className="core-orbit core-orbit--one" /><span className="core-orbit core-orbit--two" /><Eye /><b>IRIS</b><small>{copy.core}</small></div>
        </div>
        <div id="layer-details" className={`defense-explainer defense-explainer--${selectedLayer}`} role="status" aria-live="polite"><span className="explainer-index">0{selectedLayer + 1}</span><div><b>{copy.layers[selectedLayer][0]} / {copy.layers[selectedLayer][1]}</b><p>{copy.layers[selectedLayer][2]}</p></div><span className="explainer-check">{verified ? "✓ VERIFIED / DEMO" : "POLICY / CONCEPT"}</span></div>
      </section>

      <section className="security-sequence-section" aria-labelledby="security-architecture-title">
        <div className="security-section-heading">
          <div><span className="eyebrow">03 / SESSION PATH</span><h2 id="security-architecture-title">{copy.architectureTitle}</h2><p>{copy.architectureSub}</p></div>
          <span className={`sequence-status ${architectureStage >= copy.architecture.length - 1 ? "is-complete" : ""}`}><i />{architectureStage >= copy.architecture.length - 1 ? copy.architectureReady : copy.architectureWaiting}</span>
        </div>
        <div className="security-sequence-track" aria-label={copy.architecture.join(" → ")}>
          {copy.architecture.map((step, index) => <div className={`security-step ${architectureStage >= index ? "is-lit" : ""} ${architectureStage === index ? "is-current" : ""}`} key={step} aria-current={architectureStage === index ? "step" : undefined}>
            <span className="security-step-icon" aria-hidden="true">{["◉", "⌗", "▤", "⛨", "◈", "◎"][index]}</span><b>{step}</b><small>0{index + 1} / 06</small><i className="security-step-connector" />
          </div>)}
        </div>
      </section>

      <section className="legacy-flow-block flow-panel" aria-label={copy.flowLabel}>
        <div className="legacy-flow-divider"><span>{copy.flowLabel}</span><i /></div>
        <div className="flow-head">
          <div>
            <span className="eyebrow">{copy.flowEyebrow} / {m.trust}</span>
            <h2>{t.flowTitle.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h2>
            <p>{t.flowSub}</p>
          </div>
          <div className="mode-switch">
            <span className={!offline ? "active" : ""}>{t.cloud}</span>
            <button className={`switch ${offline ? "offline" : ""}`} type="button" role="switch" aria-checked={offline} aria-label={offline ? t.restore : t.simulate} onClick={() => setOffline(!offline)}><i /></button>
            <span className={offline ? "active" : ""}>{t.offline}</span>
          </div>
        </div>
        <div className={`architecture ${offline ? "architecture--offline" : ""}`}>
          <div className="architecture-track" />
          {t.nodes.map((item, index) => <div key={item} className={`flow-node flow-node--${index}`}><span className="flow-node-num">0{index + 1}</span><div className="flow-node-icon">{["⌁", "◉", "⌗", "✳", "◈", "▦"][index]}</div><b>{item}</b><small>{m.nodes[index]}</small><i className="flow-packet" /></div>)}
        </div>
        <div className="flow-lanes">
          {[[false, t.cloud, t.connected, "IA / LLM", "DLP"], [true, t.offline, t.disconnected, "IA LOCAL", "DLP LOCAL"]].map(([isOff, title, sub, a, b]) => <div key={title} className={`flow-lane ${offline === isOff ? "is-live" : ""}`}><span className="lane-icon">{isOff ? "⌂" : "☁"}</span><div><b>{title}</b><small>{sub}</small></div><span className="lane-route">{a} <i>→</i> {b}</span><span className={`lane-state ${offline === isOff ? "is-live" : ""}`}>{offline === isOff ? "● ACTIVE" : "—"}</span></div>)}
        </div>
        <div className="flow-caption"><i className="live-dot" />{offline ? t.disconnected : t.connected}<button type="button" onClick={() => setOffline(!offline)}>{offline ? t.restore : t.simulate}<span>↗</span></button></div>
        <div className="flow-original-note">{copy.flowConcept}</div>
      </section>

      <p className="security-lab-disclaimer"><span>{copy.concept}</span>{copy.simulationNote}</p>
    </section>
  );
}
