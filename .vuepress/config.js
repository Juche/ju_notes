import process from 'node:process';
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig, defaultTheme } from 'vuepress';

import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { shikiPlugin } from '@vuepress/plugin-shiki';
// import { defaultTheme } from '@vuepress/theme-default';
import { getDirname, path } from '@vuepress/utils';

// import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index.js';
import { navbar, sidebar } from './config/index.js';

const __dirname = getDirname(import.meta.url);
const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  // set site base to default value
  base: '/',
  title: "Juching's Note",
  lang: 'zh-CN',
  description: '📔',
  // extra tags in `<head>`
  // head,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }]],
  // configure default theme
  theme: defaultTheme({
    logo: '/logo.png',
    docsDir: 'docs',
    navbar: navbar,
    sidebar: sidebar,
  }),
});
