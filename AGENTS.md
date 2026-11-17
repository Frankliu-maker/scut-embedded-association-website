# AGENTS.md

本文件是给 AI 编程助手（DSH、Claude Code、Cursor、Codex 等）的项目说明。  
开始修改前，请先阅读 `README.md` 和 `CONTRIBUTING.md`，并遵守本文件中的边界。

## 项目概览

- 项目：华南理工大学嵌入式协会官网
- 技术栈：VitePress 1.6.4 + Vue 3 + Markdown
- Markdown 根目录：`docs/`
- 站点标题与导航：`docs/.vitepress/config.mjs`
- 主题入口：`docs/.vitepress/theme/index.js`
- 全局样式：`docs/.vitepress/theme/custom.css`
- 静态资源：`docs/public/`
- 构建产物：`docs/.vitepress/dist/`，不要提交
- 开发缓存：`docs/.vitepress/cache/`，不要提交

## 常用命令

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

本地开发地址：`http://localhost:5173/`

任何准备合并的改动，都必须先运行：

```bash
npm run docs:build
```

## 开始任务前

1. 先读任务，确认负责的页面、允许修改的文件和验收标准。
2. 运行 `git status`，确认工作区状态。
3. 如果存在与当前任务无关的未提交改动，先停止并询问人类。
4. 同步主分支并创建自己的分支：

```bash
git switch main
git pull --rebase
git switch -c feat/<任务范围>-<简短描述>
```

5. 只修改任务明确允许的文件。
6. 如果任务较复杂，先列出准备修改的文件和内容大纲，再开始编辑。

## 文件职责

| 内容 | 文件 |
| --- | --- |
| 协会首页 | `docs/index.md` |
| 学习路线 | `docs/learn.md` |
| 项目展示 | `docs/projects.md` |
| 活动公告 | `docs/events.md` |
| 加入联系 | `docs/contact.md` |
| 导航、站点标题、页脚 | `docs/.vitepress/config.mjs` |
| 主题入口 | `docs/.vitepress/theme/index.js` |
| 配色、首页与卡片样式 | `docs/.vitepress/theme/custom.css` |
| Logo、插画、图片 | `docs/public/` |

默认规则：

- 内容任务只改对应的 `.md` 文件。
- 不要为了让页面“更好看”而顺手修改 `config.mjs` 或 `custom.css`。
- 首页、导航、主题样式属于公共文件，同一时间只应由一个负责人修改。
- 不要重命名页面文件或路由，除非任务明确要求。

## 内容规则

- 使用简体中文，语气简洁、友好，适合学生阅读。
- 不确定的活动日期、联系方式、指导老师、合作单位等信息，不要编造；用占位说明或标注“待补充”。
- 不要直接复制其他网站的大段文案。
- 图片统一放在 `docs/public/images/`，Markdown 中使用 `/images/文件名` 引用，并写有意义的 alt 文本。
- 图片优先使用压缩后的 `.webp` 或 `.png`，单张尽量控制在 500 KB 以内。
- 站内链接使用 `/learn`、`/projects`、`/events`、`/contact` 这样的根路径。
- 保留页面标题（`# 学习路线` 等），不要删除一级标题。

## 样式规则

- 优先使用 VitePress 的 CSS 变量，例如 `--vp-c-brand-1`、`--vp-c-bg`、`--vp-c-divider`。
- 同时检查浅色和深色模式。
- 同时检查桌面端和手机端布局。
- 不要引入新的 UI 框架、字体 CDN 或大型依赖，除非任务明确要求。
- 不要做与当前任务无关的全站格式化或大规模重构。

## Git 规则

禁止：

- 直接 push 到 `main`
- `git push --force`、`git reset --hard`、`git clean -fd` 等破坏性命令
- 修改远程仓库地址
- 删除他人文件或回滚他人提交
- 提交 `node_modules/`、`docs/.vitepress/dist/`、`docs/.vitepress/cache/`
- 提交 `.env`、token、密码、私钥等敏感信息
- 未经允许安装新依赖、升级 VitePress、修改 `package.json` 或 `package-lock.json`

提交信息使用：

```text
docs: 补充学习路线内容
feat: 新增项目展示卡片
fix: 修正导航链接
style: 调整首页卡片间距
chore: 更新项目说明
```

一个分支只做一件事。不要在一个 PR 里同时改内容、样式和配置。

## 完成后的汇报格式

完成后向人类汇报：

```text
改动文件：
- docs/learn.md

改动内容：
- 补充大一、大二、大三三个阶段的学习建议

验证结果：
- npm run docs:build 通过

需要人工确认：
- 学习资料链接是否准确
```

## 需要停下来询问人类的情况

- 任务涉及删除文件、重命名页面或修改导航结构
- 需要安装依赖或修改构建配置
- 需要修改首页、主题样式或其他人的页面
- 发现工作区有未提交改动
- 无法确定内容真实性
- 构建失败且无法在不扩大改动范围的情况下修复
