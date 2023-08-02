import "./Card.css";
import { Link } from "react-router-dom";
// import { DrinksContext } from "../Context/drinksContext";
// import { useContext } from "react";

const Card = ({ data }) => {
  // const { counter, setCounter } = useContext(DrinksContext); 

  return (
    <div className="cocktailCard">
      <Link
        to={`/drink/${data.idDrink}`}
        className="link link-underline link-underline-opacity-0 "
      >
        <img className="cardImage" src={data.strDrinkThumb} />

        <h3 className="cardName">{data.strDrink}</h3>
      </Link>
      {/* <div>
        <button onClick={() => setCounter(counter+1)}>Buy</button>
      </div> */}
    </div>
  );
};


export default Card;