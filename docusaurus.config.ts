import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HumbleBeeAI Academy",
  tagline: "Community-Driven Open-Source AI Curriculum",
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

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
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
          "Free, open-source AI Engineering curriculum. Community-driven learning materials for production-ready skills in Deep Learning, AI Software Engineering, Computer Vision, and NLP.",
      },
      {
        name: "keywords",
        content:
          "open source AI curriculum, free AI education, deep learning path, AI Software Engineering, computer vision course, NLP training, data science roadmap, community-driven learning, HumbleBeeAI",
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
              label: "AI Software Engineering",
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
            Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. 
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
