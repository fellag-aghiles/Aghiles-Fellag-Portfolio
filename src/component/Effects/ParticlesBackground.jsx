import React, { useEffect, useRef } from "react";
import "./effects.scss";

const COLORS = [
  "rgba(168, 85, 247, 0.85)",
  "rgba(56, 189, 248, 0.82)",
  "rgba(255, 255, 255, 0.72)",
  "rgba(248, 113, 113, 0.55)",
];

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const getParticleCount = () => {
      if (width < 640) return 28;
      if (width < 1024) return 44;
      return 72;
    };

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createParticles = () => {
      particles = Array.from({ length: getParticleCount() }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.9 + 0.7,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: COLORS[index % COLORS.length],
      }));
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 16;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distanceX = particle.x - nextParticle.x;
          const distanceY = particle.y - nextParticle.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (distance < 145) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.13 * (1 - distance / 145)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrame = window.requestAnimationFrame(drawNetwork);
    };

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    setCanvasSize();
    createParticles();

    if (!prefersReducedMotion) {
      drawNetwork();
    } else {
      drawNetwork();
      window.cancelAnimationFrame(animationFrame);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="particles-canvas" ref={canvasRef} aria-hidden="true" />;
};

export default ParticlesBackground;
