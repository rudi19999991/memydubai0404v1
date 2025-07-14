import { useState } from 'react';
import { supabase } from '@/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage('Login failed: ' + error.message);
    } else {
      setMessage('Login successful!');
      window.location.href = '/admin'; // or redirect as needed
    }
  };

  return (
    <div className="luxury-container pt-24 pb-12 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6 py-2 rounded w-full"
        onClick={handleLogin}
      >
        Log In
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Login;
