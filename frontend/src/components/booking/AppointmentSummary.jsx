function AppointmentSummary({
  serviceName,
  selectedDate,
  selectedTime,
}) {
  if (!selectedTime) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10">

      <h2 className="text-2xl font-bold text-blue-700">
        Appointment Summary
      </h2>

      <div className="mt-5 space-y-3">

        <div>
          <span className="font-semibold">Service:</span>{" "}
          {serviceName.replace(/-/g, " ")}
        </div>

        <div>
          <span className="font-semibold">Date:</span>{" "}
          {selectedDate.date}
        </div>

        <div>
          <span className="font-semibold">Time:</span>{" "}
          {selectedTime}
        </div>

      </div>

    </div>
  );
}

export default AppointmentSummary;