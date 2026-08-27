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
        // 启用 docs 插件：本地搜索（@easyops-cn/docusaurus-search-local）的
        // SearchBar 依赖 docs 插件提供的版本上下文，关闭时会导致 /search 渲染失败。
        // 此处仅放一个占位文档，不加入导航栏，仅用于支撑站内搜索。
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          // 规范化 RSS / Atom / JSON feed 标题与描述
          feedOptions: {
            type: 'all',
            title: "GuyZeus's Blog",
            description: '分享 Java、Spring Boot、前端、Docker 等技术文章',
            copyright: `Copyright © ${new Date().getFullYear()} GuyZeus`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // 站点地图：classic 预设内置，这里细化收录策略
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  // 本地全文搜索：纯静态、无外部服务，适配 GitHub Pages
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').Options} */
      ({
        indexDocs: false,
        indexBlog: true,
        indexPages: false,
        searchBarPosition: 'navbar',
        hashed: true,
        language: 'zh',
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
      // 社交分享卡片图（OG / Twitter），替换原先的 favicon.svg
      image: 'img/og-image.png',
      // 全站默认 meta 标签（SEO / Open Graph / Twitter Card）
      metadata: [
        {
          name: 'description',
          content:
            'GuyZeus 的技术博客，分享 Java、Spring Boot、前端、Docker、服务器运维等实践经验与踩坑记录。',
        },
        {
          name: 'keywords',
          content: 'Java, Spring Boot, 前端, Docker, 运维, 博客, 技术分享',
        },
        {name: 'author', content: 'GuyZeus'},
        {name: 'theme-color', content: '#4263eb'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: "GuyZeus's Blog"},
        {property: 'og:locale', content: 'zh_CN'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
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
            items: [
              {label: '全部文章', to: '/blog'},
            ],
          },
          {
            title: '我的项目',
            items: [
              {label: 'A-Nav 导航站', href: 'https://nav.guyzeus.top/'},
              {label: 'Cloud-Mail 私有邮箱', href: 'https://mail.timxy.com'},
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
