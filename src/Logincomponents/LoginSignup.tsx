import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthForm } from './AuthForm';
import { ElectricityBackground } from './ElectricityBackground';
export function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  return <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <ElectricityBackground />
      {/* Animated energy rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-500/20 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-400/20 animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-300/20 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      <motion.div className="relative z-10 w-full max-w-md" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }}>
        {/* Glowing border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-gray-900/70 border border-blue-500/20 shadow-2xl">
          <div className="mb-8 text-center">
            <motion.div className="flex items-center justify-center mb-4" initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}>
              {/* Enhanced logo animation */}
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-40 blur-md animate-pulse" style={{
                animationDelay: '0.2s'
              }}></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-60 blur-sm animate-pulse" style={{
                animationDelay: '0.4s'
              }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg className="w-10 h-10 text-blue-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" initial={{
                  pathLength: 0,
                  rotate: 0
                }} animate={{
                  pathLength: 1,
                  rotate: 360
                }} transition={{
                  duration: 2,
                  ease: 'easeInOut'
                }}>
                    <motion.path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" initial={{
                    pathLength: 0
                  }} animate={{
                    pathLength: 1
                  }} transition={{
                    duration: 2
                  }} />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              <h1 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  EnergyForecast AI
                </span>
              </h1>
              <p className="mt-2 text-blue-100/70">
                India's Advanced Electricity Demand Prediction
              </p>
            </motion.div>
          </div>
          {/* Enhanced tab switcher */}
          <div className="flex justify-center mb-6">
            <div className="p-1 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm flex relative">
              <div className="absolute inset-y-1 transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600/90 to-blue-500/90 shadow-lg shadow-blue-500/30" style={{
              left: isLogin ? '4px' : '50%',
              right: isLogin ? '50%' : '4px'
            }} />
              <button className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isLogin ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => setIsLogin(true)}>
                Login
              </button>
              <button className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${!isLogin ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`} onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={isLogin ? 'login' : 'signup'} initial={{
            opacity: 0,
            x: isLogin ? -20 : 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: isLogin ? 20 : -20
          }} transition={{
            duration: 0.3
          }}>
              <AuthForm isLogin={isLogin} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>;
}