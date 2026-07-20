import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

//login Function
 const handleLogin = async (e) => {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await login({
      email,
      password,
    });

    console.log(response);

    alert(response.message);

    navigate("/dashboard");

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
      {/* Heading */}

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Login to continue to your account.
        </p>
      </div>

      {/* Form */}

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Remember Me
          </label>

          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Login
        </button>
      </form>

      {/* Divider */}

      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-slate-200"></div>

        <span className="px-4 text-sm text-slate-400">OR</span>

        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      {/* Register */}

      <p className="text-center text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;