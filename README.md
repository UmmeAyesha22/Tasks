# YSSE React Main Portal (Week 8: Tailwind CSS)

A multi-page YSSE Main Portal built with React, Vite and React Router DOM (Week 7 assignment). All notices and programs are **sample data**.

## Technologies
React 18, Vite, React Router DOM 6, Tailwind CSS 4 (via @tailwindcss/vite)

## Features
Routes: `/`, `/about`, `/notices`, `/programs`, `/programs/:id`, `/contact`, 404. Shared layout with `Outlet`, NavLink active styling, mobile menu, reusable cards, validated controlled contact form (frontend only), responsive design.

## Run locally
```
npm install
npm run dev
```

## Logo
Copy your YSSE logo to `public/logo.png`. If it is missing, a text logo is shown.

## Tailwind setup
`npm install tailwindcss @tailwindcss/vite`, the plugin is added in `vite.config.js`, and `src/index.css` starts with `@import "tailwindcss";` plus a small `@theme` block for the colour palette, serif font and ticker animation.
