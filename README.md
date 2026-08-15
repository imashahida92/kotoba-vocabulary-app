# 語 Kotoba — Lingo Bingo (Japanese Vocabulary Learning App)

**Assignment Category:** 003
**Live URL:** _add your deployed link here_
**GitHub Repo:** _add your repo link here_

Kotoba is a fun, interactive single-page application for learning **Japanese** vocabulary.
Users log in with Firebase, work through ten themed lessons, listen to native
pronunciation via the Web Speech API, and see real-world context for every word.

## ✨ Purpose

Retaining vocabulary is the hardest part of learning a new language. Kotoba breaks
Japanese down into ten short, focused lessons — greetings, numbers, family, food,
time, travel, verbs, feelings, shopping, and closing phrases — so every study
session has a clear, reachable goal, real audio pronunciation, and real usage
context instead of a bare dictionary definition.

## 🔑 Key Features

- **Firebase Authentication** — email/password + Google social login, protected
  (private) routes, persistent session on reload (no false redirect to `/login`
  for a logged-in user refreshing a private page).
- **10 vocabulary lessons, 60 words** — real Japanese words with pronunciation,
  meaning, part of speech, difficulty, "when to say it" context, and an example
  sentence, stored as local JSON (`src/data/vocabulary.json`).
- **Speak-it-out-loud pronunciation** — click any vocabulary card to hear it
  spoken aloud using the browser's built-in Web Speech API (`ja-JP`).
- **"When to Say" modal** — opens contextual usage and an example sentence for
  any word without leaving the lesson page.
- **Difficulty-coded cards** — cards are color-coded by `easy` / `medium` /
  `difficult`.
- **Home page** — animated image slider banner, mission/about section, an
  animated success counter (`react-countup`), a daily "Word of the Day" card
  with pronunciation playback, and a "Why Kotoba" feature grid.
- **Tutorials page (private)** — 8 embedded YouTube videos for extra practice.
- **Full auth flows** — registration with password validation (uppercase +
  lowercase + 6 character minimum), working forgot-password flow via Firebase
  `sendPasswordResetEmail`, editable profile (name + photo URL).
- **Fully responsive** — mobile, tablet, and desktop layouts with a mobile
  hamburger navigation menu.
- **Animations** — `AOS` (Animate on Scroll) used across the home page sections.
- **404 page** — themed Not Found page with a button back to Home.
- **Environment variables** — all Firebase keys are read from `.env` and never
  committed to the repository.

## 🧰 Tech Stack & npm Packages

| Package | Purpose |
|---|---|
| `react`, `react-dom` | UI library |
| `react-router-dom` | Client-side routing, private routes, SPA navigation |
| `firebase` | Authentication (email/password + Google) |
| `tailwindcss`, `postcss`, `autoprefixer` | Styling |
| `react-icons` | Icon set (Feather, Font Awesome, etc.) |
| `react-toastify` | Toast notifications for success/error messages |
| `react-countup` | Animated statistics counter on the home page |
| `aos` | Scroll-triggered animations |
| `vite` | Build tool / dev server |

## 📁 Project Structure

```
src/
  components/     Reusable UI pieces (Header, Footer, Banner, VocabCard, ...)
  contexts/       AuthContext definition
  providers/      AuthProvider — wraps the whole app with Firebase auth state
  hooks/          useAuth hook
  routes/         PrivateRoute guard
  layouts/        MainLayout (Header + Outlet + Footer)
  pages/          Route-level pages (Home, LetsLearn, Lesson, Login, ...)
  data/           vocabulary.json — 60 Japanese words across 10 lessons
  firebase/       firebase.config.js — reads keys from environment variables
```

## 🚀 Getting Started

1. **Clone and install**
   ```bash
   git clone <your-repo-url>
   cd lingo-bingo
   npm install
   ```

2. **Set up Firebase**
   - Create a project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication → Sign-in method → Email/Password** and **Google**.
   - Copy your web app config values into a `.env` file in the project root
     (see `.env.example`):
     ```
     VITE_apiKey=...
     VITE_authDomain=...
     VITE_projectId=...
     VITE_storageBucket=...
     VITE_messagingSenderId=...
     VITE_appId=...
     ```
   - Under **Authentication → Settings → Authorized domains**, add your
     Netlify/Surge/Firebase Hosting domain before testing login on the live
     site.

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment Notes

- This is a single-page app — make sure your host rewrites all routes to
  `index.html` so reloading a deep link (e.g. `/lessons/3`) doesn't 404.
  - **Netlify / Surge:** the included `public/_redirects` file handles this.
  - **Vercel:** the included `vercel.json` handles this.
  - **Firebase Hosting:** the included `firebase.json` rewrites all routes.
- Remember to add your live domain to Firebase's **Authorized domains** list,
  or Google/email login will fail on the deployed site.
- Set your `VITE_*` environment variables in your hosting provider's
  dashboard (Netlify → Site settings → Environment variables, etc.) — the
  `.env` file itself is git-ignored and won't be deployed.

## 🗣️ Pronunciation Note

The "speak" feature uses the browser's native **Web Speech API**
(`speechSynthesis`). Most systems ship with a Japanese voice already
installed. If no sound plays, check **PC Settings → Language → add
Japanese with voice pack** (or the equivalent on macOS/Linux) and reload
the page.

## 📄 License

Built as an educational assignment project. Feel free to fork and adapt it.
