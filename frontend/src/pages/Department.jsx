import { useParams, Link } from "react-router-dom";

import departments from "../data/departments";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

function Department() {

  const { departmentId } = useParams();

  const department = departments.find(
    (item) => item.id === departmentId
  );

  if (!department) {
    return (
      <div className="text-center mt-20">

        <h1 className="text-4xl font-bold">
          Department Not Found
        </h1>

        <Link
          to="/"
          className="text-blue-600 underline mt-5 inline-block"
        >
          Go Back
        </Link>

      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto py-16 px-6">

        <Link
          to="/"
          className="text-blue-600 font-semibold"
        >
          ← Back
        </Link>

        <div className="mt-8">

          <div className="text-6xl">
            {department.image}
          </div>

          <h1 className="text-5xl font-bold mt-4">
            {department.name}
          </h1>

          <p className="text-gray-600 mt-3">
            {department.description}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {department.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Department;