# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # Start development server
bun run build    # Production build
bun run start    # Start production server
bun run lint     # Run ESLint
```

> Dependencies are managed with `bun` (bun.lock present).

## Architecture

This is a **Next.js 16 (App Router)** project with React 19, TypeScript, and Tailwind CSS v4.

- `app/layout.tsx` — Root layout. Sets up Google Fonts (`Montserrat` as `--font-montserrat`, `Space Grotesk` as `--font-space-grotesk`) and global CSS variables.
- `app/globals.css` — Imports Tailwind via `@import "tailwindcss"` (Tailwind v4 syntax). Defines CSS variables `--background` (#000) and `--foreground` (#fff).
- `app/page.tsx` — Home route, composes page from section components.
- `app/components/sections/` — Page section components prefixed with `AppSection` (e.g., `AppSectionHero`).

## Key Conventions

- Path alias `@/*` maps to the repo root (e.g., `@/app/components/...`).
- Next.js Image component is configured to prefer AVIF then WebP (`next.config.ts`).
- TypeScript strict mode is enabled.
- Tailwind v4 uses `@import "tailwindcss"` instead of the v3 `@tailwind` directives.