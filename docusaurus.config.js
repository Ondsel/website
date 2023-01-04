// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ondsel',
  tagline: 'Put your designs to work...everywhere',
  url: 'https://ondsel.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ondsel', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Ondsel Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: '/about',
            label: 'About Us',
          },
          {
            href: 'https://github.com/ondsel',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'Handbook',
              //   to: '/docs/handbook',
              // },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ondsel',
              },
              {
                label: 'Email',
                href: 'mailto:brad@ondsel.com',
              },
            ],
          },
          {
            title: 'FreeCAD',
            items: [
              {
                label: 'Website',
                href: 'https://freecad.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FreeCAD',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ondsel, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
