import React, { useState } from "react";
import axios from "axios";

function Workout() {

  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  const generateWorkout = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/generate-workout",
        {
          goal: goal,
          workout_type: "home",
          time_available: "30 minutes"
        }
      );

      setPlan(response.data.workout_plan);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h2>Workout Plan Generator</h2>

      <input
        placeholder="Enter fitness goal"
        value={goal}
        onChange={(e)=>setGoal(e.target.value)}
      />

      <br /><br />

      <button onClick={generateWorkout}>
        Generate Workout
      </button>

      <h3>Workout Plan</h3>

      <pre>{plan}</pre>

    </div>
  );
}

export default Workout;
