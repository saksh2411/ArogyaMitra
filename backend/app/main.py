from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from .schemas import WorkoutRequest, MealRequest
from .workout_generator import generate_workout
from .nutrition_generator import generate_meal_plan
from .aromi_agent import aromi_chat

app = FastAPI(title="ArogyaMitra API")

# Allow React frontend to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allows all origins (good for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "ArogyaMitra API Running"}


@app.post("/generate-workout")
def workout_plan(data: WorkoutRequest):

    plan = generate_workout(
        data.goal,
        data.workout_type,
        data.time_available
    )

    return {"workout_plan": plan}


@app.post("/generate-meal-plan")
def meal_plan(data: MealRequest):

    plan = generate_meal_plan(
        data.diet,
        data.calories,
        data.allergies
    )

    return {"meal_plan": plan}


@app.post("/aromi-coach")
def coach(message: str):

    reply = aromi_chat(message)

    return {"response": reply}
