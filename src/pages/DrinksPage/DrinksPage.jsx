import React from "react";
import CardList from "../../Components/CardList/CardList";
import "./DrinksPage.css";
import { useContext } from "react";
import { drinksContext } from "../../Components/Context/drinksContext";


const DrinksPage = () => {

  return (
    <div className="drinksContainer">
        <h2 className="drinksTitle">Drinks</h2>    
        <CardList/>
    </div>
  );
};

export default DrinksPage;
