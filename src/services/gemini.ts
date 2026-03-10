const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function analyzeWebsite(url: string) {
  try {
    const response = await fetch(`${API_URL}/ai/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) throw new Error("Failed to fetch from backend");

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "I couldn't analyze the site at this moment. Please try again later.";
  }
}

export async function generateProjectPlan(idea: string) {
  try {
    const response = await fetch(`${API_URL}/ai/plan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });

    if (!response.ok) throw new Error("Failed to fetch from backend");

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Gemini Project Plan Error:", error);
    return "Failed to generate project plan. Please try again later or contact me directly.";
  }
}

export async function chatWithAssistant(message: string, history: any[] = []) {
  try {
    const response = await fetch(`${API_URL}/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) throw new Error("Failed to fetch from backend");

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Connection error. Please try again later.";
  }
}

