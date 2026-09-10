# 个人网站

基于 Astro 和 AstroPaper 构建的个人网站，用于长期维护简历、项目、学习记录和生活记录。网站输出为纯静态文件，可以部署到 Cloudflare Pages、GitHub Pages、Netlify 或对象存储。

## 内容结构

```text
src/
├── data/
│   ├── profile.ts          # 姓名、简介、联系方式
│   └── resume.ts           # 简历数据
├── content/
│   ├── projects/           # 项目
│   ├── posts/study/        # 学习记录
│   ├── posts/life/         # 生活记录
│   └── pages/about.md      # 关于页面
├── pages/
│   ├── index.astro         # 首页
│   ├── projects/           # 项目列表与详情
│   ├── notes/              # 学习记录
│   ├── life/               # 生活记录
│   └── resume.astro        # 简历
└── content.config.ts       # 内容字段校验
```

## 本地开发

需要 Node.js 22.12 或更高版本。

```bash
pnpm install
pnpm dev
```

默认地址为 `http://localhost:4321`。

## 常用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 类型检查、生产构建、搜索索引
pnpm preview      # 预览生产构建
pnpm lint         # ESLint 检查
pnpm format       # Prettier 格式化
```

## 上线前替换

1. 修改 `src/data/profile.ts` 中的姓名、介绍、邮箱和社交链接。
2. 修改 `astro-paper.config.ts` 中的正式域名、标题和作者。
3. 用真实简历替换 `src/data/resume.ts` 中的示例内容。
4. 用真实作品替换 `src/content/projects/` 中的示例项目。
5. 检查学习和生活记录，删除不需要的示例内容。
6. 将 `public/favicon.svg` 和 `public/default-og.jpg` 替换为个人品牌资源。

## Cloudflare Pages 部署

1. 将项目推送到 GitHub 仓库。
2. 在 Cloudflare Pages 中连接该仓库。
3. 框架选择 `Astro`。
4. 构建命令填写 `pnpm build`。
5. 输出目录填写 `dist`。
6. 部署完成后绑定自定义域名并开启 HTTPS。

如果优先保证中国大陆访问，需要评估境内对象存储、CDN 和 ICP 备案，而不是只使用境外静态托管。

## 内容与隐私

- 不要公开手机号、家庭住址、身份证件或精确位置
- 图片上传前移除 EXIF，并压缩到合理尺寸
- 私人内容应保留在本地草稿或其他私有存储中
- 发布前检查示例数据和真实个人数据是否混合

## 说明

项目基于 [AstroPaper](https://github.com/satnaing/astro-paper) 扩展，保留原项目 MIT 许可证与版权声明。
