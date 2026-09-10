export const profile = {
  name: "你的名字",
  role: "开发者 / 终身学习者",
  location: "中国",
  email: "hello@example.com",
  headline: "把做过的事整理清楚，把正在学的知识留下来。",
  intro:
    "这里记录我的简历、项目、学习过程和生活片段。先建立稳定的内容结构，再让所有资料随着时间自然生长。",
  availability: "开放远程合作与技术交流",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
    },
    {
      label: "发送邮件",
      href: "mailto:hello@example.com",
    },
  ],
  stats: [
    { value: "04", label: "内容板块" },
    { value: "∞", label: "持续记录" },
    { value: "100%", label: "静态部署" },
  ],
} as const;
