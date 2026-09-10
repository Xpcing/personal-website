import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({
    pattern: "{study,life}/**/[^_]*.{md,mdx}",
    base: `./${BLOG_PATH}`,
  }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      category: z.enum(["study", "life"]).default("study"),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      updatedAt: z.date().optional().nullable(),
      status: z.enum(["active", "completed", "archived"]).default("active"),
      featured: z.boolean().default(false),
      stack: z.array(z.string()).default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
      cover: z.string().optional(),
      order: z.number().default(99),
    }),
});

export const collections = { posts, projects, pages };
