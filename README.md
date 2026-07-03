# Corporate Intelligence Platform

A full-stack web application for exploring corporate intelligence data — company profiles, financial metrics, and leadership information.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Architecture

```
src/
├── app/                        # Frontend (pages + API routes)
│   ├── api/companies/          # Backend API layer
│   ├── companies/              # Company pages
│   └── page.tsx                # Homepage
├── components/                 # Reusable UI components
├── lib/
│   ├── api/                    # API response helpers
│   ├── db/                     # In-memory database + seed data
│   ├── repositories/           # Data access layer
│   └── services/               # Business logic layer
└── types/                      # TypeScript interfaces
```

**Data flow:** Pages and API routes → `companyService` → `companyRepository` → in-memory `db`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/companies` | List all companies (summary) |
| GET | `/api/companies/[id]` | Get full company profile by ID |

Example response shape:

```json
{
  "data": {
    "companies": [...]
  }
}
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured companies |
| `/companies` | Full company list |
| `/companies/acme-corp` | Company profile (slug-based URLs) |

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
