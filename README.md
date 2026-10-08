# CTRLSEC / IRIS — experiência digital

Aplicação independente em React + Vite para apresentar o conceito IRIS: uma camada de cibersegurança para óculos de realidade aumentada em ambientes industriais críticos. O projeto não depende de backend, banco de dados, APIs de IA nem chaves privadas; fora o widget oficial VLibras, os assets e as interações são locais.

## Requisitos

- Node.js 18 ou superior
- npm

## Executar e compilar

```bash
npm install
npm run dev
```

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O build de produção fica em `dist/`.

## Publicar na Vercel

Importe o repositório GitHub na Vercel. A configuração padrão costuma ser detectada automaticamente. Se necessário, use:

- **Framework preset:** Vite
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

Não há variáveis de ambiente obrigatórias, arquivo `.env` ou `.env.example` neste projeto.

## O que está implementado

A navegação é composta por nove painéis:

1. **Visão** — abertura cinematográfica.
2. **O risco** — riscos interativos.
3. **IRIS** — especificação conceitual do visor e quatro pilares selecionáveis.
4. **Security Lab** — simulação de autenticação biométrica e Zero Trust, quatro camadas de defesa e arquitetura de segurança; preserva o diagrama e a alternância online/offline da experiência anterior.
5. **Operator View** — perspectiva conceitual do operador, HUD industrial, indicadores e comandos locais de demonstração.
6. **Tecnologia** — mapa interativo de tecnologias e estimativas conceituais.
7. **Nossa História** — fotografia real da equipe, logo oficial IRIS, tagline, três significados da marca e conquista nacional.
8. **Experiência** — antiga tela Conquista, preservada.
9. **Feedback** — demonstração de filtragem DLP e formulário salvo apenas no `localStorage`.

A intro, o seletor de idioma (PT-BR, inglês e espanhol), tema claro/escuro, contraste, destaque de texto, redução de movimento, navegação por teclado e Text-to-Speech com Web Speech API também permanecem disponíveis.

### Security Lab

O botão `INITIATE BIOMETRIC SCAN` inicia localmente uma sequência com `CAMERA ACTIVE`, `BIOMETRIC SCAN`, `IDENTITY ANALYSIS`, `98.4% MATCH SCORE`, `IDENTITY VERIFIED` e `SECURE SESSION`. O painel de autenticação demonstra `OPERATOR / AUTHENTICATED`, MFA, biometria, dispositivo, sessão e `ZERO TRUST ACTIVE`. As camadas interativas são identidade, sessão, contexto e DLP. A arquitetura anima as etapas de biometria, OAuth 2.0 / OIDC, JWT, TLS 1.3 + mTLS, DLP e Zero Trust.

### Operator View

`ACTIVATE VOICE` revela dois comandos predefinidos, sem IA externa nem permissão de microfone. “IRIS, mostre o manual de manutenção.” percorre as etapas do Security Trace e aprova um manual conceitual. “IRIS, mostre o relatório financeiro confidencial.” classifica o conteúdo como `CONFIDENTIAL` e o bloqueia pela política demonstrativa de DLP. O resultado mostra texto e ícones, além de cores.

## Acessibilidade e responsividade

O widget oficial VLibras continua disponível, funcional e ancorado no cabeçalho. Sua integração (script e inicialização oficiais) foi preservada; somente a apresentação visual é adaptativa. A área de toque permanece com pelo menos 44 × 44 px em tablet e mobile, enquanto o ícone é escalado por breakpoint: 28 px em mobile, 33 px em tablet e 38 px em desktop. O símbolo IRIS no cabeçalho também escala com a viewport, sem distorção. O controle anuncia seu estado enquanto carrega ou após falha, mantém visível uma opção acessível de ativação/repetição e entrega ao widget uma ativação antecipada quando ele termina de carregar.

Foram testadas as larguras **320, 375, 390, 430, 768 e 1440 px** em Security Lab e Operator View, inclusive durante o scan e comandos simulados; também foram testadas alturas compactas de desktop e tablet para garantir acesso a todos os itens de navegação. Não foi encontrado overflow horizontal nem erro JavaScript nas sessões de teste. As sequências respeitam a configuração de movimento reduzido e `prefers-reduced-motion`.

Os rótulos acessíveis do scan e da imagem são localizados nos três idiomas. Popovers e o diálogo final recebem foco, permitem fechar com `Escape` e restauram o foco ao acionador; o diálogo prende `Tab` dentro do conteúdo. Os painéis Security Lab e Operator View oferecem sobreposições para tema claro e alto contraste, sem clarear o viewfinder industrial.

A tradução do widget depende da conectividade e do serviço de terceiros. A referência oficial da integração está na [documentação VLibras](https://vlibras.gov.br/doc/widget/installation/webpageintegration.html).

## Fotos da equipe

A foto fornecida é usada sem geração artificial. O original está preservado em `assets-original/team-award-original.png`; o site carrega `public/assets/team-award.webp`, cópia WebP otimizada na mesma proporção. A legenda apresenta Áttila, Brahyan, Lucca e Jonatas, com a localização Bahia, Brasil. O texto alternativo está na chave `teamPhotoAlt` em `src/App.jsx`.

## Identidade oficial IRIS

A logo enviada foi preservada em `assets-original/iris-official-original.png`. O site usa `public/assets/iris-official-transparent.png`, PNG RGBA com a área branca externa removida por máscara de transparência e os elementos coloridos preservados. A seção Quem Somos apresenta a marca, a tagline **“VISÃO QUE PROTEGE. ORIGEM QUE IDENTIFICA.”** e cartões interativos para Olho, Bahia e Salvador/Farol da Barra.

## Limites do protótipo

- Biometria, autenticação, gateway, DLP, modo offline, IA, telemetria, indicadores e resultados são conceituais ou simulados; não fornecem proteção operacional real.
- O comando de voz é uma simulação por opções clicáveis: nenhum áudio é captado, transcrito ou enviado.
- A pontuação `98.4%` é ilustrativa, não um resultado biométrico.
- Métricas como `>95%`, `100%`, `<200ms` e `99.5%` são metas conceituais do material, não resultados de produção.
- `R$ 33,75M` é cenário potencial estimado, não economia garantida.
- O hardware IRIS é conceitual e agnóstico. O projeto não afirma que IRIS seja produto oficial, aprovado, contratado ou adotado pela Petrobras.
- Feedback não sai do navegador; limpar os dados locais apaga as respostas guardadas.
- VLibras é o único recurso que depende de serviço externo; se o serviço estiver indisponível, o controle de acesso permanece visível no cabeçalho.

## Arquitetura

```text
src/
  App.jsx                     shell, conteúdo localizado e painéis já existentes
  main.jsx                    ponto de entrada React
  styles.css                  sistema visual, painéis originais e responsividade
  styles-experiences.css      Security Lab, Operator View e ajustes responsivos do VLibras
  components/
    EyeMark.jsx               símbolo IRIS reutilizável
    SecurityLab.jsx           scan, camadas e arquitetura com fluxo online/offline preservado
    OperatorView.jsx          HUD, comandos demonstrativos, decisões DLP e trace
public/
  assets/                     fotografias e ilustrações locais
  iris-mark.svg               favicon vetorial original
assets-original/              foto da equipe e logo originais fornecidas
```

O projeto não adiciona dependências de produção nem integrações privadas.
