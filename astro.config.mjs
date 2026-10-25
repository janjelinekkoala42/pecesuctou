// @ts-check
import { defineConfig } from 'astro/config';
import { siteUrl } from './src/env.ts';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
});
