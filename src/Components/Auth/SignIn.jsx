import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = formData;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError('');
      navigate('/User'); // Navigate to the user page
    } else {
      setError('User not found or incorrect password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-aliceblue font-sans">
      <input 
        type="email"
        placeholder="Email"
        name="email"
        className="mb-4 p-2 w-72 rounded border border-otherblue text-lg"
        value={formData.email}
        onChange={handleChange}
      />
      <input 
        type="password"
        placeholder="Enter Password"
        name="password"
        className="mb-4 p-2 w-72 rounded border border-otherblue text-lg"
        value={formData.password}
        onChange={handleChange}
      />
      <button 
        className="mb-4 p-2 w-72 rounded bg-otherblue text-aliceblue text-lg font-bold hover:bg-skyblue"
        onClick={handleSubmit}
      >
        Sign In
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-notsoblack">
        New User? <Link to='/SignUp' className="font-bold text-notsoblack hover:underline">Sign-Up Here</Link>
      </p>
    </div>
  );
};

export default SignIn;
