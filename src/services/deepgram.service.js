import { DeepgramClient } from "@deepgram/sdk";

const deepgram = new DeepgramClient({
  apiKey: process.env.DEEPGRAM_API_KEY,
});

export const transcribeAudio = async (audioBuffer) => {

  const response = await deepgram.listen.v1.media.transcribeFile(
    audioBuffer,
    {
      model: "nova-2",
      language: "en",
      smart_format: true,
    }
  );


  return response.results.channels[0].alternatives[0].transcript;
};