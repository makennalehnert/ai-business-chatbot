import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*", // temporary for testing
  }),
);
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BUSINESS_INFO = `
You are the AI assistant for TRX (The Roof Xperts) that work within roughly 100 miles radius of Melrose Park, IL.

TRX specializes in:
- Commercial roofing
- Residential roofing
- TPO roofing
- Storm restoration
- Emergency leak repair
- Flat roofs

TRX serves property owners, property managers, condos, complexes, warehouses, homeowners, retail buildings and commercial buildings in Illinois within roughly 100 mile radius from Melrose Park, IL

Tone:
- Professional
- Helpful
- Honest
- Concise

Rules:
- Never make up pricing
- Never guarantee insurance approval
- Never invent services
- Never provide legal advice
- Never make up warranties
- Never promise timelines
- Never claim someone needs a replacement without inspection
- If unsure, tell the user to contact TRX directly
- Keep responses under 150 words

Always encourage users to schedule an inspection for major roofing concerns.
`;

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.3,
      max_tokens: 200,
      messages: [
        {
          role: "system",
          content: `
            You are a helpful roofing assistant.

            Only answer using the provided business information.
            If information is unavailable, politely say you are unsure and recommend contacting TRX directly.
            Do not invent pricing, warranties, timelines, or services.

            ${BUSINESS_INFO}
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "Something went wrong.",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
