# 🌌 BuildWithMushfiq | Autonomous AI Systems Developer Portfolio

<div align="center">
  <img src="/assets/logo.png" alt="BuildWithMushfiq Logo" width="120" height="120" />
  <h3>Modern. Intelligent. Cinematic.</h3>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbeingmushfiq%2Fbuildwithmushfiq)
[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/template/deploy?referrerId=beingmushfiq&category=ai&plugins=none&template=https%3A%2F%2Fgithub.com%2Fbeingmushfiq%2Fbuildwithmushfiq)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/beingmushfiq/buildwithmushfiq)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/beingmushfiq/buildwithmushfiq)

</div>

---

## 🚀 Overview

**BuildWithMushfiq** is a high-fidelity, autonomous portfolio platform built for modern AI Systems Developers. It features a cinematic 3D interface, intelligent automation tools, and a secure backend integrated with Google Gemini AI.

The platform is designed to showcase not just code, but the complete lifecycle of intelligent systems—from visual architecture to ROI analysis and autonomous agent orchestration.

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

### Frontend

- **Framework:** [React 19](https://react.dev/) (Concurrent Mode)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend (Serverless Ready)

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/) (TypeScript)
- **AI Integration:** [Google Gemini 1.5 Pro](https://ai.google.dev/)
- **Deployment:** Vercel Serverless Functions via `/api` bridge.

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
GEMINI_API_KEY=your_gemini_api_key_here
VITE_API_URL=/api # Use relative path for production, http://localhost:3001 for local
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

## 🌍 Deployment (Vercel)

This project is optimized for Vercel.

1.  **Framework Preset:** Select "Vite".
2.  **Environment Variables:**
    - `GEMINI_API_KEY`: Your Google AI Studio key.
    - `NODE_ENV`: `production`
    - `VITE_API_URL`: `/api` (Crucial for serverless routing).
3.  **Rewrites:** Handled automatically by `vercel.json` to bridge the Express backend with Vercel's serverless infrastructure.

---

## 📁 Project Structure

```bash
├── api/                    # Vercel Serverless entry point
├── public/                 # Static assets (Favicons, manifest, high-res project images)
├── server/                 # Express backend (TypeScript)
│   ├── controllers/        # AI & Contact logic
│   └── index.ts            # Secure API entry point
├── src/                    # Frontend React application
│   ├── components/         # Section & UI components
│   ├── data/               # Portfolio content (projects, skills)
│   ├── services/           # Backend API connectors
│   └── App.tsx             # Application routing & layout
├── vercel.json             # SPA routing & serverless config
└── vite.config.ts          # Build optimization config
```

---

## 📄 License

This project is licensed under the MIT License.

<div align="center">
  Built with ❤️ by <b>BuildWithMushfiq</b>
</div>
