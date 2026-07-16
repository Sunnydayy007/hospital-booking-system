function DateSelector({
  dates,
  selectedDate,
  onSelectDate,
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Available Dates
      </h2>

      <div className="flex gap-4 flex-wrap">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => onSelectDate(date)}
            className={`px-6 py-4 rounded-xl border transition ${
              selectedDate === date
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DateSelector;