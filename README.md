# Sujal Gupta — AI/ML Developer Portfolio

A responsive, animated Next.js portfolio with a neon-green visual system, Framer Motion transitions, an interactive 3D orb powered by React Three Fiber, a searchable command deck (Ctrl/⌘+K), an animated system console, and filterable project cards.

## Requirements

- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm
- Git (for deployment)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Personalize before publishing

1. **Resume:** Replace `public/resume.pdf` with your latest résumé.
2. **GitHub and LinkedIn:** Add your real profile links in the contact section when you have them. Do not publish placeholder URLs.
3. **Projects:** Check every description and add real repository/demo links only where available. Do not add fabricated metrics.
4. **Phone and email:** Confirm you want these details public before deploying.
5. **Education:** The content currently follows the supplied résumé: GLA University, B.Tech CSE (AI & ML), pursuing 3rd year, CPI 8.00.
6. **Project #5:** The dashboard project is described based on the supplied Intuitiva internship entry. Replace this with a standalone dashboard project description if that is more accurate.

## Deploy to GitHub + Vercel

### 1. Create a Git repository

```bash
git init
git add .
git commit -m "Build interactive AI portfolio"
```

Create a new repository on GitHub, then connect it (replace the URL with your actual repository URL):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sujal-ai-portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Sign in at https://vercel.com.
2. Choose **Add New → Project**.
3. Import the GitHub repository you just created.
4. Keep the detected framework as **Next.js**.
5. Use the default build command `npm run build` and output settings.
6. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.
7. Every push to the connected branch will trigger a new deployment.

### 3. Test the live site

- Open the deployment URL on desktop and mobile.
- Check the 3D orb, navigation links, project details, and résumé link.
- Test the email and phone links.
- Confirm the public résumé and contact information are okay to share.
- Use Vercel's deployment logs if a build fails.

## Tech stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion
- Three.js, React Three Fiber, and Drei
- Lucide React icons

## Notes

- The orb is interactive: drag to rotate it; zoom is disabled.
- A CSS glow fallback appears while the 3D scene loads.
- The project cards use details disclosures so the technical notes are accessible without opening a separate page.
- The project index can be filtered by discipline.
- Press Ctrl+K (or ⌘+K on Mac) to open the searchable command deck.
- The animated system console is a visual motif, not live backend telemetry.
- The contact CTA uses `mailto:` and does not require a backend. It opens the visitor's email application; it is not a database-backed contact form.
- For production use, consider adding a real contact form provider, custom domain, analytics with consent as appropriate, and verified social profile links.
