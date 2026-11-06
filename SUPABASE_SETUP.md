# Supabase Integration & Setup Guide

This document explains how to connect a Supabase database to Mehdi's Data Science Portfolio.

---

## Current Architecture Status

- **Supabase Infrastructure**: **Prepared** (SDK installed, centralized clients in `lib/supabase/`, typed models in `lib/supabase/types.ts`, repositories in `lib/repositories/`, server actions, API routes, and SQL migration file in `supabase/schema.sql`).
- **Supabase Connection**: **Not connected** (requires your Supabase project credentials in `.env.local`).
- **Fallback Behavior**: Fully operational. When credentials are omitted, the application seamlessly serves verified local data without throwing errors or crashing.
- **Contact Form**: In unconfigured mode, the form honestly explains that database storage is not active and provides a pre-formatted email (`mailto:`) action. When configured, it stores messages securely in the `contact_messages` table.

---

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com/](https://supabase.com/) and sign in.
2. Click **New Project**.
3. Choose your organization, assign a project name (e.g., `mehdi-portfolio`), set a secure database password, and select your preferred region (e.g., `eu-west-1` or `eu-central-1`).

---

## Step 2: Run the Database Schema & RLS Policies

1. In your Supabase dashboard, click **SQL Editor** on the left menu.
2. Click **New Query**.
3. Copy the entire contents of [`supabase/schema.sql`](./supabase/schema.sql) and paste it into the query editor.
4. Click **Run**.

This command creates:
- `profile`: Personal and academic information.
- `education`: Academic history (reflecting Baccalauréat 2025 and USTHB Year 2).
- `skills`: Categorized skill matrices.
- `projects`: Preserves the 4 original portfolio project records.
- `contact_messages`: Inbound contact submissions with validation.
- Row-Level Security (RLS) policies allowing public reads on content tables, anonymous insert-only with length validation on contact messages, and restricting message reads to authenticated admins.

---

## Step 3: Configure Environment Variables

1. In your Supabase dashboard, navigate to **Project Settings** (gear icon) -> **API**.
2. Locate:
   - **Project URL**: `https://<your-project-ref>.supabase.co`
   - **Project API Keys**: `anon` / `public` key
3. In this project root, create a file named `.env.local` (or copy from `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

*Note: Never commit `.env.local` or expose your `service_role` secret.*

---

## Step 4: Verification

1. Start or restart the development server (`npm run dev`).
2. Refresh the portfolio in your browser.
3. The repository layer (`lib/repositories/`) will now query your Supabase instance, with automatic fallback to local records if any network query fails.
4. Submit a message in the contact section: it will now write to the `contact_messages` table in your Supabase dashboard!
