import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	buildOptions: {
		site: "https://MasahideS.github.io/",
    base: "https://github.com/MasahideS/astro-test.git"
	  },
  output: 'server',
  adapter: netlify(),
});

