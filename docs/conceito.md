# Conceito: Kairo 88

## Frase-mãe

**Kairo 88 é um sistema visual para ferramentas digitais que parecem ter nascido entre um painel de trem noturno, uma revista de tecnologia japonesa de 1986 e um aparelho de som com LEDs acesos.**

Ele deve parecer:

- preciso, como equipamento;
- cinematográfico, como cidade à noite;
- editorial, como revista impressa;
- tátil, como botão físico;
- calmo, como uma ferramenta que sabe o que está fazendo.

## Referências traduzidas em linguagem de produto

### City pop e capas de LP

Use cor como clima, não como excesso. Gradientes podem existir como superfícies especiais, fundos de hero, gráficos ou estados premium, mas a UI principal deve funcionar com campos sólidos, bordas e hierarquia clara.

Tradução prática:

- acentos em cyan, magenta, coral, amber e mint;
- preto azulado para fundos noturnos;
- papel quente para superfícies claras;
- blocos geométricos, linhas horizontais e composições assimétricas controladas.

### Eletrônicos japoneses dos anos 80

Use a lógica de painéis: labels curtos, agrupamentos claros, estados luminosos, botões com resposta visual firme.

Tradução prática:

- botões compactos, com ícones e rótulos objetivos;
- bordas de 1px ou 2px;
- radius baixo;
- estados ativos com brilho sutil;
- variantes que lembram controles físicos sem skeumorfismo pesado.

### Sinalização urbana e metrô

Use contraste e orientação. O usuário sempre deve saber onde está, o que é clicável e qual ação vem a seguir.

Tradução prática:

- navegação com estados fortes;
- breadcrumbs e tabs legíveis;
- cores de status com significado estável;
- grades para páginas densas, tabelas e formulários.

### Editorial e manuais técnicos

Use títulos enxutos, metadados bem alinhados e blocos de informação que parecem diagramados.

Tradução prática:

- tipografia com pesos moderados;
- headings menores dentro de painéis;
- labels em uppercase apenas quando ajudarem varredura visual;
- mono para dados técnicos, IDs, comandos e métricas.

## O que evitar

- Kanji, hiragana ou katakana como enfeite se o texto não tiver significado real.
- Pagodes, samurais, sol nascente, templos e outros atalhos visuais genéricos.
- Vaporwave genérico dominado por roxo/azul, palmeiras e grid infinito.
- Gradientes em toda superfície.
- Cards dentro de cards.
- Radius muito alto em componentes operacionais.
- Animação constante em áreas de trabalho.
- Baixo contraste em nome da estética.

## Personalidade

Kairo 88 fala com o usuário como uma ferramenta competente e levemente cinematográfica.

Tom de UI:

- curto;
- preciso;
- confiante;
- sem piadas em fluxos críticos;
- com microcopy mais expressiva em estados vazios, onboarding e momentos de conclusão.

Exemplos:

- "Sincronizado"
- "Pronto para revisar"
- "Falha no envio"
- "Nada na fila"
- "Abrir painel"
- "Exportar pacote"

## Paleta

### Bases

- **Ink Night**: fundo escuro principal, quase preto com viés azul.
- **Carbon Rail**: superfície escura elevada.
- **Paper Warm**: fundo claro com calor editorial.
- **Porcelain**: superfície clara limpa.
- **Steel Line**: bordas, divisores e elementos inativos.

### Acentos

- **Neon Cyan**: foco, links, ação primária em tema escuro.
- **Signal Magenta**: seleção, destaque expressivo, gráficos.
- **Vermilion**: erro, alerta forte, ação destrutiva.
- **Amber Lamp**: aviso, atenção, estados pendentes.
- **Mint Glass**: sucesso, estados confirmados, tags positivas.
- **Indigo Dusk**: profundidade, navegação, estados secundários.

### Proporção recomendada

- 70% neutros e superfícies;
- 20% texto, bordas e estrutura;
- 10% acentos.

Essa proporção mantém a estética presente sem transformar apps de trabalho em pôsteres.

## Tipografia

Famílias recomendadas:

- **Interface**: `Noto Sans`, `Noto Sans JP`, `Inter`, `system-ui`.
- **Display técnica**: `IBM Plex Sans`, `Sora` ou `Space Grotesk`.
- **Mono**: `IBM Plex Mono`, `Roboto Mono`, `ui-monospace`.

Regras:

- corpo entre 14px e 16px;
- labels entre 11px e 13px;
- headings internos contidos, sem hero-scale dentro de painéis;
- letter spacing normal por padrão;
- uppercase apenas em labels curtos, chips e metadados.

## Forma

### Radius

- `2px`: controles técnicos, chips, badges.
- `4px`: botões, inputs, selects.
- `8px`: cards e containers repetidos.

Evite radius maior que 8px como padrão. Kairo 88 deve parecer recortado, montado e industrial.

### Borda

Bordas são parte da identidade. Use linhas finas para estruturar informação e linhas fortes apenas em foco, seleção ou warning.

### Sombra

Sombras devem ser discretas. Em tema escuro, prefira brilho e borda iluminada. Em tema claro, use sombras curtas e secas, como impressão sobre papel.

## Layout

Base:

- escala de espaçamento de 4px;
- grid de 8px para composição;
- containers com largura máxima por tipo de produto;
- sidebars e toolbars com dimensões estáveis;
- dashboards densos, mas com respiro entre grupos.

Receitas:

- ferramentas operacionais: sidebar fixa, topo compacto, conteúdo com tabelas ou painéis;
- apps editoriais: coluna principal forte, metadados laterais e separadores visíveis;
- jogos e experiências visuais: cena principal full-bleed, HUD técnico em camadas;
- sites de produto: primeiro viewport com imagem real ou cena visual forte, sem depender só de gradiente.

## Componentes

### Botões

Botões devem parecer controles de painel:

- altura base de 36px;
- ícones à esquerda quando a ação for operacional;
- foco visível;
- variante primária luminosa;
- variante secundária com borda;
- variante ghost apenas em toolbars ou navegação compacta.

### Inputs

Inputs devem parecer campos de terminal limpo:

- fundo sólido;
- borda sempre visível;
- label fora do campo;
- mensagens de erro objetivas;
- foco com borda cyan ou amber dependendo do contexto.

### Cards

Cards são para itens repetidos, modais e ferramentas realmente contidas. Seções de página não devem virar cards flutuantes.

### Navegação

Navegação precisa de estado ativo explícito: trilho lateral, underline técnico, barra iluminada ou preenchimento controlado.

### Tabelas

Tabelas são cidadãs de primeira classe:

- densidade ajustável;
- cabeçalho sticky quando útil;
- zebra sutil opcional;
- status com cor + texto;
- ações por linha com ícones.

### Feedback

Toasts, alerts e banners usam a mesma lógica de status:

- erro: vermilion;
- aviso: amber;
- sucesso: mint;
- informação: cyan;
- neutro: steel.

### Ícones

Ícones são sinais de painel, não ilustrações. Use traço simples, `currentColor`, `viewBox` de 24px e nomes por intenção. A biblioteca deve aceitar Lucide ou outro pacote equivalente nos adapters, mas preservar uma camada de nomes Kairo para evitar acoplamento de produto.

Regras:

- botões operacionais devem combinar ícone e texto quando a ação não for universal;
- toolbars podem usar ícone sozinho com tooltip;
- status precisa de ícone + texto ou ícone + label;
- ícones decorativos devem ser raros;
- ações críticas nunca devem depender só do ícone.

## Movimento

Movimento deve lembrar resposta eletrônica:

- transições entre 120ms e 220ms;
- easing firme;
- estados de loading com varredura horizontal ou pulso curto;
- ícones podem girar, pulsar ou acender quando comunicam progresso ou vida;
- boot sequence apenas em experiências especiais, nunca em fluxo recorrente;
- sem animação permanente em telas de trabalho.

## Textura

Texturas são opcionais e controladas:

- scanline de 1px com opacidade muito baixa;
- ruído fino em superfícies hero ou capas;
- halftone pontual para ilustrações e empty states;
- nunca reduzir legibilidade do texto.

## Temas

### Midnight

Tema principal. Fundo noturno, acentos neon, superfícies em carbon e bordas frias.

Uso ideal:

- dashboards;
- ferramentas criativas;
- devtools;
- jogos;
- apps com uso noturno.

### Daylight

Tema claro editorial. Papel quente, linhas de tinta, acentos mais contidos.

Uso ideal:

- docs;
- SaaS operacional;
- formulários longos;
- ferramentas de leitura.

### Arcade

Tema expressivo. Mais contraste, mais acento e brilho.

Uso ideal:

- demos;
- marketing interativo;
- jogos;
- estados especiais.

### Paper

Tema minimalista. Quase sem neon, mais próximo de manual técnico.

Uso ideal:

- documentação;
- administração;
- ambientes corporativos.

## Acessibilidade

Regras obrigatórias:

- contraste mínimo AA em texto comum;
- foco sempre visível;
- estado nunca comunicado só por cor;
- alvos interativos de pelo menos 36px em desktop e 44px em toque;
- suporte a redução de movimento;
- textos não devem depender de letter spacing negativo ou escala fluida por viewport.

## Assinatura visual

Um app usando Kairo 88 deve ser reconhecível por:

- acentos luminosos sobre base controlada;
- bordas presentes;
- radius baixo;
- tipografia técnica e legível;
- estados ativos com energia de display;
- composição em grade;
- detalhes retrô usados com parcimônia.

Se a interface parece um pôster, passou do ponto. Se parece só Bootstrap escuro, ainda falta alma.
