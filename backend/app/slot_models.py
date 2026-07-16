from sqlalchemy import Column, Integer, String, Boolean
from .database import Base


class AppointmentSlot(Base):
    __tablename__ = "appointment_slots"

    id = Column(Integer, primary_key=True, index=True)

    department = Column(String, nullable=False)
    service = Column(String, nullable=False)

    date = Column(String, nullable=False)
    time = Column(String, nullable=False)

    max_patients = Column(Integer, nullable=False, default=10)

    active = Column(Boolean, nullable=False, default=True)