import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export function ElectricityBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const particles = [];
    const nodeCount = 100;
    const connectionDistance = 150;
    const particleSpeed = 0.5;
    // Create particles
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        size: Math.random() * 2 + 1,
        color: `rgba(0, ${150 + Math.random() * 100}, 255, ${0.3 + Math.random() * 0.4})`
      });
    }
    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`;
            ctx.stroke();
          }
        });
      });
      // Draw energy waves
      const time = Date.now() / 1000;
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const progress = time * (0.5 + i * 0.2) % 1;
        const radius = progress * Math.min(width, height) * 0.8;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 150, 255, ${0.1 * (1 - progress)})`;
        ctx.stroke();
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/5 to-gray-900 opacity-90" />
      {/* Enhanced energy field effect */}
      <div className="absolute inset-0 backdrop-blur-[1px]">
        {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-blue-500/10 backdrop-blur-sm" style={{
        width: `${100 + i * 40}px`,
        height: `${100 + i * 40}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        x: [`${Math.random() * 50 - 25}%`, `${Math.random() * 50 - 25}%`, `${Math.random() * 50 - 25}%`],
        y: [`${Math.random() * 50 - 25}%`, `${Math.random() * 50 - 25}%`, `${Math.random() * 50 - 25}%`],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 15 + i * 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }} />)}
      </div>
      {/* Lightning effect */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => <div key={i} className="absolute inset-0 bg-blue-500/5 animate-pulse" style={{
        animationDelay: `${i * 0.5}s`,
        animationDuration: '3s'
      }} />)}
      </div>
    </>;
}