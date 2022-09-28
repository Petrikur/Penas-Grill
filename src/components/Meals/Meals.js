import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import MealFilter from "./MealFilter";
import { useState } from "react";
import {mealdata} from "../../MealData";

const Meals = () => {
  const [meals, setMeals] = useState(mealdata);
  const [filteredCategory, setFilteredCategory] = useState("all");

  const filteredMeals = meals.filter((meal) => {
    return meal.categories.includes(filteredCategory);
  });

  const categoryChangeHandler = (filteredCategory) => {
    setFilteredCategory(filteredCategory);
  };

  return (
    <Fragment>
      <MealsSummary />
      <MealFilter
        selected={filteredCategory}
        onChangedCategory={categoryChangeHandler}
      />
      <AvailableMeals meals={filteredMeals} />
    </Fragment>
  );
};

export default Meals;
