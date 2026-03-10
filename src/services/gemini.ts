import { GoogleGenerativeAI } from "@google/generative-ai";

// For frontend-only, we use VITE_ prefix for environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function analyzeWebsite(url: string) {
  try {
    if (!API_KEY) throw new Error("GEMINI_API_KEY is not configured");
    
    const prompt = `Analyze this website URL: ${url}. Provide a brief, professional summary of its purpose, tech stack (if detectable), and potential for AI automation. Keep it under 100 words.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "I couldn't analyze the site at this moment. Please ensure your VITE_GEMINI_API_KEY is set.";
  }
}

export async function generateProjectPlan(idea: string) {
  try {
    if (!API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const prompt = `Act as an AI Systems Architect. Create a technical roadmap for this project idea: "${idea}". 
    Include:
    1. System Architecture
    2. Recommended Tech Stack
    3. Core Features
    4. Estimated ROI
    Format with professional markdown.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Project Plan Error:", error);
    return "Failed to generate project plan. Please check your API configuration.";
  }
}

export async function chatWithAssistant(message: string, history: any[] = []) {
  try {
    if (!API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const chat = model.startChat({
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Connection error. Please check your local setup and API key.";
  }
}
