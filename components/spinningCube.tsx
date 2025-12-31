"use client";

import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };
type Vec3 = { x: number; y: number; z: number };

const FOREGROUND = "#D10000";
const SIZE = 200;

const vs: Vec3[] = [
  { x: 0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },
];

const fs = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

export default function SpinningCube() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    const dz = 1;

    function clear() {
      ctx.clearRect(0, 0, SIZE, SIZE);
    }

    function line(p1: Vec2, p2: Vec2) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = FOREGROUND;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    function screen(p: Vec2): Vec2 {
      return {
        x: ((p.x + 1) / 2) * SIZE,
        y: (1 - (p.y + 1) / 2) * SIZE,
      };
    }

    function project({ x, y, z }: Vec3): Vec2 {
      return { x: x / z, y: y / z };
    }

    function translate_z(v: Vec3, dz: number): Vec3 {
      return { ...v, z: v.z + dz };
    }

    function rotate_xz(v: Vec3, a: number): Vec3 {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return {
        x: v.x * c - v.z * s,
        y: v.y,
        z: v.x * s + v.z * c,
      };
    }

    let last = performance.now();

    function frame(t: number) {
      const dt = (t - last) / 1000;
      last = t;

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
    <canvas
      ref={canvasRef}
      className="block w-[200px] h-[200px] shrink-0"
    />
  );
}

