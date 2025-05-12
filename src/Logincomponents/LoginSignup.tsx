import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import
import AuthForm from './AuthForm';
import ElectricityBackground from './ElectricityBackground';
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅ Initialize

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black/80 overflow-hidden">
      <ElectricityBackground />
      <div className="relative w-full sm:w-96 p-8 bg-black bg-opacity-70 backdrop-blur-lg border border-blue-500/40 rounded-2xl">
        <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} navigate={navigate} /> {/* ✅ Pass navigate */}
      </div>
    </div>
  );
}

export default LoginSignup;
