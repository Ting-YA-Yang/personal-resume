# Personal Resume

A bilingual personal resume and portfolio built with Astro, TypeScript, MDX, native CSS, and a small React island.

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

The local development server uses `/`. GitHub Actions automatically builds the production site with `/personal-resume` as its base path.

## Content

- Edit homepage copy and experience data in `src/components/HomePage.astro`.
- Edit shared translations in `src/lib/i18n.ts`.
- Add project case studies under `src/pages/projects/` and `src/pages/en/projects/`.
- Replace the placeholder email and LinkedIn URL in the header, homepage, and footer.

## Custom domain

When a custom domain is ready, set `SITE_URL` to the full domain and update `astro.config.ts` so `base` remains `/` during the GitHub Pages build.
