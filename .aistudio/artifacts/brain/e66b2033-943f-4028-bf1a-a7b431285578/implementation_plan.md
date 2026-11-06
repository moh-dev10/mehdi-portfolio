# Source-Code Audit & Prioritized Implementation Plan: Mehdi Portfolio

Comprehensive audit comparing the uploaded Next.js repository (`mehdi-portfolio`) against the deployed/reference implementation (`index.html`), followed by a prioritized roadmap for bringing the application to full parity and production quality.

---

## Part 1: Comprehensive Source-Code Audit

### 1. Existing Sections and Their Implementation Status

| Component / Section | File Path | Status | Notes & Verification |
| :--- | :--- | :--- | :--- |
| **Navigation** | `app/components/Navbar.jsx`, `MobileNav.jsx` | ⚠️ **Incomplete / Partial** | Contains links for `#about`, `#skills`, `#projects`, `#education`, and `#contact`, plus desktop "Hire Me" button. Targets for `#education` and `#contact` do not exist in the DOM. |
| **Hero Section** | `app/components/Hero.jsx` | ⚠️ **Functional with Broken CTAs** | Clean layout, accuracy metric, inline SVG trend chart, floating status pills. The "Get in touch" button targets `#contact`, which is missing. Stats say "6 Projects shipped", but only 4 projects exist in data. |
| **Marquee Banner** | `app/components/Marquee.jsx` | ✅ **Complete** | Seamless infinite horizontal ticker with hover pause. Fully functional. |
| **About Section** | `app/components/About.jsx` | ✅ **Complete** | Bio, 3 focus area cards (EDA, ML, Data Viz), and USTHB student profile card. Consistent with reference content. |
| **Technical Skills** | `app/components/Skills.jsx`, `RadarCahrt.jsx` | ⚠️ **Functional with Visual Bugs** | 8 skill bars, custom SVG radar chart, and exploring tags. File name contains typo (`RadarCahrt.jsx`). Skill dots use dynamic interpolation (`bg-${skill.color}`) which fails Tailwind static extraction. |
| **Featured Projects** | `app/components/Projects.jsx`, `ProjectCard.jsx` | ⚠️ **Incomplete** | Only 4 projects rendered from `app/data/projects.js` using external Unsplash images. Category filters (All, ML, Visualization, NLP, Analysis) and custom visual cards from the reference design are missing. |

---

### 2. Missing Sections (Present in Reference `index.html` but Absent in Next.js)

1. **Section 04 — Case Study / Deep Dive (`#case`)**:
   - **Algerian Real Estate Price Predictor deep dive**:
     - Key metrics banner: $R^2 = 0.89$, 18.4k listings cleaned, $-24\%$ MAE reduction, 12 engineered features.
     - Interactive 3-tab system: **Problem**, **Approach**, and **Results**.
     - Benchmark model comparison chart (OLS baseline, Ridge, Random Forest, Gradient Boosting, Tuned GBM).
2. **Section 05 — Education Timeline (`#education`)**:
   - Vertical timeline with connected glowing node markers:
     - **2024 — Present**: *Licence en Data Science (2nd Year)* at USTHB (Algiers).
     - **2023 — 2024**: *Baccalauréat — Experimental Sciences* (Mention Bien).
     - **Ongoing**: *Self-Directed Applied Practice* (Kaggle & open datasets).
3. **Section 06 — Code & Network (`#connect`)**:
   - Interactive profile cards:
     - **GitHub Card**: `@mehdi-ds`, 24 repositories, 3 ML projects, daily commit track record.
     - **LinkedIn Card**: `in/mehdi-datascience`, internship readiness, Algiers location, remote-friendly badge.
4. **Section 07 — Interactive Contact Form & Details (`#contact`)**:
   - Working contact form with name, email, subject, message, and client-side feedback toast.
   - Direct contact card with verified student details: `mehdi.datasci@outlook.com`, Algiers location, response time (<24h), and summer internship availability callout.
5. **Footer**:
   - Copyright notice, USTHB data science badge, social links, and smooth back-to-top anchor (`#hero`).
6. **Scroll Progress Indicator (`#progress`)**:
   - Fixed top 2px glowing gradient scroll indicator reflecting reading progress.

---

### 3. Broken or Incomplete Navigation Links

- **Desktop Navbar**:
  - `href="#education"`: Navigates to nothing (anchor target does not exist).
  - `href="#contact"`: Navigates to nothing (anchor target does not exist).
  - "Hire Me" button `href="#contact"`: Navigates to nothing.
- **Mobile Drawer**:
  - `href="#education"` and `href="#contact"`: Both broken.
- **Hero CTA**:
  - "Get in touch" (`href="#contact"`): Broken.
- **Project Cards**:
  - `githubUrl: "#"` and `demoUrl: null`: Empty stub links without project deep-dive links.

---

### 4. Responsive Design & Layout Issues

- **Mobile Navigation Drawer**:
  - `MobileNav.jsx` lacks an outside-click handler or escape key listener.
  - No dimmed backdrop overlay when the menu is open, leading to visual clash with underlying hero elements.
- **Skills Column Stacking**:
  - `lg:grid-cols-[1.25fr_0.75fr]` abruptly shifts at 1024px; intermediate tablet viewports benefit from refined padding and alignment.
- **Projects Grid**:
  - Lacks consistent card height alignment when descriptions vary in length.

---

### 5. UI/UX & Styling Inconsistencies

- **Dynamic Tailwind Color Purge in `Skills.jsx`**:
  - Code uses ``className={`size-2 rounded-full bg-${skill.color}`}``. Tailwind CSS v4 scans code statically and purges unused dynamic strings. The skill dot colors (`bg-sky`, `bg-violet`, `bg-mint`, `bg-amber`, `bg-pink`) fail to compile and render as transparent.
  - *Fix*: Map skill colors through explicit static lookup objects.
- **Navbar Button Contrast**:
  - The desktop "Hire Me" button currently uses hardcoded `bg-white text-black`, creating an abrupt contrast spike against the dark aesthetic (`#070b12` background) compared to the glowing gradient aesthetic.
- **Missing Active Scrollspy**:
  - The navigation does not highlight the active section as the user scrolls through the page.

---

### 6. Content Inconsistencies & Statistics Verification

- **Hero Stat vs. Project Count**:
  - Hero proudly displays **6 Projects shipped**, but `app/data/projects.js` only provides 4 entries.
  - The reference design specifies the exact 6 data science projects:
    1. *Algerian Real Estate Price Predictor* ($R^2 = 0.89$)
    2. *Algeria COVID-19 Data Dashboard* (58 wilayas tracked)
    3. *Telecom Customer Churn Classifier* (AUC $0.91$)
    4. *Arabic Sentiment Analysis on Reviews* (F1 $0.86$)
    5. *E-Commerce Sales — Exploratory Analysis* (240k transactions)
    6. *Student Performance Clustering* (Silhouette $0.62$)
- **Context for Hero Metric**:
  - The hero preview card displays `model_metrics.ipynb` with 94.2% accuracy, 18.4k rows, and 12 features. Without Section 04 (Real Estate Case Study), this preview lacks narrative justification.
- **Verified Persona & Student Information**:
  - Name: Mehdi
  - Role: 2nd-year Data Science student at USTHB (Université des Sciences et de la Technologie Houari Boumediene, Algiers)
  - Direct Email: `mehdi.datasci@outlook.com`
  - GitHub: `@mehdi-ds`
  - LinkedIn: `in/mehdi-datascience`

---

### 7. Technical Issues & Performance Opportunities

- **Component Name Typo**:
  - `app/components/RadarCahrt.jsx` has a typo in its file name and component export. Should be normalized to `RadarChart.jsx`.
- **Root `index.html` Artifact**:
  - The repository contains a standalone `index.html` at the project root alongside the Next.js App Router structure. It should be kept strictly as a read-only audit reference during migration and not served.
- **Next.js Config Optimization**:
  - `next.config.mjs` should include `output: 'standalone'` for clean containerized hosting per migration specifications.
- **Instant SVG Visualizations vs External Heavy Unsplash Images**:
  - Project cards currently load large Unsplash photos with potential layout shifts and network delays. Migrating the custom geometric SVG visualizations from the reference design provides instant, zero-latency visual fidelity tailored to each project's domain.

---

## Part 2: Prioritized Implementation Plan

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRIORITIZED ROADMAP                             │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 1: Data & Link Integrity                                         │
│   ├── Restore 6 Data Science Projects in `projects.js`                 │
│   └── Fix dynamic Tailwind classes in `Skills.jsx` & rename RadarChart │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 2: Missing Sections Implementation                               │
│   ├── Build Section 04: Case Study (`CaseStudy.jsx`) with Tabs & Chart │
│   ├── Build Section 05: Education Timeline (`Education.jsx`)           │
│   ├── Build Section 06: Connect Cards (`Connect.jsx`)                  │
│   ├── Build Section 07: Contact Form & Info (`Contact.jsx`)            │
│   └── Build Footer (`Footer.jsx`) & Scroll Progress Indicator          │
├────────────────────────────────────────────────────────────────────────┤
│ Phase 3: Interactive Polish & Navigation Integration                   │
│   ├── Connect all anchors in `Navbar.jsx`, `MobileNav.jsx`, & `Hero`   │
│   ├── Implement project category filtering in `Projects.jsx`           │
│   ├── Add active scrollspy and mobile drawer backdrop                  │
│   └── Verification via `compile_applet` and `lint_applet`              │
└────────────────────────────────────────────────────────────────────────┘
```

### Phase 1: Data & Link Integrity (Immediate Priority)
1. **Fix File Naming & Static Tailwind Colors**:
   - Rename `RadarCahrt.jsx` to `RadarChart.jsx` and update import in `Skills.jsx`.
   - Replace dynamic string interpolation `bg-${skill.color}` with a typed color map (`sky: "bg-sky text-sky"`, `violet: "bg-violet text-violet"`, etc.).
2. **Reconcile Projects Dataset**:
   - Update `app/data/projects.js` to contain the full set of 6 authentic projects with verified metrics, accurate category tags (`ml`, `viz`, `nlp`, `eda`), and rich descriptions.

### Phase 2: Missing Sections Implementation
1. **Implement `CaseStudy.jsx` (`#case`)**:
   - Header with case badge, title, subtitle, and 4-metric grid ($R^2$, 18.4k rows, $-24\%$ MAE, 12 features).
   - Interactive tab switcher between **Problem**, **Approach**, and **Results**.
   - Model comparison bar chart visualization (using clean inline SVG or SVG bar representation matching design tokens).
2. **Implement `Education.jsx` (`#education`)**:
   - Vertical timeline layout with glowing node connectors, date tags, degree details for USTHB, high school baccalaureate, and self-directed practice.
3. **Implement `Connect.jsx` (`#connect`)**:
   - Dual-card layout for GitHub (`@mehdi-ds`) and LinkedIn (`in/mehdi-datascience`) with repo counts, commit frequency, and profile links.
4. **Implement `Contact.jsx` (`#contact`)**:
   - Interactive contact form with input fields, message area, form validation, and feedback toast.
   - Direct contact card with verified email (`mehdi.datasci@outlook.com`), location, and summer internship availability callout.
5. **Implement `Footer.jsx`**:
   - Copyright notice, back-to-top button, and secondary navigation links.

### Phase 3: Interactive Polish & Navigation Wiring
1. **Connect Anchors in `Navbar.jsx`, `MobileNav.jsx`, and `Hero.jsx`**:
   - Verify every nav link (`#about`, `#skills`, `#projects`, `#case`, `#education`, `#contact`) smoothly scrolls to its existing section.
2. **Category Filtering in `Projects.jsx`**:
   - Add filter chips: **All projects**, **Machine Learning**, **Visualization**, **NLP**, and **Analysis**.
   - Filter active cards with smooth state transitions.
3. **Scroll Progress & Atmosphere**:
   - Add fixed 2px scroll progress bar at the top of the viewport.
   - Maintain the existing dark mode design tokens and atmospheric depth.

### Phase 4: Final Verification
- Run `compile_applet` and `lint_applet` to guarantee zero build errors, zero broken imports, and clean execution.
