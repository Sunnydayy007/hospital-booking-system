const departments = [
  {
    id: "gopd",
    name: "General Outpatient Department (GOPD)",
    description:
      "General medical consultations, routine check-ups, and follow-up appointments.",
    services: [
      {
        id: 1,
        name: "General Consultation",
        description: "Consultation with a general medical practitioner."
      },
      {
        id: 2,
        name: "Follow-up Consultation",
        description: "Review appointment after previous treatment."
      },
      {
        id: 3,
        name: "Medical Check-up",
        description: "Routine health assessment and screening."
      }
    ]
  },

  {
    id: "radiology",
    name: "Radiology",
    description:
      "Diagnostic imaging services for accurate medical evaluation.",
    services: [
      {
        id: 1,
        name: "X-Ray",
        description: "Digital X-ray imaging."
      },
      {
        id: 2,
        name: "CT Scan",
        description: "Computed tomography imaging."
      },
      {
        id: 3,
        name: "MRI",
        description: "Magnetic resonance imaging."
      },
      {
        id: 4,
        name: "Ultrasound",
        description: "Ultrasound imaging services."
      }
    ]
  },

  {
    id: "laboratory",
    name: "Laboratory",
    description:
      "Diagnostic laboratory investigations performed by qualified professionals.",
    services: [
      {
        id: 1,
        name: "Blood Test",
        description: "Routine and specialized blood investigations."
      },
      {
        id: 2,
        name: "Urinalysis",
        description: "Urine examination for diagnosis."
      },
      {
        id: 3,
        name: "Stool Test",
        description: "Laboratory analysis of stool samples."
      }
    ]
  },

  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description:
      "Rehabilitation and physical therapy services for recovery and mobility.",
    services: [
      {
        id: 1,
        name: "Initial Assessment",
        description: "Comprehensive physiotherapy evaluation."
      },
      {
        id: 2,
        name: "Rehabilitation Session",
        description: "Personalized rehabilitation treatment."
      },
      {
        id: 3,
        name: "Sports Injury Therapy",
        description: "Treatment for sports-related injuries."
      },
      {
        id: 4,
        name: "Back Pain Treatment",
        description: "Therapy focused on reducing back pain and improving mobility."
      }
    ]
  }
];

export default departments;