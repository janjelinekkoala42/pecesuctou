// Odešle poptávku e-mailem. Data už jsou zkontrolovaná funkcí webu (functions/api/poptavka.ts).

interface Env {
	EMAIL: {
		send(message: {
			to: string;
			from: { email: string; name: string };
			replyTo?: string;
			subject: string;
			text: string;
		}): Promise<{ messageId: string }>;
	};
}

export interface Inquiry {
	jmeno: string;
	email: string;
	telefon: string;
	hrbitov: string;
	zprava: string;
	prostredi: string;
}

const TO = 'pecesuctou@gmail.com';
const FROM = { email: 'poptavky@pecesuctou.cz', name: 'Web Péče s úctou' };

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

		const data = (await request.json()) as Inquiry;
		const prefix = data.prostredi === 'produkce' ? '' : `[${data.prostredi}] `;

		try {
			await env.EMAIL.send({
				to: TO,
				from: FROM,
				replyTo: data.email,
				subject: `${prefix}Nová poptávka – ${data.jmeno}`,
				text: [
					'Nová poptávka z webu pecesuctou.cz',
					'',
					`Jméno:    ${data.jmeno}`,
					`E-mail:   ${data.email}`,
					`Telefon:  ${data.telefon}`,
					`Hřbitov:  ${data.hrbitov}`,
					'',
					'Zpráva:',
					data.zprava || '(bez zprávy)',
					'',
					'Na tento e-mail stačí odpovědět – odpověď půjde přímo zákazníkovi.',
				].join('\n'),
			});
			return Response.json({ ok: true });
		} catch (error) {
			console.error('Odeslání poptávky selhalo', error);
			return Response.json({ ok: false }, { status: 502 });
		}
	},
};
