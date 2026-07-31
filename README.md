# Fblog 部署指南（GitHub Pages + Docusaurus）

本文档说明如何把基于 **Docusaurus 3.10.2** 重构后的 `Fblog` 个人博客部署到 GitHub Pages，并使用自定义域名 `blog.guyzeus.top`。

---

## 一、项目结构概览

```
Fblog/
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署工作流
├── blog/                          # 博客文章（Markdown）
├── src/                           # 首页与自定义组件、主题 CSS
├── static/                        # 静态资源（含 CNAME）
├── docusaurus.config.js           # 站点配置（url / baseUrl / 导航等）
├── sidebars.js
├── package.json
├── .gitignore
└── DEPLOY.md                      # 本文档
```


---

## 二、部署前置条件

- 已安装 Node.js 18+（工作流使用 Node 20）。
- 已拥有 GitHub 仓库 `https://github.com/名称/Fblog.git`（分支 `main`）。
- 已配置自定义域名 `域名`（或准备改用 GitHub 默认域名）。

---

## 三、本地提交（最关键的一步）


> 而 Docusaurus 源码（`blog/`、`src/`、`docusaurus.config.js` 等）和部署工作流是**未跟踪**状态。
> 必须先提交，否则 GitHub 上干净的 checkout 缺少 `package.json` / `docusaurus.config.js`，
> 工作流里的 `npm ci` / `npm run build` 会直接失败。

在 `Fblog/` 根目录执行：

```bash
# 暂存：旧文件删除 + 新 Docusaurus 源码 / 配置
# （.gitignore 已自动排除 node_modules、build、.docusaurus、.workbuddy）
git add -A

# 提交
git commit -m "重构为 Docusaurus 并接入 GitHub Pages 自动部署"

# 推送到 main，触发自动部署
git push origin main
```

---

## 四、GitHub 仓库设置

1. 打开仓库 **Settings → Pages**。
2. **Source（构建与部署来源）** 选择 **GitHub Actions**（不要选 “Deploy from a branch”）。
3. **Custom domain** 填写 `blog.guyzeus.top`：
   - 项目已在 `static/CNAME` 写入该域名，GitHub 会自动识别并在每次部署后保留。
   - 首次填写后点击 **Save**，GitHub 会发起域名所有权验证（需在 DNS 处加一条记录，见下一步）。

---

## 五、域名 DNS 配置

在域名服务商（如 Cloudflare、阿里云、腾讯云）处，为 `blog.guyzeus.top` 添加以下任一方式：

**方式 A：A 记录（推荐）**
```

```

**方式 B：CNAME 记录**
```

```

> 若不使用自定义域名，可跳过本节，改用 GitHub 默认地址（见第七节）。

---

## 六、等待部署完成

1. 推送后进入仓库 **Actions** 标签页，查看 `Deploy to GitHub Pages` 工作流。
2. 包含两个 Job：`build`（构建 Docusaurus）→ `deploy`（发布到 Pages），均变绿即通过。
3. 浏览器访问 **域名** 查看站点。

以后只要向 `main` 分支推送改动（新文章、配置调整等），就会**自动重新构建并部署**，无需手动操作。

---

## 七、自定义域名 vs GitHub 默认域名

当前 `docusaurus.config.js` 已按自定义域名配置：

```js
url: 'https://域名',
baseUrl: '/',
```

| 场景 | url | baseUrl | 附加操作 |
| --- | --- | --- | --- |
| 自定义域名（当前） | `域名` | `/` | 保留 `static/CNAME` |
| GitHub 默认域名（项目仓库） | `https://名称.github.io` | `/Fblog/` | 删除 `static/CNAME` |

> 注意：`baseUrl` 必须与访问路径一致。用项目仓库路径时若仍写 `/`，站内资源（CSS/JS/图片）会出现 404。

---

## 八、本地开发与预览

```bash
npm install        # 安装依赖（首次或依赖变更后）
npm start          # 本地开发预览，带热更新，默认 http://localhost:3000
npm run build      # 生成静态文件到 build/
npm run serve      # 预览生产构建（build/）
```

---

## 九、常见问题

- **工作流失败：`npm ci` 报错 / 找不到 package.json**
  说明仓库没有提交 Docusaurus 源码（仍在跟踪旧静态站）。回到第三节重新 `git add -A` + commit + push。

- **部署后样式/图片 404**
  通常是 `baseUrl` 与访问路径不匹配，检查第七节配置。

- **自定义域名访问提示“不安全 / DNS 未生效”**
  DNS 记录未生效（通常几分钟到几小时），或 GitHub Pages 自定义域名验证未通过，确认第五节记录正确且已保存 Custom domain。

- **想彻底不用 GitHub Actions，改用分支部署**
  不推荐。Docusaurus 官方已弃用 `npm run deploy`（基于 `gh-pages` 分支）方式，GitHub Actions 更稳定且无需本地 token。

---

## 十、常用命令速查

| 命令 | 作用 |
| --- | --- |
| `git add -A && git commit -m "..." && git push origin main` | 提交并触发部署 |
| `npm start` | 本地开发预览 |
| `npm run build` | 生产构建 |
| `npm run serve` | 预览构建产物 |

---

_最后更新：2026-07-31 · 适用于 Docusaurus 3.10.2 + GitHub Pages（GitHub Actions 部署）_