import AuthBanner from "../../components/auth/AuthBanner";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex">
          <AuthBanner />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-lg">
            <RegisterForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;