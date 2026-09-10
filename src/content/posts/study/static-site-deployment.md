---
title: "静态网站的上线路径"
description: "整理从本地开发到 GitHub、Cloudflare Pages 和自定义域名的部署步骤。"
pubDatetime: 2026-09-08
category: "study"
tags: ["部署", "Cloudflare", "DNS"]
---

## 推荐路径

第一版建议使用 Git 仓库连接 Cloudflare Pages。每次推送到主分支后自动构建，预览分支也可以生成独立预览地址。

## 上线前检查

1. 更新站点 URL 和 SEO 描述
2. 替换个人资料与示例内容
3. 执行生产构建和移动端检查
4. 配置自定义域名与 HTTPS
5. 提交搜索引擎收录

如果要优先保证中国大陆访问，则需要评估境内对象存储、CDN 和 ICP 备案。
