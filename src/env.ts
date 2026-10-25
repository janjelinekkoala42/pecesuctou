// Cloudflare Pages nastavuje CF_PAGES_BRANCH a CF_PAGES_URL při každém buildu.
// Produkce je jen build z větve main, všechno ostatní (dev, náhledy, lokál) je vývoj.
export const PRODUCTION_URL = 'https://pecesuctou.cz';

const branch = process.env.CF_PAGES_BRANCH;

export const isProduction = branch === 'main';
export const environmentName = isProduction ? 'produkce' : (branch ?? 'lokál');
export const siteUrl = isProduction
	? PRODUCTION_URL
	: (process.env.CF_PAGES_URL ?? 'http://localhost:4321');
