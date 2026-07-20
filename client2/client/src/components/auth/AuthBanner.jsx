import {
  ShieldCheck,
  Clock3,
  CreditCard,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Verified Professionals",
    description: "Trusted and background verified service providers.",
  },
  {
    icon: <Clock3 size={20} />,
    title: "Quick Booking",
    description: "Book your required service within minutes.",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Secure Payments",
    description: "Fast and secure online payment experience.",
  },
  {
    icon: <Star size={20} />,
    title: "Top Rated Services",
    description: "Choose professionals based on genuine reviews.",
  },
];

const AuthBanner = () => {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-12 text-white">

      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

      {/* Top Section */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold leading-tight">
          HyperLocal
          <br />
          Service Marketplace
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
          Connect with trusted professionals for home services like
          electrical work, plumbing, cleaning, carpentry, painting,
          appliance repair, and much more.
        </p>
      </div>

      {/* Illustration Placeholder */}
      <div className="relative z-10 my-10 flex justify-center">
        <div className="flex h-72 w-72 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
          <span className="text-center text-lg font-semibold text-white/90">
            Home Service
            <br />
            Illustration
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:bg-white/20"
          >
            <div className="mb-3 inline-flex rounded-xl bg-white/20 p-2">
              {feature.icon}
            </div>

            <h3 className="font-semibold">{feature.title}</h3>

            <p className="mt-2 text-sm text-blue-100">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-8 border-t border-white/20 pt-6">
        <p className="text-sm text-blue-100">
          Trusted by homeowners and service professionals to deliver quality
          services quickly and securely.
        </p>
      </div>

    </div>
  );
};

export default AuthBanner;