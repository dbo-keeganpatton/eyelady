"use client";

import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };
type Vec3 = { x: number; y: number; z: number };

type SpinningCubeProps = {
  size?: number;
  color?: string;
  speed?: number;
  className?: string;
};

const DEFAULT_VERTICES: Vec3[] = [
  { x: 0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },
];

const EDGES = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

export default function SpinningCube({
  size = 160,
  color = "#D10000",
  speed = 1,
  className = "",
}: SpinningCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    const dz = 1;
    let last = performance.now();

    const clear = () => {
      ctx.clearRect(0, 0, size, size);
    };

    const line = (a: Vec2, b: Vec2) => {
      ctx.lineWidth = 1.75;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };

    const screen = (p: Vec2): Vec2 => ({
      x: ((p.x + 1) / 2) * size,
      y: (1 - (p.y + 1) / 2) * size,
    });

    const project = ({ x, y, z }: Vec3): Vec2 => ({
      x: x / z,
      y: y / z,
    });

    const translateZ = (v: Vec3): Vec3 => ({
      ...v,
      z: v.z + dz,
    });

    const rotateXZ = (v: Vec3, a: number): Vec3 => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return {
        x: v.x * c - v.z * s,
        y: v.y,
        z: v.x * s + v.z * c,
      };
    };

    const frame = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      angle += Math.PI * speed * dt;
      clear();

      for (const edge of EDGES) {
        for (let i = 0; i < edge.length; i++) {
          const a = DEFAULT_VERTICES[edge[i]];
          const b = DEFAULT_VERTICES[edge[(i + 1) % edge.length]];

          line(
            screen(project(translateZ(rotateXZ(a, angle)))),
            screen(project(translateZ(rotateXZ(b, angle))))
          );
        }
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [size, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={`
        shrink-0 select-none pointer-events-none
        ${className}
      `}
    />
  );
}

