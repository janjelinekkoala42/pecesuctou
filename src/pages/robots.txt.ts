import type { APIRoute } from 'astro';
import { isProduction, PRODUCTION_URL } from '../env';

// Vyhledávače smí indexovat jen produkci, dev a náhledy zůstávají skryté.
export const GET: APIRoute = () => {
	const body = isProduction
		? `User-agent: *\nAllow: /\n\nSitemap: ${PRODUCTION_URL}/sitemap.xml\n`
		: 'User-agent: *\nDisallow: /\n';
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
