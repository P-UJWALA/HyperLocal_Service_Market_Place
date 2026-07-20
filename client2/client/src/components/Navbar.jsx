import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">

          <MapPin
            className="text-teal-600"
            size={30}
          />

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Nearo
          </h1>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 font-semibold text-gray-700">

          <li>
            <a
              href="#home"
              className="hover:text-teal-600 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-teal-600 transition duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#workers"
              className="hover:text-teal-600 transition duration-300"
            >
              Become a Worker
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-teal-600 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-teal-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Buttons */}

        <div className="hidden md:flex items-center gap-4">

          <Link
  to="/login"
  className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
>
  Login
</Link>

      <Link
  to="/register"
  className="rounded-xl border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
>
  Register
</Link>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg border-t">

          <ul className="flex flex-col gap-5 p-6 font-semibold text-gray-700">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#workers"
                onClick={() => setMenuOpen(false)}
              >
                Become a Worker
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

           <Link
  to="/login"
  className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
>
  Login
</Link>

      <Link
  to="/register"
  className="rounded-xl border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50">
  Register
</Link>

          </ul>

        </div>

      )}

    </nav>
  );
}