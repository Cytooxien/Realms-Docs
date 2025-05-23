import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
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
        },
        {
            type: "category",
            label: "How to get help",
            collapsed: true,
            link: {
                type: "generated-index",
                slug: "how-to-get-help"
            },
            items: [
                "how-to-get-help/overview",
                "how-to-get-help/reading-logs",
                "how-to-get-help/troubleshooting",
                "how-to-get-help/properly-ask-questions"
            ]
        },
        {
            type: "category",
            label: "Administration",
            collapsed: true,
            link: {
                type: "generated-index",
                slug: "administration"
            },
            items: [
                "administration/load-backup",
                "administration/create-own-backup",
                "administration/upload-custom-world",
                "administration/upload-texturepack",
                "administration/clean-up-realm"
            ]
        },
        {
            type: "doc",
            id: "contributing",
            label: "Contributing"
        }
    ],
};

export default sidebars;
