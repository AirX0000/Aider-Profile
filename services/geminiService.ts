import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_DATA } from '../constants';

// Initialize the client.
// Note: In a real prod environment, you might proxy this through a backend to hide the key,
// but for this portfolio demo running client-side (or where env vars are injected), this works.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are an AI Assistant for ${RESUME_DATA.name}'s portfolio website.
Your goal is to answer questions about ${RESUME_DATA.name}'s professional experience, skills, education, certifications, and projects in a friendly, professional, and concise manner.

Here is the context about ${RESUME_DATA.name}:
${JSON.stringify(RESUME_DATA, null, 2)}

Rules:
1. Always stay in character as a helpful portfolio assistant.
2. Keep answers brief (under 100 words) unless asked for details.
3. If asked about something not in the resume, politely say you don't have that information but suggest contacting ${RESUME_DATA.name} directly at ${RESUME_DATA.contact.email}.
4. Do not invent information.
5. You can use emojis sparingly.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm having a bit of trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I encountered an error connecting to the AI service. Please check your API key or try again later.";
  }
};