import { GoogleGenAI, Type } from "@google/genai";
import type { TravelPackage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateTravelPackages = async (prompt: string): Promise<TravelPackage[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Eres un agente de viajes experto de "Planifica Tu Sueño", una agencia de Anserma, Colombia, enfocada en turismo de salida. Basado en la siguiente descripción de un cliente, genera 3 paquetes de viaje creativos y atractivos. Enfócate en destinos vacacionales populares desde Colombia, especialmente de sol y playa. La descripción del cliente es: "${prompt}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              packageName: {
                type: Type.STRING,
                description: "Un nombre creativo y atractivo para el paquete de viaje. Ejemplo: 'Escape Mágico a San Andrés'.",
              },
              destination: {
                type: Type.STRING,
                description: "El destino principal del viaje. Ejemplo: 'San Andrés, Colombia' o 'Cancún, México'.",
              },
              description: {
                type: Type.STRING,
                description: "Una descripción corta y emocionante del paquete, destacando la experiencia.",
              },
              activities: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "Una lista de 3 a 5 actividades clave incluidas o sugeridas en el viaje.",
              },
              priceEstimate: {
                type: Type.STRING,
                description: "Un precio estimado por persona en pesos colombianos (COP), formateado como '$X.XXX.XXX COP por persona'.",
              },
            },
            required: ["packageName", "destination", "description", "activities", "priceEstimate"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText);
    return parsedResponse as TravelPackage[];
  } catch (error) {
    console.error("Error generating travel packages:", error);
    // Return a user-friendly error structure or throw to be caught by the component
    throw new Error("No pudimos generar sugerencias. Por favor, intenta de nuevo con otra descripción.");
  }
};
