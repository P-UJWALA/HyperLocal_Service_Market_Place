import categories from "../data/categories";

export default function Categories() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-teal-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-4">
            Popular Categories
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Discover trusted professionals for every home service.
            Book verified experts quickly and securely.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}

                <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 transition duration-300">

                  <Icon
                    size={40}
                    className="text-teal-600 group-hover:text-white transition"
                  />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-800 mt-7">
                  {category.title}
                </h3>

                {/* Description */}

                <p className="text-slate-500 mt-3 leading-7">
                  {category.description}
                </p>

                {/* Button */}

                <button className="mt-7 text-teal-600 font-semibold group-hover:translate-x-2 transition duration-300">
                  Explore Service →
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}