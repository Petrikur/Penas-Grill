import React, { Fragment } from "react";
import grillImage from "../../assets/grill-image.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";


export const Header = (props) => {
  return (
    <Fragment>
    
      <header className={classes.header}>
        <div><h1 className={props.headerclass}>ᑭEᑎᗩ'ᔕ GᖇIᒪᒪ</h1></div>
        <HeaderCartButton onClick = {props.onShowCart} />
      
      </header>
      <div className= {classes["main-image"]}>
        <img src = {grillImage} alt = "grill" />
      </div>
    </Fragment>
  );
};

export default Header;
