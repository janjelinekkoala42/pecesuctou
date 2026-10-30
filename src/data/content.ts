// Veškeré texty webu na jednom místě. Hodnoty v [hranatých závorkách] je potřeba doplnit.

import sestraPhoto from '../assets/team/sestra.jpg';
import dencaPhoto from '../assets/team/denca.jpg';
import floristkaPhoto from '../assets/team/floristka.jpg';

export const contact = {
	phone: '777 623 221',
	phoneHref: 'tel:+420777623221',
	email: 'info@pecesuctou.cz',
	area: 'Praha a okolí',
};

// Provozovatel podle obchodních podmínek a zásad zpracování osobních údajů.
export const operator = {
	name: 'Denisa Skládalová',
	ico: '21999651',
	address: 'Podolská 423/20, 147 00 Praha – Podolí',
};

// Datum účinnosti obchodních podmínek a zásad zpracování osobních údajů.
export const legalEffectiveFrom = '1. 11. 2026';

export const announcement = {
	text: 'Blíží se Dušičky. Objednejte úklid a výzdobu hrobu včas.',
	link: 'Objednat výzdobu hrobu',
};

export const services = [
	{
		id: 'jednorazova',
		title: 'Jednorázová péče',
		photo: 'Foto: hrob po úklidu s květinou',
		text: 'Jednorázový úklid hrobu: hrob uklidíme, očistíme, upravíme a doplníme květinou nebo dekorací. Ideální před Dušičkami, Vánoci nebo k výročí.',
		items: ['Úklid hrobu a okolí', 'Úprava a očištění povrchů', 'Květina nebo dekorace', 'Fotografie po dokončení'],
		price: 'od 1 490 Kč',
		period: '',
	},
	{
		id: 'dvakrat-rocne',
		title: 'Péče 2× ročně',
		photo: 'Foto: jarní výsadba',
		text: 'Dvě návštěvy během roku, třeba na jaře a před Dušičkami.',
		items: ['2 návštěvy během roku', 'Běžný úklid a úprava hrobu', 'Sezónní květiny nebo dekorace', 'Fotografie po každé návštěvě'],
		price: 'od 3 490 Kč',
		period: '/ rok',
	},
	{
		id: 'celorocni',
		title: 'Celoroční péče 4× ročně',
		photo: 'Foto: sezónní výzdoba',
		text: 'Pravidelná údržba hrobu během celého roku. O hrob je postaráno v každém ročním období, i když bydlíte daleko.',
		items: ['4 návštěvy během roku', 'Úklid a úprava hrobu', 'Sezónní květiny nebo dekorace', 'Fotografie po každé návštěvě'],
		price: 'od 5 990 Kč',
		period: '/ rok',
	},
	{
		id: 'kvetiny',
		title: 'Květiny a dekorace',
		photo: 'Foto: věnec a svíčka',
		text: 'Výzdoba hrobu na Dušičky, Vánoce i k výročí. Přivezeme a umístíme květiny, věnec nebo dekoraci, případně zapálíme svíčku.',
		items: ['Dovoz a umístění květin či věnce', 'Sezónní dekorace', 'Zapálení svíčky na přání', 'Fotografie po dokončení'],
		price: 'od 1 190 Kč',
		period: '',
	},
];

export const steps = [
	'Vyberete si službu, o kterou máte zájem.',
	'Vyplníte krátký nezávazný formulář.',
	'Ozveme se vám a upřesníme hřbitov, rozsah péče, květiny, cenu a termín.',
	'Provedeme domluvenou péči.',
	'Zašleme vám fotografie hotového hrobu.',
];

export const cemeteries = [
	'[Olšanské hřbitovy]',
	'[Vinohradský hřbitov]',
	'[Ďáblický hřbitov]',
	'[Motolský hřbitov]',
	'[Hřbitov Malvazinky]',
	'[Vyšehradský hřbitov]',
	'[Hřbitovy v okolí Prahy]',
];

export const reasons = [
	'Osobní a citlivý přístup',
	'Respekt k místu i vašim přáním',
	'Květiny a dekorace podle ročního období',
	'Fotografie po každé návštěvě',
	'Předem domluvený rozsah a cena',
];

export const team = [
	{
		name: '[Jméno]',
		role: 'Péče a úklid hrobů',
		photo: sestraPhoto,
		photoPosition: '50% 30%',
		text: 'Na hřbitovy jezdí osobně. Stará se o úklid a úpravu hrobu a po každé návštěvě vám pošle fotografie. [Doplnit pár vět o sobě.]',
	},
	{
		name: '[Jméno]',
		role: 'Objednávky a komunikace',
		photo: dencaPhoto,
		photoPosition: '50% 25%',
		text: 'Je s vámi v kontaktu od první zprávy. Domluví rozsah péče, cenu i termín a ohlídá, aby vše proběhlo podle vašich přání. [Doplnit pár vět o sobě.]',
	},
	{
		name: '[Jméno]',
		role: 'Floristka · květiny a dekorace',
		photo: floristkaPhoto,
		photoPosition: '50% 4%',
		text: 'Květiny, věnce a sezónní dekorace pro vás připravuje floristka z naší rodiny. Ráda vybere květiny podle vašich přání i ročního období. [Doplnit praxi a pár vět o sobě.]',
	},
];

export const beforeAfter = [
	'[Hřbitov, Praha – jednorázová péče · doplnit]',
	'[Hřbitov – sezónní výzdoba · doplnit]',
	'[Hřbitov – celoroční péče · doplnit]',
];

export const testimonials = [
	{ text: '[Text reference od zákazníka – doplnit po prvních zakázkách, se souhlasem]', name: '[Jméno, př. J. N.]', meta: '[město, služba]' },
	{ text: '[Text reference od zákazníka – doplnit po prvních zakázkách, se souhlasem]', name: '[Jméno, př. J. N.]', meta: '[město, služba]' },
	{ text: '[Text reference od zákazníka – doplnit po prvních zakázkách, se souhlasem]', name: '[Jméno, př. J. N.]', meta: '[město, služba]' },
];

export const faq = [
	{
		q: 'Kde služby poskytujete?',
		a: 'Pečujeme o hroby na pražských hřbitovech a v blízkém okolí Prahy. Pokud svůj hřbitov nevidíte v seznamu, napište nám – rádi ověříme, zda tam můžeme pečovat.',
	},
	{
		q: 'Kolik stojí úklid hrobu?',
		a: 'Jednorázová péče začíná na 1 490 Kč, pravidelná péče 2× ročně na 3 490 Kč za rok. Konečná cena závisí na velikosti a stavu hrobu, vzdálenosti hřbitova a zvolených květinách. Přesnou cenu vždy domluvíme předem.',
	},
	{
		q: 'Postaráte se o hrob, když bydlím daleko nebo v zahraničí?',
		a: 'Ano, právě pro takové situace služba vznikla. Vše domluvíme po telefonu nebo e-mailem a po každé návštěvě vám pošleme fotografie, takže víte, že je o hrob postaráno.',
	},
	{
		q: 'Odstraňujete i mech a plevel?',
		a: 'Ano. Součástí úklidu je odstranění plevele, listí a starých květin a šetrné očištění povrchů. Pokud je hrob hodně zarostlý nebo poškozený, domluvíme rozsah předem.',
	},
	{
		q: 'Jak probíhá objednání?',
		a: 'Vyplníte krátký nezávazný formulář nebo nám zavoláte. Ozveme se vám, upřesníme hřbitov, rozsah péče, květiny, cenu a termín. Až vše odsouhlasíte, péči provedeme.',
	},
	{
		q: 'Mohu si zvolit konkrétní květiny nebo dekoraci?',
		a: 'Samozřejmě. Květiny a dekorace připravuje floristka z naší rodiny a ráda vybere podle vašich přání – třeba oblíbené květiny vašich blízkých.',
	},
	{
		q: 'Dostanu po návštěvě fotografie?',
		a: 'Ano, po každé návštěvě vám pošleme fotografie hotového hrobu e-mailem nebo jinou domluvenou cestou.',
	},
	{
		q: 'Mohu objednat jednorázovou návštěvu?',
		a: 'Ano. Jednorázová péče je vhodná třeba před Dušičkami, Vánoci nebo k výročí. Pravidelnou péči si můžete objednat kdykoli později.',
	},
	{
		q: 'Jak se dozvím konečnou cenu?',
		a: 'Ceny na webu jsou orientační. Po odeslání poptávky vám pošleme přesnou cenu podle konkrétního hrobu a vašich přání. Bez vašeho souhlasu nic neprovedeme.',
	},
	{
		q: 'Co když je hrob ve špatném stavu nebo vyžaduje náročnější údržbu?',
		a: 'Nejprve hrob zkontrolujeme a pošleme vám fotografie a návrh, co by bylo potřeba udělat. Rozsah i cenu náročnější údržby vždy domluvíme předem.',
	},
];
