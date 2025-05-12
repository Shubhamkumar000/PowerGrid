import React, { useEffect, useRef } from 'react';

const ElectricityBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Grid points for electricity paths
    const gridPoints: { x: number; y: number; connections: number[] }[] = [];
    const gridSize = 40;
    const cols = Math.ceil(canvas.width / gridSize) + 2;
    const rows = Math.ceil(canvas.height / gridSize) + 2;
    
    // Create grid points
    for (let y = -1; y < rows; y++) {
      for (let x = -1; x < cols; x++) {
        gridPoints.push({
          x: x * gridSize,
          y: y * gridSize,
          connections: []
        });
      }
    }
    
    // Connect points randomly
    gridPoints.forEach((point, i) => {
      const possibleConnections = gridPoints.filter((p, idx) => {
        const dist = Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2));
        return dist > 0 && dist < gridSize * 2 && idx !== i;
      });
      
      // Connect to 1-3 points
      const connectCount = Math.floor(Math.random() * 3) + 1;
      for (let c = 0; c < Math.min(connectCount, possibleConnections.length); c++) {
        const rndIdx = Math.floor(Math.random() * possibleConnections.length);
        const connectToIdx = gridPoints.indexOf(possibleConnections[rndIdx]);
        if (connectToIdx >= 0 && !point.connections.includes(connectToIdx)) {
          point.connections.push(connectToIdx);
        }
        possibleConnections.splice(rndIdx, 1);
      }
    });
    
    // Animation
    let frameCount = 0;
    let animationFrameId: number;
    let activeConnections: { start: number; end: number; progress: number; color: string }[] = [];
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new connections
      if (frameCount % 15 === 0 && activeConnections.length < 20) {
        const randomPoint = Math.floor(Math.random() * gridPoints.length);
        if (gridPoints[randomPoint].connections.length > 0) {
          const randomConnection = gridPoints[randomPoint].connections[
            Math.floor(Math.random() * gridPoints[randomPoint].connections.length)
          ];
          
          // Random blue/cyan color
          const blue = 150 + Math.floor(Math.random() * 105);
          const color = `rgba(0, ${150 + Math.floor(Math.random() * 105)}, ${blue}, 0.8)`;

          activeConnections.push({
            start: randomPoint,
            end: randomConnection,
            progress: 0,
            color
          });
        }
      }
      
      // Draw and update active connections
      activeConnections = activeConnections.filter(conn => {
        const start = gridPoints[conn.start];
        const end = gridPoints[conn.end];
        
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        
        // Calculate point along the path based on progress
        const x = start.x + (end.x - start.x) * conn.progress;
        const y = start.y + (end.y - start.y) * conn.progress;
        
        ctx.lineTo(x, y);
        ctx.strokeStyle = conn.color;
        ctx.lineWidth = 2 + Math.random() * 2;
        ctx.stroke();
        
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = conn.color;
        
        // Update progress
        conn.progress += 0.05;
        
        // Keep if not complete
        return conn.progress <= 1;
      });
      
      frameCount++;
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-black bg-opacity-90 z-0"
    />
  );
};

export default ElectricityBackground;