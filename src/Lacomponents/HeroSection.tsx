import React, { useEffect, useState } from 'react';
import { Zap, BarChart3, Cloud, Sun, Wind } from 'lucide-react';
import { ElectricityPulse } from './ElectricityPulse';
import { useNavigate } from 'react-router-dom'; // Add this line

export const HeroSection = ({ scrollY }: { scrollY: number }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const parallaxOffset = scrollY * 0.5;

 const handleGetStarted = () => {
  navigate('/login'); // Redirect to login instead of dashboard
};

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 pt-24 pb-16">
      {/* Background icons and animations */}
      {/* ...omitted for brevity, same as your original */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-3 inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm">
          <Zap size={14} className="mr-2" />
          Next-Gen AI Power Forecasting
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ transform: `translateY(${-parallaxOffset * 0.1}px)` }}>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Powering India's Future
          </span>
          <br />
          <span className="text-white">With AI Forecasting</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Revolutionizing electricity demand prediction with advanced AI to
          prevent blackouts, reduce waste, and optimize renewable energy
          integration across India.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto"
          >
            Get Started
          </button>
          <button className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Dashboard preview area */}
      {/* ...omitted for brevity, same as your original */}

      <ElectricityPulse />
    </section>
  );
};
