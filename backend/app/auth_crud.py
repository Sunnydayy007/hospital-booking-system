from sqlalchemy import text
from sqlalchemy.orm import Session

from app.security import create_access_token


def authenticate_user(
    db: Session,
    username: str,
    password: str,
):
    result = db.execute(
        text("""
            SELECT id, username, role
            FROM users
            WHERE username = :username
            AND password = :password
        """),
        {
            "username": username,
            "password": password,
        },
    )

    user = result.first()

    if user is None:
        return None

    user_data = {
        "id": user.id,
        "username": user.username,
        "role": user.role,
    }

    access_token = create_access_token(
        {
            "sub": user.username,
            "role": user.role,
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user_data,
    }