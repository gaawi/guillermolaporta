import { defineConfig } from 'astro/config';

export default defineConfig({
  // Served at the root of the custom domain. There is no base path: adding one
  // prefixes every asset and link with a directory that does not exist here.
  site: 'https://guillermolaporta.com',
});
