import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://example.com', // We will update this later or user can update it
  base: '/', // Change this to repository name if deploying to project page e.g. /repo-name/
});

