# Supabase Integration & Setup Guide

This document explains how to connect and deploy a Supabase database for Mehdi's Data Science Portfolio.

---

## Current Architecture Status

- **Supabase Infrastructure**: **Prepared** (SDK installed, centralized clients in `lib/supabase/`, typed models in `lib/supabase/types.ts`, repository layer in `lib/repositories/`, server actions in `app/actions/contact.ts`, API endpoint in `app/api/contact/route.ts`, and migration file in `supabase/schema.sql`).
- **Supabase Connection**: **Not connected** (requires setting your live project credentials in `.env.local` or host settings).
- **Fallback Behavior**: Fully operational. Without credentials, the application serves verified local data without errors or simulated writes.
- **Contact Form**: In unconfigured mode, the form honestly explains that database storage is not active and provides a pre-formatted email (`mailto:`) option. When configured, it stores messages securely in the `contact_messages` table.

---

## Step 1: Create a Supabase Project

1. Navigate to [https://supabase.com/](https://supabase.com/) and log in (or create a free account).
2. Click **New Project** in your dashboard.
3. Provide project details:
   - **Name**: `mehdi-portfolio` (or your preferred name)
   - **Database Password**: Choose a strong password and save it securely.
   - **Region**: Select a geographic region closest to your target audience (e.g., `eu-west-1` Frankfurt or London).
4. Click **Create new project** and wait ~2 minutes for provisioning to finish.

---

## Step 2: Run the Database Schema & RLS Policies

1. In your Supabase project dashboard, click **SQL Editor** in the left sidebar navigation.
2. Click **+ New Query**.
3. Open the file [`supabase/schema.sql`](./supabase/schema.sql) in this repository, copy its entire contents, and paste them into the SQL Editor.
4. Click **Run** (or press `Ctrl+Enter` / `Cmd+Enter`).

### What this migration creates:
- **`profile`**: Stores bio, university, faculty, and academic year details.
- **`education`**: Stores the verified academic timeline (Baccalauréat 2025, USTHB Year 2, and self-directed practice).
- **`skills`**: Stores skill categories and proficiencies.
- **`projects`**: Pre-populates the 4 original portfolio projects with matching IDs and properties.
- **`contact_messages`**: Secure table for visitor inquiries with input constraints (`status`, `name`, `email`, `message`, `created_at`).
- **Indexes**: Optimal indexing on `sort_order`, `created_at desc`, and `status`.
- **Row Level Security (RLS)**:
  - Content tables (`profile`, `education`, `skills`, `projects`): Public read access (`SELECT`) enabled for all visitors; administrative modifications restricted to authenticated owners.
  - Contact messages (`contact_messages`): Anonymous visitors can only `INSERT` (with strict length validation); public reads/updates/deletions are blocked. Only authenticated admins can read and manage inquiries.

---

## Step 3: Configure Local Environment Variables

1. In your Supabase dashboard, click **Project Settings** (gear icon) -> **API** (or **Data API**).
2. Copy the following credentials:
   - **Project URL**: `https://<your-project-ref>.supabase.co`
   - **Project API Keys**: `anon` / `public` key
3. In the project root, create a file named `.env.local` (referenced from `.env.example`):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-public-key
```

> **Security Note**: Never commit `.env.local` or expose your `service_role` secret key in client-side code. `.env.local` is already ignored in `.gitignore`.

---

## Step 4: Deploying Environment Variables to Vercel

When hosting your portfolio on Vercel:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and select your portfolio project.
2. Navigate to **Settings** -> **Environment Variables**.
3. Add the two variables:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
     - **Value**: `https://your-project-ref.supabase.co`
     - **Environments**: Check `Production`, `Preview`, and `Development`.
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **Value**: `your-actual-anon-public-key`
     - **Environments**: Check `Production`, `Preview`, and `Development`.
4. Click **Save**.
5. Trigger a **Redeploy** on Vercel (under the **Deployments** tab, click **Redeploy**) so the build captures the new environment variables.

---

## Step 5: Testing the Integration

### 1. Verify Fallback Behavior (Without Supabase Credentials)
- With no `.env.local` present, run `npm run dev` and navigate to the portfolio.
- Verify that the four projects, skills, and academic timeline display without console or build errors.
- In the contact form, submit a test inquiry: verify that the application displays an honest message indicating database storage is unconfigured and offers a one-click pre-filled email draft (`mailto:`).

### 2. Verify Live Connection (With Supabase Credentials)
- Add valid credentials to `.env.local` and restart the dev server.
- Submit a valid test message in the contact form.
- Confirm the form displays: *"Your message has been securely recorded in the database."*
- Check your Supabase Dashboard under **Table Editor** -> `contact_messages` to view your submitted inquiry.
- Try an empty form or invalid email: confirm that validation errors are returned immediately without submitting.
