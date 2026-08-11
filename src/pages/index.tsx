import Link from '@docusaurus/Link';
import styles from './index.module.css';

/* ===== 首页数据（保留原 index.html / 侧边栏全部内容） ===== */

const skills = [
  {label: '编程语言', tags: ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL']},
  {label: '后端', tags: ['Spring Boot', 'MyBatis', 'MySQL', 'Redis']},
  {label: '前端', tags: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Ajax']},
  {
    label: '运维 & 工具',
    tags: ['Docker', '1Panel', 'OpenResty', 'Nginx', 'Git', 'Linux'],
  },
];

const doing = [
  '✍️ 运营个人博客 blog.guyzeus.top，基于 GitHub Pages 部署',
  '📬 运营 Cloud-Mail 私有邮箱系统 mail.timxy.com，依托 Cloudflare 全生态实现零服务器成本搭建专属域名邮箱',
  '🗂️ 运营 A-Nav 导航站 nav.guyzeus.top，纯 HTML 手写，无任何前端框架，依托 GitHub Pages 免费托管',
  '🔧 折腾服务器运维，1Panel / OpenResty 日常',
];

const education = [
  {
    school: '苏州百年职业学院',
    major: '软件技术专业',
    date: '2025 - 至今',
    url: 'https://www.scc.edu.cn/',
  },
  {
    school: '南京信息工程大学',
    major: '软件工程专业',
    date: '2028 - 至今',
    url: 'http://www.nuist.edu.cn/',
  },
];

const contact = [
  {label: '🌐 博客：', value: 'blog.guyzeus.top', href: 'https://blog.guyzeus.top'},
  {label: '💻 GitHub：', value: '@GuyZeus', href: 'https://github.com/GuyZeus'},
  {
    label: '📬 邮箱：',
    value: 'GuyZeus@mail.timxy.com',
    href: 'mailto:GuyZeus@mail.timxy.com',
  },
];

/* 首页精选文章：与 blog/ 下 4 篇博文保持一致（标题/标签/描述取自各文 front matter）。
   注意：Docusaurus 3.10.2 的博客数据不进入 globalData，自定义首页无可靠 hook 自动读取，
   故此处手动维护精选列表，新增文章时请同步更新。 */
const posts = [
  {
    date: '2026年7月31日',
    title: 'Github 部署博客上线',
    excerpt:
      '全程靠 HTML + CSS + JavaScript 手写打磨，依托 GitHub Pages 免费托管，从零实现属于自己的专属个人博客。',
    tags: ['博客', 'HTML', 'CSS', 'JavaScript'],
    to: '/blog/github-pages-blog-online',
  },
  {
    date: '2026年7月31日',
    title: '自制A-Nav导航站，GitHub Pages免费部署上线',
    excerpt:
      '分享我独立开发的个人导航项目 A-Nav，全程纯 HTML 手写，无任何前端框架，依托 GitHub Pages 免费托管。',
    tags: ['HTML', '导航站', 'GitHub Pages'],
    to: '/blog/a-nav',
  },
  {
    date: '2026年7月31日',
    title: 'Cloud-Mail：基于Cloudflare Workers搭建私有域名邮箱',
    excerpt:
      '最近完成了 Cloud-Mail 私有邮箱项目的部署调试，依托 Cloudflare 全生态实现零服务器成本搭建专属域名邮箱。',
    tags: ['云邮件', '邮箱', 'Cloudflare', '私有邮箱'],
    to: '/blog/cloud-mail',
  },
  {
    date: '2026年7月31日',
    title: 'Fblog 部署指南（GitHub Pages + Docusaurus）',
    excerpt:
      '本文档说明如何把基于 Docusaurus 3.10.2 重构后的 Fblog 个人博客部署到 GitHub Pages，并使用自定义域名 blog.guyzeus.top。',
    tags: ['GitHub Pages', 'Docusaurus', 'Github', 'blog'],
    to: '/blog/Github-doc',
  },
];

/* ===== 结构化数据（JSON-LD），提升 SEO 收录与富媒体展示 ===== */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://blog.guyzeus.top/#website',
      url: 'https://blog.guyzeus.top',
      name: "GuyZeus's Blog",
      description:
        '分享 Java、Spring Boot、前端、Docker、服务器运维等实践经验与踩坑记录。',
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'Person',
      '@id': 'https://blog.guyzeus.top/#person',
      name: 'GuyZeus',
      url: 'https://blog.guyzeus.top',
      email: 'guyzeus@mail.timxy.com',
      sameAs: ['https://github.com/GuyZeus'],
    },
  ],
};

/* ===== 社交图标 ===== */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ===== 页面 ===== */

export default function Home(): JSX.Element {
  return (
    <main>
      {/* 结构化数据：搜索引擎 / 富媒体卡片使用 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />

      {/* Hero / 个人简介（原侧边栏 + 关于我头部） */}
      <section className={styles.hero}>
        <div className={styles.avatar}>GZ</div>
        <h1 className={styles.name}>GuyZeus</h1>
        <div className={styles.location}>
          <PinIcon />
          保定
        </div>
        <p className={styles.bio}>
          一个软件技术专业的在读学生，也是个爱折腾的技术博主。喜欢用代码解决问题，也喜欢把踩过的坑写出来分享给别人。
        </p>
        <div className={styles.socials}>
          <a
            className={styles.socialBtn}
            href="https://github.com/GuyZeus"
            target="_blank"
            rel="noopener"
            title="GitHub"
            aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a
            className={styles.socialBtn}
            href="https://blog.guyzeus.top"
            target="_blank"
            rel="noopener"
            title="博客"
            aria-label="博客">
            <BlogIcon />
          </a>
          <a
            className={styles.socialBtn}
            href="mailto:guyzeus@mail.timxy.com"
            title="Email"
            aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </section>

      {/* 关于我 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>👋 关于我</h2>
        <p className={styles.paragraph}>
          一个软件技术专业的在读学生，也是个爱折腾的技术博主。喜欢用代码解决问题，也喜欢把踩过的坑写出来分享给别人。
        </p>

        <h2 className={styles.sectionTitle}>🛠️ 技术栈</h2>
        {skills.map((group) => (
          <div className={styles.skillGroup} key={group.label}>
            <p className={styles.skillLabel}>{group.label}</p>
            <div className={styles.skillTags}>
              {group.tags.map((tag) => (
                <span className={styles.skillTag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        <h2 className={styles.sectionTitle}>🚀 正在做</h2>
        <ul className={styles.doingList}>
          {doing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>🎓 教育背景</h2>
        <div className={styles.educationGrid}>
          {education.map((edu) => (
            <a
              className={styles.eduCard}
              href={edu.url}
              target="_blank"
              rel="noopener"
              key={edu.school}>
              <div className={styles.eduSchool}>{edu.school}</div>
              <div className={styles.eduMajor}>{edu.major}</div>
              <div className={styles.eduDate}>{edu.date}</div>
            </a>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>📮 联系我</h2>
        <div className={styles.contactGrid}>
          {contact.map((c) => (
            <a className={styles.contactCard} href={c.href} key={c.value}>
              {c.label}
              {c.href.startsWith('mailto:') ? (
                c.value
              ) : (
                <span style={{fontWeight: 400}}>{c.value}</span>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* 最新文章（精选，与 blog/ 内容保持一致） */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📝 最新文章</h2>
        <div className={styles.postGrid}>
          {posts.map((post) => (
            <Link className={styles.postCard} to={post.to} key={post.to}>
              <div className={styles.postDate}>{post.date}</div>
              <div className={styles.postTitle}>{post.title}</div>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postTags}>
                {post.tags.map((tag) => (
                  <span className={styles.postTag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
