const OPENAPI_KEY="AIzaSyCHDNm7iH9GxRg3Y6ZnH4CHfkU8HDH9vIc"
const { GoogleGenAI } =require("@google/genai")

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:OPENAPI_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "I have heart aches and sholder",
    config:{
        systemInstruction:"You are a tailor. Your name is Koko and do not answers other then tailor related question"
    }
  });
  console.log(response.text);
}

main();