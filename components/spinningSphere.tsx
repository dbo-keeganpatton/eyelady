"use client";

import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };
type Vec3 = { x: number; y: number; z: number };

type SpinningSphereProps = {
  size?: number;
  color?: string;
  speed?: number;
  segments?: number;
  className?: string;
};

export default function SpinningSphere({
  size = 160,
  color = "#4DA3FF",
  speed = 0.6,
  segments = 10,
  className = "",
}: SpinningSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const radius = 0.6;
    const dz = 2.2;
    let angle = 0;
    let last = performance.now();

    const clear = () => {
      ctx.clearRect(0, 0, size, size);
    };

    const screen = (p: Vec2): Vec2 => ({
      x: ((p.x + 1) / 2) * size,
      y: (1 - (p.y + 1) / 2) * size,
    });

    const project = ({ x, y, z }: Vec3): Vec2 => ({
      x: x / z,
      y: y / z,
    });

    const rotateY = (v: Vec3, a: number): Vec3 => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return {
        x: v.x * c + v.z * s,
        y: v.y,
        z: -v.x * s + v.z * c,
      };
    };

    const rotateX = (v: Vec3, a: number): Vec3 => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return {
        x: v.x,
        y: v.y * c - v.z * s,
        z: v.y * s + v.z * c,
      };
    };

    const drawLine = (a: Vec3, b: Vec3) => {
      const za = a.z + dz;
      const zb = b.z + dz;

      if (za <= 0 || zb <= 0) return;

      const pa = screen(project({ ...a, z: za }));
      const pb = screen(project({ ...b, z: zb }));

      const depth = Math.min(1, (za + zb) / (2 * dz + 1));
      ctx.strokeStyle = color;
      ctx.globalAlpha = depth;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const frame = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      angle += speed * dt;

      clear();

      // Latitude rings
      for (let lat = 0; lat <= segments; lat++) {
        const theta = (lat / segments) * Math.PI;
        const y = Math.cos(theta) * radius;
        const r = Math.sin(theta) * radius;

        let prev: Vec3 | null = null;

        for (let lon = 0; lon <= segments * 2; lon++) {
          const phi = (lon / (segments * 2)) * Math.PI * 2;
          const point: Vec3 = {
            x: Math.cos(phi) * r,
            y,
            z: Math.sin(phi) * r,
          };

          const rotated = rotateX(rotateY(point, angle), 0.35);

          if (prev) drawLine(prev, rotated);
          prev = rotated;
        }
      }

      // Longitude rings
      for (let lon = 0; lon < segments; lon++) {
        const phi = (lon / segments) * Math.PI * 2;

        let prev: Vec3 | null = null;

        for (let lat = 0; lat <= segments; lat++) {
          const theta = (lat / segments) * Math.PI;
          const point: Vec3 = {
            x: Math.cos(phi) * Math.sin(theta) * radius,
            y: Math.cos(theta) * radius,
            z: Math.sin(phi) * Math.sin(theta) * radius,
          };

          const rotated = rotateX(rotateY(point, angle), 0.35);

          if (prev) drawLine(prev, rotated);
          prev = rotated;
        }
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [size, color, speed, segments]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={`shrink-0 select-none pointer-events-none ${className}`}
    />
  );
}
