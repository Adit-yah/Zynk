import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../feature/userSlice";

export default function Register() {

  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    axiosClient
      .post("/auth/register", { email, username, password })
      .then((res) => {
        dispatch(setLoginUser(res.data.user));
        navigate("/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-2">
      <div className="w-full max-w-sm p-6 sm:p-8 space-y-5 bg-white dark:bg-neutral-900  shadow-lg mx-auto">
        {/* Greeting */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Create your account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Join{" "}
            <span className="font-semibold text-primary dark:text-pink-400">
              Zynk
            </span>{" "}
            and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white
                          focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white
                         focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white
                          focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white
                          focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold 
                       bg-primary/90 dark:bg-secondary/80 hover:bg-primary dark:hover:bg-secondary text-white 
                       transition-colors active:95"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary dark:text-pink-400 hover:underline"
            >
              Login
            </Link>
          </p>
          <p className="mt-3 text-xs">
            Powered by <span className="font-semibold">Zynk</span>
          </p>
        </div>
      </div>
    </div>
  );
}
