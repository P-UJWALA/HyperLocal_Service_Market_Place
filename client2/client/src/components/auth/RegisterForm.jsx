import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  UserCog,
} from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "CUSTOMER",
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleRegister = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await register(formData);

    alert(response.message);

    navigate("/login");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );

  } finally {

    setLoading(false);

  }
};
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

      {/* Heading */}

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          {loading ? "Creating..." : "Create Account"}
          disabled={loading}
        </h1>

        <p className="mt-2 text-slate-500">
          Join HyperLocal Service Marketplace
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleRegister}>

        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Role */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Register As
          </label>

          <div className="relative">

            <UserCog
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              defaultValue="CUSTOMER"
            >
              <option value="CUSTOMER">
                Customer
              </option>

              <option value="PROVIDER">
                Provider
              </option>
            </select>

          </div>
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

          </div>
        </div>

        {/* Register */}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Create Account
        </button>

      </form>

      <p className="mt-6 text-center text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Login
        </Link>
      </p>

    </div>
  );
};

export default RegisterForm;