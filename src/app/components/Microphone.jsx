"use client";

import { useRecordVoice } from "@/hooks/useRecordVoice";
import { IconMicrophone } from "@/app/components/IconMicrophone";
import { useText } from "@/hooks/useText";
import { useEffect } from "react";

const Microphone = () => {
  const { startRecording, stopRecording, text,recording } = useRecordVoice();
  const {setText} = useText();

   useEffect (()=>{
     setText(text);
   },[text])
  

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        className="border-none bg-transparent w-10"
      >
        <IconMicrophone className={` ${recording ? 'redFill': 'whiteFill'}`} />
      </button>
      {text && <p>Last command:{text}</p>}
    </div>
  );
};

export { Microphone };
