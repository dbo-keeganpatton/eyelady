'use client'

import SpinningCube from '@/components/spinningCube';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';




export default function Ail8d3() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Request Failed');
      }
      setResponse(data.text);
    } catch (err: any) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">

      <div className="flex justify-center items-center">
        <SpinningCube color="#3B82F6" size={100} />
        <h1 className="text-blue-500 font-mono text-2xl font-bold">AiL8d3</h1>
        <SpinningCube color="#3B82F6" size={100} />
      </div>

      <textarea
        className="w-full border border-red-500/50 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-2xl shadow-blue-500/50 hover:border-yellow-500 hover:scale-101 transition-transform duration-300"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button
        onClick={sendPrompt}
        disabled={loading}
        className="border border-blue-500/50 backdrop-blur-lg backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-2xl shadow-blue-500/50 hover:border-yellow-500 hover:scale-101 transition-transform duration-300"
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <div className="border border-red-500/50 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-2xl shadow-blue-500/50 hover:border-yellow-500 hover:scale-101 transition-transform duration-300">
          {response}
        </div>
      )}

      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="
          relative justify-start w-10 h-10 border border-blue-500/20 opacity-80 bg-white/5 backdrop-blur-sm
          text-md p-1 rounded-sm shadow-lg shadow-neutral-500/20
          transition-transform duration-300 hover:scale-110 hover:opacity-100 hover:backdrop-blur-2xl"
        >
          <Image
            src="/homepage-svgrepo-com.svg"
            alt="home"
            width={50}
            height={50}
          />
        </Link>
      </div>

    </div>
  );
}

