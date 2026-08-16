import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({
        error: "Missing prompt",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      input: prompt,
    });

    return res.status(200).json({
      text: response.output_text,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);

    return res.status(500).json({
      error: "Failed to generate response",
    });
  }
}
