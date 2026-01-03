'use client'

import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from 'react';


async function main() {
  const ai = new GoogleGenAI({});
  const response = await ai.models.embedContent({
    model: 'gemini-embedding-001',
    contents: 'What is th meaning of life?',
  });

  console.log(response.embeddings);
}

export default function Ail8d3() {

  const [data, setData] = useState(null);
  const [isPromting, setIsPrompting] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const prompt = await main();
      setData(prompt);
      setIsPrompting(false)
    };

  }, []);



  return (
    <div>
      <h1> AiL8d3 Bot </h1>
    </div>
  )
}
