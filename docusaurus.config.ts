import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Cytooxien-Realms Wiki',
    tagline: 'The official wiki for Cytooxien Realms',
    favicon: 'favicon.png',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    organizationName: 'Cytooxien',
    projectName: 'Realms-Docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localeConfigs: {
            en: {
                htmlLang: 'en-US',
                label: 'English'
            },
            de: {
                htmlLang: 'de',
                label: 'Deutsch'
            }
        }
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/Cytooxien/Realms-Docs/tree/main/',
                },
                theme: {
                    customCss: './src/css/global.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                disableInDev: false,
            },
        ],
    ],

    themeConfig: {
        image: 'Cy_T_14x.png',
        navbar: {
            title: 'Cytooxien-Realms Wiki',
            logo: {
                alt: 'Cytooxien Logo',
                src: 'XLogo_3D_14x.png',
            },
            items: [
                {
                    type: 'html',
                    position: 'right',
                    value: '<a class="navbar__item_discord" href="https://discord.gg/cytooxien"><img src="/discord-mark-white.svg" alt="Discord icon" class="navbar__item_discord_img"></a>'
                },
                {
                    href: 'https://github.com/Cytooxien/Realms-Docs',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/getting-started',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Cytooxien Discord',
                            href: 'https://discord.gg/cytooxien',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Cytooxien/Realms-Docs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Cytooxien. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
