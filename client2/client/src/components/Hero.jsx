import heroImage from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 w-full">

        <div className="max-w-3xl">

          {/* Badge */}

          <span className="inline-flex items-center bg-teal-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            Trusted Local Service Marketplace
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Find Trusted
            <br />
            Professionals
            <br />
            Near You
          </h1>

          {/* Paragraph */}

          <p className="mt-8 text-xl text-slate-200 leading-9 max-w-2xl">
            Book verified electricians, plumbers, cleaners,
            painters, carpenters and many more trusted
            professionals in just a few clicks.
          </p>

          {/* Search */}

          <div className="mt-10 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">

            <input
              type="text"
              placeholder="Search for Electrician, Plumber, Carpenter..."
              className="flex-1 px-6 py-5 text-lg outline-none text-slate-700"
            />

            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-5 text-white font-semibold transition duration-300">
              Search
            </button>

          </div>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition duration-300">
              Book a Service
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 hover:scale-105 transition duration-300">
              Become a Worker
            </button>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-10 max-w-xl">

            <div>
              <h2 className="text-4xl font-bold text-white">
                10K+
              </h2>

              <p className="text-slate-300 mt-1">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                500+
              </h2>

              <p className="text-slate-300 mt-1">
                Verified Workers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                4.9★
              </h2>

              <p className="text-slate-300 mt-1">
                Average Rating
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}