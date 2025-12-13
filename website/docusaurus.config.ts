import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HumblebeeAI Academy',
  tagline: 'Transforming students into technical junior engineers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://academy.humblebee.ai',
  baseUrl: '/',

  organizationName: 'HumblebeeAI',
  projectName: 'academy-curriculum',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/HumblebeeAI/academy-curriculum/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/HumblebeeAI/academy-curriculum/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'HumblebeeAI Academy',
      logo: {
        alt: 'HumblebeeAI Logo',
        src: 'img/hbai-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://humblebee.ai',
          label: 'HumblebeeAI',
          position: 'right',
        },
        {
          href: 'https://github.com/HumblebeeAI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {
              label: 'School Program',
              to: '/docs/school/intro',
            },
            {
              label: 'Softlanding Program',
              to: '/docs/softlanding/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'HumblebeeAI',
              href: 'https://humblebee.ai',
            },
            {
              label: 'Academy',
              href: 'https://academy.humblebee.ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/HumblebeeAI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HumblebeeAI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
