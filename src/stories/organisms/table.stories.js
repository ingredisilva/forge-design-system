import { badge, panel, renderStory, storyHeader } from "../shared/story-utils.js";

export default {
  title: "Kairo 88/Organismos/Tabela",
  tags: ["autodocs"]
};

export const FilaDeEventos = {
  render: () =>
    renderStory(`
      ${storyHeader("Organismo", "Tabela", "Tabelas são cidadãs de primeira classe para dashboards e ferramentas operacionais.")}

      <div style="margin-top: var(--k88-space-8)">
        ${panel(
          "Fila de eventos",
          "QUEUE / 06",
          `
            <div style="overflow-x: auto">
              <table class="k88-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Canal</th>
                    <th>Status</th>
                    <th>Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exportar pacote</td>
                    <td>Design</td>
                    <td>${badge("success", "Pronto", "check")}</td>
                    <td>00:12</td>
                  </tr>
                  <tr>
                    <td>Validar contraste</td>
                    <td>Tokens</td>
                    <td>${badge("warning", "Atenção", "alert")}</td>
                    <td>01:44</td>
                  </tr>
                  <tr>
                    <td>Revisar estados</td>
                    <td>Componentes</td>
                    <td>${badge("danger", "Crítico", "alert")}</td>
                    <td>03:20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          "tokens"
        )}
      </div>
    `)
};

