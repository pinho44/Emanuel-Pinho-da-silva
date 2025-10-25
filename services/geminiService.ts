import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, initialize GoogleGenAI directly with the API key from environment variables.
// Manual checks for the API key are removed, assuming it is properly configured in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateNailArtIdea(serviceName: string): Promise<string> {
    // Fix: Removed redundant API key check to align with guidelines.
    try {
        const prompt = `Descreva uma ideia criativa e elegante de nail art para um serviço de "${serviceName}". A descrição deve ser curta (2-3 frases), inspiradora e visual, fácil de entender.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate nail art idea.");
    }
}
