import { Link } from "react-router-dom";

function ServiceCard({ service }) {

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold">

        {service.name}

      </h2>

      <p className="text-gray-500 mt-3">

        {service.description}

      </p>

      <Link
        to={`/booking/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
        className="block mt-5 w-full bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700"
      >
        Book Appointment
      </Link>

    </div>

  );

}

export default ServiceCard;