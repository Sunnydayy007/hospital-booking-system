const appointmentSlots = {
  gopd: [
    {
      date: "2026-07-15",
      slots: [
        {
          id: "0900",
          time: "09:00 AM",
          available: true,
        },
        {
          id: "1000",
          time: "10:00 AM",
          available: false,
        },
        {
          id: "1100",
          time: "11:00 AM",
          available: true,
        },
        {
          id: "1400",
          time: "02:00 PM",
          available: true,
        },
      ],
    },

    {
      date: "2026-07-16",
      slots: [
        {
          id: "0900",
          time: "09:00 AM",
          available: true,
        },
        {
          id: "1000",
          time: "10:00 AM",
          available: true,
        },
        {
          id: "1100",
          time: "11:00 AM",
          available: false,
        },
        {
          id: "1400",
          time: "02:00 PM",
          available: true,
        },
      ],
    },
  ],
};

export default appointmentSlots;