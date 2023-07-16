import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DrinksContext = createContext();

// const drinksInStock = {};

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
    ).then((res) => setDrinks(res.data.drinks));
  }, []);

  return (
    <DrinksContext.Provider value={{ drinks, setDrinks, counter, setCounter }}>
      {children}
    </DrinksContext.Provider>
  );
};
