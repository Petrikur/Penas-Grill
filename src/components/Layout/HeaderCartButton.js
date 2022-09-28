import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  // use this here to re evalauate header component when context changes -> cart items count changes
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsHighLighted ? classes.bump : ""
  }`;

  // cart animation
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return
    }else{

    }
    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    // cleanup function
    return () => {
      clearTimeout(timer)
    }
  }, [items,cartCtx.items.length]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
