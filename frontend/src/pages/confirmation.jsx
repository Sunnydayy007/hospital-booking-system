import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Confirmation() {

  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center mt-20">

        <h1 className="text-4xl font-bold">
          No Appointment Found
        </h1>

        <Link
          to="/"
          className="text-blue-600 underline"
        >
          Return Home
        </Link>

      </div>
    );
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-2xl mx-auto py-20 px-6">

        <div className="bg-white rounded-2xl shadow p-10">

          <div className="text-6xl text-center">
            ✅
          </div>

          <h1 className="text-4xl font-bold text-center mt-6">
            Appointment Booked
          </h1>

          <p className="text-gray-500 text-center mt-3">
            Your appointment request has been received.
          </p>

          <div className="mt-10 space-y-4">

            <div>
              <strong>Service:</strong> {state.service}
            </div>

            <div>
              <strong>Date:</strong> {state.date}
            </div>

            <div>
              <strong>Time:</strong> {state.time}
            </div>

            <div>
              <strong>Name:</strong> {state.fullName}
            </div>

            <div>
              <strong>Phone:</strong> {state.phone}
            </div>

            <div>
              <strong>Email:</strong> {state.email}
            </div>

          </div>

          <Link
            to="/"
            className="block text-center bg-blue-600 text-white py-4 rounded-xl mt-10 hover:bg-blue-700"
          >
            Back to Home
          </Link>

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default Confirmation;