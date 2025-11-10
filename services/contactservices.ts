import { GoogleGenerativeAI } from "@google/generative-ai";
import { ContactFormData, FormStatus } from "./type";

const ai = new GoogleGenerativeAI(process.env.API_KEY as string);

export const sendContactMessage = async (
  formData: ContactFormData
): Promise<string> => {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("All fields are required.");
    }

    const prompt = `
      You are a friendly customer support assistant for a modern tech website.
      A user named "${formData.name}" has just submitted a contact form with the message:
      "${formData.message}".
      Write a short, polite, and professional confirmation message addressed to them,
      acknowledging their submission and assuring them that the team will get back to them soon.
      The tone should be warm and encouraging.
    `;

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return text;
  } catch (error) {
    console.error("Error generating confirmation message:", error);
    if (error instanceof Error) {
      return `We're sorry, there was an issue submitting your form. Please try again later. Details: ${error.message}`;
    }
    return "We're sorry, an unknown error occurred while submitting your form. Please try again later.";
  }
};
