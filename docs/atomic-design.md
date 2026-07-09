# Atomic Design

Kairo 88 usa Atomic Design como arquitetura de composição. A ideia não é criar pastas bonitas: é limitar responsabilidade, reduzir acoplamento e deixar claro onde cada decisão deve morar.

## Camadas

### Fundamentos

Base do sistema:

- tokens;
- temas;
- reset/base;
- tipografia;
- espaçamento;
- radius;
- motion;
- contrato de ícones.

Arquivos principais:

- `tokens/kairo-88.tokens.json`;
- `tokens/kairo-88.themes.json`;
- `src/styles/foundations`;
- `src/contracts/kairo.js`.

### Átomos

Menores blocos reutilizáveis com comportamento visual próprio:

- botão;
- ícone;
- icon button;
- status dot;
- badge;
- field;
- input.

Átomos não devem conhecer moléculas ou organismos.

### Moléculas

Combinações pequenas de átomos que já representam uma unidade de interface:

- painel;
- controles agrupados;
- resumo com label + métrica + status.

Moléculas podem conter átomos, mas não devem assumir layout de página.

### Organismos

Seções ou componentes compostos para fluxos reais:

- tabela;
- navigation rail;
- top bar;
- command palette;
- modais e drawers.

Organismos podem conter moléculas e átomos.

### Templates e Páginas

Ainda não existem como pacote. Quando entrarem, devem ficar em examples ou apps consumidores, não no núcleo da biblioteca, a menos que sejam templates oficiais reutilizáveis.

## CSS

O entrypoint público continua sendo:

```css
@import "@ingredisilva/kairo-88/styles";
```

Internamente, ele importa:

- `foundations/tokens.css`;
- `foundations/base.css`;
- `atoms/*.css`;
- `molecules/*.css`;
- `organisms/*.css`;
- `motion/*.css`.

## Tokens gerados

`src/styles/foundations/tokens.css` é gerado. Não edite manualmente.

Use:

```bash
npm run build:tokens
```

Fontes:

- `tokens/kairo-88.tokens.json`;
- `tokens/kairo-88.themes.json`.

## Regra de promoção

Um componente sobe de camada quando ganha responsabilidade:

- se é uma peça indivisível, é átomo;
- se combina átomos em uma unidade pequena, é molécula;
- se resolve uma seção ou fluxo, é organismo.

Se a peça precisa conhecer dados de app, rota, permissão ou chamada de API, ela não pertence ao núcleo do design system.
