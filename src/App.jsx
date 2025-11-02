import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,#f7fbff,#fbf7ff)]">
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center text-[#6B21A8] mb-6">Login & Signup Portal</h1>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
