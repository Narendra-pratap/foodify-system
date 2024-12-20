import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  const handleGoogleLogin = (response) => {
    console.log('Google Login Successful:', response);
    // Send response to your server for authentication
  };

  // Styling for the Google Login button to match the input fields
  const googleLoginButtonStyle = {
    width: "100%",  // Make the Google Login button full width
    padding: "12px",  // Adjust the padding for the button
    backgroundColor: "#4285F4",  // Google Blue
    color: "#fff",  // White text
    fontSize: "16px",  // Text size
    fontWeight: "600",  // Bold text
    borderRadius: "8px",  // Rounded corners
    border: "none",  // Remove default border
    marginBottom: "20px",  // Space between Google Login and other form elements
    cursor: "pointer",  // Pointer cursor on hover
    transition: "background-color 0.3s",  // Smooth transition for hover effect
  };

  return (
    <div className="mb-4">
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={(error) => console.error('Google Login Failed:', error)}
        useOneTap
        style={googleLoginButtonStyle} // Apply the custom style
      >
        Login with Google
      </GoogleLogin>
    </div>
  );
}

export default GoogleLoginButton;
