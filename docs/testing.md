# Testes

Kairo 88 deve ser mantido como produto de infraestrutura. Qualquer mudança em token, CSS, ícone ou story precisa falhar rápido quando quebra contrato visual ou documentação.

## Comandos

```bash
npm test
npm run test:storybook
npm run test:ci
```

Os scripts de teste rodam `npm run build:tokens` antes da suíte para garantir que o CSS gerado reflita os tokens.

## O que `npm test` cobre

### Tokens

- grupos fundamentais existem;
- referências como `{color.accent.neonCyan}` resolvem;
- cores usam hex ou referência válida;
- dimensões usam `px`;
- radius respeita o limite de 8px;
- motion permanece curto e intencional.

### CSS

- todos os temas expõem as variáveis semânticas de cor;
- o bundle CSS é lido resolvendo os imports por Atomic Design;
- `src/styles/foundations/tokens.css` está sincronizado com os arquivos de tokens;
- pares principais de contraste passam AA;
- classes base de componentes existem;
- classes de motion existem;
- `prefers-reduced-motion` está presente;
- base CSS evita letter spacing negativo e tipo escalado por viewport.

### Ícones

- o sprite tem os mesmos nomes expostos em `story-utils`;
- todos usam `viewBox="0 0 24 24"`;
- todos herdam cor com `currentColor`;
- referências diretas em docs, examples e stories apontam para símbolos existentes.

### Stories

- arquivos JavaScript passam syntax check;
- preview expõe todos os temas;
- as áreas principais do Storybook continuam cobertas: fundamentos, átomos, moléculas, organismos e motion.

## O que `test:storybook` cobre

`test:storybook` executa o build de teste do Storybook. Use quando quiser validar a integração entre stories, Vite, CSS global, addon docs e assets estáticos.

## O que `test:ci` cobre

`test:ci` roda a suíte unitária e depois o build completo do Storybook. Esse deve ser o comando padrão para CI.

## Evolução

Quando a biblioteca ganhar componentes com comportamento, adicionar:

- testes de interação;
- snapshots visuais;
- axe/accessibility checks;
- testes por adapter, como React ou Vue;
- smoke tests de consumo em um app exemplo.
