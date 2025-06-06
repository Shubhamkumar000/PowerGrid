import React, { useState } from 'react';

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: (path: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, setIsLogin, navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if fields are filled
    if ((isLogin || name.trim()) && email.trim() && password.trim()) {
      // Extra validation for signup
      if (!isLogin && password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      if (isLogin) {
        // Simulate login success
        navigate('/dashboard');
      } else {
        // Simulate signup success
        alert(`Signup successful for ${name}! Please log in.`);
        setIsLogin(true);
        setName('');
        setConfirmPassword('');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      {!isLogin && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <button
        type="submit"
        className="p-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold transition"
      >
        {isLogin ? 'Login' : 'Create Account'}
      </button>

      <p className="text-sm text-center mt-2">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 hover:underline"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;
