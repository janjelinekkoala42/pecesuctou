import type { APIRoute } from 'astro';
import { PRODUCTION_URL } from '../env';

// Mapa webu pro vyhledávače. Při přidání nové stránky ji doplňte sem.
const pages = ['/', '/obchodni-podminky/', '/zasady-ochrany-osobnich-udaju/'];

export const GET: APIRoute = () => {
	const urls = pages.map((path) => `\t<url><loc>${new URL(path, PRODUCTION_URL).href}</loc></url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
