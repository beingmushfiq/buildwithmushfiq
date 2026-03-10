# 🌌 BuildWithMushfiq | Autonomous AI Systems Developer Portfolio

<div align="center">
  <img src="https://raw.githubusercontent.com/beingmushfiq/buildwithmushfiq/main/public/logo.png" alt="BuildWithMushfiq Logo" width="120" height="120" />
  <h3>Modern. Intelligent. Cinematic.</h3>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbeingmushfiq%2Fbuildwithmushfiq)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/beingmushfiq/buildwithmushfiq)

</div>

---

## 🚀 Overview

**BuildWithMushfiq** is a high-fidelity, autonomous portfolio platform built for modern AI Systems Developers. It features a cinematic 3D interface, intelligent automation tools, and integrated Google Gemini AI.

This is a **frontend-only dynamic site**, optimized for one-click deployment to Vercel and Netlify. It performs all AI and GitHub logic directly in the browser.

### ✨ Key Features

- **🤖 AI Command Center (Ctrl + K):** Global neural search and contextual AI assistant.
- **🏗️ Interactive Systems Architecture:** Real-time clickable diagrams showcasing complex data flows.
- **📅 AI Project Planner:** Generate instant technical roadmaps and architectures from simple business ideas.
- **💹 ROI & Automation Calculator:** Dynamic tool for quantifying the business value of AI efficiency.
- **💬 Persistent AI Assistant:** Smart floating chatbot powered by Gemini Pro for real-time engagement.
- **🎨 Cinematic UI:** Glassmorphism, 3D workstation scenes, and adaptive liquid theme engine.
- **📊 Real-time GitHub Pulse:** Live commit tracking directly from the source repository.
- **📂 Expanded Project Gallery:** Categorized grid of 20+ diverse AI and full-stack implementations.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **AI Integration:** [Google Gemini 1.5 Pro](https://ai.google.dev/) (Client-side)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/beingmushfiq/buildwithmushfiq.git
cd buildwithmushfiq
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

---

## 🌍 Deployment

### Vercel

1. Select "Vite" as the framework preset.
2. Add `VITE_GEMINI_API_KEY` to your environment variables.
3. Deploy!

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add `VITE_GEMINI_API_KEY` to your environment variables.
4. Deploy!

---

## 📁 Project Structure

```bash
├── public/                 # Static assets (Favicons, logos, project images)
├── src/                    # Frontend React application
│   ├── components/         # Section & UI components
│   ├── data/               # Portfolio content (projects, skills)
│   ├── services/           # Client-side API connectors (Gemini, GitHub)
│   └── App.tsx             # Application routing & layout
├── vercel.json             # Vercel SPA routing
├── netlify.toml            # Netlify SPA routing
└── vite.config.ts          # Build optimization config
```

---

## 📄 License

This project is licensed under the MIT License.

<div align="center">
  Built with ❤️ by <b>BuildWithMushfiq</b>
</div>
