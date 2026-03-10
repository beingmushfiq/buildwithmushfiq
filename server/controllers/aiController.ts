import { Request, Response } from 'express';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const analyzeWebsite = async (req: Request, res: Response): Promise<void> => {
  const { url } = req.body;
  
  if (!url) {
    res.status(400).json({ error: "URL is required" });
    return;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the following website URL: ${url}. 
      Provide 3 concise, high-impact bullet points on how to improve its conversion rate and user experience. 
      Focus on business automation and AI potential if applicable. 
      Keep the tone professional and expert.`,
      config: { maxOutputTokens: 200, temperature: 0.7 },
    });

    res.json({ result: response.text });
  } catch (error) {
    console.error("Analysis Error:", error);
    res.status(500).json({ error: "Failed to analyze website" });
  }
};

export const generateProjectPlan = async (req: Request, res: Response): Promise<void> => {
  const { idea } = req.body;

  if (!idea) {
    res.status(400).json({ error: "Idea is required" });
    return;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an elite AI systems architect. A client wants to build: "${idea}".
      Generate a realistic, high-impact project plan formatted in crisp Markdown. Include exactly these sections:
      ### 🌟 Feature Roadmap
      ### 💻 Recommended Stack
      ### 🤖 AI Opportunities
      ### 🏗️ System Architecture
      ### ⏱️ Development Timeline
      Keep it professional, concise, and futuristic.`,
      config: { maxOutputTokens: 500, temperature: 0.7 },
    });

    res.json({ result: response.text });
  } catch (error) {
    console.error("Project Plan Error:", error);
    res.status(500).json({ error: "Failed to generate project plan" });
  }
};

export const chatWithAssistant = async (req: Request, res: Response): Promise<void> => {
  const { message, history } = req.body;

  if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
  }

  try {
    const context = `
      You are the AI Portfolio Assistant for BuildWithMushfiq (Mushfiqur Rahman).
      Mushfiq is an AI-Powered Web Systems Developer based in Dhaka, Bangladesh (Email: beingmushfiq@gmail.com).
      He builds intelligent web systems, custom ERPS, SaaS platforms, and AI automations.
      Keep your response concise, helpful, and professional but futuristic.
      Do not hallucinate fake projects.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `${context}\n\nClient asks: ${message}`,
      config: { maxOutputTokens: 200, temperature: 0.7 },
    });

    res.json({ result: response.text });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "Failed to process chat" });
  }
};
