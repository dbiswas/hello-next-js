# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.0.3 application using React 19, TypeScript 5, and Tailwind CSS 4. It follows the App Router architecture (not Pages Router).

## Development Commands

**Start development server:**
```bash
npm run dev
```
The app runs at http://localhost:3000

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

**Lint code:**
```bash
npm run lint
```

## Project Architecture

### App Router Structure

This project uses Next.js App Router (located in `app/` directory):

- `app/layout.tsx` - Root layout component that wraps all pages. Includes font configuration (Geist Sans and Geist Mono) and global CSS imports
- `app/page.tsx` - Home page component (the "/" route)
- `app/globals.css` - Global styles including Tailwind directives

### TypeScript Configuration

- Target: ES2017
- Module: esnext with bundler resolution
- Strict mode enabled
- Path alias `@/*` maps to project root (e.g., `@/app/page.tsx`)

### Styling

- Tailwind CSS 4 with PostCSS
- Supports dark mode via `dark:` prefix classes
- Font variables: `--font-geist-sans` and `--font-geist-mono`

### ESLint Configuration

Uses Next.js recommended ESLint configs:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Conventions

- All components are React Server Components by default (unless marked with `'use client'`)
- Images should use Next.js `<Image>` component from `next/image` for optimization
- Font loading uses `next/font/google` for automatic optimization
- Metadata is exported from page/layout files for SEO
