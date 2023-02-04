// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'meta-erlang',
  tagline: 'meta-erlang documentation',
  url: 'https://meta-erlang.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meta-erlang', // Usually your GitHub org/user name.
  projectName: 'meta-erlang.github.io.git ', // Usually your repo name.
  deploymentBranch: 'deployment',

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
        gtag: {
	  trackingID: 'G-2N5Z9W349S',
	},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/meta-erlang/meta-erlang.github.io/tree/master/',
        },
        blog: {
          blogTitle: 'meta-erlang news',
          blogDescription: 'News from meta-erlang project',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/meta-erlang/meta-erlang.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'meta-erlang',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/meta-erlang/meta-erlang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Erlang Forums',
                href: 'https://erlangforums.com/',
              },
              {
                label: 'Elixir Forum',
                href: 'https://elixirforum.com/',
              },
              {
                label: 'EEF Embedded Working Group',
                href: 'https://erlef.org/wg/embedded',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/meta-erlang/meta-erlang',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} meta-erlang`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{name: 'keywords', content: 'erlang, elixir, yocto'}],
    }),
};

module.exports = config;
