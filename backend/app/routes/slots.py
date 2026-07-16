from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud

router = APIRouter()


@router.get("/appointment-dates")
def get_appointment_dates(
    service: str,
    db: Session = Depends(get_db)
):
    return crud.get_appointment_dates(
        db,
        service,
    )


@router.get("/appointment-slots")
def get_appointment_slots(
    service: str,
    date: str,
    db: Session = Depends(get_db)
):
    return crud.get_appointment_slots(
        db,
        service,
        date,
    )