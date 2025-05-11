import React, { useEffect, useRef } from 'react';
import { Zap, Activity, TrendingUp } from 'lucide-react';
export const PowerGridSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const nodes: GridNode[] = [];
    const nodeCount = 20;
    const connections: Connection[] = [];
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 2;
      const pulseSpeed = Math.random() * 0.02 + 0.01;
      nodes.push({
        x,
        y,
        size,
        pulseSpeed,
        pulseState: Math.random() * Math.PI * 2
      });
    }
    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionsCount; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i) {
          connections.push({
            from: i,
            to: target,
            pulsePosition: Math.random(),
            pulseSpeed: Math.random() * 0.01 + 0.002,
            direction: Math.random() > 0.5 ? 1 : -1
          });
        }
      }
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw connections
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        // Draw line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Calculate pulse position
        conn.pulsePosition += conn.pulseSpeed * conn.direction;
        if (conn.pulsePosition > 1 || conn.pulsePosition < 0) {
          conn.direction *= -1;
        }
        // Draw pulse
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const pulseX = fromNode.x + dx * conn.pulsePosition;
        const pulseY = fromNode.y + dy * conn.pulsePosition;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.fill();
      });
      // Update and draw nodes
      nodes.forEach(node => {
        node.pulseState += node.pulseSpeed;
        const pulseSize = node.size + Math.sin(node.pulseState) * 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Intelligent Power Grid Management
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI system analyzes massive datasets to predict electricity
            demand patterns across India's diverse regions with unprecedented
            accuracy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Zap className="h-8 w-8 text-blue-400" />} title="Predictive Analytics" description="Advanced machine learning algorithms forecast electricity demand 24-48 hours in advance with up to 98% accuracy." />
          <FeatureCard icon={<Activity className="h-8 w-8 text-purple-400" />} title="Real-time Monitoring" description="Continuous monitoring of grid performance across all regions of India with instant alerts for potential issues." />
          <FeatureCard icon={<TrendingUp className="h-8 w-8 text-cyan-400" />} title="Renewable Integration" description="Optimize the integration of solar, wind, and hydro power sources based on predicted demand and weather patterns." />
        </div>
      </div>
    </section>;
};
const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 hover:-translate-y-1">
      <div className="bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>;
};
interface GridNode {
  x: number;
  y: number;
  size: number;
  pulseSpeed: number;
  pulseState: number;
}
interface Connection {
  from: number;
  to: number;
  pulsePosition: number;
  pulseSpeed: number;
  direction: number;
}