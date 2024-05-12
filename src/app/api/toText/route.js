import { NextResponse } from "next/server";
import speech from '@google-cloud/speech';
//import fs from 'fs';

const credentials = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_BASE64, 'base64').toString());

const client = new speech.SpeechClient({
credentials: credentials,
});

 
 const  transcribeSpeech = async (recordedAudio) => {

    const audio = {
      content: recordedAudio,
    };
    
    const config = {
      model: "latest_short",
      encoding: "WEBM_OPUS",
      sampleRateHertz: 48000,
      audioChannelCount: 1,
      enableWordTimeOffsets: true,
      enableWordConfidence: true,
      languageCode: "en-IN",
    };
  
    const request = {
      audio: audio,
      config: config,
    };
  
    // Detects speech in the audio file. This creates a recognition job that you
    // can wait for now, or get its result later.
    const [operation] = await client.longRunningRecognize(request);
    // Get a Promise representation of the final result of the job.
    const [response] = await operation.promise();
    const transcription = response.results
                                  .map(result => result.alternatives[0].transcript)
                                  .join('\n');
    return transcription;
  }
export async function POST(req) {

  const body = await req.json();
  const base64Audio = body.audio;
  const audio = Buffer.from(base64Audio, "base64");

try{
   
    const text = await transcribeSpeech(audio);
    console.log(text);
    return NextResponse.json(text);

  } catch (error) {
    console.error("Error processing audio:", error);
    return NextResponse.error();
  }
}
