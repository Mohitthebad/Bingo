import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function Canvas3DBackground() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create 3D Nodes floating in space
    const numNodes = 45;
    const nodes = Array.from({ length: numNodes }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 800 + 100, // Z depth
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 2,
      color: Math.random() > 0.5 ? "rgba(37, 99, 235, " : "rgba(16, 185, 129, "
    }));

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.05;
      mouseY = (e.clientY - height / 2) * 0.05;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const fov = 400; // Field of view

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw connection lines between close 3D nodes
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        // Update 3D position
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        nodeA.z += nodeA.vz;

        // Wrap boundaries
        if (nodeA.z < 10) nodeA.z = 800;
        if (nodeA.z > 800) nodeA.z = 10;

        // 3D Projection formula
        const scale = fov / (fov + nodeA.z);
        const projX = (nodeA.x + mouseX) * scale + cx;
        const projY = (nodeA.y + mouseY) * scale + cy;

        // Draw node particle
        const alpha = Math.min(1, Math.max(0.1, (800 - nodeA.z) / 800 * 0.6));
        ctx.fillStyle = `${nodeA.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(projX, projY, nodeA.size * scale, 0, Math.PI * 2);
        ctx.fill();

        // Connect to nearest nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dz = nodeA.z - nodeB.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            const scaleB = fov / (fov + nodeB.z);
            const projXB = (nodeB.x + mouseX) * scaleB + cx;
            const projYB = (nodeB.y + mouseY) * scaleB + cy;

            const lineAlpha = (1 - dist / 180) * alpha * 0.25;
            ctx.strokeStyle = `rgba(116, 219, 36, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * scale;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projXB, projYB);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
}
