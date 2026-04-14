# dennisheyer.de — Personal Portfolio

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EE22CC?logo=framer&logoColor=white)](https://www.framer.com/motion)

My personal portfolio — a showcase of the projects I've built, the systems I've operated, and the experience I've picked up along the way. Designed and developed end-to-end: from UI and animations down to server infrastructure and CI/CD.

Built with **Next.js 16** and deployed on a self-hosted **Hetzner VPS** behind **Cloudflare**.

## Tech Stack

| Category | |
|---|---|
| Framework | [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org) [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) |
| Styling | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EE22CC?logo=framer&logoColor=white)](https://www.framer.com/motion) |
| Email | [![Resend](https://img.shields.io/badge/Resend-black?logo=resend&logoColor=white)](https://resend.com) |
| Spam Protection | [![Cloudflare Turnstile](https://img.shields.io/badge/Cloudflare_Turnstile-F38020?logo=cloudflare&logoColor=white)](https://www.cloudflare.com/products/turnstile) |
| Deployment | [![Hetzner](https://img.shields.io/badge/Hetzner_VPS-D50C2D?logo=hetzner&logoColor=white)](https://www.hetzner.com) [![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions) [![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white)](https://www.cloudflare.com) |

## Features

- **9 Sections** — Hero, Projects, Experience, AI Experience, Infrastructure, Tech Stack, About, Contact, Footer
- **Contact form** — Cloudflare Turnstile CAPTCHA + Resend email delivery
- **Live project previews** — iframe integration for deployed projects
- **SEO** — Sitemap, Open Graph, Twitter Cards, JSON-LD structured data
- **Animations** — Framer Motion scroll and entrance animations

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` with the following variables:
   ```env
   RESEND_API_KEY=...
   TURNSTILE_SECRET_KEY=...
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site runs on a self-hosted **Hetzner VPS** behind **Cloudflare** (DNS, CDN, DDoS protection). Quality checks (lint, typecheck, build, tests, security audit) run automatically via **GitHub Actions** on every push to `main`.

## License

MIT — see [LICENSE](LICENSE) for details.
