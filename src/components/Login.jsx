import { useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      toast.success("Login Successful 🎉");
      setLoginData({ email: "", password: "" });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">

      {/* Glass Card */}
      <div className="w-80 p-8 rounded-2xl  
        bg-white/20 backdrop-blur-lg
        border border-white/30
        shadow-xl
      ">

        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md
              bg-white/30 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md
              bg-white/30 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-md font-semibold transition
              ${isLoading
                ? "bg-white/40 text-gray-700 cursor-not-allowed"
                : "bg-white text-purple-700 hover:bg-white/90"}
            `}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-white">
          Don’t have an account?
          <Link to="/signup" className="font-semibold underline ml-1">
            Sign Up
          </Link>
        </p>

      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Login;
