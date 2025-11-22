import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  integrations: [],
  site: 'https://10botics.github.io',
  // Only use base path in production builds (for GitHub Pages)
  // In dev mode, use root path for cleaner URLs
  base: command === 'build' ? '/ai-resources-for-teachers/' : '/',
}));

