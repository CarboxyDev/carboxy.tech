'use client';

import { useEffect, useRef } from 'react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh - more subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/10 via-transparent to-cyan-950/10" />

      {/* Moving gradient orbs - reduced opacity */}
      <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse-slow rounded-full bg-gradient-to-br from-violet-600/15 to-purple-600/15 blur-3xl" />
      <div
        className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse-slow rounded-full bg-gradient-to-br from-cyan-600/10 to-blue-600/10 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      {/* Subtle grid pattern - even more subtle */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient light spots - reduced opacity */}
      <div
        className="absolute left-1/4 top-1/4 h-32 w-32 animate-pulse-slow rounded-full bg-violet-500/5 blur-2xl"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute right-1/4 top-3/4 h-24 w-24 animate-pulse-slow rounded-full bg-cyan-500/5 blur-2xl"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};

export const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    // Create particles - reduced count and opacity
    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.15 + 0.05, // Reduced opacity
      hue: Math.random() * 60 + 240, // Blue to purple range
    });

    // Initialize particles - reduced count
    for (let i = 0; i < 30; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with reduced intensity
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 50%, 60%, ${particle.opacity})`;
        ctx.fill();

        // Add subtle glow - reduced intensity
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${particle.hue}, 50%, 60%, ${particle.opacity * 0.3})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
