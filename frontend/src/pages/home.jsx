import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DepartmentCard from "../components/DepartmentCard";

import { getDepartments } from "../services/api";

function Home() {

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function fetchDepartments() {

      try {

        const data = await getDepartments();

        setDepartments(data);

      } catch (err) {

        setError("Failed to load departments.");

      } finally {

        setLoading(false);

      }

    }

    fetchDepartments();

  }, []);

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold mb-10">
          Departments
        </h2>

        {loading && (
          <p className="text-gray-500">
            Loading departments...
          </p>
        )}

        {error && (
          <p className="text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (

          <div className="grid md:grid-cols-3 gap-8">

            {departments.map((department) => (

              <DepartmentCard
                key={department.id}
                department={department}
              />

            ))}

          </div>

        )}

      </section>

      <Footer />

    </div>

  );

}

export default Home;