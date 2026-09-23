## A. Adding a new project (the main workflow)

Everything about a project — cards, the case-study page, categories, links,
screenshots — comes from **one file**:

```
src/data/assets/projects.ts
```

To add a project:

1. Open `src/data/assets/projects.ts`.
2. Copy one of the existing objects in the `projects` array (the `roofing`
   one is a good template if it's a concept project; the `elite-warehouse`
   one if it's a real client project).
3. Paste it into the array and edit these fields:

```ts
{
  id: '5',                          // any unique string
  slug: 'bakery-website',           // used in the URL: /work/bakery-website
  title: 'Bakery Website',
  category: 'Food & Beverage',
  status: 'concept',                // 'concept' | 'real-client'
  year: 2026,
  excerpt: 'One-line summary shown on the project card.',
  overview: 'Longer paragraph for the case-study page.',
  challenge: '...',
  approach: '...',
  designDecisions: ['...', '...'],
  keyFeatures: ['...', '...'],
  role: 'Design & Development',
  technologies: ['React', 'Tailwind CSS', 'Vite'],
  outcome: '...',
  thumbnail: '/assets/assets/projects/bakery/cover.jpg',
  screenshots: [
    { src: '/assets/projects/bakery/desktop.jpg', label: 'Desktop' },
    { src: '/assets/projects/bakery/tablet.jpg', label: 'Tablet' },
    { src: '/assets/projects/bakery/mobile.jpg', label: 'Mobile' },
  ],
  liveUrl: 'https://example.com',    // omit this line entirely if there's no live URL
  client: {                          // only include this for REAL client projects
    name: 'Client Company',
    url: 'https://client-site.com',
  },
}
```

4. Save the file.

That's it — the project now automatically appears on the homepage's
"Featured Work" section, on `/work`, and gets its own case-study page at
`/work/bakery-website`. Nothing else needs to be touched.

**Important:** only add a `client` field once the client has actually given
permission to be named and linked publicly. Leave it out for self-initiated
concepts, and the page will automatically show "Self-Initiated Concept
Project" instead of a client-verification block.

---

## B. Adding screenshots

Folder structure (already created, with placeholders in place):

```
public/assets/projects/
  elite-warehouse/
  roofing/
  auto-repair/
  real-estate/
```

For a **new** project, create a new folder under `public/assets/projects/<slug>/`
and add these files (these exact names, matching what's referenced in
`projects.ts`):

- `cover.jpg` — used as the project card thumbnail and case-study hero image (recommend ~1200×675)
- `desktop.jpg` — desktop screenshot (~1280×800)
- `tablet.jpg` — tablet screenshot (~768×1024)
- `mobile.jpg` — mobile screenshot (~390×844)

Then reference them in the project's `thumbnail` and `screenshots` fields
exactly as shown in section A. The four existing project folders already
contain labeled placeholder images — just replace those files in place
(keep the same filenames) once you have real screenshots.

---

## C. Adding a demo / live URL

Add or edit the `liveUrl` field on the project object in
`src/data/assets/projects.ts`. If there's no live demo yet, remove the `liveUrl`
line entirely — the "Visit live website" button only renders when it's
present.

---

## D. Editing case-study content

All case-study text lives in the same project object in
`src/data/assets/projects.ts` — `overview`, `challenge`, `approach`,
`designDecisions`, `keyFeatures`, `role`, `technologies`, and `outcome`.
Edit the strings/arrays directly; the page layout (`src/pages/ProjectDetailPage.tsx`)
never needs to change for a content edit.

---

## E. Adding a testimonial

Testimonials are hidden by default. To add a real one, add a `testimonial`
field to the relevant project in `src/data/assets/projects.ts`:

```ts
testimonial: {
  quote: 'The real quote from your client.',
  author: 'Client Name',
  role: 'Owner, Company Name',
}
```

The testimonial block (`src/components/project/ClientTestimonial.tsx`)
automatically appears on that project's case-study page once this field
exists, and stays hidden for every project that doesn't have one. Never put
placeholder text in this field.

---

## F. Editing social links and email

Both live in one place: `src/data/content.ts`

```ts
export const siteConfig = {
  name: 'Mahedi Raza',
  title: 'Web Designer & Developer',
  email: 'hello@mahediraza.com',
  socials: {
    linkedin: 'https://linkedin.com/in/mahedi-raza',
    github: 'https://github.com/mahedi-raza',
    instagram: 'https://instagram.com/mahedi.raza',
  },
}
```

The footer, header CTA, and contact page all read from this object.

---

## G. Changing CTA / marketing text

- Hero headline & subheading: `src/components/home/Hero.tsx`
- Closing CTA banner ("Have a website that isn't doing its job?"):
  `src/components/home/CTABanner.tsx`
- Services list, process steps, "why work with me" reasons:
  `src/data/content.ts` (edit the `services`, `processSteps`, and `reasons`
  arrays — the sections that render them never need to change)

---

## H. File map (quick reference)

```
src/
  data/
    projects.ts      ← the single source of truth for all project content
    content.ts        ← site name, email, socials, nav, services, process, reasons
  components/
    ui/               ← Button, Reveal, SectionHeading, StatusPill (shared primitives)
    layout/           ← Header, Footer, PageTransition
    home/              ← homepage sections (Hero, FeaturedWork, Services, etc.)
    project/          ← ProjectCard, ScreenshotGallery, ProjectVerification,
                          ClientTestimonial, BehindTheBuild — used on case-study pages
  pages/              ← one file per route (HomePage, WorkPage, ProjectDetailPage,
                          AboutPage, ContactPage, NotFoundPage)
  app/router.tsx      ← route definitions
public/
  projects/<slug>/    ← screenshots per project
```

## I. How a new project "just appears" everywhere

`src/data/assets/projects.ts` exports one array. Every place that shows a project —
the homepage "Featured Work" grid, the `/work` listing, and the dynamic
`/work/:slug` case-study route — imports from that same array and either
maps over it or looks a single project up by `slug`. There is no second
place that lists projects, so adding one object is the only step needed.
