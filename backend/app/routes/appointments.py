from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud

router = APIRouter()


class AppointmentCreate(BaseModel):
    service: str
    date: str
    time: str
    fullName: str
    phone: str
    email: str = ""
    gender: str = ""
    dob: str = ""
    reason: str = ""


class AppointmentStatusUpdate(BaseModel):
    status: str


@router.post("/appointments", status_code=status.HTTP_201_CREATED)
def create_appointment(
    appointment: AppointmentCreate,
    db: Session = Depends(get_db)
):
    new_appointment, error = crud.create_appointment(
        db,
        appointment.model_dump()
    )

    if error == "slot_not_found":
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Appointment slot not found."
        )

    if error == "slot_full":
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This appointment slot is full."
        )

    return {
        "message": "Appointment booked successfully.",
        "appointment": {
            "id": new_appointment.id,
            **appointment.model_dump()
        }
    }


@router.get("/appointments")
def get_appointments(
    db: Session = Depends(get_db)
):
    return crud.get_appointments(db)


@router.patch("/appointments/{appointment_id}/status")
def update_appointment_status(
    appointment_id: int,
    payload: AppointmentStatusUpdate,
    db: Session = Depends(get_db),
):
    appointment = crud.update_appointment_status(
        db,
        appointment_id,
        payload.status,
    )

    if appointment is None:
        raise HTTPException(
            status_code=404,
            detail="Appointment not found.",
        )

    return appointment