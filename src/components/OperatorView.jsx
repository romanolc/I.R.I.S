import { useEffect, useRef, useState } from "react";

const locales = {
  "pt-BR": {
    eyebrow: "05 / OPERATOR VIEW",
    title: "Experimente o mundo através do IRIS.",
    subtitle: "Visão conceitual do operador com uma camada de confiança sobre o ambiente industrial.",
    concept: "SIMULAÇÃO CONCEITUAL",
    sceneAlt: "Ambiente industrial à noite, usado como cenário conceitual para a interface do operador.",
    version: "IRIS V7.2.1",
    session: "SECURE SESSION",
    operator: "OPERATOR: AUTHENTICATED",
    location: "LOCATION: INDUSTRIAL UNIT 03",
    liveData: "SEM TELEMETRIA REAL",
    pressure: "PRESSURE",
    temperature: "TEMPERATURE",
    status: "STATUS",
    demo: "DEMONSTRATIVO",
    sceneTag: "FIELD VIEW / CONCEPT 01",
    target: "ALVO CONTEXTUAL",
    commandTitle: "VOICE ASSISTANT",
    voiceButton: "ACTIVATE VOICE",
    voiceOn: "COMANDOS PREDEFINIDOS DISPONÍVEIS",
    voiceHint: "Simulação local · nenhum áudio é captado ou enviado.",
    choose: "ESCOLHA UM COMANDO DE DEMONSTRAÇÃO",
    manualCommand: "“IRIS, mostre o manual de manutenção.”",
    financeCommand: "“IRIS, mostre o relatório financeiro confidencial.”",
    traceTitle: "SECURITY TRACE",
    traceWaiting: "Aguardando uma solicitação demonstrativa…",
    traceLabel: "LOCAL / DEMO",
    commandRecognized: "COMMAND RECOGNIZED",
    authenticated: "✓ OPERATOR AUTHENTICATED",
    resource: "✓ RESOURCE AUTHORIZED",
    dlpVerified: "✓ DLP POLICY VERIFIED",
    accessGranted: "ACCESS GRANTED",
    approved: "REQUEST APPROVED",
    requestBlocked: "REQUEST BLOCKED",
    analyzed: "REQUEST ANALYZED",
    classification: "CONTENT CLASSIFICATION",
    confidential: "CONFIDENTIAL",
    policy: "DLP POLICY",
    active: "ACTIVE",
    action: "ACTION",
    blocked: "BLOCKED",
    accessBlocked: "ACCESS BLOCKED",
    protected: "INFORMAÇÃO PROTEGIDA",
    blockedExplanation: "Esta solicitação foi bloqueada pela política de proteção de dados.",
    manualTitle: "MANUAL DE MANUTENÇÃO",
    manualTag: "DOCUMENTO CONCEITUAL · ACESSO DEMONSTRATIVO",
    manualBody: "Conteúdo de exemplo autorizado para visualização na demonstração IRIS.",
    manualNote: "Consulte sempre os procedimentos oficiais da unidade. Este protótipo não fornece instruções operacionais.",
    demoBadge: "DADOS CONCEITUAIS · NÃO CONECTADO À UNIDADE",
    logLines: [
      "10:42:01 VOICE INPUT",
      "10:42:01 IDENTITY VERIFIED",
      "10:42:01 REQUEST ANALYZED",
      "10:42:01 POLICY CHECK",
      "10:42:01 DLP CLASSIFICATION",
      "10:42:01 ACCESS DECISION",
    ],
  },
  en: {
    eyebrow: "05 / OPERATOR VIEW",
    title: "Experience the world through IRIS.",
    subtitle: "A conceptual operator view with a trust layer over an industrial environment.",
    concept: "CONCEPTUAL SIMULATION",
    sceneAlt: "Industrial environment at night, used as a conceptual scene for the operator interface.",
    version: "IRIS V7.2.1",
    session: "SECURE SESSION",
    operator: "OPERATOR: AUTHENTICATED",
    location: "LOCATION: INDUSTRIAL UNIT 03",
    liveData: "NO LIVE TELEMETRY",
    pressure: "PRESSURE",
    temperature: "TEMPERATURE",
    status: "STATUS",
    demo: "DEMONSTRATION",
    sceneTag: "FIELD VIEW / CONCEPT 01",
    target: "CONTEXT TARGET",
    commandTitle: "VOICE ASSISTANT",
    voiceButton: "ACTIVATE VOICE",
    voiceOn: "PRESET COMMANDS AVAILABLE",
    voiceHint: "Local simulation · no audio is captured or sent.",
    choose: "CHOOSE A DEMONSTRATION COMMAND",
    manualCommand: "“IRIS, show the maintenance manual.”",
    financeCommand: "“IRIS, show the confidential financial report.”",
    traceTitle: "SECURITY TRACE",
    traceWaiting: "Waiting for a demonstration request…",
    traceLabel: "LOCAL / DEMO",
    commandRecognized: "COMMAND RECOGNIZED",
    authenticated: "✓ OPERATOR AUTHENTICATED",
    resource: "✓ RESOURCE AUTHORIZED",
    dlpVerified: "✓ DLP POLICY VERIFIED",
    accessGranted: "ACCESS GRANTED",
    approved: "REQUEST APPROVED",
    requestBlocked: "REQUEST BLOCKED",
    analyzed: "REQUEST ANALYZED",
    classification: "CONTENT CLASSIFICATION",
    confidential: "CONFIDENTIAL",
    policy: "DLP POLICY",
    active: "ACTIVE",
    action: "ACTION",
    blocked: "BLOCKED",
    accessBlocked: "ACCESS BLOCKED",
    protected: "INFORMATION PROTECTED",
    blockedExplanation: "This request was blocked by the data protection policy.",
    manualTitle: "MAINTENANCE MANUAL",
    manualTag: "CONCEPT DOCUMENT · DEMONSTRATION ACCESS",
    manualBody: "Example content authorized for viewing in the IRIS demonstration.",
    manualNote: "Always consult the unit's official procedures. This prototype provides no operational instructions.",
    demoBadge: "CONCEPT DATA · NOT CONNECTED TO A UNIT",
    logLines: [
      "10:42:01 VOICE INPUT",
      "10:42:01 IDENTITY VERIFIED",
      "10:42:01 REQUEST ANALYZED",
      "10:42:01 POLICY CHECK",
      "10:42:01 DLP CLASSIFICATION",
      "10:42:01 ACCESS DECISION",
    ],
  },
  es: {
    eyebrow: "05 / OPERATOR VIEW",
    title: "Experimenta el mundo a través de IRIS.",
    subtitle: "Visión conceptual del operador con una capa de confianza sobre el entorno industrial.",
    concept: "SIMULACIÓN CONCEPTUAL",
    sceneAlt: "Entorno industrial nocturno, utilizado como escenario conceptual para la interfaz del operador.",
    version: "IRIS V7.2.1",
    session: "SECURE SESSION",
    operator: "OPERATOR: AUTHENTICATED",
    location: "LOCATION: INDUSTRIAL UNIT 03",
    liveData: "SIN TELEMETRÍA REAL",
    pressure: "PRESSURE",
    temperature: "TEMPERATURE",
    status: "STATUS",
    demo: "DEMOSTRATIVO",
    sceneTag: "FIELD VIEW / CONCEPT 01",
    target: "OBJETIVO CONTEXTUAL",
    commandTitle: "VOICE ASSISTANT",
    voiceButton: "ACTIVATE VOICE",
    voiceOn: "COMANDOS PREDEFINIDOS DISPONIBLES",
    voiceHint: "Simulación local · no se captura ni envía audio.",
    choose: "ELIGE UN COMANDO DE DEMOSTRACIÓN",
    manualCommand: "“IRIS, muestra el manual de mantenimiento.”",
    financeCommand: "“IRIS, muestra el informe financiero confidencial.”",
    traceTitle: "SECURITY TRACE",
    traceWaiting: "Esperando una solicitud demostrativa…",
    traceLabel: "LOCAL / DEMO",
    commandRecognized: "COMMAND RECOGNIZED",
    authenticated: "✓ OPERATOR AUTHENTICATED",
    resource: "✓ RESOURCE AUTHORIZED",
    dlpVerified: "✓ DLP POLICY VERIFIED",
    accessGranted: "ACCESS GRANTED",
    approved: "REQUEST APPROVED",
    requestBlocked: "REQUEST BLOCKED",
    analyzed: "REQUEST ANALYZED",
    classification: "CONTENT CLASSIFICATION",
    confidential: "CONFIDENTIAL",
    policy: "DLP POLICY",
    active: "ACTIVE",
    action: "ACTION",
    blocked: "BLOCKED",
    accessBlocked: "ACCESS BLOCKED",
    protected: "INFORMACIÓN PROTEGIDA",
    blockedExplanation: "Esta solicitud fue bloqueada por la política de protección de datos.",
    manualTitle: "MANUAL DE MANTENIMIENTO",
    manualTag: "DOCUMENTO CONCEPTUAL · ACCESO DEMOSTRATIVO",
    manualBody: "Contenido de ejemplo autorizado para visualizar en la demostración IRIS.",
    manualNote: "Consulta siempre los procedimientos oficiales de la unidad. Este prototipo no ofrece instrucciones operativas.",
    demoBadge: "DATOS CONCEPTUALES · SIN CONEXIÓN A LA UNIDAD",
    logLines: [
      "10:42:01 VOICE INPUT",
      "10:42:01 IDENTITY VERIFIED",
      "10:42:01 REQUEST ANALYZED",
      "10:42:01 POLICY CHECK",
      "10:42:01 DLP CLASSIFICATION",
      "10:42:01 ACCESS DECISION",
    ],
  },
};

export default function OperatorView({ lang, reduce }) {
  const copy = locales[lang] || locales["pt-BR"];
  const [voiceActive, setVoiceActive] = useState(false);
  const [scenario, setScenario] = useState("");
  const [logs, setLogs] = useState([]);
  const [decisionReady, setDecisionReady] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), []);

  function runScenario(kind) {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setScenario(kind);
    setLogs([]);
    setDecisionReady(false);
    setVoiceActive(false);
    copy.logLines.forEach((line, index) => {
      timers.current.push(window.setTimeout(() => {
        setLogs((current) => [...current, line]);
        if (index === copy.logLines.length - 1) setDecisionReady(true);
      }, reduce ? 35 * (index + 1) : 300 * (index + 1)));
    });
  }

  return (
    <section className="panel operator-view-panel" aria-label={copy.eyebrow} data-testid="operator-view-panel">
      <header className="operator-view-heading">
        <div><span className="eyebrow"><i className="live-dot" />{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.subtitle}</p></div>
        <span className="simulation-stamp"><i />{copy.concept}</span>
      </header>

      <div className="operator-scene" role="group" aria-label={copy.sceneAlt}>
        <div className="operator-scene-shade" />
        <div className="operator-scanlines" />
        <div className="operator-hud-corner operator-hud-corner--tl" />
        <div className="operator-hud-corner operator-hud-corner--tr" />
        <div className="operator-hud-corner operator-hud-corner--bl" />
        <div className="operator-hud-corner operator-hud-corner--br" />

        <div className="operator-hud-top">
          <div className="operator-id-block"><span className="operator-eye-glyph">◉</span><div><b>{copy.version}</b><small>{copy.operator}</small></div></div>
          <div className="operator-session"><div><i className="live-dot" /><b>{copy.session}</b></div><small>ZERO TRUST / DEMO</small></div>
          <div className="operator-location"><span>{copy.location}</span><small>{copy.liveData}</small></div>
        </div>

        <div className="operator-field-view">
          <div className="operator-scene-label"><i />{copy.sceneTag}</div>
          <div className="operator-target-reticle"><i /><span /><b>{copy.target} / 03</b></div>
          <div className="operator-axis operator-axis--x" /><div className="operator-axis operator-axis--y" />
          <div className="operator-context-note"><span>ENVIRONMENT / INDUSTRIAL</span><b>IRIS HUD · CONCEPT</b><small>{copy.demoBadge}</small></div>
        </div>

        <div className="operator-telemetry" aria-label={`${copy.demoBadge}: ${copy.pressure}, ${copy.temperature}, ${copy.status}`}>
          <div className="telemetry-heading"><span>UNIT 03 / STATUS BUS</span><b>{copy.demo}</b></div>
          <div className="telemetry-grid">
            {[[copy.pressure, "—", "PSI / SIM"], [copy.temperature, "—", "°C / SIM"], [copy.status, copy.demo, "NO LIVE SENSOR"]].map(([label, value, unit]) => <div className="telemetry-cell" key={label}><span>{label}</span><b>{value}</b><small>{unit}</small><i /></div>)}
          </div>
        </div>

        <div className="operator-console-grid">
          <section className="voice-console" aria-label={copy.commandTitle}>
            <div className="voice-console-head"><div><span className="eyebrow">{copy.commandTitle}</span><small>{voiceActive ? copy.voiceOn : copy.voiceHint}</small></div><span className={`voice-state ${voiceActive ? "is-listening" : ""}`}><i />{voiceActive ? "READY" : "SIM"}</span></div>
            <button type="button" className={`voice-activate ${voiceActive ? "voice-activate--active" : ""}`} onClick={() => setVoiceActive((active) => !active)} aria-expanded={voiceActive} aria-controls="voice-commands">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-4 0h8" /></svg><span>🎙 {copy.voiceButton}</span><i>{voiceActive ? "−" : "+"}</i>
            </button>
            <div id="voice-commands" className="voice-command-picker" hidden={!voiceActive} aria-hidden={!voiceActive}><span className="eyebrow">{copy.choose}</span><button type="button" className="operator-command operator-command--approved" onClick={() => runScenario("approved")}><i>01</i><span>{copy.manualCommand}</span><b>↗</b></button><button type="button" className="operator-command operator-command--blocked" onClick={() => runScenario("blocked")}><i>02</i><span>{copy.financeCommand}</span><b>↗</b></button></div>
          </section>

          <section className="trace-console" aria-label={copy.traceTitle}>
            <div className="trace-console-head"><b>{copy.traceTitle}</b><span><i />{copy.traceLabel}</span></div>
            {logs.length === 0 ? <div className="trace-empty"><span>◌</span>{copy.traceWaiting}</div> : <ol className="trace-list" aria-live="polite" aria-relevant="additions">{logs.map((line, index) => <li key={`${line}-${index}`} className="trace-line"><i>0{index + 1}</i><span>{line}</span><b>✓</b></li>)}</ol>}
          </section>
        </div>

        {scenario && decisionReady && <section className={`operator-decision operator-decision--${scenario}`} role="status" aria-live="polite">
          {scenario === "approved" ? <>
            <div className="decision-banner decision-banner--approved"><span>✓</span><div><b>{copy.approved}</b><small>{copy.accessGranted}</small></div></div>
            <div className="decision-checks"><span>{copy.commandRecognized}</span><b>{copy.authenticated}</b><b>{copy.resource}</b><b>{copy.dlpVerified}</b></div>
            <article className="operator-manual"><div className="manual-head"><span>IRIS / RESOURCE 01</span><b>✓ AUTHORIZED</b></div><h3>{copy.manualTitle}</h3><span className="manual-concept-tag">{copy.manualTag}</span><p>{copy.manualBody}</p><div className="manual-lines" aria-hidden="true"><i /><i /><i /><i /></div><small>{copy.manualNote}</small></article>
          </> : <>
            <div className="decision-banner decision-banner--blocked"><span>!</span><div><b>{copy.requestBlocked}</b><small>{copy.accessBlocked} · {copy.protected}</small></div></div>
            <div className="dlp-block-grid"><div><small>{copy.analyzed}</small><b>{copy.financeCommand.replace(/[“”]/g, "")}</b></div><div><small>{copy.classification}</small><b className="text-danger">{copy.confidential}</b></div><div><small>{copy.policy}</small><b>{copy.active}</b></div><div><small>{copy.action}</small><b className="text-danger">{copy.blocked}</b></div></div>
            <p className="dlp-explanation">{copy.blockedExplanation}</p>
            <span className="blocked-request-state">⛔ {copy.blocked}</span>
          </>}
        </section>}

        <div className="operator-scene-footer"><span>{copy.demoBadge}</span><span>CTRLSEC / IRIS · LOCAL PROTOTYPE</span></div>
      </div>

      <div className="operator-simulation-note"><i>i</i><span>{copy.concept} · {copy.demoBadge}</span></div>
    </section>
  );
}
