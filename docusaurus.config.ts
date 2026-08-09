import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import curriculumVersions from "./curriculum-versions.json";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HumbleBeeAI Academy",
  tagline: "Community-Driven Open-Source AI Curriculum",
  favicon: "img/favicon.ico",

  customFields: {
    future: {
      v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },
    chatLink: process.env.REACT_APP_CHAT_LINK,
  },

  url: "https://academy.humblebee.ai",
  baseUrl: "/",

  organizationName: "HumbleBeeAI",
  projectName: "academy-curriculum",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    // hooks: {
    //   onBrokenMarkdownLinks: "warn",
    // },
    // Note: The onBrokenMarkdownLinks hook is currently not working as expected, so we will rely on the onBrokenLinks config for now. We will revisit this once the issue is resolved.
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
          lastVersion: "current",
          versions: {
            current: {
              label: "Current",
            },
            ...Object.fromEntries(
              curriculumVersions.map(({ name, label }) => [
                name,
                {
                  label,
                  banner: "unmaintained" as const,
                  badge: true,
                },
              ]),
            ),
          },
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
      disableSwitch: true,
    },
    navbar: {
      title: "AI Engineering Roadmap",
      logo: {
        alt: "HumbleBeeAI Logo",
        src: "img/hbai-logo.png",
      },
      hideOnScroll: false,
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
          className: "curriculum-version-dropdown",
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "Curriculum version history",
            },
          ],
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
        {
          href: "https://t.me/airoadmapcommunity",
          label: "Community",
          position: "right",
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
              label: "Roadmap Overview",
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
              to: "/docs/softlanding/specializations/computer-vision/resources",
            },
            {
              label: "Data Science",
              to: "/docs/softlanding/specializations/data-science/resources",
            },
            {
              label: "Natural Language Processing",
              to: "/docs/softlanding/specializations/nlp/resources",
            },
            {
              label: "AI Software Engineering",
              to: "/docs/softlanding/specializations/software-engineering/resources",
            },
          ],
        },
        {
          title: "Additional Resources",
          items: [
            {
              label: "Curriculum Version History",
              to: "/versions",
            },
            {
              label: "Learning Resources",
              to: "/docs/resources",
            },
            {
              label: "Contributors Guide",
              to: "/docs/contributors-guide",
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
            {
              label: "Community (Telegram)",
              href: "https://t.me/airoadmapcommunity",
            },
          ],
        },
      ],
      copyright: `
        <div class="oer-license">
          <p>
            <strong>Open Educational Resource</strong><br/>
            Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. 
            Project materials are shared under the same license.
          </p>
          <p>
            © ${new Date().getFullYear()} HumbleBeeAI Academy. Built with ❤️ by the community.
          </p>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
