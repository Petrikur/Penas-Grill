import { useState,useEffect,useCallback } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import classes from "./components/Layout/Header.module.css"



function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [y, setY] = useState(0);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  // h1 animation on scroll
  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      setY(window.scrollY);
    }, []
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // change h1 class on scroll
  let h1 = classes.h1;
  if (y > 200) {
    h1 = classes.verticalh1
  }else {
    h1 = classes.h1
  }
  
  return (
    <CartProvider>

     { cartIsShown && <Cart onHideCart = {hideCartHandler} />} 
      <Header headerclass = {h1} onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
