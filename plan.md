# Plano e registro de entrega — evolução IRIS

## Objetivo

Evoluir a aplicação Vite/React existente sem recomeçar o site nem remover painéis, conteúdo, fotografia, logo oficial, idiomas, controles de acessibilidade ou navegação. Entrega independente: sem backend, banco de dados, API de IA ou secrets; o widget oficial VLibras segue como serviço externo existente.

## Decisões e resultado

- Menu preservado e ampliado para nove itens, na ordem: Visão, O risco, IRIS, Security Lab, Operator View, Tecnologia, Nossa História, Experiência e Feedback.
- O conteúdo anterior não foi descartado. A experiência antiga de arquitetura e alternância online/offline foi incorporada como bloco do Security Lab.
- `src/components/SecurityLab.jsx` apresenta scan biométrico ilustrativo de seis estados, painel MFA/biometria/dispositivo/sessão, quatro camadas selecionáveis e arquitetura progressiva. A pontuação 98,4% é rotulada como valor fictício de demonstração.
- `src/components/OperatorView.jsx` apresenta uma vista industrial conceitual, HUD e indicadores demonstrativos. Os comandos predefinidos simulam um manual aprovado e um relatório confidencial bloqueado por DLP; voz não é captada e não há IA externa.
- Textos das experiências estão localizados em PT-BR, inglês e espanhol, mantendo rótulos técnicos específicos em inglês conforme o requisito.
- Assets originais locais reutilizados: `iris-macro.webp` no scanner e `refinery-night.webp` no Operator View. Não foram adicionados vídeo pesado ou novos serviços.
- `src/styles-experiences.css` contém as composições HUD, estados de simulação, suporte a movimento reduzido, temas claro/alto contraste e escalas responsivas próprias.
- A integração oficial do VLibras foi mantida; somente seu dimensionamento visual mudou: ícone de 38 px desktop, 33 px tablet e 28 px mobile, com alvo de toque de 44 × 44 px em tablet/mobile. O símbolo superior IRIS usa escala proporcional adaptativa, mantendo o tamanho desktop.

## Direção visual

Cyber-ops industrial premium no sistema visual existente: navy/preto, ciano e azul elétrico; vermelho/verde reservados aos resultados DLP com ícone e texto; linhas HUD, scanner da íris e refinaria local. Prioridade à leitura, ao toque e ao conteúdo principal; efeitos são secundários e respeitam movimento reduzido.

## Arquitetura entregue

```text
src/
  App.jsx                     shell, navegação, idioma e integração oficial VLibras
  main.jsx                    entrada React
  styles.css                  identidade existente e painéis preservados
  styles-experiences.css      painéis novos e breakpoints específicos
  components/
    EyeMark.jsx
    SecurityLab.jsx           scan, defesa, arquitetura e fluxo legado
    OperatorView.jsx          HUD, voz simulada, decisão DLP e trace
public/assets/
  iris-macro.webp
  refinery-night.webp
```

## Validação executada

- `npm run build` foi concluído sem erros após a implementação.
- Testes reais de navegador em 320, 375, 390, 430, 768 e 1440 px, mais tablet/desktop baixos: nove itens de menu, entrada nas novas telas, ícone VLibras adaptativo com alvo de toque adequado, símbolo superior proporcional, scan completo, camada DLP, switch offline legado e comandos aprovados/bloqueados com trace progressivo.
- Medidas durante as experiências: sem overflow horizontal no documento, painéis ou HUD; zero erros JavaScript. O rail de desktop/tablet continua alcançável por rolagem em alturas compactas.
- Testados foco de popovers/modal, ciclo por teclado e Escape, localização de texto alternativo/progresso em PT-BR/EN/ES, temas claro/alto contraste e contingência do VLibras após falha com retentativa e entrega de clique em fila.
- O teste de acionamento do botão oficial do VLibras usou um substituto local apenas no ambiente de teste, sem alterar nem substituir o endpoint oficial no produto.

## Observações de escopo

Toda autenticação, biometria, DLP, telemetria e métrica de demonstração é conceitual. O projeto não sugere implantação, aprovação ou uso pela Petrobras. O original fornecido pela equipe e a logo oficial permanecem preservados em `assets-original/`.
