# 华南理工大学嵌入式协会官网

基于 VitePress 的协会官网项目。

GitHub 仓库：https://github.com/Frankliu-maker/scut-embedded-association-website

![首页预览](./preview.png)

## 协作说明

- 人类贡献者请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)
- AI 编程助手请阅读 [AGENTS.md](./AGENTS.md)

## 本地开发

```bash
npm install
npm run docs:dev
```

默认访问地址：`http://localhost:5173/`

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

构建产物位于 `docs/.vitepress/dist/`。

## 目录说明

```text
docs/
├─ .vitepress/config.mjs    # 站点标题、导航和主题配置
├─ .vitepress/theme/        # Arduino 风格配色与首页样式
├─ public/                  # Logo、首页插画等静态资源
├─ index.md                 # 协会首页
├─ learn.md                 # 学习路线
├─ projects.md              # 项目展示
├─ events.md                # 活动公告
└─ contact.md               # 加入联系
```
