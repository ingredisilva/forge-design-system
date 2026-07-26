import { badge, panel, renderStory, storyHeader } from "../shared/story-utils";

export default {
  title: "Kairo 88/Organisms/Table",
  tags: ["autodocs"]
};

export const EventQueue = {
  render: () =>
    renderStory(`
      ${storyHeader("Organism", "Table", "Tables are first-class citizens for dashboards and operational tools.")}

      <div style="margin-top: var(--k88-space-8)">
        ${panel(
          "Event queue",
          "QUEUE / 06",
          `
            <div style="overflow-x: auto">
              <table class="k88-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Channel</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Export package</td>
                    <td>Design</td>
                    <td>${badge("success", "Ready", "check")}</td>
                    <td>00:12</td>
                  </tr>
                  <tr>
                    <td>Validate contrast</td>
                    <td>Tokens</td>
                    <td>${badge("warning", "Warning", "alert")}</td>
                    <td>01:44</td>
                  </tr>
                  <tr>
                    <td>Review states</td>
                    <td>Components</td>
                    <td>${badge("danger", "Critical", "alert")}</td>
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
