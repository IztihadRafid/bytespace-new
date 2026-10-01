# ByteSpace

An online course marketplace landing experience — browse courses, explore learning paths, and discover instructors, rebuilt from a Figma design with pixel-level attention to color, type, and spacing.

**Live:** [bytespace-new-opal.vercel.app](https://bytespace-new-opal.vercel.app)

---

## Overview

ByteSpace helps learners discover courses across design, development, business, marketing, and more, while giving instructors a place to publish and manage their own content. This repo contains the marketing site: a full landing page plus authentication UI and a few supporting routes.

## Tech Stack

| Category   | Choice                                       |
| ---------- | -------------------------------------------- |
| Framework  | Next.js (App Router)                         |
| Language   | TypeScript                                   |
| Styling    | Tailwind CSS (utility-first)                 |
| Icons      | lucide-react                                 |
| Fonts      | Satoshi (self-hosted, via `next/font/local`) |
| Deployment | Vercel                                       |

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

To confirm a production build compiles cleanly before deploying:

```bash
npm run build
```

## Project Structure

```
app/            Routes — landing page, login, register, courses, creators
components/     Reusable UI pieces and page sections
lib/            Static content (courses, categories, testimonials, nav links)
public/         Static assets — logo, imagery, icons
```

Repeated UI (course cards, category chips, avatar stacks, path cards, testimonial cards) is built as small reusable components driven by data arrays in `lib/`, rather than duplicated markup per item.

## Routing

Built with the Next.js App Router, each folder under `app/` maps directly to a URL segment:

| Route           | Description                                   |
| --------------- | --------------------------------------------- |
| `/`             | Landing page                                  |
| `/login`        | Sign in                                       |
| `/register`     | Create an account                             |
| `/courses`      | Course catalog                                |
| `/courses/[id]` | Dynamic route — individual course detail page |
| `/creators`     | Creators listing                              |

Dynamic segments (like `/courses/[id]`) render per-course pages from a single template, driven by the course data in `lib/`.

## Features

- **Landing page** — hero, partner logo strip, filterable course catalog, learning paths grid, growth/stats section, creator call-to-action, testimonials, footer
- **Authentication UI** — Login and Signup pages with client-side validation
- **Course catalog** — browsable course cards with ratings, pricing, and difficulty level
- **Course detail pages** — dynamic routing per course, with tabs for overview, reviews, and about
- **Creators page** — showcases instructors on the platform
- **Responsive layout** — tuned for mobile, tablet, and desktop breakpoints
- **Design system tokens** — brand colors and typography configured through Tailwind's theme

## Known Limitations

- Authentication is presentational only — there is no backend, session handling, or data persistence.
- A handful of footer links point to routes outside the current scope and are placeholders.

## Deployment

Hosted on [Vercel](https://vercel.com), connected to the `main` branch for automatic deployments on every push.

---

Built by [Iztihad Rafid](https://github.com/IztihadRafid)
