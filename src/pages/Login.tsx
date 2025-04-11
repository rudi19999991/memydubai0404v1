import React, { useState } from 'react';
import { supabase } from '@/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setMessage('Login failed: ' + error.message);
    } else {
      setMessage('Check your email for a magic login link!');
    }
  };

  return (
    <div className="luxury-container pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      <p className="mb-4 text-gray-600">Enter your email to receive a secure login link.</p>
      <input
        type="email"
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <button
        className="mt-4 bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6 py-2 rounded"
        onClick={handleLogin}
      >
        Send Login Link
      </button>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default Login;
