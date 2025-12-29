import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth, setEmail }) {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuth(true);
      setEmail(email);
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

       {/* ================= LEFT BRAND SECTION ================= */}
<div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10">
  <h2 className="text-3xl font-bold mb-4">
    Welcome to Insurance Portal
  </h2>

  <p className="text-sm text-blue-100 mb-6 leading-relaxed">
    A unified platform to manage insurance workflows, document processing,
    and decision support — built for speed, accuracy, and reliability.
  </p>

  <ul className="space-y-3 text-sm">
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-400 rounded-full" />
      End-to-end claim lifecycle management
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-400 rounded-full" />
      Intelligent document analysis & validation
    </li>
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-400 rounded-full" />
      Secure identity verification & compliance checks
    </li>
  </ul>

  <p className="text-xs text-blue-200 mt-8">
    © 2025 Insurance Portal. All rights reserved.
  </p>
</div>


        {/* ================= RIGHT LOGIN FORM ================= */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">
            Login
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Access your insurance dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            By logging in, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">Terms</span> &{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
