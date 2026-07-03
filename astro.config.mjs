import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://pension-absolutberlin.vercel.app',
  integrations: [tailwind(), icon()],
});
