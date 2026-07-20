import {
  Star,
  MapPin,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const workers = [
  {
    id: 1,
    name: "Rahul Sharma",
    profession: "Electrician",
    experience: "6 Years",
    rating: "4.9",
    location: "Hyderabad",
    price: "₹499",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    available: "Available Today",
  },
  {
    id: 2,
    name: "Amit Verma",
    profession: "Plumber",
    experience: "8 Years",
    rating: "4.8",
    location: "Bangalore",
    price: "₹399",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    available: "Available Now",
  },
  {
    id: 3,
    name: "Priya Singh",
    profession: "Cleaning Expert",
    experience: "5 Years",
    rating: "4.9",
    location: "Chennai",
    price: "₹699",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    available: "Available Today",
  },
  {
    id: 4,
    name: "Kiran Kumar",
    profession: "Carpenter",
    experience: "7 Years",
    rating: "5.0",
    location: "Mumbai",
    price: "₹599",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    available: "Available Tomorrow",
  },
];

export default function FeaturedWorkers() {
  return (
    <section id="workers" className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest font-semibold text-teal-600">
            Featured Professionals
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            Meet Our Top Rated Experts
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">
            Experienced professionals trusted by thousands of happy customers.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {workers.map((worker) => (

            <div
              key={worker.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="relative">

                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">

                  <BadgeCheck size={16} className="text-green-600" />

                  <span className="text-sm font-medium">
                    Verified
                  </span>

                </div>

              </div>

              <div className="p-6">

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-800">
                      {worker.name}
                    </h3>

                    <p className="text-teal-600 font-semibold mt-1">
                      {worker.profession}
                    </p>

                  </div>

                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">

                    <Star
                      size={16}
                      className="text-yellow-500"
                      fill="currentColor"
                    />

                    <span className="font-semibold">
                      {worker.rating}
                    </span>

                  </div>

                </div>

                <div className="mt-5 space-y-3 text-slate-500">

                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {worker.experience} Experience
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {worker.location}
                  </div>

                </div>

                <div className="mt-5 inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  {worker.available}
                </div>

                <div className="flex justify-between items-center mt-7">

                  <div>

                    <p className="text-sm text-slate-500">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-teal-600">
                      {worker.price}
                    </h4>

                  </div>

                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* View All Button */}

        <div className="text-center mt-16">

          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
            View All Professionals
          </button>

        </div>

      </div>

    </section>
  );
}