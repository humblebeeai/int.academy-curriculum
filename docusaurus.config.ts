import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkEmoji from "./src/plugins/remark-emoji";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HumbleBeeAI Academy",
  tagline: "Community-Driven Open AI Curriculum",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://academy.humblebee.ai",
  baseUrl: "/",

  organizationName: "HumbleBeeAI",
  projectName: "academy-curriculum",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkEmoji],
          editUrl:
            "https://github.com/humblebeeai/int.academy-curriculum/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/humblebeeai/int.academy-curriculum/edit/main/website/blog/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**", "/page/**", "/search", "/404"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      {
        name: "description",
        content:
          "Free, open-source AI Engineering curriculum. Community-driven learning materials for production-ready skills in Deep Learning, MLOps, Computer Vision, and NLP.",
      },
      {
        name: "keywords",
        content:
          "open source AI curriculum, free AI education, deep learning path, MLOps, computer vision course, NLP training, data science roadmap, community-driven learning, HumbleBeeAI",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "HumbleBeeAI Academy",
      logo: {
        alt: "HumbleBeeAI Logo",
        src: "img/hbai-logo.png",
      },
      hideOnScroll: false,
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Curriculum",
          className: "navbar-curriculum-link",
        },
        {
          to: "/docs/engineering-fundamentals",
          label: "Engineering Fundamentals",
          position: "left",
          className: "navbar-engineering-fundamentals-link",
        },
        {
          to: "/docs/softlanding",
          label: "Soft Landing",
          position: "left",
          className: "navbar-softlanding-link",
        },
        {
          href: "https://academy.humblebee.ai",
          label: "Academy",
          position: "right",
        },
        {
          href: "https://github.com/humblebeeai/int.academy-curriculum",
          label: "GitHub",
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Programs",
          items: [
            {
              label: "Curriculum Overview",
              to: "/docs",
            },
            {
              label: "Interactive Roadmap",
              to: "/roadmap",
            },
            {
              label: "Engineering Fundamentals",
              to: "/docs/engineering-fundamentals",
            },
            {
              label: "Soft Landing Program",
              to: "/docs/softlanding",
            },
          ],
        },
        {
          title: "Specializations",
          items: [
            {
              label: "Computer Vision",
              to: "/docs/softlanding/specializations/computer-vision",
            },
            {
              label: "Data Science",
              to: "/docs/softlanding/specializations/data-science",
            },
            {
              label: "Natural Language Processing",
              to: "/docs/softlanding/specializations/nlp",
            },
            {
              label: "MLOps",
              to: "/docs/softlanding/specializations/software-engineering",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Learning Resources",
              to: "/docs/resources",
            },
            {
              label: "Mentorship",
              to: "/docs/mentorship",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "HumbleBeeAI",
              href: "https://humblebee.ai",
            },
            {
              label: "GitHub",
              href: "https://github.com/humblebeeai/int.academy-curriculum",
            },
          ],
        },
      ],
      copyright: `
        <div class="oer-license">
          <p>
            <strong>Open Educational Resource</strong><br/>
            Content licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. 
            Code is unlicensed.
          </p>
          <p>
            © ${new Date().getFullYear()} HumbleBeeAI Academy. Built with ❤️ by the community.
          </p>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
