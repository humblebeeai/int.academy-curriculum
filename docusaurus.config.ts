import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HumblebeeAI Academy',
  tagline: 'Transforming students into technical junior engineers',
  favicon: 'https://humblebee.ai/images/misc/logo.svg',

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
          path: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/humblebeeai/int.academy-curriculum/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/humblebeeai/int.academy-curriculum/edit/main/website/blog/',
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
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
          className: 'navbar-curriculum-link',
        },
        {
          to: '/docs/school/intro',
          label: 'School',
          position: 'left',
          className: 'navbar-school-link',
        },
        {
          to: '/docs/softlanding/intro',
          label: 'Soft Landing',
          position: 'left',
          className: 'navbar-softlanding-link',
        },
        {
          href: 'https://humblebee.ai',
          label: 'HumblebeeAI',
          position: 'right',
        },
        {
          href: 'https://github.com/humblebeeai/int.academy-curriculum',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Programs',
          items: [
            {
              label: 'Curriculum Overview',
              to: '/docs/curriculum-outline',
            },
            {
              label: 'School Program',
              to: '/docs/school/intro',
            },
            {
              label: 'Soft Landing Program',
              to: '/docs/softlanding/intro',
            },
          ],
        },
        {
          title: 'Specializations',
          items: [
            {
              label: 'Computer Vision',
              to: '/docs/softlanding/tracks/computer-vision',
            },
            {
              label: 'Data Science',
              to: '/docs/softlanding/tracks/data-science',
            },
            {
              label: 'Natural Language Processing',
              to: '/docs/softlanding/tracks/nlp',
            },
            {
              label: 'Software Engineering',
              to: '/docs/softlanding/tracks/software-engineering',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Learning Resources',
              to: '/docs/resources',
            },
            {
              label: 'Mentorship',
              to: '/docs/mentorship',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'HumblebeeAI',
              href: 'https://humblebee.ai',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/humblebeeai/int.academy-curriculum',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} HumblebeeAI. Open source curriculum for aspiring engineers.<br/>Powered by HumblebeeAI Academy`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
