import "./Hero.css";
import heroImage from "../../assets/hero.png"; // Add your own image

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          TRUSTED HOME SERVICES
        </span>

        <h1>
          Book Trusted <span>Home Services</span><br />
          Near You
        </h1>

        <p>
          Find verified plumbers, electricians,
          AC technicians, carpenters,
          painters, cleaners and many more
          at affordable prices.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a service..."
          />

          <button>🔍</button>
        </div>

        <div className="service-tags">

          <span>⚡ Plumbing</span>

          <span>⚡ Electrician</span>

          <span>⚡ Cleaning</span>

          <span>⚡ AC Repair</span>

        </div>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book a Service
          </button>

          <button className="secondary-btn">
            Become a Provider
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img className="hero-image"
          src={heroImage}
          alt="Home Services"
        />

      </div>

    </section>
  );
};

export default Hero;