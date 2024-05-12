import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useText } from "@/hooks/useText";

export const Body = ({ children }) => {
  
  const { text, bodyColor, bodyFontFamily } = useText();
  
  return (
    <div className={'w-full'  } style={{ backgroundColor: bodyColor, fontFamily:bodyFontFamily }}>{children}</div>
  )
}
