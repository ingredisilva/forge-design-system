# Movimento

## Direção

O movimento de Kairo 88 deve parecer resposta eletrônica: rápido, preciso e luminoso. A referência é um display que acende, um botão físico que responde, uma linha de leitura passando por um painel. Nada deve parecer gelatinoso, teatral ou constantemente animado.

## Princípios

1. **Feedback antes de espetáculo**
   Movimento confirma causa e efeito: clique, foco, carregamento, seleção, sucesso, alerta.

2. **Curto por padrão**
   A maioria das transições fica entre `120ms` e `240ms`.

3. **Energia em momentos certos**
   Animações mais expressivas aparecem em onboarding, empty states, demos e experiências visuais.

4. **Sem ruído operacional**
   Dashboards, tabelas e formulários não devem ter animações permanentes competindo com dados.

5. **Redução de movimento obrigatória**
   Tudo que se move precisa degradar bem com `prefers-reduced-motion`.

## Tokens

- `micro`: 90ms, resposta quase instantânea.
- `fast`: 120ms, hover, press e foco.
- `base`: 180ms, troca de estado comum.
- `slow`: 240ms, entrada de painel e toast.
- `emphasis`: 360ms, confirmação visual ou destaque especial.
- `loop`: 1200ms, progresso contínuo discreto.

Easing:

- `standard`: transições comuns.
- `snap`: press, pop e entrada curta.
- `scan`: varredura linear, loading e leitura de sinal.

## Padrões

### Press

Botões e controles descem 1px ou reduzem escala para confirmar toque. A volta deve ser rápida.

### Focus glow

Foco usa borda e halo. O brilho é funcional, não decoração.

### Boot

Entrada de tela ou painel pode usar opacidade + deslocamento vertical pequeno. Use em blocos que aparecem após navegação, nunca em linhas de tabela em massa.

### Pulse

Estados vivos, online ou monitorando podem pulsar com sombra leve. O pulso deve ser lento e opcional.

### Sweep

Uma faixa luminosa atravessa uma superfície para indicar scan, atualização ou loading.

### Flicker

Confirmação curta, como LED acendendo. Deve acontecer uma vez, não em loop.

### Spin

Apenas para carregamento indeterminado. Use ícones simples.

## Classes utilitárias

- `.k88-animate-in`
- `.k88-animate-pulse`
- `.k88-animate-sweep`
- `.k88-animate-spin`
- `.k88-animate-flicker`

Essas classes são a primeira base técnica. Componentes reais podem encapsular as mesmas animações com nomes semânticos.

## Quando não usar

- Em listas longas com muitos itens simultâneos.
- Em labels, dados financeiros ou métricas críticas.
- Em alertas persistentes.
- Em qualquer elemento que precise permanecer estável para leitura.

