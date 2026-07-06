# Roadmap

## Fase 0: Fundação

Objetivo: transformar o conceito em regras reutilizáveis.

- consolidar tokens de cor, espaçamento, tipografia, radius, sombra e movimento;
- definir temas `midnight`, `daylight`, `arcade` e `paper`;
- organizar CSS e stories por Atomic Design;
- gerar CSS de tema a partir dos tokens;
- criar CSS variables consumíveis por qualquer app;
- configurar Storybook como bancada de documentação;
- documentar regras de acessibilidade e densidade.

## Fase 1: Primitivos

Objetivo: criar blocos básicos sem prender a um framework.

- reset/base CSS;
- tipografia;
- sprite e contrato de ícones;
- utilitários de motion;
- botão;
- input;
- select;
- checkbox;
- radio;
- switch;
- badge;
- chip;
- tooltip;
- spinner/progress.

## Fase 2: Componentes de Produto

Objetivo: cobrir fluxos reais.

- navigation rail;
- top bar;
- tabs;
- command palette;
- modal;
- drawer;
- toast;
- alert;
- card;
- table;
- empty state;
- pagination;
- date/time controls;
- form layout.

## Fase 3: Adapters

Objetivo: permitir uso em vários projetos.

- pacote CSS puro;
- pacote React;
- pacote Vue, se necessário;
- pacote de tokens JSON;
- documentação com exemplos;
- build do Storybook para documentação publicada;
- templates de app.

## Fase 4: Governança

Objetivo: manter consistência entre projetos.

- versionamento semântico;
- changelog;
- matriz de compatibilidade;
- snapshots visuais;
- checklist de contribuição;
- regras para criação de novos componentes.

## Critério de qualidade

Um componente só entra na biblioteca quando tiver:

- tokens sem hard-code visual;
- estados hover, active, focus, disabled e loading quando aplicável;
- comportamento em tema escuro e claro;
- documentação curta;
- exemplos de uso;
- validação de contraste;
- dimensões estáveis em desktop e mobile.
