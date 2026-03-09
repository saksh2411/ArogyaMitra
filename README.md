# ArogyaMitra AI

ArogyaMitra AI is a simple AI-powered health assistant that helps users generate **personalized workout plans, meal plans, and fitness advice** using AI.

The project uses **React for the frontend** and **FastAPI for the backend**, with an AI model to generate recommendations.

---

## Features

* Workout Plan Generator
* Meal Plan Generator
* AI Fitness Coach (AROMI)
* Simple user interface
* AI-powered responses

---

## Tech Stack

Frontend:

* React
* CSS
* Axios

Backend:

* FastAPI
* Python
* Uvicorn

AI:

* Groq / LLaMA model (via API)

---

## Project Structure

```
arogyamitra
│
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── Workout.js
│   │   ├── MealPlan.js
│   │   ├── Coach.js
│   │   ├── App.css
│   │   └── index.js
│
├── backend
│   ├── app
│   │   └── main.py
│   ├── venv
│   ├── requirements.txt
│   └── .env
```

---

## Installation and Setup

### Backend Setup

```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API Docs:

```
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## How to Use

1. Enter your **fitness goal** to generate a workout plan.
2. Enter your **diet goal** to generate a meal plan.
3. Ask the **AI Coach** health or fitness questions.

---

## Future Improvements

* User login system
* Progress tracking dashboard
* Exercise videos
* Nutrition tracking
* Mobile responsive UI

---

## Group Members

* Sakshi Pawar
* Sakshi Ausare
* Sai Chougale
* Parth Patil

---

## Project Title

**ArogyaMitra AI – An AI Powered Health Assistant**
