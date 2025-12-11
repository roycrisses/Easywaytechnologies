import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Updated System instruction for the "High-End Agency" persona
const SYSTEM_INSTRUCTION = `
You are the AI interface for EasyWay Technology, a premium digital product studio.
Our specialization: High-end Web Development, Enterprise Mobile Apps, Strategic Digital Growth.

Your personality:
- Minimalist and direct.
- Sophisticated and professional.
- Confident but not arrogant.
- Concise (rarely exceed 50 words unless asked for details).

Your goal:
- Provide sharp, accurate answers about our services.
- Subtly guide users to start a project.
- Use technical terminology correctly but explain simply if asked.

Formatting:
- Use bullet points for lists.
- Keep paragraphs short.
`;

export const getAiResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "System Offline: API Key Missing. Please contact support.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    // @ts-ignore - types might be outdated for the new SDK structure if using @google/genai
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "Query processing failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Neural network unreachable.";
  }
};