const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Write a script to generate 30 seconds on topic: Interesting historical story along with AI Image prompt in Realistic format for each scene and give result in JSON format with imagePrompt and ContentText as field",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n[\n    {\n        "imagePrompt": "A bustling marketplace in 16th century Venice, filled with merchants selling exotic goods. Sunlight streams through the narrow alleys, illuminating colorful fabrics and spices. People in period clothing haggle and chat. Realistic painting, vibrant colors, detailed textures, dramatic lighting.",\n        "ContentText": "Imagine Venice, 1580. A place buzzing with trade, where silks from the East met spices from Africa. But amidst the commerce, a hidden network thrived: female merchants, using their wit and family ties to carve a place in a male-dominated world. Their stories, often untold, shaped the city\'s economy."\n    },\n  {\n        "imagePrompt": "A dimly lit, smoky tavern in 18th century London. Men in tricorn hats and coats are gathered around a table, papers scattered, and one man is speaking passionately, gesturing with his hand. The light from oil lamps casts long shadows. Realistic photo, low-key lighting, period details, expressive faces.",\n        "ContentText": "London, 1770s. Not just tea and wigs. The Royal Society was a hotbed of revolutionary ideas. One man, Benjamin Franklin, a printer by trade, was changing the world with his experiments, all while navigating the political storms brewing across the Atlantic."\n    },\n  {\n        "imagePrompt": "A black and white photo of a group of determined women, dressed in modest clothing, holding signs and marching in a street during the early 20th century.  The background shows old buildings. Realistic photograph, documentary style, historical setting, strong composition.",\n        "ContentText":"Early 20th century. Not all heroes wore capes. Women marched, demanding the right to vote. Their courage, often met with violence and ridicule, paved the way for generations. It\'s a story of resilience, unity and the power of protest."\n    }\n]\n```\n',
          },
        ],
      },
    ],
  });

 
