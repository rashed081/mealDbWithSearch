import React, { useEffect, useState } from "react";
import Meal from "./meal";
import "./restaurant.css";

const Restaurants = () => {
  const [searchText, setSearchText] = useState(" ");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [searchText]);

  const handleChange = (event) => {
    const searchTextValue = event.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div>
      <div className="bg-secondary p-2">
        <input
          type="text"
          onChange={handleChange}
          placeholder="search meal here"
          className="form-control mx-auto w-50"
        />
      </div>
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
