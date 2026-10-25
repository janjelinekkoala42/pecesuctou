import type { APIRoute } from 'astro';
import { isProduction } from '../env';

// Vyhledávače smí indexovat jen produkci, dev a náhledy zůstávají skryté.
export const GET: APIRoute = () => {
	const body = isProduction ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
