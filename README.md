# Kairo 88 Design System

Kairo 88 é um design system para produtos digitais com estética japonesa dos anos 80: interfaces precisas, noturnas, editoriais e táteis, inspiradas por city pop, eletrônicos de consumo, arcades, sinalização urbana e telas CRT.

A proposta não é transformar cada app em nostalgia decorativa. O sistema deve ser utilitário primeiro, memorável depois: legibilidade alta, componentes previsíveis, tokens consistentes e detalhes visuais que dão assinatura sem atrapalhar o uso diário.

## Ideia central

**Produto moderno com alma de painel eletrônico japonês dos anos 80.**

O usuário deve sentir que está usando uma ferramenta confiável, rápida e bonita, com pequenas pistas de época: contraste de neon sobre noite urbana, linhas finas, grades rígidas, microtexturas, tipografia técnica, estados luminosos e uma paleta que mistura papel, tinta, vidro, metal e luz.

## Princípios

1. **Sinal antes de ornamento**
   Toda cor, borda, sombra e animação precisa ajudar a leitura, hierarquia ou feedback.

2. **Grade como ritmo**
   Layouts usam alinhamento forte, espaçamento previsível e densidade controlada. A referência é editorial e industrial, não "landing page decorativa".

3. **Nostalgia com precisão**
   A estética vem de materiais, luz, tipografia e proporção. Evite kanji decorativo, clichês turísticos ou elementos culturais sem função.

4. **Noite urbana, papel claro**
   O sistema nasce com modo escuro expressivo e modo claro editorial. Ambos compartilham os mesmos tokens sem virar temas separados.

5. **Tátil, não pesado**
   Componentes podem lembrar botões, displays, etiquetas e painéis, mas continuam leves, responsivos e acessíveis.

6. **Uma biblioteca, muitos produtos**
   A assinatura visual deve sobreviver em dashboards, ferramentas internas, sites, jogos, docs e apps mobile sem exigir redesign por projeto.

## Estrutura inicial

- [.storybook](.storybook): configuração do Storybook para documentar e testar a biblioteca.
- [docs/atomic-design.md](docs/atomic-design.md): organização por fundamentos, átomos, moléculas e organismos.
- [docs/conceito.md](docs/conceito.md): conceito, linguagem visual, regras de aplicação e direção de componentes.
- [docs/design-options.md](docs/design-options.md): presets visuais oficiais, incluindo `systems-84` vindo do portfolio ingrd.
- [docs/icones.md](docs/icones.md): direção visual, tamanhos, nomes e regras de uso para ícones.
- [docs/motion.md](docs/motion.md): princípios de animação, durações, easing e padrões reutilizáveis.
- [docs/roadmap.md](docs/roadmap.md): caminho recomendado para transformar o conceito em uma biblioteca real.
- [docs/storybook.md](docs/storybook.md): como usar o Storybook como bancada do design system.
- [docs/testing.md](docs/testing.md): estratégia de testes para tokens, CSS, ícones, stories e build.
- [tokens/kairo-88.tokens.json](tokens/kairo-88.tokens.json): tokens semânticos iniciais em JSON.
- [tokens/kairo-88.themes.json](tokens/kairo-88.themes.json): temas semânticos usados para gerar CSS.
- [src/contracts/kairo.js](src/contracts/kairo.js): contrato compartilhado de temas, ícones e ordenação do Storybook.
- [src/styles/kairo.css](src/styles/kairo.css): entrypoint CSS público, organizado por Atomic Design.
- [src/icons/kairo-icons.svg](src/icons/kairo-icons.svg): sprite SVG inicial com ícones funcionais.
- [src/stories](src/stories): stories de conceito, tokens, componentes, ícones e motion.
- [scripts/generate-css-tokens.js](scripts/generate-css-tokens.js): gera `src/styles/foundations/tokens.css`.
- [examples/kairo-board.html](examples/kairo-board.html): vitrine estática do conceito com temas alternáveis.

## Storybook

Instale as dependências e rode:

```bash
npm install
npm run build:tokens
npm run storybook
```

O Storybook sobe em `http://localhost:6006` e inclui um seletor de tema para `midnight`, `systems-84`, `daylight`, `arcade` e `paper`.

## Testes

```bash
npm test
npm run test:ci
```

`npm test` valida tokens, CSS, ícones e stories com o test runner nativo do Node. `npm run test:ci` roda a suíte e também gera o build do Storybook.

## Uso previsto

Projetos consumidores devem importar os tokens CSS e usar atributos de tema no elemento raiz:

```html
<html data-theme="kairo-midnight">
```

```html
<html data-theme="systems-84">
```

```css
@import "@forge/kairo-88/styles";
```

O pacote final deve expor tokens, CSS base e componentes por adaptadores, sem obrigar todos os projetos a usarem o mesmo framework.
