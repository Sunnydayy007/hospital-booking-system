function TimeSelector({
  slots,
  selectedTime,
  onSelectTime,
}) {
  return (
    <div className="mt-12">

      <h2 className="text-2xl font-semibold mb-4">
        Available Time Slots
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {slots.map((slot) => (

          <button
            key={slot.id}
            disabled={!slot.available}
            onClick={() => onSelectTime(slot.time)}
            className={`py-4 rounded-xl border transition

            ${
              !slot.available
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : selectedTime === slot.time
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            <div>{slot.time}</div>

            {!slot.available && (
              <div className="text-xs mt-1">
                Full
              </div>
            )}

          </button>

        ))}

      </div>

    </div>
  );
}

export default TimeSelector;