import React, { useState } from "react";
import axios from "axios";

function MealPlan() {

  const [diet, setDiet] = useState("");
  const [calories, setCalories] = useState("");
  const [allergies, setAllergies] = useState("");
  const [plan, setPlan] = useState("");

  const generateMealPlan = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/generate-meal-plan",
        {
          diet: diet,
          calories: parseInt(calories),
          allergies: allergies
        }
      );

      setPlan(response.data.meal_plan);

    } catch (error) {
      console.error("Error generating meal plan:", error);
    }

  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>🥗 AI Meal Plan Generator</h1>

      <input
        type="text"
        placeholder="Diet type (vegetarian / vegan)"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Daily calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Allergies (peanuts, lactose)"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />

      <br /><br />

      <button onClick={generateMealPlan}>
        Generate Meal Plan
      </button>

      <h2>Meal Plan</h2>

      <pre>{plan}</pre>

    </div>
  );
}

export default MealPlan;
