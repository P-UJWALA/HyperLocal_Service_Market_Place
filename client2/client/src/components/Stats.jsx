import { Users, BriefcaseBusiness, Star, ShieldCheck } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={40} className="text-blue-600" />,
      number: "10,000+",
      title: "Happy Customers",
    },
    {
      icon: <BriefcaseBusiness size={40} className="text-blue-600" />,
      number: "500+",
      title: "Verified Professionals",
    },
    {
      icon: <Star size={40} className="text-yellow-500 fill-yellow-500" />,
      number: "4.9 / 5",
      title: "Customer Rating",
    },
    {
      icon: <ShieldCheck size={40} className="text-green-600" />,
      number: "100%",
      title: "Verified & Secure",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Trusted Across India
          </h2>

          <p className="text-gray-500 mt-3">
            Thousands of customers trust Nearo for quality home services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}