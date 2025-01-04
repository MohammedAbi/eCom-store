import React from "react";

function Login({ openSignUp }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center" htmlFor="rememberMe">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot password?
          </a>
        </div>
        <div className="mb-4">
          <button className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don’t have an account? </span>
        <button type="submit" className="text-red-800" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
