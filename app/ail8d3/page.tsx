'use client';

import { useEffect, useState } from 'react';
import SpinningCube from '@/components/spinningCube';
import Image from 'next/image';
import Link from 'next/link';

export default function Ail8d3() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  /* -----------------------------
     Fallback location (NWA)
     ----------------------------- */
  const FALLBACK_LOCATION = {
    lat: 36.3729,
    lng: -94.2088,
  };

  /* -----------------------------
     Acquire user location on mount
     ----------------------------- */
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn('Geolocation not supported. Using fallback.');
      setUserLat(FALLBACK_LOCATION.lat);
      setUserLng(FALLBACK_LOCATION.lng);
      setLocationError('Location unavailable — using approximate position.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLat(pos.coords.latitude);
        setUserLng(pos.coords.longitude);
      },
      (err) => {
        console.warn('Geolocation error:', err);

        // Fallback for Firefox / Linux / denied services
        setUserLat(FALLBACK_LOCATION.lat);
        setUserLng(FALLBACK_LOCATION.lng);
        setLocationError('Location unavailable — using approximate position.');
      },
      {
        enableHighAccuracy: false,   // Firefox-safe
        timeout: 8000,
        maximumAge: 60000,
      }
    );
  }, []);

  /* -----------------------------
     Send prompt to Gemini API
     ----------------------------- */
  const sendPrompt = async () => {
    if (!input.trim()) return;

    if (userLat === null || userLng === null) {
      setResponse('I cannot see where you are.');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: input,
          userLat,
          userLng,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Request failed.');
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
      {/* Header */}
      <div className="flex justify-center items-center gap-4">
        <SpinningCube color="#3B82F6" size={100} />
        <h1 className="text-blue-500 font-mono text-2xl font-bold">
          AiL8d3
        </h1>
        <SpinningCube color="#3B82F6" size={100} />
      </div>

      {/* Location Status */}
      {locationError && (
        <p className="text-red-400 text-sm font-mono text-center">
          {locationError}
        </p>
      )}

      {userLat !== null && userLng !== null && !locationError && (
        <p className="text-blue-400 text-xs font-mono text-center opacity-60">
          Location acquired.
        </p>
      )}

      {/* Input */}
      <textarea
        className="w-full border border-red-500/50 backdrop-blur-sm backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-2xl shadow-blue-500/50 hover:border-yellow-500 transition-transform duration-300"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      {/* Submit */}
      <button
        onClick={sendPrompt}
        disabled={loading}
        className="w-full border border-blue-500/50 backdrop-blur-lg backdrop-saturate-150 text-md p-1 m-2 rounded-sm shadow-2xl shadow-blue-500/50 hover:border-yellow-500 transition-transform duration-300 disabled:opacity-50"
      >
        {loading ? 'Thinking…' : 'Send'}
      </button>

      {/* Response */}
      {response && (
        <div className="border border-red-500/50 backdrop-blur-sm backdrop-saturate-150 text-md p-2 m-2 rounded-sm shadow-2xl shadow-blue-500/50 transition-transform duration-300 whitespace-pre-wrap">
          {response}
        </div>
      )}

      {/* Home Link */}
      <div className="flex justify-center items-center pt-4">
        <Link
          href="/"
          className="relative w-10 h-10 border border-blue-500/20 opacity-80 bg-white/5 backdrop-blur-sm rounded-sm shadow-lg shadow-neutral-500/20 transition-transform duration-300 hover:scale-110 hover:opacity-100"
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

