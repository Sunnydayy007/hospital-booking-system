from app.database import SessionLocal
from app.slot_models import AppointmentSlot

from datetime import datetime, timedelta

db = SessionLocal()

# Times available every day
times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
]

# Create slots for the next 30 days
today = datetime.today()

for day in range(30):

    current_date = (
        today + timedelta(days=day)
    ).strftime("%Y-%m-%d")

    for time in times:

        slot = AppointmentSlot(
            department="GOPD",
            service="General Consultation",
            date=current_date,
            time=time,
            max_patients=10,
            active=True,
        )

        db.add(slot)

db.commit()
db.close()

print("✅ Appointment slots created successfully!")