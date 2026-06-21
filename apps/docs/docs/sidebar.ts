import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "installation",
    "architecture",
    "roadmap",

    {
      type: "category",
      label: "Agent",
      items: ["agent/installation", "agent/monitoring", "agent/docker"],
    },

    {
      type: "category",
      label: "Cloud",
      items: ["cloud/authentication", "cloud/pairing"],
    },

    {
      type: "category",
      label: "Mobile",
      items: ["mobile/flutter"],
    },
    {
      type: "category",
      label: "Cloud",
      items: [
        "cloud/overview",
        "cloud/authentication",
        "cloud/pairing",
        "cloud/device-registry",
        "cloud/offline-detection",
        "cloud/heartbeat",
      ],
    },
  ],
};

export default sidebars;
