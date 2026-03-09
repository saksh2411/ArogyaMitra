from groq import Groq

client = Groq(api_key="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")

def generate_meal_plan(diet, calories, allergies):

    prompt = f"""
    Create a 7 day Indian meal plan.

    Diet Type: {diet}
    Calories: {calories}
    Allergies: {allergies}

    Include breakfast, lunch, dinner and snacks.
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role":"system","content":"You are a nutritionist"},
            {"role":"user","content":prompt}
        ]
    )

    return response.choices[0].message.content
