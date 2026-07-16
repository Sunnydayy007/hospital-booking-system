import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getAppointments,
  updateAppointmentStatus,
} from "../services/api";

const STATUS_OPTIONS = [
  "Booked",
  "Checked In",
  "Waiting",
  "In Consultation",
  "Completed",
  "Cancelled",
  "No Show",
];

function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState(false);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAppointments();
  }, []);

  async function handleStatusChange(newStatus) {
    if (!selectedAppointment) return;

    try {
      setSavingStatus(true);

      const updated = await updateAppointmentStatus(
        selectedAppointment.id,
        newStatus
      );

      setSelectedAppointment(updated);

      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === updated.id ? updated : appointment
        )
      );
    } catch (error) {
      console.error(error);
      alert("Unable to update appointment status.");
    } finally {
      setSavingStatus(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading appointments...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold mb-2">
          Reception Dashboard
        </h1>

        <p className="text-gray-500 mb-8">
          Manage patient appointments.
        </p>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Patient</th>
                <th className="text-left p-4">Service</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Time</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-t">

                  <td className="p-4">{appointment.fullName}</td>

                  <td className="p-4">{appointment.service}</td>

                  <td className="p-4">{appointment.date}</td>

                  <td className="p-4">{appointment.time}</td>

                  <td className="p-4">{appointment.phone}</td>

                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      {appointment.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        setSelectedAppointment(appointment)
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedAppointment && (
          <div className="mt-10 bg-white rounded-lg shadow p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Appointment Details
              </h2>

              <button
                onClick={() => setSelectedAppointment(null)}
                className="text-red-600 font-semibold"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p><strong>Patient:</strong> {selectedAppointment.fullName}</p>
                <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
                <p><strong>Email:</strong> {selectedAppointment.email || "N/A"}</p>
                <p><strong>Gender:</strong> {selectedAppointment.gender || "N/A"}</p>
                <p><strong>Date of Birth:</strong> {selectedAppointment.dob || "N/A"}</p>
              </div>

              <div>
                <p><strong>Service:</strong> {selectedAppointment.service}</p>
                <p><strong>Date:</strong> {selectedAppointment.date}</p>
                <p><strong>Time:</strong> {selectedAppointment.time}</p>

                <div className="mt-4">
                  <label className="block font-semibold mb-2">
                    Status
                  </label>

                  <select
                    value={selectedAppointment.status}
                    disabled={savingStatus}
                    onChange={(e) =>
                      handleStatusChange(e.target.value)
                    }
                    className="border rounded-lg px-3 py-2 w-full"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option
                        key={status}
                        value={status}
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="mt-4">
                  <strong>Reason:</strong>{" "}
                  {selectedAppointment.reason || "N/A"}
                </p>
              </div>

            </div>

          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}

export default Admin;