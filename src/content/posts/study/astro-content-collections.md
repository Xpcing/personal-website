---
title: "学习 Astro Content Collections"
description: "用内容集合约束 Markdown 的字段，让项目、学习和生活记录保持一致。"
pubDatetime: 2026-09-10
category: "study"
featured: true
tags: ["Astro", "TypeScript", "内容管理"]
---

## 为什么使用内容集合

普通 Markdown 很自由，但字段名称和类型容易逐渐失控。Astro Content Collections 允许为每类内容定义 Schema，构建时就能发现缺失字段或格式错误。

## 当前站点结构

```text
src/content/
├── projects/
├── posts/
│   ├── study/
│   └── life/
└── pages/
```

项目需要封面、技术栈和链接，学习记录需要标签和分类，简历则是相对稳定的结构化数据。它们适合使用不同的数据模型。
