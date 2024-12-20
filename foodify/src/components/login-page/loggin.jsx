import React from 'react';
import GoogleLoginButton from './googleloginbtn';  // Import Google Login Button component
import LoginForm from './loginForm'; // Import Login Form component
import Links from './link';  // Import Links component

function Login() {
  // Style for the background image
  const backgroundStyle = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Style for the login card
  const cardStyle = {
    backgroundColor: "#f4e1b9", // Light wood color
    backgroundImage: "linear-gradient(45deg, rgba(244, 225, 185, 0.8), rgba(247, 234, 204, 0.8))",
    boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle} className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>

        {/* Google Login Button */}
        <GoogleLoginButton />

        {/* OR */}
        <div className="text-center text-gray-500 mb-4">OR</div>

        {/* Email/Password Login Form */}
        <LoginForm />

        {/* Forgot Password and Sign Up Links */}
        <Links />
      </div>
    </div>
  );
}

export default Login;
