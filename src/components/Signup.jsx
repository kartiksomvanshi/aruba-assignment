import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  // 'user' object contains all form input fields (name, email, password, confirmPassword)
  const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // For showing validation error messages
  const [error, setError] = useState('');

  // useNavigate hook helps redirect user to another route after signup
  const navigate = useNavigate();

  // Email validation function using regular expression (checks correct email format)
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //  Function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // stops default form reload behavior

    //  Name check — ensures user entered a non-empty name
    if (!user.name.trim()) setError('Name is required.');
    
    // Email validation — checks if entered email is in correct format
    else if (!validateEmail(user.email)) setError('Enter a valid email.');

    // psassword length validation — must be at least 8 characters
    else if (user.password.length < 8) setError('Password must be at least 8 characters.');

    // Confirm password check — ensures both passwords match
    else if (user.password !== user.confirmPassword) setError('Passwords do not match.');

    // If all checks pass, clear error and navigate to dashboard
    else {
      setError('');
      // Dummy success message — in real app, you'd send signup data to backend API
      navigate('/dashboard');
    }
  };

  return (
    // onSubmit triggers handleSubmit when user clicks "Signup" button
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg font-medium text-center text-[#5B21B6]">Signup</h2>

      {/* Full Name Input Field */}
      <input
        type="text"
        placeholder="Full Name"
        value={user.name}
        // spread operator keeps other values unchanged, only updates 'name'
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2D6FF]"
      />

      {/* Email Input Field */}
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2D6FF]"
      />

      {/* Password Input Field */}
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2D6FF]"
      />

      {/* Confirm Password Input Field */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2D6FF]"
      />

      {/* Show error message if any validation fails */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit button */}
      <button className="w-full bg-gradient-to-r from-[#C4B5FD] to-[#BFDBFE] text-white py-2 rounded-lg hover:opacity-95 transition">
        Signup
      </button>

      {/* Redirect to login if already have account */}
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/" className="text-[#6B21A8] hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Signup;
