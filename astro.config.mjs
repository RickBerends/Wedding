// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project site: https://rickberends.github.io/Wedding/
// If you later add a custom domain (public/CNAME), set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://rickberends.github.io',
  base: '/Wedding',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
