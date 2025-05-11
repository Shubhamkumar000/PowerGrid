import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // ✅ MOVE THIS HERE

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/dashboard'); // ✅ Navigation works now
  };





  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            PowerForecast AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavLink>About</NavLink>
          <NavLink>Features</NavLink>
          <NavLink>Technology</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
          Get Started
        </button>
      </div>
    </nav>;
};
const NavLink = ({
  children
}: {
  children: React.ReactNode;
}) => <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>;