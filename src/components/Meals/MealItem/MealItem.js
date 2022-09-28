import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";


const MealItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

 const cartCtx = useContext(CartContext);

  const addItemTocartHandler = amount =>  {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount:amount,
      price: props.price
    })
  }

  
  return (
    <li className={classes.meal}>
      <div>
      <img className={classes.mealImage} src={props.image} alt = "meal"/>
      <div style = {{marginTop: "50px"}}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart = {addItemTocartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
