# Leopold Mugisha — Full-Stack Developer Portfolio

A modern, production-ready Full-Stack Developer Portfolio built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**. Inspired by the editorial elegance of [porto.nandish.online](https://porto.nandish.online/), featuring an interactive **Particle Constellation background** and a **grounded AI Portfolio Assistant**.

---

## 🚀 Key Features

- **Editorial UI/UX Design**: Sophisticated charcoal & amber/gold aesthetic with crisp typography and subtle micro-animations.
- **Interactive Particle Constellation Background**: Built with HTML5 Canvas API in TypeScript (`ParticleBackground.tsx`). Responsive, GPU-efficient, mouse-interactive, and respects `prefers-reduced-motion`.
- **Grounded AI Portfolio Assistant**: Floating assistant widget powered by server-side `/api/chat` with Google Gemini / OpenAI support and deterministic knowledge retrieval. Never hallucinates or invents facts.
- **Featured Projects & Case Studies**: Interactive category filtering, modal case-study views, and dedicated static case-study pages (`/projects/[slug]`).
- **Comprehensive Skills Breakdown**: 5 categorized pillars with verified project context for each technology.
- **Working Contact Section**: Server-validated form (`/api/contact`) integrated with **Resend** for direct inbox delivery to `leopordbonfils@gmail.com`.
- **Ready for Netlify & Vercel**: Pre-configured with `netlify.toml` and `@netlify/plugin-nextjs`.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & PostCSS
- **Animations:** Framer Motion & HTML5 Canvas
- **Icons:** Lucide React
- **Email:** Resend API
- **AI:** Google Gemini (`gemini-2.5-flash` / `gemini-flash-latest`) + Verified Knowledge Fallback

---

## 📦 Getting Started Locally

1. Clone or navigate to the repository:
   ```bash
   git clone https://github.com/leopoldbonfils/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   ```bash
   cp .env.example .env.local
   ```
   Add your `GEMINI_API_KEY` and `RESEND_API_KEY` in `.env.local`.

4. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Netlify

1. Go to [netlify.com](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
2. Connect your GitHub repository: `leopoldbonfils/portfolio`.
3. Netlify will automatically detect `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. In **Site Configuration** > **Environment variables**, add:
   - `GEMINI_API_KEY`: *(Your Google AI Studio key)*
   - `RESEND_API_KEY`: *(Your Resend API key)*
5. Click **Deploy Site**.

---

## 👤 Author

**Leopold Mugisha (Mugisha Leopold Bonfils)**  
- Email: [leopordbonfils@gmail.com](mailto:leopordbonfils@gmail.com)  
- LinkedIn: [Mugisha Leopold Bonfils](https://www.linkedin.com/in/mugisha-leopold-697124420/)  
- GitHub: [leopoldbonfils](https://github.com/leopoldbonfils)  
- Location: Kigali, Rwanda (AUCA Software Engineering)
