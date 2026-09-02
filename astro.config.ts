import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const repository = 'personal-resume';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://ting-ya-yang.github.io',
  base: isGitHubPages ? `/${repository}` : '/',
  output: 'static',
  integrations: [mdx(), react(), sitemap()],
});
