import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { DrinksContext } from "../Context/drinksContext";

const CartWidget = () => {
  const { drinks, counter } = useContext(DrinksContext);
  // const { counter } = useContext(DrinksContext);

  return (
    <div className="shoppingCartIcon">
      <ShoppingCartIcon/>

      <p> Drinks:{counter}</p>
    </div>
  );
};

export default CartWidget;
