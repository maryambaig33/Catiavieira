import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Bookshop } from '../types';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a sophisticated literary concierge for New York City. 
Your goal is to help users explore the city's bookshops, plan visits, and find book recommendations based on the specific vibes of these shops.
You are knowledgeable about: Strand, McNally Jackson, Housing Works, Rizzoli, Argosy, and Three Lives & Company.
Keep your responses concise, witty, and atmospheric. 
If asked for recommendations, suggest specific titles that match the vibe of the chosen shop.
Do not make up facts about locations; stick to the general knowledge of these famous NYC institutions.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm lost in the stacks and couldn't find an answer.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const generateShopTip = async (shop: Bookshop): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Give me one "insider tip" or "hidden gem" fact about ${shop.name} in NYC. Keep it under 30 words.`,
    });
    return response.text || "Ask the staff for their favorite recommendation!";
  } catch (error) {
    console.error("Gemini Quick Tip Error:", error);
    return "Explore the shelves and find your own hidden gem.";
  }
};
