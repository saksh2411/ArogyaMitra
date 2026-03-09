from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    age: int
    weight: int
    goal: str
    allergies: str


class WorkoutRequest(BaseModel):
    goal: str
    workout_type: str
    time_available: str


class MealRequest(BaseModel):
    diet: str
    calories: int
    allergies: str
