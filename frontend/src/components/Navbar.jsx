import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            M
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
                
            </h1>

            <p className="text-sm text-gray-500">
              Hospital Appointment System
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>

          <a
            href="#departments"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Departments
          </a>

          <button className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white px-6 py-3 rounded-xl font-medium shadow-sm">
            Book Appointment
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;