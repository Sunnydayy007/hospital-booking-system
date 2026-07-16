from fastapi import APIRouter

router = APIRouter()

departments = [
    {
        "id": "gopd",
        "name": "General Outpatient Department (GOPD)"
    },
    {
        "id": "radiology",
        "name": "Radiology"
    },
    {
        "id": "laboratory",
        "name": "Laboratory"
    },
    {
        "id": "physiotherapy",
        "name": "Physiotherapy"
    }
]

@router.get("/departments")
def get_departments():
    return departments