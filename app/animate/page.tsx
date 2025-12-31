
"use client";

import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };
type Vec3 = { x: number; y: number; z: number };

const BACKGROUND = "#101010";
const FOREGROUND = "#50FF50";
const FPS = 60;

const vs = [
  { x: 0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: -0.25, z: 0.25 },

  { x: 0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },
]

const fs = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
]

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 800;
    canvas.height = 800;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    const dz = 1;

    function clear() {
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function point({ x, y }: Vec2) {
      const s = 20;
      ctx.fillStyle = FOREGROUND;
      ctx.fillRect(x - s / 2, y - s / 2, s, s);
    }

    function line(p1: Vec2, p2: Vec2) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = FOREGROUND;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    function screen(p: Vec2): Vec2 {
      return {
        x: ((p.x + 1) / 2) * canvas.width,
        y: (1 - (p.y + 1) / 2) * canvas.height,
      };
    }

    function project({ x, y, z }: Vec3): Vec2 {
      return {
        x: x / z,
        y: y / z,
      };
    }

    function translate_z({ x, y, z }: Vec3, dz: number): Vec3 {
      return { x, y, z: z + dz };
    }

    function rotate_xz({ x, y, z }: Vec3, angle: number): Vec3 {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      return {
        x: x * c - z * s,
        y,
        z: x * s + z * c,
      };
    }

    let lastTime = performance.now();

    function frame(time: number) {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      angle += Math.PI * dt;

      clear();

      for (const f of fs) {
        for (let i = 0; i < f.length; i++) {
          const a = vs[f[i]];
          const b = vs[f[(i + 1) % f.length]];

          line(
            screen(project(translate_z(rotate_xz(a, angle), dz))),
            screen(project(translate_z(rotate_xz(b, angle), dz)))
          );
        }
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <canvas ref={canvasRef} />
    </main>
  );
}

