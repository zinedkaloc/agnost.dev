// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const consts = require("./src/config/consts")
const customFields = require("./src/config/customFields")
const ssrTemplate = require("./src/internals/ssr.template")
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: customFields.title,
  tagline: customFields.tagLine,
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: customFields.productionUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  customFields: customFields,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: customFields.organizationName, // Usually your GitHub org/user name.
  projectName: customFields.projectName, // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("./plugins/fetch-latest-release/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    /* require.resolve("./plugins/webpack-ts/index"), */
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogSidebarTitle: "All posts",
          blogListComponent: "@theme/BlogListPage",
          blogSidebarCount: 0,
          blogDescription:
            "Your go-to resource for the latest updates on Backend as a Service and Serverless technologies. We cover everything from serverless, to the no-code and how-tos.",
          postsPerPage: 12,
          feedOptions: {
            type: "all",
            copyright: customFields.copyright,
          },
          routeBasePath: "/blog", // Serve the blog at the site's root
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.7,
          ignorePatterns: ["/blog/tags/**"],
          filename: "sitemap.xml",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",

      navbar: {
        logo: {
          alt: "Agnost - Open Source Kubernetes Development Platform",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            to: "https://github.com/orgs/cloud-agnost/discussions",
            label: "⚡️ Feature Requests",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/cloud-agnost",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Website",
            items: [
              {
                label: "Home",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/agnostdev",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/agnostdev",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/AgnostDev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/cloud-agnost",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
