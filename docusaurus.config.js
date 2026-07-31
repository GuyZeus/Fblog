const {themes} = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GuyZeus's Blog",
  tagline: '分享 Java、Spring Boot、前端、Docker 等技术文章',
  favicon: 'img/favicon.svg',

  // 部署信息：使用自定义域名 blog.guyzeus.top，故 baseUrl 为根路径。
  // 若改用 GitHub Pages 项目仓库（用户名.github.io/Fblog），请将 baseUrl 改为 '/Fblog/'。
  url: 'https://blog.guyzeus.top',
  baseUrl: '/',
  organizationName: 'GuyZeus',
  projectName: 'Fblog',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
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
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      image: 'img/favicon.svg',
      navbar: {
        title: "GuyZeus's Blog",
        logo: {
          alt: 'GuyZeus',
          src: 'img/favicon.svg',
        },
        items: [
          {to: '/', label: '关于', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/GuyZeus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '博客',
            items: [{label: '全部文章', to: '/blog'}],
          },
          {
            title: '我的项目',
            items: [
              {label: 'A-Nav 导航站', href: 'https://nav.guyzeus.top/'},
              {label: 'Cloud-Mail 私有邮箱', href: 'https://mail.guyzeus.top'},
              {label: 'GitHub', href: 'https://github.com/GuyZeus'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GuyZeus. 保留所有权利.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
