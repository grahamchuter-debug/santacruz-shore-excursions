# Santa Cruz Shore Excursions — World 2.0 Gold Completion Report

**Date:** 26 July 2026  
**Domain:** https://santacruzshoreexcursions.com  
**Local path:** `/Users/graham.chuter/Desktop/santacruz-shore-excursions`  
**Standard:** World 2.0 (starter clone + Tallinn-aligned editorial patterns)  
**QA result:** **World 2.0 Gold** — **114/115** (PASS, zero FAIL categories)

---

## Configuration

| Item | Value |
|------|--------|
| Slug | `santacruz` |
| Brand | Santa Cruz Shore Excursions |
| Strapline | The Gateway to Tenerife |
| Domain / URL | `santacruzshoreexcursions.com` (HTTPS apex, no www) |
| Currency | EUR |
| Booking prefix | SC |
| Contact mode | `central` (`info@wowatour.com`) |
| Region | Europe / Canary Islands (Spain) |
| Pages project | `santacruz-shore-excursions` |
| Payments worker / D1 | Named; **not configured** (localhost only) |

---

## Editorial content

**Personality:** volcanic · adventurous · scenic · relaxed · authentic Canarian · premium travel magazine.

**Positioning:** Santa Cruz is the gateway to Tenerife — not the island’s main attraction. Two honest choices:

1. A relaxed independent day in Santa Cruz  
2. Exploring Tenerife’s volcanic landscapes beyond the harbour  

**Spirit of Place:** Original introduction covering the largest Canary Island, volcanic landscapes, Atlantic setting, year-round sunshine, Mount Teide National Park, and why Tenerife offers more than beaches.

**Honest Advice:** Balanced first-visit recommendation (go beyond Santa Cruz — Teide, La Laguna, volcanic landscapes) vs return/relax day (Santa Cruz is enjoyable independently).

---

## Experience Cards

| Card | Focus | Destination |
|------|--------|-------------|
| ⭐ Editor's Choice | Mount Teide National Park | `/shore-excursions/tenerife-total-experience` |
| 🌋 Volcanic Landscapes | Teide & Las Cañadas | Teide guide / EC excursion |
| 🚶 Walk It Yourself | Santa Cruz Old Town & Waterfront | `/guides/explore-independently` |
| 🏛 History & Culture | Santa Cruz & La Laguna | `/guides/la-laguna-guide` |
| 🍷 Food & Local Life | Markets, Canarian food, cafés | `/guides/food-guide` |

---

## Walk It Yourself

**Enabled** at `/guides/explore-independently` (World 2.0 v1.4 — no separate `/walk-it-yourself` route).

Honest framing: Santa Cruz suits a relaxed independent day; first-timers are gently steered toward the island.

**Suggested route (no interactive maps):**  
Cruise terminal → Plaza de España → Auditorio → Waterfront → Mercado de Nuestra Señora de África → Parks → Shopping streets → Local cafés → Return to ship.

Soft upsell to Editor’s Choice / Mount Teide for guests who want Tenerife beyond the city.

---

## Editor's Choice

| Field | Detail |
|-------|--------|
| Excursion | **Tenerife Total Experience** |
| Slug | `tenerife-total-experience` |
| SEG code | EUTFTOTAL |
| Why | Best SEG tour visiting Mount Teide **and** Tenerife highlights (La Laguna + Anaga Rural Park) for first-time cruise visitors |
| Status | `bookingStatus: "comingSoon"` — enquire CTAs only |
| Copy | Full `whyWeChose` + Editors Choice trust messaging on product page / homepage |

---

## Choose Your Day

1. **Explore Santa Cruz** → Walk It Yourself  
2. **Discover Mount Teide** → Teide / volcanic day  
3. **Editor's Choice Adventure** → Tenerife Total Experience  

---

## Your Day Ashore

Volcanic Landscapes · Walk It Yourself · History · Photography · Food · Families · Editor's Choice

---

## Guides

| Guide | Path |
|-------|------|
| Cruise Port Guide | `/cruise-port-guide` |
| One Day in Santa Cruz | `/guides/one-day-in-santa-cruz` |
| Walk It Yourself | `/guides/explore-independently` |
| Mount Teide Guide | `/guides/mount-teide-guide` |
| La Laguna Guide | `/guides/la-laguna-guide` |
| Food Guide | `/guides/food-guide` |
| Shopping Guide | `/guides/shopping-guide` |
| Cruise Tips | `/guides/cruise-tips` |
| FAQ | `/guides/cruise-faq` (+ `/faq`) |
| Best Viewpoints | `/guides/best-viewpoints` |

Also: highlight articles for Teide, La Laguna, Anaga, Auditorio, Plaza de España, Mercado.

---

## Products (SEG catalogue)

All five Shore Excursions Group Santa Cruz / Tenerife tours imported:

1. Tenerife Total Experience (Editor’s Choice) — EUTFTOTAL  
2. Best of Tenerife — EUTFBESTOF  
3. Secrets of North Tenerife — EUTFHIKESECRT  
4. Hiking Montes de Anaga — EUTFHIKEMONTE  
5. Round Island Trip — EUTFROUNDISL  

**Initial state:** `comingSoon` · **no public pricing** · empty `bookable-products.ts` and Worker catalogue until EUR prices verified.

---

## Images

- Shared World 2.0 bases + Tenerife subjects in `public/images/`  
- Optimised via `scripts/optimize-images.mjs`  
- **Sources recorded** in `public/images/sources.json` (Wikimedia Commons localhost stand-ins)  
- **Production images still required** before launch  

---

## SEO

- Metadata via `buildMetadata()` / destination keywords  
- Canonicals: `https://santacruzshoreexcursions.com/...`  
- Schema: BreadcrumbList, FAQPage, TravelGuide, TravelAgency, etc.  
- Sitemap + robots  
- Internal linking across Choose Your Day, Day Ashore, guides, comparisons, excursions  
- `public/_redirects` www → apex for production DNS  

`npm run seo-qa` — **passed**

---

## QA

| Check | Result |
|-------|--------|
| `npm run build` | Pass |
| `npm run check-links` | Pass (58 routes) |
| `npm run seo-qa` | Pass |
| World 2.0 audit `--build` | **Gold 114/115** |

Only remaining WARN: high client-component count (platform booking engine — accepted).

---

## Outstanding items

1. **Verify EUR selling prices** and fulfilment — then leave `comingSoon`  
2. **Production photography** (replace Commons stand-ins; re-verify geography)  
3. **Live ship schedules** (framework only — do not invent calls)  
4. **Stripe / Payments Worker / D1** — not configured (per brief)  
5. **Cloudflare / DNS / deploy** — not configured (per brief)  
6. **Email forwarding** — stay on `contactMode: "central"` until ready  
7. **Register in World-2.0 `sites.json`** when live  
8. Soft WARN: client component count (platform-level)

---

## Production readiness

| Area | Status |
|------|--------|
| Localhost editorial Gold destination | ✅ Ready |
| Cloudflare Workers Static Assets | ✅ Deploy via `npm run deploy` (ADR-0001) |
| Custom domains (apex / www) | ❌ Attach separately when ready |
| Public booking / pricing | ❌ Not ready |
| Stripe / Payments Worker / D1 | ❌ Deferred |

**Deploy (Workers Static Assets — not Pages):**

```bash
cd /Users/graham.chuter/Desktop/santacruz-shore-excursions
npm run deploy
```

**Do not** use `wrangler pages deploy` or create a Pages project for this site.
**Do not** configure Stripe until prices are verified.
