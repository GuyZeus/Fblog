# Fblog — GuyZeus 的个人技术博客

一个纯静态的个人技术博客，使用原生 HTML + CSS + JavaScript 构建，聚焦 Java 后端开发、DevOps 运维及前端技术分享。

## 项目结构

```
Fblog/
├── index.html                      # 首页（关于我 + 文章列表 + 侧边栏）
├── css/
│   └── style.css                   # 全局样式（CSS 变量主题系统）
├── js/
│   └── main.js                     # 交互逻辑（主题切换 / 侧边栏 / 滚动）
├── springboot-student-system.html  # Spring Boot 学生管理系统
├── docker-1panel-deploy.html       # Docker + 1Panel 部署实战
├── openresty-nginx-config.html     # OpenResty 入门与配置
├── java-collections-deep-dive.html # Java 集合框架深度解析
├── html-css-modern-layout.html     # 现代 CSS 布局实战
├── springboot-restful-api.html     # Spring Boot RESTful API 设计
├── git-team-collaboration.html     # Git 团队协作工作流
└── mysql-index-optimization.html   # MySQL 索引优化实战
```

## 功能特性

- **明暗主题切换** — 支持浅色/深色模式，自动跟随系统偏好并持久化到 localStorage
- **响应式布局** — 移动端侧边栏抽屉式菜单，适配不同屏幕尺寸
- **CSS 变量主题系统** — 通过 `:root` 和 `[data-theme="dark"]` 统一管理颜色、阴影、圆角等设计令牌
- **侧边栏** — 个人简���、技能标签、教育背景、社交链接一体化展示
- **纯静态，零依赖** — 无框架、无构建工具，直接打开即可浏览

## 快速开始

### 本地预览

直接在浏览器中打开 `index.html` 即可。

或者用任意静态服务器：

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

然后访问 `http://localhost:8080`。

### 部署

项目为纯静态文件，可部署到任意静态托管平台：

- **Nginx** — 将文件放入 `/usr/share/nginx/html/` 并配置域名
- **GitHub Pages** — 推送至仓库，开启 Pages 服务
- **Docker** — 使用 `nginx:alpine` 镜像挂载静态文件
- **1Panel** — 在面板中创建静态站点，上传文件即可

## 技术栈 & 主题

博客内容覆盖以下技术栈：

| 分类 | 涉及技术 |
|------|----------|
| 前端 | HTML5 · CSS3 · JavaScript|
| 工具 | Git · 团队协作 · 版本控制 |

## 许可证

MIT License.

## 关于作者

GuyZeus，软件技术专业在读学生，技术博主。

- Blog: [blog.guyzeus.top](https://blog.guyzeus.top)
- GitHub: [@GuyZeus](https://github.com/GuyZeus)
- Email: guyzeus@timxy.com
