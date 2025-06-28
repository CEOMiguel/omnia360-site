import { defineConfig } from 'astro/config';
import cname from 'astro-cname';

export default defineConfig({
  site: 'https://www.omnia360.cl',
  base: '/',
  integrations: [cname()],
});
