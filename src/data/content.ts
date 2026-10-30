// Veškeré texty webu na jednom místě. Hodnoty v [hranatých závorkách] je potřeba doplnit.

import sestraPhoto from '../assets/team/sestra.jpg';
import dencaPhoto from '../assets/team/denca.jpg';
import floristkaPhoto from '../assets/team/floristka.jpg';
import uklidPred from '../assets/work/uklid-pred.jpg';
import uklidPo from '../assets/work/uklid-po.jpg';
import jaroPred from '../assets/work/jaro-pred.jpg';
import jaroPo from '../assets/work/jaro-po.jpg';
import podzimPred from '../assets/work/podzim-pred.jpg';
import podzimPo from '../assets/work/podzim-po.jpg';
import dusickyPred from '../assets/work/dusicky-pred.jpg';
import dusickyPo from '../assets/work/dusicky-po.jpg';
import vyzdobaAndel from '../assets/work/vyzdoba-andel.jpg';
import vyzdobaKytice from '../assets/work/vyzdoba-kytice.jpg';

export const contact = {
	phone: '777 623 231',
	phoneHref: 'tel:+420777623231',
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
		icon: 'broom',
		text: 'Jednorázový úklid hrobu: hrob uklidíme, očistíme, upravíme a doplníme květinou nebo dekorací. Ideální před Dušičkami, Vánoci nebo k výročí.',
		items: ['Úklid hrobu a okolí', 'Úprava a očištění povrchů', 'Položení květiny nebo dekorace', 'Zapálení svíčky', 'Fotografie po dokončení'],
		price: '990 Kč',
		period: '',
	},
	{
		id: 'kazde-obdobi',
		title: 'Péče každé roční období 4× ročně',
		icon: 'cycle',
		text: 'Pravidelná údržba hrobu během celého roku. O hrob je postaráno v každém ročním období, i když bydlíte daleko.',
		items: ['4 návštěvy během roku', 'Úklid a úprava hrobu', 'Sezónní květiny nebo dekorace', 'Zapálení svíčky při každé návštěvě', 'Fotografie po každé návštěvě'],
		price: '3 500 Kč',
		period: '/ rok',
	},
	{
		id: 'celorocni',
		title: 'Celoroční péče 6× ročně',
		icon: 'calendar',
		text: 'Pravidelná údržba během celého roku. O hrob je postaráno v každém ročním období a navíc při dvou významných událostech – na Vánoce, Dušičky, Velikonoce nebo k výročí úmrtí.',
		items: ['6 návštěv během roku', 'Každé roční období a 2 významné dny podle vás', 'Úklid a úprava hrobu', 'Sezónní květiny nebo dekorace', 'Zapálení svíčky při každé návštěvě', 'Fotografie po každé návštěvě'],
		price: '5 500 Kč',
		period: '/ rok',
	},
	{
		id: 'kvetiny',
		title: 'Květiny a dekorace',
		icon: 'bouquet',
		text: 'Výzdoba hrobu na Dušičky, Vánoce i k výročí. Přivezeme a umístíme květiny, věnec nebo dekoraci a zapálíme svíčku.',
		items: ['Dovoz a umístění květin či věnce', 'Sezónní dekorace', 'Zapálení svíčky', 'Fotografie po dokončení'],
		price: 'od 350 Kč',
		period: '',
	},
];

export const steps = [
	'Vyberete si službu, o kterou máte zájem.',
	'Vyplníte krátký nezávazný formulář.',
	'Ozveme se vám a upřesníme hřbitov, rozsah péče, květiny a termín.',
	'Provedeme domluvenou péči.',
	'Zašleme vám fotografie hotového hrobu.',
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
		name: 'Lucie',
		role: 'Péče a úklid hrobů',
		photo: sestraPhoto,
		photoPosition: '50% 30%',
		text: 'Na hřbitovy jezdí osobně. Stará se o úklid a úpravu hrobu a po každé návštěvě vám pošle fotografie.',
	},
	{
		name: 'Denisa',
		role: 'Objednávky a komunikace',
		photo: dencaPhoto,
		photoPosition: '50% 25%',
		text: 'Je s vámi v kontaktu od první zprávy. Domluví rozsah péče, cenu i termín a ohlídá, aby vše proběhlo podle vašich přání.',
	},
	{
		name: 'Lucie',
		role: 'Floristka · květiny a dekorace',
		photo: floristkaPhoto,
		photoPosition: '50% 4%',
		text: 'Květiny, věnce a sezónní dekorace pro vás připravuje floristka z naší rodiny. Ráda vybere květiny podle vašich přání i ročního období.',
	},
];

export const beforeAfter = [
	{ before: uklidPred, after: uklidPo, caption: 'Jednorázová péče · úklid a očištění hrobu' },
	{ before: jaroPred, after: jaroPo, caption: 'Jarní péče · úklid a květinová výzdoba' },
	{ before: podzimPred, after: podzimPo, caption: 'Celoroční péče · podzimní úklid a výzdoba' },
	{ before: dusickyPred, after: dusickyPo, caption: 'Dušičky · úklid, věnec a zapálené svíčky' },
];

export const decorations = [
	{ photo: vyzdobaAndel, alt: 'Zimní výzdoba hrobu s andělem, šiškami, oblázky a lucernou', caption: 'Zimní výzdoba' },
	{ photo: vyzdobaKytice, alt: 'Květinová výzdoba hrobu s vřesem, růžemi a chryzantémami', caption: 'Květiny a dekorace' },
];

// Reference od zákazníků (zveřejněné se souhlasem). Podle dodaných údajů: jen křestní jméno a služba.
export const testimonials: { text: string; name?: string; meta: string }[] = [
	{
		text: 'Bydlím daleko od Prahy a nemohu se o rodinný hrob starat tak často, jak bych chtěla. Moc by mi pomohlo vědět, že je o něj postaráno a že dostanu fotografie po každé návštěvě.',
		name: 'Kateřina',
		meta: 'Pravidelná péče',
	},
	{
		text: 'Na Dušičky chceme mít hrob krásně upravený, i když to letos sami nestíháme. Líbí se mi možnost domluvit květiny i výzdobu na jednom místě a nemuset nic složitě zařizovat.',
		name: 'Petr',
		meta: 'Sezónní výzdoba',
	},
	{
		text: 'Péče o místo posledního odpočinku našich blízkých je pro nás důležitá. Hledáme někoho, kdo k němu bude přistupovat s úctou, pečlivostí a citem pro detail.',
		name: 'Matěj',
		meta: 'Jednorázová péče',
	},
];

export const faq = [
	{
		q: 'Kde služby poskytujete?',
		a: 'Pečujeme o hroby na pražských hřbitovech a v blízkém okolí Prahy. Rádi se ale postaráme o hrob kdekoli v České republice – stačí zadat poptávku a my se s vámi spojíme a vše individuálně domluvíme.',
	},
	{
		q: 'Kolik stojí úklid hrobu?',
		a: 'Jednorázová péče stojí 990 Kč, péče v každém ročním období (4× ročně) 3 500 Kč za rok a celoroční péče 6× ročně 5 500 Kč za rok. Květiny a dekorace pořídíte od 350 Kč.',
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
		a: 'Vyplníte krátký nezávazný formulář nebo nám zavoláte. Ozveme se vám, upřesníme hřbitov, rozsah péče, květiny a termín. Až vše odsouhlasíte, péči provedeme.',
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
		q: 'Může se cena ještě změnit?',
		a: 'Cena každého balíčku je uvedena u služby. Pokud byste chtěli něco navíc – například náročnější údržbu nebo speciální květiny – sdělíme vám cenu předem a bez vašeho souhlasu nic neprovedeme.',
	},
	{
		q: 'Co když je hrob ve špatném stavu nebo vyžaduje náročnější údržbu?',
		a: 'Nejprve hrob zkontrolujeme a pošleme vám fotografie a návrh, co by bylo potřeba udělat. Rozsah i cenu náročnější údržby vždy domluvíme předem.',
	},
];
