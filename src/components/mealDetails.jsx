import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const { mealId } = useParams();
  const navigate = useNavigate();
  const [mealDetails, setMealDetails] = useState(" ");
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMealDetails(data.meals);
      });
  }, []);
  const { strMeal, strMealThumb, strArea, strTags } =
    mealDetails[0];
  const handleAllMeals = () => {
    navigate(`/`);
  };
  return (
    <div className="row mx-auto">
      <div className="col-4 ">
        <img src={strMealThumb} className="w-75 rounded-circle" alt="" />
      </div>

      <div className="col-4 my-auto text-start">
        <h5>Name: {strMeal}</h5>
        <h6>From: {strArea}</h6>
        <h6>Type: {strTags}</h6>
        <button className="btn btn-primary my-4" onClick={handleAllMeals}>
          Go Back to ALL Meals
        </button>
      </div>
    </div>
  );
};

export default MealDetails;
