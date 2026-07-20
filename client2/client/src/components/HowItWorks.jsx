import {
  Search,
  CalendarCheck,
  UserCheck,
  CreditCard,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Search Service",
      description: "Browse and choose the service you need from trusted local professionals.",
      icon: Search,
      color: "bg-teal-600",
    },
    {
      id: "02",
      title: "Book Appointment",
      description: "Select your preferred date and time in just a few clicks.",
      icon: CalendarCheck,
      color: "bg-orange-500",
    },
    {
      id: "03",
      title: "Professional Arrives",
      description: "A verified expert visits your location and completes the service.",
      icon: UserCheck,
      color: "bg-purple-600",
    },
    {
      id: "04",
      title: "Pay Securely",
      description: "Pay safely after the work is completed and rate your experience.",
      icon: CreditCard,
      color: "bg-green-600",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-semibold text-teal-600">
            Simple Process
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            How Nearo Works
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Book trusted home services in four simple and hassle-free steps.
          </p>

        </div>

        {/* Steps */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >

                <div className="absolute top-5 right-5 text-5xl font-extrabold text-slate-200">
                  {step.id}
                </div>

                <div
                  className={`w-20 h-20 mx-auto rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon size={38} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mt-8">
                  {step.title}
                </h3>

                <p className="text-slate-500 mt-4 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}