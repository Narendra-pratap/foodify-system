import React from 'react';

function Links() {
  return (
    <>
      {/* Forgot Password Link */}
      <div className="text-center mt-4">
        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
      </div>

      {/* Sign Up Link */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">Don't have an account?</p>
        <a href="/signup" className="text-sm text-blue-500 hover:underline">Sign Up</a>
      </div>
    </>
  );
}

export default Links;
