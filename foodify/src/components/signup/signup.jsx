import React from 'react';
import AppleLoginButton from '../login/Apple';
import GoogleLoginButton from '../login/GoogleLoginButton';
// Google Login Button Component



const SignUpForm = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl">
      <p className="text-center text-3xl font-extrabold text-teal-500 mb-6">Create account</p>
      <p className="text-center text-xs md:text-sm text-gray-500 mb-6">Let's get started with your 30 days free trial</p>
      <form className="flex flex-col gap-4 mb-4">
        <input type="text" className="p-3 rounded-2xl border border-gray-300 outline-none" placeholder="Name" />
        <input type="email" className="p-3 rounded-2xl border border-gray-300 outline-none" placeholder="Email" />
        <input type="password" className="p-3 rounded-2xl border border-gray-300 outline-none" placeholder="Password" />
        <button className="p-3 bg-teal-500 text-white rounded-2xl shadow-md cursor-pointer">Create account</button>
      </form>
      <p className="text-xs text-center text-gray-500">
        Already have an account? 
        <Link to="/login" className="text-teal-500 cursor-pointer font-semibold text-sm">Log in</Link> {/* Link to login */}
      </p>
      <div className="w-full flex flex-col gap-4 mt-5">
        <AppleLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  </div>
);


export default SignUpForm;
