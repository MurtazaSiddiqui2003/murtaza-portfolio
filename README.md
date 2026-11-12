# Murtaza Siddiqui — Portfolio

A personal freelance portfolio built with **Next.js (App Router)**, **JavaScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Production

```bash
npm run build
npm run start
```

## Project structure

- `app/layout.js` — root layout and SEO metadata
- `app/page.js` — homepage sections and project content
- `app/components/site-header.js` — responsive navigation
- `app/globals.css` — global design system and responsive styling

Project preview graphics are temporary illustrations. Replace them with approved project screenshots before public launch.


## Private admin

The private project manager is available at `/admin`. It has no public registration.

Add these environment variables to Vercel (Production and Preview if you want to test admin on previews):

- `ADMIN_PASSWORD` — your private admin login password.
- `ADMIN_SESSION_SECRET` — a random secret of at least 32 characters used to sign secure admin sessions.
- `GITHUB_TOKEN` — a GitHub fine-grained personal access token with **Contents: Read and write** access to this repository.
- `GITHUB_REPOSITORY` — defaults to `MurtazaSiddiqui2003/murtaza-portfolio`.
- `GITHUB_CONTENT_BRANCH` — defaults to `main`.

Generate a session secret locally with:

```bash
openssl rand -base64 48
```

Keep all real credentials in Vercel Environment Variables. Never commit them to this repository or expose them through a `NEXT_PUBLIC_` variable.

Publishing from `/admin` commits `content/projects.json` to the configured GitHub branch. That commit triggers the connected Vercel deployment. Draft edits remain in the browser until you choose **Publish changes**.
