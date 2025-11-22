import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  site: 'https://10botics.github.io',
  base: '/ai-resources-for-teachers/',
});

