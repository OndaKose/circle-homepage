from .db import engine, SessionLocal
from .models import Post , User

Post.metadata.create_all(bind=engine)

db = SessionLocal()
user = User(username="admin", password="secret123")
db.add(user)
db.commit()