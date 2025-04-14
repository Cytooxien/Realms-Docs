import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    mainSidebar: [
        {
            type: "category",
            label: "Getting Started",
            collapsed: false,
            link: {
                type: "generated-index",
                slug: "getting-started",
            },
            items: [
                "getting-started/create-your-first-realm",
                "getting-started/settings",
                "getting-started/group-management",
                "getting-started/player-management",
                "getting-started/plugin-management",
                "getting-started/world-management",
                "getting-started/realm-lobby",
                "getting-started/boosts"
            ]
        },
        {
            type: "category",
            label: "Web Interface",
            collapsed: true,
            link: {
                type: "generated-index",
                slug: "web-interface"
            },
            items: [
                "web-interface/console",
                "web-interface/file-manager",
                "web-interface/advanced-configuration",
                "web-interface/other-tabs",
                "web-interface/profile",
                "web-interface/ptero-api"
            ]
        }
    ],
};

export default sidebars;
