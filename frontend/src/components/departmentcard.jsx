import { Link } from "react-router-dom";

function DepartmentCard({ department }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition">

      <div className="text-6xl">
        {department.image}
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {department.name}
      </h2>

      <p className="text-gray-500 mt-2">
        {department.description}
      </p>

      <Link
        to={`/department/${department.id}`}
        className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700"
      >
        View Services
      </Link>

    </div>
  );
}

export default DepartmentCard;