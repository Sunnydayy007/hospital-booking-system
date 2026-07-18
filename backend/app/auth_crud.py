from sqlalchemy import text
from sqlalchemy.orm import Session


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

    return {
        "id": user.id,
        "username": user.username,
        "role": user.role,
    }