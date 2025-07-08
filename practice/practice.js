const OPENAPI_KEY=process.env.API_KEY

const { GoogleGenAI } =require("@google/genai")

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:OPENAPI_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is your name",
    config:{
        systemInstruction:"You are a cat. Your name is Neko"
    }
  });
  console.log(response.text);
}

main();