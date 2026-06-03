# Warm Ink & Macaron — Hexo Theme

> 手绘温暖风格博客主题，由 Stitch 设计稿转换而来。
> 风格关键词：沉静、温暖、极简、可爱

---

## 🚀 快速开始

### 1. 安装主题

将整个 `hexo-theme-warm-ink` 文件夹复制到你 Hexo 项目的 `themes/` 目录：

```
your-hexo-blog/
└── themes/
    └── hexo-theme-warm-ink/   ← 放在这里
```

### 2. 启用主题

编辑 Hexo 根目录的 `_config.yml`：

```yaml
theme: hexo-theme-warm-ink
```

### 3. 安装必要依赖

如果你使用分页功能，需要安装 hexo-generator-archive：

```bash
npm install hexo-generator-archive hexo-generator-category hexo-generator-tag --save
```

如果需要 RSS，还要安装：

```bash
npm install hexo-generator-feed --save
```

### 4. 启动预览

```bash
hexo clean && hexo generate && hexo server
```

---

## ⚙️ 主题配置

编辑 `themes/hexo-theme-warm-ink/_config.yml`，以下是主要配置项：

```yaml
# 博客名称（导航栏显示）
blog_name: "Ink & Paper"

# 导航菜单（名称: 路径）
menu:
  Essays: /archives
  Projects: /projects
  About: /about

# 社交链接
social:
  rss: /atom.xml
  twitter: https://twitter.com/yourname
  instagram: https://instagram.com/yourname

# 作者信息
author:
  name: "Your Name"
  bio: "一句介绍自己的话"
  avatar: /images/avatar.jpg    # 放在 themes/hexo-theme-warm-ink/source/images/

# 首页 Hero 区域
hero:
  greeting: "你好！"
  highlight_name: "你的名字"
  description: "介绍自己的一段话"
  image: /images/hero.jpg       # 你的个人照片

# 首页 Bento 卡片（可增删）
bento_cards:
  - title: "文章随笔"
    desc: "关于设计、生活和观察的长文"
    link: /archives
    link_text: "阅读文章"
    icon: "description"
    color: "mint"       # mint / pink / lavender / secondary
  ...

# Newsletter
newsletter:
  enabled: true
  title: "保持联系"
  action: "https://your-newsletter-service.com/subscribe"  # 留空则仅展示
```

---

## 📁 文件结构说明

```
hexo-theme-warm-ink/
├── _config.yml          # 主题配置（你需要修改这个）
├── layout/
│   ├── layout.ejs       # 公共基础布局（<head>、header、footer）
│   ├── index.ejs        # 首页
│   ├── archive.ejs      # 文章归档列表页
│   ├── post.ejs         # 单篇文章页
│   ├── page.ejs         # 普通独立页面（About 等）
│   ├── category.ejs     # 分类页
│   ├── tag.ejs          # 标签页
│   └── partials/
│       ├── header.ejs   # 导航栏
│       └── footer.ejs   # 页脚
└── source/
    ├── css/
    │   └── style.css    # 全部样式（Warm Ink & Macaron 设计系统）
    ├── js/
    │   └── main.js      # 交互逻辑
    └── images/
        ├── hero.jpg     # 首页头像（替换为你的照片）
        └── avatar.jpg   # 作者头像
```

---

## 📝 写文章时的 Front-matter

```markdown
---
title: 文章标题
date: 2024-10-14 09:00:00
categories:
  - Essays          # 分类（影响标签颜色：Essays/Tutorials/Life）
tags:
  - design
  - minimalism
description: 文章副标题，显示在文章头部
cover: /images/posts/my-cover.jpg   # 文章封面图（可选）
---

文章正文从这里开始...
```

---

## 🎨 设计系统速查

| 颜色 Token | 用途 |
|-----------|------|
| `--color-primary` | 主要文字、边框（炭笔黑 #1a1a1a） |
| `--color-secondary` | 悬停强调色（粉棕 #70585b） |
| `--color-tertiary-fixed` | 薄荷绿标签、Badge |
| `--color-secondary-fixed` | 粉色 Newsletter 背景 |
| `--color-background` | 页面底色（暖纸白 #faf9f7） |

| 字体 | 用途 |
|------|------|
| Bricolage Grotesque | 标题、大字号 |
| Work Sans | 正文 |
| Quicksand | 标签、标注 |

---

## 🛠 常见问题

**Q: 如何添加 About 页面？**
在 Hexo 的 `source/` 目录下创建 `about/index.md`，front-matter 加上 `layout: page`。

**Q: 如何自定义首页 Bento 卡片？**
编辑主题 `_config.yml` 里的 `bento_cards` 数组，每张卡片支持 `title / desc / link / link_text / icon / color`。icon 名称参考 [Material Symbols](https://fonts.google.com/icons)。

**Q: 如何关闭 Newsletter 区块？**
在主题 `_config.yml` 里将 `newsletter.enabled` 设为 `false`。
