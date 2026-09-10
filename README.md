# BeThere

A simple, warm, single-page React + TypeScript + Vite + Tailwind website for BeThere — a free, independent companionship initiative in Malaysia.

## 1. Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

To verify a production build:

```bash
npm run build
npm run preview
```

## 2. Replace the placeholders

Edit `src/config.ts`:

- `founder`: `[Your Name]`
- `instagramUrl`: `INSTAGRAM_URL`
- `requestFormUrl`: `REQUEST_FORM_URL`

The placeholders are intentionally used across every CTA and Instagram link.

## 3. GitHub Pages

1. Create a GitHub repository and push this project.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Add a workflow at `.github/workflows/deploy.yml`.
5. Commit and push; GitHub Actions will build and deploy the site.

The Vite `base` is set to `./`, so it works for a project repository as well as a root Pages site.

## Project structure

```text
bethere/
├── public/
│   ├── bethere-logo.png
│   └── bethere-logo-original.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ServiceCards.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Safety.tsx
│   │   ├── Founder.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── config.ts
│   ├── index.css
│   └── main.tsx
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```
