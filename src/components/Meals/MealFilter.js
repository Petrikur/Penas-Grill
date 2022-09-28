import React from "react";
import "./MealFilter.css"

const MealFilter = (props) => {

    // const handleCategoryChange = (event) => {
    //     props.onChangedCategory(event.target.value)
    // }
    const setAll = () => {
        props.onChangedCategory("all")
    }
    const setSeafood= () => {
        props.onChangedCategory("seafood")
    } 
    const setSide= () => {
        props.onChangedCategory("sides")
    } 
    const setBeef= () => {
        props.onChangedCategory("beef")
    } 
    
    const setChicken= () => {
        props.onChangedCategory("chicken")
    } 

  return (
    <div className="mealfilter">
      <button onClick={setAll}>All</button>
      <button onClick={setSeafood}>Seafood</button>
      <button onClick={setSide}>Sides</button>
      <button onClick={setBeef}>Beef</button>
      <button onClick={setChicken}>Chicken</button>
    </div>
  );
};

export default MealFilter;
