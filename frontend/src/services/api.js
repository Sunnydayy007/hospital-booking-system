const API_URL = "http://127.0.0.1:8000";

export async function getDepartments() {
  const response = await fetch(`${API_URL}/departments`);

  if (!response.ok) {
    throw new Error("Failed to fetch departments");
  }

  return response.json();
}

export async function getAppointmentDates(service) {
  const response = await fetch(
    `${API_URL}/appointment-dates?service=${encodeURIComponent(service)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch appointment dates");
  }

  return response.json();
}

export async function getAppointmentSlots(service, date) {
  const response = await fetch(
    `${API_URL}/appointment-slots?service=${encodeURIComponent(
      service
    )}&date=${date}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch appointment slots");
  }

  return response.json();
}

export async function createAppointment(appointment) {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to create appointment");
  }

  return data;
}

export async function getAppointments() {
  const response = await fetch(`${API_URL}/appointments`);

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  return response.json();
}

export async function updateAppointmentStatus(id, status) {
  const response = await fetch(
    `${API_URL}/appointments/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to update status");
  }

  return data;
}