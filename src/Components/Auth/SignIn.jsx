import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-aliceblue font-sans">
        <input 
            type="email"
            placeholder="Email"
            name="email"
            className="mb-4 p-2 w-72 rounded border border-otherblue text-lg"
        />
        <input 
            type="password"
            placeholder="Enter Password"
            name="password"
            className="mb-4 p-2 w-72 rounded border border-otherblue text-lg"
        />
        <button className="mb-4 p-2 w-72 rounded bg-otherblue text-aliceblue text-lg font-bold hover:bg-skyblue">
          Sign Up
        </button>
        <p className="text-notsoblack">
          New User? <Link to='/SignUp' className="font-bold text-notsoblack hover:underline">Sign-Up Here</Link>
        </p>
    </div>
    </div>
  )
}

export default SignIn