# Nasazení webu Peče s úctou

Web běží na **Cloudflare Pages**, kód je na **GitHubu** a domény jsou **pecesuctou.cz** (hlavní) a **pecesuctou.com** (přesměrování).

## Jak fungují prostředí

| Prostředí | Větev v gitu | Adresa | Kdo ho vidí |
|---|---|---|---|
| **Produkce** | `main` | https://pecesuctou.cz | všichni, indexují ho vyhledávače |
| **Dev** | `dev` | https://dev.pecesuctou.cz | jen pozvaní (Cloudflare Access), neindexuje se |
| **Náhledy** | jakákoli jiná větev | `https://<větev>.pece-s-uctou.pages.dev` | jen pozvaní, neindexuje se |
| **Lokál** | — | http://localhost:4321 | jen ty |

Postup práce:

1. Nová změna vzniká ve vlastní větvi (např. `uprava-menu`) a dostane vlastní náhled.
2. Když je hotová, sloučí se do `dev` a otestuje se na dev.pecesuctou.cz.
3. Až je dev v pořádku, sloučí se `dev` do `main`, a teprve to jde do produkce.

Web pozná prostředí sám podle proměnné `CF_PAGES_BRANCH` (viz `src/env.ts`). Mimo produkci:

- má v rohu červený štítek s názvem prostředí,
- v titulku stránky má `[dev]` apod.,
- zakazuje indexování (`robots.txt`, meta `noindex`, hlavička `X-Robots-Tag`).

---

## Krok 1: GitHub

1. Dokonči přihlášení v terminálu: `gh auth login` (GitHub.com → HTTPS → přihlásit přes prohlížeč).
2. Pak řekni Claudovi, ať založí repo `pece-s-uctou` a pushne větve `main` a `dev`.
3. Na GitHubu v repu: **Settings → Branches → Add branch ruleset** pro `main`:
   - zapnout *Restrict deletions* a *Block force pushes*,
   - *Require a pull request before merging*, aby se do produkce nedalo pushnout omylem.

## Krok 2: Cloudflare účet a Pages projekt

1. Založ účet na https://dash.cloudflare.com/sign-up (bezplatný plán stačí). Zapni si dvoufázové ověření.
2. **Workers & Pages → Create → Pages → Connect to Git** → povol přístup ke GitHub repu `pece-s-uctou`.
3. Nastavení buildu:
   - **Project name:** `pece-s-uctou`
   - **Production branch:** `main`
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Verze Node se načte ze souboru `.node-version` (22).
4. Po prvním buildu poběží web na `https://pece-s-uctou.pages.dev` (produkce) a `https://dev.pece-s-uctou.pages.dev` (dev).
5. **Settings → Builds → Branch control:** *Preview branch* = *All non-Production branches*. Pokud nechceš náhledy pro každou větev, zvol *Custom branches* a zadej jen `dev`.

> Pozn.: Cloudflare pro úplně nové projekty propaguje i „Workers se statickými soubory“. Pages ale dál plně funguje a pro tenhle web je jednodušší.

## Krok 3: Domény

1. Kup **pecesuctou.cz** u českého registrátora (Wedos, Forpsi, Active24…).
2. Kup **pecesuctou.com** buď tamtéž, nebo přes Cloudflare Registrar (po kroku 4).
3. Při nákupu **nekupuj** hosting ani e-mail v balíčku. Stačí samotná doména.

## Krok 4: DNS přes Cloudflare

Pro obě domény:

1. Cloudflare → **Add a domain** → zadej `pecesuctou.cz` → plán *Free*.
2. Cloudflare ti ukáže dva nameservery (např. `xxx.ns.cloudflare.com`).
3. U registrátora domény nastav tyto nameservery místo původních.
4. Počkej, než Cloudflare ukáže doménu jako *Active* (obvykle do pár hodin).
5. Cloudflare → doména → **DNS → Settings → DNSSEC → Enable** a hodnotu DS záznamu zadej u registrátora.

Totéž zopakuj pro `pecesuctou.com`.

## Krok 5: Napojení domén na prostředí

V Pages projektu **pece-s-uctou → Custom domains**:

1. **Set up a domain** → `pecesuctou.cz`, tím vznikne produkce.
2. **Set up a domain** → `www.pecesuctou.cz`.
3. **dev.pecesuctou.cz** se v Custom domains přidat nedá přímo na větev, proto:
   - Custom domains → **Set up a domain** → `dev.pecesuctou.cz` → potvrdit,
   - pak v **DNS** domény pecesuctou.cz uprav záznam `dev` na:
     `CNAME dev → dev.pece-s-uctou.pages.dev` (Proxied, oranžový mráček).

Přesměrování (doména → **Rules → Redirect Rules**):

- `www.pecesuctou.cz/*` → `https://pecesuctou.cz/${1}` (301),
- na doméně **pecesuctou.com**: přidej DNS záznamy `A @ 192.0.2.1` a `A www 192.0.2.1` (Proxied) a pravidlo
  „All incoming requests“ → `https://pecesuctou.cz` (301, *Preserve query string*).

## Krok 6: Zamknutí dev a náhledů (Cloudflare Access)

Dev ani náhledy nemají být veřejné.

1. Pages projekt → **Settings → General → Access policy → Enable**. Tím se zamknou všechny `*.pece-s-uctou.pages.dev` náhledy.
2. **Zero Trust** (v levém menu; při prvním otevření zvol bezplatný plán do 50 uživatelů, chce to platební kartu, ale nic se nestrhne).
3. **Access → Applications → Add → Self-hosted**:
   - Application domain: `dev.pecesuctou.cz`,
   - Policy: *Allow*, Include → *Emails* → e-maily lidí, kteří mají na dev přístup.
4. Kdo otevře dev, dostane na e-mail jednorázový kód a teprve pak web uvidí.

## Krok 7: E-mail na doméně (volitelné)

Pokud chceš adresy typu info@pecesuctou.cz:

- **Seznam Email Profi**, **Google Workspace** nebo **Zoho Mail**: založ účet a přidej doménu.
- Služba ti dá záznamy **MX**, **SPF (TXT)** a **DKIM**. Ty přidej v Cloudflare → DNS u pecesuctou.cz.
- Jen pro přeposílání na existující schránku stačí zdarma **Cloudflare Email Routing**.

## Kontrolní seznam před spuštěním produkce

- [ ] https://pecesuctou.cz se načte přes HTTPS
- [ ] www.pecesuctou.cz a pecesuctou.com přesměrují na https://pecesuctou.cz
- [ ] https://pecesuctou.cz/robots.txt obsahuje `Allow: /`
- [ ] na produkci není červený štítek prostředí
- [ ] https://dev.pecesuctou.cz chce přihlášení přes Cloudflare Access
- [ ] https://dev.pecesuctou.cz/robots.txt obsahuje `Disallow: /`
- [ ] na `main` nejde pushnout přímo (jen přes pull request)
