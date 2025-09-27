import axios from "axios";

const HF_API_URL = "https://api-inference.huggingface.co/models/distilbert/distilbert-base-uncased";
const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;

// Ek reusable Hugging Face client
export const huggingFace = axios.create({
  baseURL: HF_API_URL,
  headers: {
    Authorization: `Bearer ${HF_API_KEY}`,
    "Content-Type": "application/json",
  },
});

// Reusable function
export const queryModel = async (inputText) => {
  try {
    const response = await huggingFace.post("", {
      inputs: inputText,
    });
    return response.data;
  } catch (error) {
    console.error("HF API error:", error);
    return null;
  }
};

 
