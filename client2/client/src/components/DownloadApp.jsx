import { Smartphone, Download, ArrowRight } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Mobile Application
            </span>

            <h2 className="text-5xl font-bold text-white mt-6 leading-tight">
              Book Home Services
              <br />
              Anytime, Anywhere
            </h2>

            <p className="text-teal-50 mt-6 text-lg leading-8 max-w-xl">
              Download the Nearo mobile app to book verified professionals,
              track bookings, make secure payments, and receive real-time
              updates from anywhere.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="flex items-center gap-3 bg-white text-teal-700 px-6 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300">
                <Download size={22} />
                Google Play
              </button>

              <button className="flex items-center gap-3 border-2 border-white text-white px-6 py-4 rounded-xl hover:bg-white hover:text-teal-700 transition duration-300">
                <Smartphone size={22} />
                App Store
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="bg-white rounded-[40px] shadow-2xl p-5 w-72 hover:scale-105 transition duration-300">

              <div className="bg-slate-100 rounded-[30px] p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-xl font-bold">
                    Nearo
                  </h3>

                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                </div>

                <div className="space-y-4 mt-8">

                  <div className="bg-teal-100 rounded-xl p-4">
                    🛠 Electrician Booked
                  </div>

                  <div className="bg-green-100 rounded-xl p-4">
                    🚿 Plumber Available
                  </div>

                  <div className="bg-yellow-100 rounded-xl p-4">
                    ⭐ Top Rated Professionals
                  </div>

                </div>

                <button className="mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300">
                  Explore App
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}