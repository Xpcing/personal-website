import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    projects: "项目",
    notes: "学习",
    life: "生活",
    resume: "简历",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇记录：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "返回顶部",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第",
  },
  home: {
    socialLinks: "联系我",
    featured: "精选项目",
    recentPosts: "最新记录",
    allPosts: "全部记录",
    latestNotes: "最近学习",
    latestLife: "最近生活",
    viewProjects: "查看项目",
    readResume: "查看简历",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "带有该标签的全部记录。",

    tagsTitle: "标签",
    tagsDesc: "全部记录使用过的标签。",

    postsTitle: "全部记录",
    postsDesc: "学习、项目与生活记录的完整归档。",

    archivesTitle: "归档",
    archivesDesc: "按时间浏览所有记录。",

    searchTitle: "搜索",
    searchDesc: "搜索网站中的全部内容。",
  },
  a11y: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索记录...",
    noResults: "没有找到结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 页面不存在",
    message: "没有找到这个页面",
    goHome: "返回首页",
  },
} satisfies UIStrings;
