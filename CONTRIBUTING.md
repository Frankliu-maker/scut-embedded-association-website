# 参与贡献

## 第一次获取项目

```bash
git clone <仓库地址>
cd <项目目录>
npm install
npm run docs:dev
```

## 日常开发流程

先同步主分支：

```bash
git switch main
git pull --rebase
```

再新建自己的功能分支：

```bash
git switch -c feat/your-topic
```

修改内容后提交并推送：

```bash
git add .
git commit -m "feat: 描述你的改动"
git push -u origin feat/your-topic
```

然后在 GitHub 上发起 Pull Request，等待组员 review 后合并到 `main`。

## 内容放在哪里

| 内容 | 文件 |
| --- | --- |
| 协会首页 | `docs/index.md` |
| 学习路线 | `docs/learn.md` |
| 项目展示 | `docs/projects.md` |
| 活动公告 | `docs/events.md` |
| 加入联系 | `docs/contact.md` |
| 导航与站点标题 | `docs/.vitepress/config.mjs` |
| 配色与首页样式 | `docs/.vitepress/theme/custom.css` |
| Logo 与插画 | `docs/public/` |

## 提交信息建议

- `feat: 新增学习路线内容`
- `fix: 修正导航链接`
- `style: 调整首页卡片样式`
- `docs: 更新活动公告`
- `chore: 更新依赖`

## 合并前检查

```bash
npm run docs:build
```

构建成功后再发起 Pull Request。
