# Mehdi — Data Science Student Portfolio

Personal academic portfolio of **Mehdi**, a second-year undergraduate Data Science student at **USTHB (Université des Sciences et de la Technologie Houari Boumediene)** in Algiers.

---

## Academic Background

- **Current Program**: Licence in Data Science (Year 2) at USTHB, Bab Ezzouar, Algiers (2025 — Present).
- **Secondary Education**: Baccalauréat obtained in 2025.
- **Core Coursework**: Probability & Mathematical Statistics, Linear Algebra, Relational Databases (SQL), Data Structures & Algorithms, Exploratory Data Analysis, and Introductory Machine Learning.
- **Practical Focus**: Data manipulation with Pandas and NumPy, data cleaning, exploratory pipelines, SQL querying, and baseline modeling with Scikit-learn.

---

## Project Structure & Architecture

```
├── app/
│   ├── actions/
│   │   └── contact.ts           # Server action for contact submission with validation
│   ├── api/
│   │   └── contact/route.ts     # API route handler for contact form
│   ├── components/              # Modular UI components (Hero, About, Education, Skills, etc.)
│   ├── data/
│   │   └── projects.js          # Canonical local project data (4 projects preserved)
│   ├── globals.css              # Global design system tokens and Tailwind CSS v4
│   ├── layout.js                # App Router root layout with metadata & fonts
│   └── page.js                  # Primary portfolio page
├── lib/
│   ├── repositories/            # Data access layer with automatic local fallback
│   │   ├── contactRepository.ts
│   │   ├── educationRepository.ts
│   │   ├── profileRepository.ts
│   │   ├── projectsRepository.ts
│   │   └── skillsRepository.ts
│   └── supabase/                # Centralized Supabase integration
│       ├── client.ts            # Browser client (safe without env vars)
│       ├── server.ts            # Server-side client with cookie support
│       └── types.ts             # Database and application TypeScript interfaces
├── supabase/
│   └── schema.sql               # Ready-to-run schema, RLS policies, and seed data
├── .env.example                 # Required environment variable keys
└── SUPABASE_SETUP.md            # Complete guide for connecting a Supabase project
```

---

## Supabase Integration

The project is fully prepared for Supabase:
- **Client Configuration**: Centralized browser (`lib/supabase/client.ts`) and server (`lib/supabase/server.ts`) clients using `@supabase/ssr`.
- **Row Level Security (RLS)**: Public read for portfolio content, length-validated anonymous insert for contact inquiries, admin-only read/write for received inquiries.
- **Graceful Fallback**: When environment variables are omitted, the application operates normally using local static data without errors or simulated writes.
- **Setup Guide**: See [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md) for step-by-step instructions.

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
