// src/components/LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import AppleLoginButton from './Apple'; // Assuming you have a component for Apple login
import GoogleLoginButton from './GoogleLoginButton'; // Assuming you have a component for Google login

const LoginForm = () => (
  <div className="mt-[8rem] w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 box-border">
    <p className="text-center font-sans text-2xl font-extrabold my-2 mb-8">Login to Foodify</p>
    <form className="w-full flex flex-col gap-4 mb-4">
      <input
        type="email"
        className="p-3 rounded-2xl border border-gray-400 outline-none"
        placeholder="Email"
      />
      <input
        type="password"
        className="p-3 rounded-2xl border border-gray-400 outline-none"
        placeholder="Password"
      />
      <p className="text-end text-sm text-gray-500 underline cursor-pointer">
        Forgot Password?
      </p>
      <button className="p-3 bg-teal-500 text-white rounded-2xl shadow-md cursor-pointer">
        Log in
      </button>
    </form>
    <p className="text-xs text-gray-500">
      Don't have an account?{' '}
      <Link to="/signup" className="text-teal-500 cursor-pointer font-semibold text-sm">
        Sign Up
      </Link>
    </p>
    <div className="w-full flex flex-col gap-4 mt-5">
      <AppleLoginButton />
      <GoogleLoginButton />
    </div>
  </div>
);

export default LoginForm;
