# NXolutionz SaaS — Fiber Portal Demo

Customer portal, admin panel, and field technician tools for **NXolutionz** (Multan FTTH).

Built from real operational patterns (staff jobs, inventory, login renewals, MISPL support).

![Demo](https://img.shields.io/badge/status-demo-blue) ![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20Tailwind%20%2B%20JS-38bdf8)

## Quick start

**Option A — open the file**

Open `index.html` in any modern browser.

**Option B — local server**

```bash
cd nx-saas
python3 -m http.server 8080
```

Then open: http://localhost:8080

## Demo logins

| Button on screen | Role | What to try |
|------------------|------|-------------|
| **Sign In** | Customer | Dashboard, billing, plans, support tickets |
| **Demo Admin Login** | Admin / MISPL | Customers & logins, tickets, jobs, inventory, **Login Renewals**, **Daily Stock Report** |
| **Demo Field Technician** | Field staff | My jobs, material report, **Daily Stock Report** |

No real password required — demo only.

## Features

### Customer portal
- Dashboard (plan, next bill, username, house code)
- Billing history + JazzCash / EasyPaisa / bank (mock pay)
- Plan upgrade (10 / 50 / 100 Mbps)
- Support tickets (including IP / fiber issues)
- Profile

### Admin / MISPL
- Overview KPIs
- Customers & logins (`061208…` style usernames, house codes, IP status)
- Support tickets
- Installation jobs
- Inventory (fiber, ONU, ODF, patch cords, splitters, etc.)
- **Login renewals** — expiry queue, Renew 6m, bulk renew, workflow steps
- **Daily stock report** — WhatsApp-style paste + history + consumption summary
- Coverage areas (Multan + sectors)

### Field technician
- Job list
- Structured material report
- Stock snapshot
- **Daily stock report** (same format as inventory WhatsApp group)

## Project structure

```
nx-saas/
├── index.html      # UI shell
├── js/
│   └── app.js      # Logic + sample data
├── README.md
└── .gitignore
```

## Push to GitHub

```bash
cd nx-saas
git init
git add .
git commit -m "Initial NXolutionz SaaS demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nxolutionz-saas.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repo name with yours.

Optional: **GitHub Pages** → Settings → Pages → deploy from `main` →  
`https://YOUR_USERNAME.github.io/nxolutionz-saas/`

## Notes

- Front-end **demo only** (no backend, no real payments, no live RADIUS/MikroTik).
- Sample data is illustrative — not production customer data.
- Prefer a **private** repo if internal workflows should stay private.
- Never commit real WhatsApp exports, bank files, or live credentials.

## Roadmap (production)

- [ ] Auth + database
- [ ] JazzCash / EasyPaisa integration
- [ ] MikroTik / RADIUS login status
- [ ] WhatsApp Business notifications
- [ ] Cash / bank receipts module

---

NXolutionz PVT Ltd · Multan  
Contact (public site): 0303-0839-839 · info@nxolutionz.com
