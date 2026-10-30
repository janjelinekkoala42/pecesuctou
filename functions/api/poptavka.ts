// Přijme poptávkový formulář z webu, zkontroluje ho a předá Workeru pecesuctou-mailer k odeslání.
// MAILER je service binding nastavený v Cloudflare Pages (Settings → Bindings).

interface Env {
	MAILER: { fetch(request: Request): Promise<Response> };
	CF_PAGES_BRANCH?: string;
}

const PACKAGES: Record<string, string> = {
	jednorazova: 'Jednorázová péče',
	'kazde-obdobi': 'Péče každé roční období 4× ročně',
	celorocni: 'Celoroční péče 6× ročně',
	kvetiny: 'Květiny a dekorace',
	jine: 'Něco jiného / nevím',
};

const field = (form: FormData, name: string, max: number) => String(form.get(name) ?? '').trim().slice(0, max);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
	const form = await request.formData();

	// Skryté pole, které vyplní jen roboti.
	if (field(form, 'web', 200)) return Response.json({ ok: true });

	const inquiry = {
		jmeno: field(form, 'jmeno', 120),
		email: field(form, 'email', 200),
		telefon: field(form, 'telefon', 40),
		hrbitov: field(form, 'hrbitov', 200),
		balicek: PACKAGES[field(form, 'balicek', 40)] ?? '',
		zprava: field(form, 'zprava', 4000),
		prostredi: env.CF_PAGES_BRANCH === 'main' ? 'produkce' : (env.CF_PAGES_BRANCH ?? 'lokál'),
	};

	const valid =
		inquiry.jmeno &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) &&
		inquiry.telefon &&
		inquiry.hrbitov &&
		inquiry.balicek &&
		form.get('souhlas');
	if (!valid) return Response.json({ ok: false, error: 'invalid' }, { status: 400 });

	const response = await env.MAILER.fetch(
		new Request('https://mailer/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(inquiry),
		}),
	);
	return Response.json({ ok: response.ok }, { status: response.ok ? 200 : 502 });
};
