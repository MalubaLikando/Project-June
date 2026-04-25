# Project June

A personalized romantic web app — a scrollable love letter built with React, TypeScript, and Framer Motion.

## What It Is

Project June is a handcrafted proposal website built to ask one very important question. It tells a story through animated sections, real photos, and personal writing, ending with an interactive prompt: *"Temwani Chiwele, Can I be your boyfriend?"*

If she says yes, she's taken to a celebration page with a FaceTime link ready to go.

## Features

- Animated storytelling — scroll-triggered Framer Motion animations bring each section to life
- Photo gallery — a grid of real shared memories
- Two-route flow — a story page (`/`) and a yes page (`/yes`)
- Mouse-tracking parallax on the confirmation page
- Floating particle effects and animated gradient backgrounds
- WhatsApp fallback for a softer "let's talk" option

## Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion
- React Router v7

## Running Locally

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── Story.tsx      # Main scrollable love letter page
│   ├── Story.css
│   ├── YesPage.tsx    # Celebration page shown after "yes"
│   └── YesPage.css
├── assets/images/     # Personal photos used in the gallery
├── App.tsx            # Route definitions
└── main.tsx
```
