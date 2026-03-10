import { 
  Code2, 
  Cpu, 
  Globe, 
  Bot, 
  Database, 
  Layout, 
  Zap, 
  BarChart3, 
  ShoppingCart, 
  Layers, 
  Workflow,
  MessageSquare,
  Settings,
  Rocket
} from 'lucide-react';

export const personalInfo = {
  name: "BuildWithMushfiq",
  role: "AI-Powered Web Systems Developer",
  tagline: "Building intelligent web systems that automate businesses, convert users, and scale digital operations. ⚡🤖",
  location: "Dhaka, Bangladesh",
  email: "beingmushfiq@gmail.com",
  github: "https://github.com/beingmushfiq",
  portfolio: "https://thisismushfiq.blogspot.com",
  bio: "I am an AI-powered full-stack developer focused on building intelligent digital systems that automate businesses and improve online performance. I specialize in combining modern web technologies with AI to create scalable platforms, automation tools, and high-conversion websites."
};

export const skills = [
  {
    category: "Core Development",
    items: ["Full Stack Web Development", "Frontend Architecture", "Backend System Design", "REST API Development", "Database Design & Optimization"]
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "React / Modern JS Frameworks", "Responsive Design"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP / Laravel", "API Integration", "Authentication Systems"]
  },
  {
    category: "AI & Automation",
    items: ["AI-Powered Web Apps", "AI Workflow Automation", "AI Chatbot Integration", "OpenAI / LLM Integration", "Business Process Automation"]
  }
];

export const services = [
  {
    title: "Autonomous Web Architectures",
    description: "End-to-end web applications engineered with self-managing systems, dynamic rendering, and robust backend scalability.",
    icon: Code2
  },
  {
    title: "Intelligent Workflow Automation",
    description: "Custom logic engines that eliminate manual repetitive tasks, seamlessly connecting your existing SaaS tools and databases.",
    icon: Workflow
  },
  {
    title: "AI Agent Ecosystems",
    description: "Context-aware LLM agents specifically trained on your business data to handle customer support, lead qualification, and internal queries.",
    icon: Bot
  },
  {
    title: "Custom Neural Implementations",
    description: "Integration of state-of-the-art machine learning APIs (Gemini, OpenAI) directly into your platform's core functionalities.",
    icon: Cpu
  },
  {
    title: "High-Conversion Interfaces",
    description: "Next-generation 3D UI/UX design featuring glassmorphism, fluid animations, and responsive layouts that captivate users.",
    icon: Layout
  },
  {
    title: "Data-Driven E-Commerce Solutions",
    description: "Scalable online storefronts equipped with AI-powered product recommendations and automated abandoned cart recovery systems.",
    icon: ShoppingCart
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Nexus: Enterprise Intelligence",
    description: "A centralized command center for enterprise AI agents, managing multi-modal workflows and real-time data visualisations.",
    features: ["Multi-Agent Orchestration", "Real-time Neural Visualization", "Secure Data Guardrails", "Custom LLM Fine-tuning"],
    tech: ["React", "Node.js", "PostgreSQL", "Gemini 1.5 Pro"],
    image: "/src/assets/project_ai_nexus_1773123010000_png_1773123048710.png",
    github: "https://github.com/beingmushfiq/ai-nexus"
  },
  {
    id: 2,
    title: "Quantum Ops: Cloud Infrastructure",
    description: "Cloud-native infrastructure management platform with quantum-resistant encryption and automated scaling logic.",
    features: ["Auto-Scaling Architectures", "Quantum-Safe Encryption", "Multi-Cloud Monitoring", "Predictive Load Balancing"],
    tech: ["Next.js", "Go", "Docker", "Terraform"],
    image: "/src/assets/project_quantum_ops_1773123011000_png_1773123064341.png",
    github: "https://github.com/beingmushfiq/quantum-ops"
  },
  {
    id: 4,
    title: "Sentinel AI: Threat Detection",
    description: "Cybersecurity monitoring platform that uses anomalous behavior detection to stop zero-day exploits in real-time.",
    features: ["Real-time Intrusion Detection", "Automated Threat Isolation", "Behavioral Biometrics", "Secure Logs with Blockchain"],
    tech: ["Python", "TensorFlow", "Kafka", "React"],
    image: "/src/assets/project_sentinel_ai_1773123013000_png_waitforprevioustools_true_1773123112174.png",
    github: "https://github.com/beingmushfiq/sentinel-ai"
  },
  {
    id: 5,
    title: "Galaxy Search: Semantic Engine",
    description: "A next-generation search engine that uses vector embeddings to provide deep semantic understanding of structured and unstructured data.",
    features: ["Vector-based Search", "Natural Language Queries", "Autonomous Data Indexing", "Multi-lingual Support"],
    tech: ["Pinecone", "LangChain", "Node.js", "Vite"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/galaxy-search"
  },
  {
    id: 14,
    title: "Fin Track: AI Financial Advisor",
    description: "Personal finance management tool that uses AI to predict future expenses and provide investment suggestions.",
    features: ["Expense Prediction Engine", "Smart Budgeting Advice", "Investment Portfolio Tracker", "Secure Banking Integration"],
    tech: ["Flutter", "Dart", "Firebase", "Python"],
    image: "/src/assets/project_fin_track.png",
    github: "https://github.com/beingmushfiq/fin-track"
  },
  {
    id: 3,
    title: "Neural Serve: API Gateway",
    description: "High-performance API gateway specifically designed for serving large language model requests with sub-millisecond latency.",
    features: ["LLM Request Caching", "Rate Limiting & Throttling", "Semantic Load Balancing", "Unified AI Provider Interface"],
    tech: ["Rust", "Redis", "gRPC", "WebAssembly"],
    image: "/src/assets/project_neural_serve_1773123012000_png_1773123084890.png",
    github: "https://github.com/beingmushfiq/neural-serve"
  },
  {
    id: 19,
    title: "Data Hub: ETL Automation",
    description: "Simplified ETL platform for data engineers to build automated pipelines with integrated data quality cleaning via AI.",
    features: ["Visual Pipeline Designer", "AI-Driven Data Cleaning", "Schema Mapping AI", "Multi-Source Connectors"],
    tech: ["Python", "Airflow", "Snowflake", "React"],
    image: "/src/assets/project_data_hub.png",
    github: "https://github.com/beingmushfiq/data-hub"
  },
  {
    id: 24,
    title: "Fleet Sync: Logistics Manager",
    description: "High-performance logistics management platform for large vehicle fleets with real-time GPS tracking and AI route optimization.",
    features: ["Real-time GPS Tracking", "AI Route Optimization", "Fuel Consumption Analytics", "Preventative Maintenance Alerts"],
    tech: ["Go", "Node.js", "PostgreSQL", "Mapbox API"],
    image: "/src/assets/project_fleet_sync.png",
    github: "https://github.com/beingmushfiq/fleet-sync"
  },
  {
    id: 6,
    title: "Logic Flow: Automation Engine",
    description: "Visual low-code platform for building complex business automations with integrated AI decision nodes.",
    features: ["Visual Flow Builder", "AI-Powered Decision Nodes", "3rd-Party App Integrations", "Real-time Debugging"],
    tech: ["Vue 3", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/logic-flow"
  },
  {
    id: 7,
    title: "Eco Smart: Sustainability App",
    description: "Environmental tracking and ESG reporting tool for enterprises to monitor their carbon footprint and supply chain sustainability.",
    features: ["Carbon Footprint Analytics", "ESG Report Generation", "IoT Sensor Integration", "Sustainability Scoring"],
    tech: ["React Native", "Firebase", "D3.js", "Google Cloud"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/eco-smart"
  },
  {
    id: 8,
    title: "Vision Core: Image Processing",
    description: "Powerful computer vision API for real-time object detection, scene understanding, and OCR.",
    features: ["Real-time Object Tracking", "Facial Expression Analysis", "Precision OCR Engine", "Batch Image Processing"],
    tech: ["OpenCV", "FastAPI", "AWS", "PyTorch"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/vision-core"
  },
  {
    id: 9,
    title: "Astro Dev: IDE Extension",
    description: "AI-enhanced code assistant for popular IDEs that suggests architectural patterns and handles boilerplate code.",
    features: ["Contextual Code Completion", "Architectural Pattern Suggestion", "Automated Documentation", "Unit Test Generator"],
    tech: ["TypeScript", "VS Code API", "Ollama", "Rust"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/astro-dev"
  },
  {
    id: 10,
    title: "Crypto Shield: Wallet Security",
    description: "Multisig wallet security platform with integrated AI auditor for smart contract vulnerabilities.",
    features: ["AI Smart Contract Auditing", "Multi-signature Security", "Fraudulent Transaction Alert", "DeFi Yield Optimization"],
    tech: ["Solidity", "Ether.js", "React", "Python"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/crypto-shield"
  },
  {
    id: 11,
    title: "Bio Link: Health Data Aggregator",
    description: "Secure health data platform that aggregates records from multiple providers and provides AI-driven health insights.",
    features: ["HIPAA-Compliant Storage", "Wearable Device Syncing", "AI Health Risk Assessor", "Federated Learning Integration"],
    tech: ["Kotlin", "Swift", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/bio-link"
  },
  {
    id: 12,
    title: "Stream Pulse: Content Delivery",
    description: "Adaptive CDN and content delivery platform with edge computing capabilities for low-latency streaming applications.",
    features: ["Edge Computation Nodes", "Adaptive Bitrate Streaming", "Global Path Optimization", "Real-time Traffic Analytics"],
    tech: ["C++", "Lua", "Cloudflare Workers", "React"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/stream-pulse"
  },
  {
    id: 13,
    title: "Edu Mind: Learning Path Finder",
    description: "Personalized learning platform that uses AI to design custom educational paths based on individual student goals.",
    features: ["Dynamic Curriculum Planning", "Skill Gap Analysis", "Interactive AI Tutoring", "Progress Visualization"],
    tech: ["Next.js", "Supabase", "OpenAI API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/edu-mind"
  },
  {
    id: 15,
    title: "Logi Link: Supply Chain AI",
    description: "Enterprise supply chain optimization platform focusing on predictive logistics and automated inventory replenishment.",
    features: ["Route Optimization AI", "Demand Forecasting Model", "Automated Supplier Liaison", "Shipment Tracking dashboard"],
    tech: ["Laravel", "Vue.js", "MySQL", "R Programming"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/logi-link"
  },
  {
    id: 16,
    title: "Game Core: Multiplayer Engine",
    description: "Scalable backend engine for real-time multiplayer games, supporting massive player concurrency and complex state sync.",
    features: ["Real-time State Sync", "Matchmaking Logic", "Anti-Cheat Integration", "Server-Side Physics"],
    tech: ["Go", "WebSockets", "Redis", "Unity SDK"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/game-core"
  },
  {
    id: 17,
    title: "Voice AI: Transcription Platform",
    description: "High-accuracy transcription and translation tool for large-scale media organizations and multilingual meetings.",
    features: ["Sub-second Transcription", "Live Translation Engine", "Speaker Diarization", "Advanced Noise Filtering"],
    tech: ["Node.js", "Whisper API", "React", "AWS Lambda"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/voice-ai"
  },
  {
    id: 18,
    title: "Event Pro: Lifecycle Management",
    description: "Advanced event management system with integrated AI for attendee matchmaking and dynamic schedule optimization.",
    features: ["AI Matchmaking Logic", "Dynamic Schedule Planning", "NFC Badge Integration", "Real-time Attendance heatmaps"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "TurboRepo"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/event-pro"
  },
  {
    id: 20,
    title: "Artsy AI: Generative Art Studio",
    description: "Creative suite for artists to fine-tune generative models and create unique artworks with precise prompt engineering tools.",
    features: ["Lora Fine-tuning Suite", "Advanced Prompt Builder", "High-Resolution Upscaler", "Community Artist Gallery"],
    tech: ["React", "Python", "Stable Diffusion", "MongoDB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/artsy-ai"
  },
  {
    id: 21,
    title: "Legal Bot: Document Automator",
    description: "Specialized AI assistant for law firms to automate document drafting and conduct deep legal research using specialized LLMs.",
    features: ["Contract Generation AI", "Case Law Semantic Search", "Case Outcome Predictor", "Secure Client Vault"],
    tech: ["Node.js", "LangChain", "Azure", "React"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/legal-bot"
  },
  {
    id: 22,
    title: "Market Mind: Sentiment Tracker",
    description: "Real-time stock and crypto sentiment tracking tool that analyzes social media signals to predict market volatility.",
    features: ["Social Sentiment Analysis", "Volatility Warning System", "Historical Correlation Engine", "Custom Watchlist AI"],
    tech: ["Python", "Pandas", "Elasticsearch", "React"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/market-mind"
  },
  {
    id: 23,
    title: "Retail IQ: Inventory Predictor",
    description: "Omnichannel retail platform that uses machine learning to optimize inventory levels across multiple physical and online stores.",
    features: ["Predictive Stock Alerts", "Omnichannel Ops Sync", "Dynamic Pricing Engine", "Supplier Performance Score"],
    tech: ["PHP", "Laravel", "React", "MySQL"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/beingmushfiq/retail-iq"
  }
];

export const experience = [
  {
    title: "AI-Powered Web Systems Developer",
    company: "Freelance / Independent",
    period: "2023 – Present",
    description: "Designed and developed AI-integrated web applications for automation and digital transformation. Built full-stack systems including CRM, ERP, and SaaS platforms."
  },
  {
    title: "Full Stack Web Developer",
    company: "Independent Projects",
    period: "2022 – Present",
    description: "Developed responsive and scalable web platforms for startups. Built modern frontend interfaces with strong UX and performance optimization."
  }
];

export const testimonials = [
  {
    text: "BuildWithMushfiq delivers powerful automation systems that significantly improve workflow efficiency. His ability to integrate AI into real business solutions is impressive.",
    author: "Startup Founder"
  },
  {
    text: "Highly skilled developer with strong problem-solving ability. The platform he built streamlined our operations and improved productivity.",
    author: "Business Owner"
  },
  {
    text: "Professional, reliable, and technically strong. His work combines clean development with innovative AI features.",
    author: "Product Manager"
  }
];
