import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Page = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password, username } = formData;
    if (!email || !password || !username) {
      setError('All fields must be filled');
      setSuccess(false);
    } else if (password.length < 8) {
      setError('Password must exceed 8 characters');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      setUser({ email, username }); // Save user data in context
      localStorage.setItem('user', JSON.stringify({ email, username, password })); // Save user data in local storage
      setTimeout(() => {
        navigate('/User');
      }, 2000); // Navigate after 2 seconds to allow user to see the success message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-aliceblue font-sans">
      {success && (
        <div className="mb-4 p-4 w-72 rounded bg-green-500 text-white text-lg font-bold text-center">
          Sign Up Successful!
        </div>
      )}
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
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        className="mb-4 p-2 w-72 rounded border border-otherblue text-lg"
        value={formData.username}
        onChange={handleChange}
      />
      <button 
        className="mb-4 p-2 w-72 rounded bg-otherblue text-aliceblue text-lg font-bold hover:bg-skyblue"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-notsoblack">
        Already have an account? <Link to='/SignIn' className="font-bold text-notsoblack hover:underline">Sign-in Here</Link>
      </p>
    </div>
  );
};

export default Page;
