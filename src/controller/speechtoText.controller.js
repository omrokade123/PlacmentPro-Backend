import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const speechToText = async (req, res) => {

  try {

    const filePath = req.file.path;

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "whisper-1"
    });

    res.json({ text: transcription.text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Speech to text failed" });
  }

};