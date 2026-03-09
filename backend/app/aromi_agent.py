from groq import Groq

client = Groq(api_key="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")

def aromi_chat(message):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role":"system","content":"You are AROMI, a friendly AI fitness coach"},
            {"role":"user","content":message}
        ]
    )

    return response.choices[0].message.content
