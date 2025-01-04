import React from "react";

function Register({ openLogin }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            aria-label="Name Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            aria-label="Email Address"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            aria-label="Password"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 hover:bg-red-700"
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* Switch to Login */}
      <div className="text-center">
        <span className="text-gray-700">Already have an account? </span>
        <button
          type="button"
          className="text-red-800 hover:underline"
          onClick={openLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
