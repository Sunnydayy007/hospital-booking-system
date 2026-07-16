from sqlalchemy import Column, Integer, String
from .database import Base


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)

    service = Column(String)
    date = Column(String)
    time = Column(String)

    fullName = Column(String)
    phone = Column(String)
    email = Column(String)

    gender = Column(String)
    dob = Column(String)

    reason = Column(String)

    status = Column(String, default="Booked")