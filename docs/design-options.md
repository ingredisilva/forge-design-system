# Opcoes de Design

Kairo 88 agora tem duas direcoes visuais oficiais. Ambas usam os mesmos atomos, moleculas, organismos, tokens de escala, icones e motion. A diferenca fica no preset de tema e nas primitivas visuais aplicadas ao produto.

## Kairo 88

Preset principal do design system.

Use quando o app precisar de uma estetica Japanese 80s mais expressiva: city pop controlado, neon funcional, paineis de display, sinalizacao urbana e energia de produto criativo.

Temas atuais:

- `kairo-midnight`
- `kairo-daylight`
- `kairo-arcade`
- `kairo-paper`

## Systems 84

Segunda opcao de design, trazida do portfolio ingrd.

Use quando o app precisar parecer mais tecnico, editorial e de laboratorio: terminal limpo, blueprint, verde industrial, amber de alerta, paineis rigidos e microcopy mono.

Tema:

- `systems-84`

## Uso

```html
<html data-theme="systems-84">
```

```css
@import "@ingredisilva/kairo-88/styles";
```

## Primitivas visuais

- `.k88-system-label`: label mono com colchetes, herdada da linguagem `SYSTEMS_84`.
- `.k88-technical-grid`: grid tecnico de fundo para paineis, dashboards e headers.
- `.k88-blueprint-grid`: grid mais diagramatico para mapas de sistema, previews e areas tecnicas.
- `.k88-scanline`: overlay sutil de leitura/terminal, com suporte a `prefers-reduced-motion`.

## Regras

- Use `systems-84` como preset inteiro, nao como paleta solta misturada com Kairo 88.
- Mantenha radius baixo e borda visivel.
- Prefira texto curto, mono e uppercase apenas em labels e metadados.
- Use motion de scan, sweep, pulse ou spin somente quando comunicar status, leitura ou progresso.
- Nao use elementos japoneses como ornamento vazio; labels devem comunicar contexto real.
