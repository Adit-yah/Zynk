import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";

const ai = new GoogleGenAI({
  apiKey: config.GEMINI_API_KEY,
});

export async function generateCaption(file) {
  const base64Image = Buffer.from(file.buffer).toString("base64");

  const contents = [
    {
      inlineData: {
        mimeType: file.mimetype,
        data: base64Image,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config : {
        systemInstruction : `
            an image is provide to you , which is basically a post for social app.
            you have to analyze the image and produce / generate caption for that image. 
            the caption must be short and match the vibe not to cringe.
            you can include emojis and hashtags , note  in a sufficient manner. 
            you can include trending hashtags and related caption.
            1-2 line caption and just give caption no need of telling this is your caption.
            the caption is directly feed to use post caption.
            caption should be funny playable according to image .
        `
    }
 });

 return response.text
}
