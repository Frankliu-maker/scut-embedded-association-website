---
aside: false
outline: false
---

# 加入联系

<script setup>
import { ref } from 'vue'

const EMAIL = 'scxiu@scut.edu.cn'
const copyLabel = ref('复制邮箱地址')

function legacyCopy() {
  const el = document.createElement('textarea')
  el.value = EMAIL
  el.setAttribute('readonly', '')
  el.style.position = 'fixed'
  el.style.opacity = '0'
  document.body.appendChild(el)
  el.select()
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch (e) {
    ok = false
  }
  document.body.removeChild(el)
  return ok
}

async function copyEmail() {
  let ok = false
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(EMAIL)
      ok = true
    }
  } catch (e) {
    ok = false
  }
  if (!ok) ok = legacyCopy()
  copyLabel.value = ok ? '已复制 ✓' : '复制失败，请手动选中邮箱'
  window.setTimeout(() => {
    copyLabel.value = '复制邮箱地址'
  }, 2200)
}
</script>

<div class="join-hero">
  <div class="join-eyebrow">JOIN US · 秋招 / 简历投递</div>
  <h2 class="join-title">加入嵌入社？</h2>
  <p class="join-sub">
    秋季招新走的是 14 天项目式学习，平时想加入可以直接投简历面试。两条路，选一条适合你的。
  </p>
  <div class="join-actions">
    <a class="join-btn join-btn-brand" href="#autumn-recruit">社团秋招 →</a>
    <a class="join-btn join-btn-ghost" href="#resume-interview">简历面试 →</a>
  </div>
</div>

## 社团秋招 {#autumn-recruit}

秋季招新是协会每年最主要的加入方式，一般和百团大战一起进行。

| 阶段 | 时间 | 说明 |
| --- | --- | --- |
| 百团大战摆摊 | 待定（以 [活动公告](/events) 为准） | 来摊位看作品、聊方向，现场报名 |
| 14 天项目式学习 | 摆摊结束后开始 | 按任务书自学，边学边动手 |
| 作品验收 | **10 月 28 日** | 统一验收，提交你的作品和过程记录 |
| 初筛通知 | 验收后 | 我们会告知下一步安排 |
| 志愿服务 + 进项目组 | 初筛通过后 | 填写软件 / 硬件方向志愿，进入项目组 |

### 14 天怎么安排

摆摊结束后，你会拿到一份《14 天学习任务书》，按顺序自学，每天在飞书文档里留一份笔记。前 8 天打基础，最后 6 天做一个自己的小项目。

| 天数 | 学什么 |
| --- | --- |
| 第 1 天 | 飞书文档：学会写文档、做表格 |
| 第 2 天 | VS Code：安装、中文界面、常用插件 |
| 第 3 天 | Markdown：用简单的语法写笔记 |
| 第 4–6 天 | GitHub 与 Git：注册账号，学会提交、分支 |
| 第 7–8 天 | AI Agent：用 AI 辅助学习和写代码 |
| 第 9–14 天 | 自选项目：结合 AI 做一个能跑起来的小作品 |

### 最后六天：做一个自己的项目

不要求你把前面学的东西全学会，能借助 AI 把东西做出来就行。往届同学做过这些方向：

- 一个有后端的小网页；
- 用 GitHub Actions 做邮件自动化；
- 用 Python 生成一段小视频；
- 用 ESP32 / STM32 加几个元器件做个小玩意（小风扇、小时钟之类）；
- 自由发挥：想做什么都行，鼓励做出点自己的东西。

### 打卡与提交

- 每天的学习笔记写在**同一篇飞书文档**里，一级标题写「第几天」；
- 14 天结束前，把文档权限设为「互联网上获得链接的人可阅读」；
- 把姓名、学院和笔记链接填进《14 天打卡提交表》【待补充：提交表链接】。

### 给新同学的几条建议

- **用电脑**：飞书在电脑端写文档、整理笔记比手机顺手很多；
- **先自己查**：遇到问题先问 AI 或搜资料，实在解决不了再在群里问——“不愤不启，不悱不发”；
- **别怕慢**：14 天不要求精通，先把东西做出来。

::: details 硬件入门资料（B 站）
- [零基础入门 PCB 设计（嘉立创 EDA）](https://b23.tv/YZtqcWi)
- [电子元器件与模拟电路零基础入门](https://b23.tv/WzZkVu7)
- [STM32 入门（2023 版）](https://b23.tv/Bl0T2li)
- [手把手学 STM32 HAL 库开发](https://b23.tv/j4yKc5r)
- [ESP32 快速入门（IDF 版）](https://b23.tv/HMoQtRj)
- [Arduino ESP32 快速入门](https://b23.tv/EpLVKox)
- [51 单片机入门](https://b23.tv/r1IMT4j)
:::

### 验收与初筛

**10 月 28 日**统一验收作品。验收后我们会汇总每位同学这 14 天的完成情况，通知进入下一阶段的同学。

这 14 天，我们主要看两件事：

- **程序基础**——愿意动手写、遇到问题能自己查；
- **协作能力**——愿不愿意问、会不会和同伴一起解决问题。

### 通过之后

通过初筛就进入项目组：先填**软件 / 硬件**方向志愿，然后跟着项目组做真实的项目。

> 项目式学习是协会的特色：不是听完课就结束，而是把代码真的跑在硬件上。

## 招新资料库

报名之前想先了解我们？这些资料可以先看：

<div class="link-grid">
  <a class="link-card" href="【待补充：14 天学习指导公开链接】">
    <div class="link-name">14 天学习指导</div>
    <div class="link-desc">从飞书、VS Code 一路学到 Git 和 AI Agent，每天的安排都在这里</div>
  </a>
  <a class="link-card" href="/learn">
    <div class="link-name">课程大纲与学习资料</div>
    <div class="link-desc">C 语言、数字电路、单片机、RTOS 的学习路线</div>
  </a>
  <a class="link-card" href="/projects">
    <div class="link-name">往届项目与作品</div>
    <div class="link-desc">智能小车、机械臂、物联网终端，看看能做成什么</div>
  </a>
  <a class="link-card" href="/events">
    <div class="link-name">活动公告</div>
    <div class="link-desc">百团大战摆摊时间、宣讲会和工作坊都会在这里更新</div>
  </a>
</div>

## 常见问题

<div class="faq">
  <div class="faq-item">
    <p class="faq-q">零基础可以加入吗？</p>
    <p class="faq-a">可以。14 天从飞书文档、VS Code 安装这些最基础的东西开始，前 8 天打基础，最后 6 天才做项目。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">14 天里要做什么？</p>
    <p class="faq-a">前 8 天按顺序学飞书、VS Code、Markdown、GitHub 和 AI Agent，最后 6 天结合 AI 做一个自己的小项目。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">每天的笔记要交吗？</p>
    <p class="faq-a">要。每天写在同一篇飞书文档里，14 天结束后公开链接并填写提交表。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">初筛主要看什么？</p>
    <p class="faq-a">这 14 天里的完成度、动手能力和投入程度，具体标准以当年通知为准。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">软硬件志愿什么时候填？</p>
    <p class="faq-a">作品通过后、进项目组之前填写，按自己的兴趣选就好。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">如果这次没走到最后呢？</p>
    <p class="faq-a">这次招新就先到这里啦，欢迎关注 <a href="/events">活动公告</a>，等下一轮招新再来。</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">现在还能报名吗？</p>
    <p class="faq-a">本年度秋季招新已经结束；想提前加入，可以走下面的 <a href="#resume-interview">简历面试</a> 方式。</p>
  </div>
</div>

## 简历面试 {#resume-interview}

错过了秋季招新，或者不想等下一轮，可以直接把简历投给协会：

1. 发送邮件到 **scxiu@scut.edu.cn**（协会指导老师邮箱，由老师转交协会）；
2. 邮件标题写：`【加入申请】姓名-年级-专业-方向（软件/硬件）`；
3. 正文简单介绍自己：会什么、想做什么、每周能投入多少时间；
4. 我们会邮件联系你，安排一次面试。

<div class="join-cta">
  <button class="join-btn join-btn-brand" type="button" @click="copyEmail">
    {{ copyLabel }}
  </button>
  <a class="join-btn join-btn-ghost" href="mailto:scxiu@scut.edu.cn">用邮件客户端打开</a>
</div>

<p class="join-email-hint">
  协会邮箱：<span class="join-email">scxiu@scut.edu.cn</span>。没配置邮件客户端的话，点「复制邮箱地址」，再到 QQ 邮箱、163 等网页邮箱粘贴发送即可。
</p>

::: tip 面试说明
面试主要聊聊你的经历和想做的事，流程还在完善中，具体安排以邮件通知为准。
:::

| 渠道 | 信息 |
| --- | --- |
| 协会邮箱 | scxiu@scut.edu.cn（由指导老师代收） |
| 微信公众号 | 【待补充】 |
| 活动室 | 【待补充：楼栋 + 房间号 + 开放时间】 |

平时活动地点详见 [活动公告](/events)。

<style scoped>
.join-hero {
  position: relative;
  overflow: hidden;
  margin: 24px 0 40px;
  padding: 36px 32px 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background:
    radial-gradient(circle at 12% 18%, rgba(0, 151, 157, 0.1), transparent 32%),
    radial-gradient(circle at 88% 12%, rgba(245, 166, 35, 0.08), transparent 28%),
    linear-gradient(155deg, var(--vp-c-bg-soft), var(--vp-c-bg));
}

.join-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 151, 157, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 151, 157, 0.06) 1px, transparent 1px);
  background-size: 34px 34px;
  -webkit-mask-image: radial-gradient(ellipse 78% 72% at 50% 38%, #000 30%, transparent 78%);
  mask-image: radial-gradient(ellipse 78% 72% at 50% 38%, #000 30%, transparent 78%);
  pointer-events: none;
}

.join-hero > * {
  position: relative;
}

.join-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--vp-c-brand-1);
}

.join-title {
  margin: 10px 0 0;
  font-size: clamp(38px, 6vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  background: linear-gradient(115deg, #005f66 0%, #00979d 52%, #f5a623 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.dark .join-title {
  background: linear-gradient(115deg, #43cbd0 0%, #23b8be 52%, #f5a623 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.join-sub {
  max-width: 520px;
  margin: 14px 0 0;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.join-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.join-btn {
  display: inline-block;
  padding: 11px 24px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none !important;
  transition:
    transform 0.18s ease,
    background-color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.join-btn-brand {
  background: var(--vp-c-brand-2);
  color: #fff !important;
  box-shadow: 0 10px 24px rgba(0, 151, 157, 0.24);
}

.join-btn-brand:hover {
  background: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.join-btn-ghost {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1) !important;
}

.join-btn-ghost:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1) !important;
  transform: translateY(-2px);
}

.join-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 22px 0 10px;
}

button.join-btn {
  font-family: inherit;
  cursor: pointer;
}

button.join-btn-ghost {
  background: transparent;
}

button.join-btn-ghost:hover {
  background: var(--vp-c-brand-soft);
}

button.join-btn-brand {
  border: none;
}

.join-email {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
}

.join-email-hint {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}

.faq {
  margin: 18px 0 0;
}

.faq-item {
  padding: 16px 20px;
  margin: 12px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: linear-gradient(155deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  transition: border-color 0.2s ease;
}

.faq-item:hover {
  border-color: var(--vp-c-brand-2);
}

.faq-q {
  margin: 0 0 8px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.faq-a {
  margin: 0;
  line-height: 1.7;
  color: var(--vp-c-brand-1);
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 22px 0 10px;
}

.link-card {
  display: block;
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: linear-gradient(155deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  text-decoration: none !important;
  color: inherit !important;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.link-card:hover {
  border-color: var(--vp-c-brand-2);
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 151, 157, 0.12);
}

.link-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.link-desc {
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

@media (max-width: 639px) {
  .join-hero {
    padding: 28px 20px 32px;
    border-radius: 14px;
  }

  .link-grid {
    grid-template-columns: 1fr;
  }
}
</style>
