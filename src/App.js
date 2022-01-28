import Restaurants from "./components/restaurants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MealDetails from "./components/mealDetails";

function App() {
  return (
    <div className="App">
      <h1 className="bg-secondary mx-auto text-warning m-0">Your Cafe</h1>
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/mealDetails/:mealId" element={<MealDetails />} />
      </Routes>
    </div>
  );
}

export default App;
