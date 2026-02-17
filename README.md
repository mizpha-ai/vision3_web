## Viseion3 AI
---

## Overview

AI Production Studio is a product showcase website for an all-in-one AI content creation platform that unifies **character design**, **scriptwriting**, and **video generation** into a single seamless workflow. The website presents the platform's core technology, interactive pipeline demonstrations, and production capabilities through a modern, cinematic web experience.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, the site delivers a polished Web3-inspired dark aesthetic with rich animations, glassmorphism UI, and an interactive multi-step demo flow.

---

## Features

### 🎬 Comprehensive Product Showcase
- **Three Production Pillars** — Character Studio, Script Studio, and Video Production with detailed breakdowns
- **Core Workflow Visualization** — Animated state machine diagram illustrating the "Batch Generate → Human Selects → Auto-Advance" loop
- **Five-Stage Character Pipeline** — Interactive timeline showcasing Face Generation → Photorealistic Rendering → Outfit Generation → Full-Body Composite → Detail Refinement
- **Script Pipeline** — Three-stage flow (Drafting → Style Transform → Translation)
- **Video Pipeline** — Seven distinct shot types (Wide, Frame Extraction, OTS, Dialogue, Silent, Continuation, Landscape) with workflow diagrams
- **Studio Screens** — Bento grid layout presenting all workspace screens (Dashboard, Project Home, Scene Builder, Render Queue, Asset Library, Export Center)
- **Quality Assurance** — Animated quality scoring gauge, automated detection flags, and retry policy visualization
- **Use Cases** — Expandable accordion showcasing real-world production scenarios

### 🎮 Interactive Experience Demo
- **Multi-step selection flow** — Character → Outfit → Background → Video playback
- **Dynamic branching logic** — Gender-aware outfit filtering, couple-specific background constraints
- **44 unique video combinations** — Mapped across 4 solo characters × 3 outfits × 3 backgrounds + 1 couple scenario
- **Animated step progress bar** with check-state transitions
- **Back navigation** at every step with state preservation


---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js (App Router) | 15.1 |
| **UI Library** | React | 19.x |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **Animations** | Framer Motion | 11.x |
| **Fonts** | Google Fonts (Syne, Plus Jakarta Sans) | — |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.17
- **npm** >= 9.0

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/vision3-web.git
cd vision3-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---


## Navigation

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Full product showcase with 10 animated sections |
| `/experience` | Experience | Interactive character-to-video pipeline demo |
| `/contact` | Contact | Inquiry form with simulated submission |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint checks |

---

## License

This project is proprietary. All rights reserved.

---
