import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description:
        "Every service provider is background verified to ensure safety, trust, and reliability.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Clock3,
      title: "Quick Booking",
      description:
        "Book trusted professionals within minutes with a simple and hassle-free process.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: BadgeCheck,
      title: "Quality Guaranteed",
      description:
        "Highly rated experts deliver reliable and professional services every time.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description:
        "Transparent pricing with safe and secure payment options for complete peace of mind.",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-semibold text-teal-600">
            Why Nearo
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            Why Choose Nearo?
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-8">
            We connect you with trusted professionals while ensuring quality,
            transparency, security, and an exceptional booking experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >

                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mt-7">
                  {feature.title}
                </h3>

                <p className="text-slate-500 mt-4 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}