# Storybook

O Storybook é a bancada oficial do Kairo 88. Ele deve documentar decisões visuais, expor componentes isolados, mostrar estados difíceis e servir como revisão visual antes de qualquer projeto consumidor atualizar a versão da biblioteca.

## Stack

- Storybook 10;
- Web Components com Vite;
- CSS e tokens como fonte da verdade;
- stories em JavaScript puro, renderizando DOM/HTML.
- organização por Atomic Design.

Essa escolha mantém o design system independente de React, Vue ou qualquer framework de produto. Adapters podem vir depois.

## Comandos

```bash
npm install
npm run build:tokens
npm run storybook
npm run build-storybook
npm test
```

## Organização

- `.storybook/main.js`: registra stories, addon docs, framework e sprite de ícones.
- `.storybook/preview.js`: importa o CSS global e adiciona o seletor de tema.
- `.storybook/storybook-theme.css`: estilos somente para apresentação dos stories.
- `src/stories/foundations`: conceito, tokens, escalas e temas.
- `src/stories/foundations/design-options.stories.js`: comparação entre Kairo 88 e `systems-84`.
- `src/stories/atoms`: botões, campos, badges e ícones.
- `src/stories/molecules`: composições pequenas, como painel.
- `src/stories/organisms`: seções compostas, como tabela.
- `src/stories/motion`: utilitários de animação e painel de sinal.

## Regras

- Story não deve depender de app consumidor.
- Story deve usar classes e tokens reais da biblioteca.
- Estilo exclusivo de apresentação fica em `.storybook/storybook-theme.css`.
- Story deve morar na camada Atomic Design correta.
- Novo componente precisa de pelo menos uma story com estados principais.
- Novo componente precisa de teste para contrato visual ou comportamento esperado.
- Estados críticos devem mostrar texto, ícone e cor.
- Motion precisa respeitar `prefers-reduced-motion`.

## Próximos passos

- adicionar stories para `select`, `checkbox`, `radio`, `switch`, `toast`, `modal` e `tabs`;
- adicionar testes visuais quando houver pipeline;
- criar stories de densidade para tabelas e dashboards;
- publicar `storybook-static` como documentação interna.
