import "./Services.css";

const services = [
  {
    id: 1,
    icon: "🔧",
    title: "Plumbing",
    description: "Fix leaks, install pipes and bathroom fittings.",
    rating: "4.8",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Electrician",
    description: "Electrical repairs and installations.",
    rating: "4.9",
  },
  {
    id: 3,
    icon: "🪚",
    title: "Carpenter",
    description: "Furniture assembly and wood work.",
    rating: "4.7",
  },
  {
    id: 4,
    icon: "❄️",
    title: "AC Repair",
    description: "AC servicing and installation.",
    rating: "4.9",
  },
  {
    id: 5,
    icon: "🧹",
    title: "Cleaning",
    description: "Home and office deep cleaning.",
    rating: "4.8",
  },
  {
    id: 6,
    icon: "🎨",
    title: "Painting",
    description: "Interior and exterior painting.",
    rating: "4.7",
  },
];

const Services = () => {
  return (
    <section className="services">

      <div className="section-title">

        <h2>Popular Home Services</h2>

        <p>
          Find trusted professionals for all your household needs.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="rating">
              ⭐ {service.rating}
            </div>

            <button>
              Book Now
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;