import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Workout from "./Workout";
import MealPlan from "./MealPlan";
import Coach from "./Coach";
import "./App.css";


function App() {

  return (
    <Router>

      <div style={{ padding: "20px" }}>

        <h1>ArogyaMitra</h1>

        <nav style={{ marginBottom: "20px" }}>

          <Link to="/" style={{ marginRight: "20px" }}>
            Workout Plan
          </Link>

          <Link to="/meal-plan" style={{ marginRight: "20px" }}>
            Meal Plan
          </Link>

          <Link to="/coach">
            AI Coach
          </Link>

        </nav>

        <Routes>

          <Route path="/" element={<Workout />} />

          <Route path="/meal-plan" element={<MealPlan />} />

          <Route path="/coach" element={<Coach />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;
