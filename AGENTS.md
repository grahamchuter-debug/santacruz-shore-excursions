# Santa Cruz Shore Excursions — agent notes

- Brand: Santa Cruz Shore Excursions / The Gateway to Tenerife
- Domain: https://santacruzshoreexcursions.com
- Stack: Next.js App Router (static export), Tailwind, **Cloudflare Workers Static Assets** + Payments Worker
- Deploy: `npm run deploy` → `wrangler deploy` (ADR-0001). **Do not** use Cloudflare Pages / `wrangler pages deploy`
- Worker name: `santacruz-shore-excursions`
- Currency: EUR · Booking prefix: SC · Contact mode: central
- Editor's Choice: Tenerife Total Experience (Mount Teide + island highlights)
- Walk It Yourself: `/guides/explore-independently` (Santa Cruz Old Town & Waterfront)
- Do not invent platform features — destination copy and catalogue only
- Custom domains: attach apex only when instructed; www → apex via Redirect Rules
