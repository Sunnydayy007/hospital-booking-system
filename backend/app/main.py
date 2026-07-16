from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine

# Import ALL models before create_all()
from app.models import Base
from app.models import Appointment
from app.slot_models import AppointmentSlot

from app.routes.departments import router as department_router
from app.routes.appointments import router as appointment_router
from app.routes.slots import router as slot_router

app = FastAPI(
    title="Hospital Booking API",
    version="1.0.0"
)

# Create database tables
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(department_router)
app.include_router(appointment_router)
app.include_router(slot_router)


@app.get("/")
def root():
    return {
        "message": "Hospital Booking API is running!"
    }