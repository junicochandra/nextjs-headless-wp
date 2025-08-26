# Headless WordPress Portfolio with Next.js

This is my personal portfolio project built with **Next.js 15** as the frontend and **WordPress (GraphQL)** as the headless CMS backend.  
The project demonstrates how to integrate WordPress data with a modern React-based framework for a fast, scalable, and SEO-friendly website.

**Live Portfolio:** [https://dev-junicochandra.vercel.app/](https://dev-junicochandra.vercel.app/)

---

## Features

- **Next.js 15** — App Router, Server Components, and optimized rendering
- **WordPress Headless CMS** — content managed via WordPress with GraphQL endpoint
- **GraphQL API** — efficient data fetching from WordPress
- **Tailwind CSS** — modern utility-first styling
- **Infinite scroll** — seamless content loading without page refresh
- **Dynamic routing** — slug-based pages for blog posts or projects
- **Reusable components** — Modular UI components for consistent design across the app
- **Helper utilities** — Common utility functions for formatting, styling, and data handling
- **Responsive design** — optimized for mobile, tablet, and desktop
- **SEO-friendly** — server-side rendering and metadata support

---

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [WordPress (Headless)](https://wordpress.org/)
- [GraphQL](https://graphql.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Project Structure

- `components/` — Reusable UI components (Card, Header, Footer, etc.)
- `app/` — Next.js App Router with dynamic routes (including slug pages)
- `lib/`
  - `getPosts.ts` — Fetch all posts via GraphQL
  - `getPostBySlug.ts` — Fetch single post by slug
  - `helpers/` — Utility functions
    - `timeAgo.ts` — Convert timestamps into "time ago" format (e.g. _2 days ago_)
    - `categoryColors.ts` — Assign category colors for badges/tags
- `type/` — TypeScript type definitions

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
