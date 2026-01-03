'use client'

import { useState } from 'react';

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
      <h1 className="text-2xl font-bold">AiL8d3 Bot</h1>

      <textarea
        className="w-full p-2 border"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button
        onClick={sendPrompt}
        disabled={loading}
        className="px-4 py-2 bg-black text-white"
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <div className="p-4 border bg-gray-50">
          {response}
        </div>
      )}
    </div>
  );
}

