import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: `You are 'Summit AI', a helpful and knowledgeable assistant for 'Summit Decks', a premium decking contractor. 
        
        Your goals:
        1. Answer questions about decking materials (Wood vs Composite), maintenance, and design trends.
        2. Be polite, professional, and concise (under 100 words per response).
        3. If a user asks for a specific quote, tell them "I can give you a rough estimate range, but for an exact quote, please fill out our contact form or call us at (555) 123-4567."
        4. Promote our core values: Craftsmanship, Durability, and Client Satisfaction.
        
        Information to know:
        - We specialize in Cedar, Ipe, and Trex/TimberTech composite.
        - We serve the greater metropolitan area.
        - We offer a 5-year workmanship warranty.`,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later or call our office.";
  }
};
