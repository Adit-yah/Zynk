import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../feature/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userIdentity, setUserIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')


  function handleInput(e) {
    const inputName = e.target.name
    const value = e.target.value
    error ? setError('') : ''
    if(inputName){
      (inputName === 'password') ? setPassword(value) : setUserIdentity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { userIdentity, password };

    axiosClient
      .post("/auth/login", data)
      .then((res) => {
        dispatch(setLoginUser(res.data.user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        handleError(err)
      });
  }

  function handleError(err) {
    setError(err.response.data.message)
    setUserIdentity("");
    setPassword("");
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-2 bg-gray-50 dark:bg-black">
      <div className="w-full max-w-md p-6 space-y-6 bg-white dark:bg-neutral-900  shadow-lg">
        {/* Branding / Greeting */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Login to continue to{" "}
            <span className="font-semibold text-primary dark:text-secondary">
              Zynk
            </span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Email or Username
            </label>
            <input
              type="text"
              value={userIdentity}
              name="userIdentity"
              required
              onChange={(e) => handleInput(e)}
              placeholder="you@example.com or Username"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              name="password"
              required
              onChange={(e) => handleInput(e)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border  border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-neutral-800 
                         text-gray-900 dark:text-white focus:outline-none"
            />
          </div>
          <h1 className={error ? 'block text-primary dark:text-secondary' : 'hidden'}>{error} !!</h1>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold 
                       bg-primary/90 dark:bg-secondary/80 hover:bg-primary dark:hover:bg-secondary text-white 
                       transition-colors active:scale-95"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-primary dark:text-pink-400 hover:underline"
            >
              Register
            </Link>
          </p>
          <p className="mt-4 text-xs">
            Powered by <span className="font-semibold">Zynk</span>
          </p>
        </div>
      </div>
    </div>
  );
}
