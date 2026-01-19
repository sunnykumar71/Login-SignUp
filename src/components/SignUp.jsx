import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      toast.success("Account created successfully 🎉");
      setFormData({ name: "", email: "", password: "" });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 from-purple-600 via-blue-400 to-indigo-900">

      {/* Glass Card */}
      <div
        className="w-80 p-8 rounded-2xl
        bg-white/20 backdrop-blur-lg
        border border-white/30
        shadow-xl"
      >

        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md
              bg-white/30 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md
              bg-white/30 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 rounded-md
              bg-white/30 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-md font-semibold transition
              ${isLoading
                ? "bg-white/40 text-gray-700 cursor-not-allowed"
                : "bg-green-400 text-purple-700 hover:bg-white/90 cursor-pointer"}
            `}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-white">
          Already have an account?
          <Link to="/login" className="underline font-semibold ml-1">
            Login
          </Link>
        </p>

      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
