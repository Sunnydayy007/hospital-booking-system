import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DateSelector from "../components/booking/DateSelector";
import TimeSelector from "../components/booking/TimeSelector";
import AppointmentSummary from "../components/booking/AppointmentSummary";
import PatientForm from "../components/booking/PatientForm";

import {
  getAppointmentDates,
  getAppointmentSlots,
  createAppointment,
} from "../services/api";

function Booking() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const formattedService = serviceName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const [loadingDates, setLoadingDates] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    reason: "",
  });

  // Load available dates
  useEffect(() => {
    async function loadDates() {
      try {
        const data = await getAppointmentDates(formattedService);

        setDates(data);

        if (data.length > 0) {
          setSelectedDate(data[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingDates(false);
      }
    }

    loadDates();
  }, [formattedService]);

  // Load slots whenever date changes
  useEffect(() => {
    if (!selectedDate) return;

    async function loadSlots() {
      setLoadingSlots(true);

      try {
        const data = await getAppointmentSlots(
          formattedService,
          selectedDate
        );

        setSlots(data);
        setSelectedTime("");
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSlots(false);
      }
    }

    loadSlots();
  }, [formattedService, selectedDate]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedTime) {
      alert("Please select an appointment time.");
      return;
    }

    if (!formData.fullName || !formData.phone) {
      alert("Please complete the required fields.");
      return;
    }

    try {
      await createAppointment({
        service: formattedService,
        date: selectedDate,
        time: selectedTime,
        ...formData,
      });

      navigate("/confirmation", {
        state: {
          service: formattedService,
          date: selectedDate,
          time: selectedTime,
          ...formData,
        },
      });
    } catch (err) {
      alert(err.message);
    }
  }

  if (loadingDates) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold">
          {formattedService}
        </h1>

        <p className="text-gray-500 mt-2">
          Select an available appointment and complete your details.
        </p>

        <DateSelector
          dates={dates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />

        {loadingSlots ? (
          <p className="mt-6">Loading available times...</p>
        ) : (
          <TimeSelector
            slots={slots}
            selectedTime={selectedTime}
            onSelectTime={setSelectedTime}
          />
        )}

        <AppointmentSummary
          serviceName={formattedService}
          selectedDate={{ date: selectedDate }}
          selectedTime={selectedTime}
        />

        <PatientForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </section>

      <Footer />
    </div>
  );
}

export default Booking;