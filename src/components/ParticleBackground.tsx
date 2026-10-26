'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Mouse coordinates (null when outside window)
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 140,
    };

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Configuration constants
    const CONFIG = {
      maxDistance: 120,
      mouseMaxDistance: 135,
      desktopCount: 85,
      mobileCount: 40,
      baseSpeed: prefersReducedMotion ? 0.05 : 0.45,
      backgroundColor: '#080807',
      particleColor: 'rgba(230, 230, 230, ',
      lineColor: 'rgba(200, 200, 200, ',
      accentLineColor: 'rgba(230, 157, 67, ',
    };

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.scale(dpr, dpr);

      // Re-populate particles according to screen size
      initParticles();
    }

    function initParticles() {
      const count = width < 768 ? CONFIG.mobileCount : CONFIG.desktopCount;
      particles = [];

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.2 + 1.0; // 1.0px to 2.2px
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.4 + 0.2) * CONFIG.baseSpeed;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius,
          baseAlpha: Math.random() * 0.35 + 0.45,
        });
      }
    }

    function draw() {
      if (!ctx || !isRunning) return;

      // Fill background
      ctx.fillStyle = CONFIG.backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const pLen = particles.length;

      // 1. Update and draw particles
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // Only move if not strictly reduced motion
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Edge boundary bounce
          if (p.x < 0) {
            p.x = 0;
            p.vx *= -1;
          } else if (p.x > width) {
            p.x = width;
            p.vx *= -1;
          }

          if (p.y < 0) {
            p.y = 0;
            p.vy *= -1;
          } else if (p.y > height) {
            p.y = height;
            p.vy *= -1;
          }

          // Gentle mouse displacement
          if (mouse.x !== null && mouse.y !== null) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius) * 0.4;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }

        // Draw particle dot with subtle soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.particleColor + p.baseAlpha + ')';
        ctx.fill();
      }

      // 2. Draw pairwise connection lines
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = CONFIG.maxDistance * CONFIG.maxDistance;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / CONFIG.maxDistance) * 0.18;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = CONFIG.lineColor + alpha + ')';
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // 3. Connect to mouse pointer if within range
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const mouseMaxSq = CONFIG.mouseMaxDistance * CONFIG.mouseMaxDistance;

          if (distSq < mouseMaxSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / CONFIG.mouseMaxDistance) * 0.28;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = CONFIG.accentLineColor + alpha + ')';
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    // Event listeners
    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(draw);
        }
      }
    }

    let resizeTimeout: NodeJS.Timeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
      }, 150);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial setup
    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ backgroundColor: '#080807' }}
    />
  );
}
