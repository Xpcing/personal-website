export const resume = {
  summary:
    "这里填写一段 2 至 3 行的个人简介，概括你的方向、经验与优势。建议突出解决的问题、擅长的技术领域，以及希望继续发展的方向。",
  highlights: [
    "主导或参与过可量化的项目，并说明结果与影响。",
    "能够独立完成需求分析、方案设计、实现、测试和上线。",
    "保持持续学习，并把关键经验整理成可复用的知识记录。",
  ],
  experience: [
    {
      period: "2024 — 至今",
      title: "职位名称（示例）",
      organization: "公司或团队名称",
      description:
        "描述你的职责范围、技术栈和代表性成果。优先使用数据表达影响，例如性能提升、成本下降或交付效率变化。",
      skills: ["TypeScript", "系统设计", "项目协作"],
    },
    {
      period: "2022 — 2024",
      title: "上一段经历（示例）",
      organization: "公司或团队名称",
      description:
        "说明你负责的业务、解决的核心问题和沉淀的方法。这里的内容应当按真实经历替换。",
      skills: ["Web 开发", "自动化", "工程实践"],
    },
  ],
  education: [
    {
      period: "2018 — 2022",
      title: "专业名称（示例）",
      organization: "学校名称",
      description: "可补充核心课程、研究方向、竞赛或毕业设计。",
    },
  ],
  skills: [
    {
      group: "技术方向",
      items: ["JavaScript / TypeScript", "Web 前端", "Node.js", "数据库与部署"],
    },
    {
      group: "工程能力",
      items: ["需求拆解", "架构设计", "性能优化", "测试与持续集成"],
    },
    {
      group: "协作方式",
      items: ["技术写作", "知识管理", "跨团队沟通", "开源协作"],
    },
  ],
} as const;
