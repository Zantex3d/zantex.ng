# Zantex Digital and Electronics website

The website is built with Next.js App Router, React, TypeScript, Tailwind CSS and Framer Motion.

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Run the available checks and production build:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Main routes

- `/` — company overview, service divisions and verified deployment experience
- `/about` — company profile and achievements
- `/services` and `/divisions/[slug]` — division and service information
- `/internet` — internet and connectivity services
- `/portfolio` — selected deployment and service experience
- `/quote` — quotation details prepared for WhatsApp
- `/contact` — WhatsApp contact options
- `/voucher` — campus Wi-Fi voucher purchase
- `/voucher/verify` — payment verification and voucher display
- `/privacy` and `/terms` — website policies

Quote requests are not submitted to a website backend. Visitors review their details and choose one of the listed WhatsApp contacts; the WhatsApp message is only sent after they send it in WhatsApp. Zantex Zone orders are handled by its separate ordering website.

## Voucher service configuration

The server-side voucher and payment routes require these environment variables:

- `DATABASE_HOST`
- `DATABASE_USER`
- `DATABASE_PASSWORD`
- `DATABASE_NAME`
- `PAYSTACK_SECRET_KEY`
- `TERMII_API_KEY`

Keep these values in the deployment environment or a local, untracked `.env.local` file. Never expose them in client-side code. Voucher checkout and payment verification use the existing MySQL, Paystack and Termii integrations.
