import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-extrabold text-teal-400">
              Nearo
            </h2>

            <p className="text-slate-300 mt-6 leading-8">
              Connecting customers with trusted local professionals for reliable,
              affordable and secure home services across your city.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-slate-800 hover:bg-teal-600 p-3 rounded-full transition duration-300 hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-pink-600 p-3 rounded-full transition duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-black p-3 rounded-full transition duration-300 hover:scale-110"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-700 p-3 rounded-full transition duration-300 hover:scale-110"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <a href="#home" className="hover:text-teal-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#workers" className="hover:text-teal-400 transition">
                  Become a Worker
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-teal-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-teal-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Popular Services
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>⚡ Electrician</li>
              <li>🚿 Plumber</li>
              <li>🧹 Cleaning</li>
              <li>🎨 Painter</li>
              <li>🪚 Carpenter</li>
              <li>❄ AC Repair</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6 text-slate-300">

              <div className="flex items-start gap-3">

                <MapPin className="text-teal-400 mt-1" />

                <span>
                  Hyderabad,
                  <br />
                  Telangana, India
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="text-teal-400" />

                <span>
                  +91 98765 43210
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-teal-400" />

                <span>
                  support@nearo.com
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-center">
            © 2026 Nearo. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-teal-600 hover:bg-teal-700 p-4 rounded-full shadow-xl transition duration-300 hover:scale-110"
          >
            <ArrowUp size={22} />
          </button>

        </div>

      </div>

    </footer>
  );
}