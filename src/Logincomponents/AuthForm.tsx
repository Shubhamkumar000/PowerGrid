import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon } from 'lucide-react';
export function AuthForm({
  isLogin
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  const InputWrapper = ({
    children
  }) => <motion.div className="relative" whileHover={{
    scale: 1.01
  }} transition={{
    duration: 0.2
  }}>
      {children}
    </motion.div>;
  return <motion.form onSubmit={handleSubmit} className="space-y-4" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }}>
      <AnimatePresence mode="wait">
        {!isLogin && <motion.div key="name" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }}>
            <InputWrapper>
              <label className="block text-blue-100 text-sm font-medium mb-2">
                Name
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative">
                  <UserIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-400' : 'text-blue-500/50'}`} />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-lg text-blue-50 placeholder-blue-200/30 focus:outline-none transition-all duration-300" placeholder="Enter your name" required />
                  <motion.div className="absolute right-3 top-1/2 transform -translate-y-1/2" initial={{
                scale: 0
              }} animate={{
                scale: formData.name ? 1 : 0
              }}>
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  </motion.div>
                </div>
              </div>
            </InputWrapper>
          </motion.div>}
      </AnimatePresence>
      <InputWrapper>
        <label className="block text-blue-100 text-sm font-medium mb-2">
          Email
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative">
            <MailIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-400' : 'text-blue-500/50'}`} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-lg text-blue-50 placeholder-blue-200/30 focus:outline-none transition-all duration-300" placeholder="Enter your email" required />
            <motion.div className="absolute right-3 top-1/2 transform -translate-y-1/2" initial={{
            scale: 0
          }} animate={{
            scale: formData.email ? 1 : 0
          }}>
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
            </motion.div>
          </div>
        </div>
      </InputWrapper>
      <InputWrapper>
        <label className="block text-blue-100 text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative">
            <LockIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focusedField === 'password' ? 'text-blue-400' : 'text-blue-500/50'}`} />
            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)} className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-lg text-blue-50 placeholder-blue-200/30 focus:outline-none transition-all duration-300" placeholder="Enter your password" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </InputWrapper>
      {isLogin && <div className="flex justify-end">
          <motion.button type="button" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
            Forgot password?
          </motion.button>
        </div>}
      <motion.button type="submit" className="w-full mt-6 relative group" whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
        <div className="relative px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-40 w-40 rounded-full bg-blue-400/20 animate-ping"></div>
          </div>
          <span className="relative z-10 text-white font-medium">
            {isLogin ? 'Login' : 'Create Account'}
          </span>
        </div>
      </motion.button>
      <div className="mt-6 text-center">
        <motion.p className="text-blue-100/60 text-sm" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <motion.button type="button" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => isLogin ? setIsLogin(false) : setIsLogin(true)}>
            {isLogin ? 'Sign up' : 'Login'}
          </motion.button>
        </motion.p>
      </div>
    </motion.form>;
}