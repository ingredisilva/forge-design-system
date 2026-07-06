# Ícones

## Direção

Os ícones de Kairo 88 parecem sinais de painel: traços limpos, geometria simples, cantos levemente técnicos e leitura imediata. Eles não são mascotes nem ilustrações pequenas. São comandos, estados e pontos de orientação.

O sistema deve ser compatível com bibliotecas de stroke icons como Lucide nos adapters de frontend. Ícones próprios ficam reservados para assinatura visual, navegação, estados e símbolos que a biblioteca precisa carregar sem dependência externa.

## Princípios

1. **Função primeiro**
   Um ícone existe para reconhecer uma ação, estado ou área. Se ele não melhora escaneabilidade, use texto.

2. **Mesmo peso visual**
   Todos os ícones usam `viewBox="0 0 24 24"`, traço entre `1.75` e `2`, sem preenchimento por padrão.

3. **Cor herdada**
   Ícones usam `currentColor`. O componente controla cor, estado e contraste.

4. **Texto em ações críticas**
   Ações destrutivas, financeiras, irreversíveis ou ambíguas precisam de rótulo visível.

5. **Animação com propósito**
   Ícones podem girar, pulsar ou varrer quando comunicam progresso, vida ou mudança de estado. Não animar ícones decorativos em telas de trabalho.

## Tamanhos

- `xs`: 16px, usado em badges, metadados e tabelas densas.
- `sm`: 20px, usado em botões compactos, tabs e menus.
- `md`: 24px, usado em navegação, empty states e toolbars.
- `lg`: 32px, usado em estados vazios, cards de resumo e chamadas visuais.

Controles clicáveis devem ter área mínima maior que o ícone:

- desktop: 36px;
- toque: 44px.

## Nomes

Use nomes por intenção, não por forma visual:

- `dashboard`
- `component`
- `tokens`
- `status`
- `guidelines`
- `play`
- `review`
- `check`
- `alert`
- `spark`
- `sync`
- `palette`
- `terminal`
- `system-map`

Quando um adapter usar uma biblioteca externa, faça o mapeamento em uma camada única. Exemplo: `dashboard` pode apontar para `LayoutDashboard` no React, sem espalhar nomes da biblioteca pelo produto.

## Uso em HTML

```html
<svg class="k88-icon" aria-hidden="true">
  <use href="/src/icons/kairo-icons.svg#k88-icon-dashboard"></use>
</svg>
```

Ícones informativos devem ter texto acessível:

```html
<svg class="k88-icon" role="img" aria-label="Sincronizado">
  <use href="/src/icons/kairo-icons.svg#k88-icon-check"></use>
</svg>
```

## Regras visuais

- Não use ícones preenchidos misturados com stroke icons na mesma barra de ferramentas.
- Não use ícone como único diferenciador de status; combine com texto, label ou tooltip.
- Não estique SVG.
- Não use gradiente dentro de ícone funcional.
- Não crie ícones excessivamente ilustrativos para ações comuns.
- Não use ícones japoneses decorativos sem função clara.

## Estados

- `default`: cor de texto ou texto mutado.
- `hover`: mesma cor do texto com superfície elevada.
- `active`: acento primário ou superfície selecionada.
- `disabled`: opacidade reduzida e sem animação.
- `danger`: cor semântica de perigo, sempre com texto em ações críticas.

## Animações permitidas

- `spin`: progresso contínuo.
- `pulse`: serviço vivo, conectado ou monitorando.
- `flicker`: confirmação curta, como LED acendendo.
- `sweep`: leitura, scanner ou atualização de sinal.

Todas devem respeitar `prefers-reduced-motion`.
