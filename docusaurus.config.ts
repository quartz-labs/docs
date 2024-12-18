import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Quartz',
  tagline: "Spend your crypto's value, without selling",
  favicon: 'img/favicon.ico',
  url: 'https://docs.quartzpay.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quartz-labs', // Usually your GitHub org/user name.
  projectName: 'quartz-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://cdn.prod.website-files.com/67504dd7fde047775f88c355/67504dd7fde047775f88c404_open-graph.jpg',
    navbar: {
      title: 'Quartz',
      logo: {
        alt: 'Quartz Logo',
        src: 'img/logo-icon-light.svg',
        srcDark: 'img/logo-icon-dark.svg',
        href: "https://quartzpay.io/"
      },
      items: [
        {
          href: 'https://github.com/quartz-labs/quartz-app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false
      }
    },
    // footer: {
    //   style: 'dark',
    //   copyright: `Copyright © ${new Date().getFullYear()} Quartz. Docs built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
