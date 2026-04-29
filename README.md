# Codimize — React App

Premium IT services website for Codimize Technologies.

## Project Structure

```
src/
├── App.jsx                   ← Root router (add pages here)
├── main.jsx                  ← Entry point
├── styles/
│   └── global.css            ← All global CSS, animations, utility classes
├── data/
│   └── siteData.js           ← All text content, arrays (edit copy here)
├── hooks/
│   └── useInView.js          ← IntersectionObserver hook for scroll animations
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        ← Sticky nav with mobile menu
│   │   └── Footer.jsx        ← Footer with links
│   └── ui/
│       ├── Reveal.jsx        ← Scroll-triggered fade+slide animation wrapper
│       ├── GeoBg.jsx         ← SVG geometric backgrounds (3 variants)
│       ├── Particles.jsx     ← Animated canvas constellation
│       ├── Marquee.jsx       ← Infinite scrolling tech stack strip
│       ├── CursorGlow.jsx    ← Mouse-following glow (ref-based, no re-renders)
│       └── NoiseOverlay.jsx  ← Subtle film-grain texture
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Portfolio.jsx
    ├── Careers.jsx
    └── Contact.jsx
```

## Quick Start

**Requirements:** Node.js 18+ installed

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy to Vercel, Netlify, or any static host.

## How to Edit Content

All copy lives in **`src/data/siteData.js`**:
- Add/remove services → edit `SERVICES` array
- Add portfolio projects → edit `PORTFOLIO` array
- Update testimonials → edit `TESTIMONIALS` array
- Change Careers → edit `CAREERS` array
- Update contact info → edit `CONTACT_INFO` array

## How to Add a New Page

1. Create `src/pages/MyPage.jsx`
2. Add it to the `PAGES` map in `src/App.jsx`
3. Add the name to `NAV_LINKS` in `src/data/siteData.js`

## Deploy to Vercel (1 minute)

```bash
npm install -g vercel
vercel
```

Or drag-drop the project folder at **vercel.com/new**.
