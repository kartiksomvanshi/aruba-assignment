import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // State to store user input (email and password)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State to show error message (if any validation fails)
  const [error, setError] = useState('');

  // useNavigate() hook allows redirecting to another page after login
  const navigate = useNavigate();

  // Function to validate email format using regex
  // Checks if email has '@' and '.' in valid places
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //Function triggered when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from refreshing (default browser behavior)

    // 1️ Check if entered email is valid using regex
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
    } 
    // 2️ Check if password length is at least 8 characters
    else if (password.length < 8) {
      setError('Password must be at least 8 characters.');
    } 
    else {
      // 3️If all validations pass, clear error and navigate to dashboard
      setError('');
      // Simulated login success — in real app, you’d verify credentials with backend
      navigate('/dashboard'); // redirects user to Dashboard page
    }
  };

  return (
    // onSubmit calls handleSubmit() when "Login" button is clicked
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg font-medium text-center text-[#5B21B6]">Login</h2>

      {/* Email Input Field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        // updates email state on every keystroke
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B3F5]"
      />

      {/* Password Input Field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        // updates password state as user types
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7B3F5]"
      />

      {/* Error message display (only visible when 'error' has text) */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Login Button (submits form) */}
      <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#93C5FD] text-white py-2 rounded-lg hover:opacity-95 transition">
        Login
      </button>

      {/* Redirect to Signup if user doesn't have account */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-[#6B21A8] hover:underline">
          Signup
        </Link>
      </p>
    </form>
  );
}

export default Login;
