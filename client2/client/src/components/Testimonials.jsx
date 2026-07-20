import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Reddy",
    city: "Hyderabad",
    review:
      "Nearo made booking an electrician incredibly easy. The technician arrived on time, completed the work professionally, and the pricing was transparent.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Kumar",
    city: "Bangalore",
    review:
      "Excellent experience! From booking to payment, everything was smooth. I'll definitely use Nearo again whenever I need home services.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Sharma",
    city: "Chennai",
    review:
      "Professional cleaning service with verified staff and excellent customer support. Highly recommended for busy families.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-semibold text-teal-600">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            What Our Customers Say
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Thousands of happy customers trust Nearo for reliable and professional home services.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="relative bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <Quote className="absolute top-6 right-6 text-teal-100" size={40} />

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                />

                <div>

                  <h3 className="text-xl font-bold text-slate-800">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">
                    {item.city}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {[...Array(item.rating)].map((_, index) => (

                  <Star
                    key={index}
                    size={20}
                    className="text-yellow-500"
                    fill="currentColor"
                  />

                ))}

              </div>

              <p className="mt-6 text-slate-600 leading-8 italic">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}