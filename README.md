# Jaffa Art Salon

Website for a private art salon in Old Jaffa, built with React + Vite and deployed on GitHub Pages.

**Live site:** [jaffa-art-salon.com](https://jaffa-art-salon.com)

> The repository must remain **public** for GitHub Pages to serve the site.

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- shadcn/ui components

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx gh-pages -d dist
```

The build script also generates a `404.html` (copy of `index.html`) so GitHub Pages serves the React app for all routes.

## Domain

Custom domain: `jaffa-art-salon.com` (configured via `public/CNAME`)

DNS is managed on Cloudflare with the following records pointing to GitHub Pages:

| Type  | Name | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | davidedri.github.io   |
