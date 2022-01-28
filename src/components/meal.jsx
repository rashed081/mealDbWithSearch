import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./restaurant.css";

const Meal = (props) => {
  const navigate = useNavigate(); //useHistory is changed to useNavigate in router v6
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
  const handleMealChange = () => {
    navigate(`/mealDetails/${idMeal}`);
  };
  return (
    <div className=" mx-auto mt-4">
      <div className="card" style={{ width: "22rem" }}>
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">
            {strInstructions.slice(0, 100).concat("...")}
          </p>
          <button className="btn btn-primary" onClick={handleMealChange}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
