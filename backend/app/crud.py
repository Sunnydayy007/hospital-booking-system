from sqlalchemy.orm import Session

from .models import Appointment
from .slot_models import AppointmentSlot


def create_appointment(db: Session, appointment_data: dict):

    slot = (
        db.query(AppointmentSlot)
        .filter(
            AppointmentSlot.service == appointment_data["service"],
            AppointmentSlot.date == appointment_data["date"],
            AppointmentSlot.time == appointment_data["time"],
            AppointmentSlot.active == True,
        )
        .first()
    )

    if not slot:
        return None, "slot_not_found"

    booking_count = (
        db.query(Appointment)
        .filter(
            Appointment.service == appointment_data["service"],
            Appointment.date == appointment_data["date"],
            Appointment.time == appointment_data["time"],
        )
        .count()
    )

    if booking_count >= slot.max_patients:
        return None, "slot_full"

    appointment = Appointment(**appointment_data)

    db.add(appointment)
    db.commit()
    db.refresh(appointment)

    return appointment, None


def get_appointments(db: Session):
    return (
        db.query(Appointment)
        .order_by(
            Appointment.date,
            Appointment.time,
            Appointment.fullName,
        )
        .all()
    )


def get_appointment_dates(
    db: Session,
    service: str,
):
    dates = (
        db.query(AppointmentSlot.date)
        .filter(
            AppointmentSlot.service == service,
            AppointmentSlot.active == True,
        )
        .distinct()
        .order_by(AppointmentSlot.date)
        .all()
    )

    return [date[0] for date in dates]


def get_appointment_slots(
    db: Session,
    service: str,
    date: str,
):
    slots = (
        db.query(AppointmentSlot)
        .filter(
            AppointmentSlot.service == service,
            AppointmentSlot.date == date,
            AppointmentSlot.active == True,
        )
        .order_by(AppointmentSlot.time)
        .all()
    )

    results = []

    for slot in slots:

        booked = (
            db.query(Appointment)
            .filter(
                Appointment.service == service,
                Appointment.date == date,
                Appointment.time == slot.time,
            )
            .count()
        )

        results.append(
            {
                "id": slot.id,
                "time": slot.time,
                "capacity": slot.max_patients,
                "booked": booked,
                "available": booked < slot.max_patients,
            }
        )

    return results


def update_appointment_status(
    db: Session,
    appointment_id: int,
    new_status: str,
):
    appointment = (
        db.query(Appointment)
        .filter(Appointment.id == appointment_id)
        .first()
    )

    if appointment is None:
        return None

    appointment.status = new_status

    db.commit()
    db.refresh(appointment)

    return appointment