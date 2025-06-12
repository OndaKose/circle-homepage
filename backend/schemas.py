from pydantic import BaseModel

class UserLogin(BaseModel):
    username: str
    password: str

# レスポンス・リクエスト共通で使える
class PostBase(BaseModel):
    title: str
    content: str

# POSTリクエスト用（作成時）
class PostCreate(PostBase):
    pass

# DBから返すとき用（ID付き）
class PostResponse(PostBase):
    id: int

    class Config:
        orm_mode = True  # SQLAlchemyモデルをそのまま返すために必要

