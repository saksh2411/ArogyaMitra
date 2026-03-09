from groq import Groq

client = Groq(api_key="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")

def generate_workout(goal, workout_type, time_available):

    prompt = f"""
    Create a 7 day workout plan.

    Goal: {goal}
    Workout Type: {workout_type}
    Time Available: {time_available}

    Include warmups, exercises, and rest time.
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role":"system","content":"You are a professional fitness trainer"},
            {"role":"user","content":prompt}
        ]
    )

    return response.choices[0].message.content
