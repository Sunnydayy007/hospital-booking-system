function PatientForm({
  formData,
  onChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow p-8 mt-10"
    >
      <h2 className="text-2xl font-bold mb-6">
        Patient Information
      </h2>

      {/* Full Name */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Full Name *
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
          placeholder="John Doe"
        />
      </div>

      {/* Phone */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Phone Number *
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
          placeholder="+234..."
        />
      </div>

      {/* Email */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
          placeholder="example@email.com"
        />
      </div>

      {/* Gender */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Gender
        </label>

        <select
          name="gender"
          value={formData.gender}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Prefer not to say</option>
        </select>
      </div>

      {/* Date of Birth */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Date of Birth
        </label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Reason */}

      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Reason for Visit
        </label>

        <textarea
          rows="4"
          name="reason"
          value={formData.reason}
          onChange={onChange}
          className="w-full border rounded-lg p-3"
          placeholder="Optional..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
      >
        Book Appointment
      </button>
    </form>
  );
}

export default PatientForm;