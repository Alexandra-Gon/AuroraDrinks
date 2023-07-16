import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  let { idDrink } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    ).then((res) => setData(res.data.drinks[0]));
  }, [idDrink]);

  if (data === null) {
    return null;
  } else {
    return (
      <div className="containerDrink">
        <div className="containerDrinkText">
          <h3 className="drinkName">{data.strDrink}</h3>
          <div className="drinkText categoryTypeText">
            <p>
              <b>Category:</b> {data.strCategory}
            </p>
            <p>
              <b>Type:</b> {data.strAlcoholic}
            </p>
          </div>
          <div className="drinkText">
            <b>{data.strDrink} Ingredients</b>
            <ul className="ingredientsText">
              {data.strMeasure1 && (
                <li>{`${data.strIngredient1} (${data.strMeasure1})`}</li>
              )}
              {data.strMeasure2 && (
                <li>{`${data.strIngredient2} (${data.strMeasure2})`}</li>
              )}
              {data.strMeasure3 && (
                <li>{`${data.strIngredient3} (${data.strMeasure3})`}</li>
              )}
              {data.strMeasure4 && (
                <li>{`${data.strIngredient4} (${data.strMeasure4})`}</li>
              )}
              {data.strMeasure5 && (
                <li>{`${data.strIngredient5} (${data.strMeasure5})`}</li>
              )}
              {data.strMeasure6 && (
                <li>{`${data.strIngredient6} (${data.strMeasure6})`}</li>
              )}
              {data.strMeasure7 && (
                <li>{`${data.strIngredient7} (${data.strMeasure7})`}</li>
              )}
              {data.strMeasure8 && (
                <li>{`${data.strIngredient8} (${data.strMeasure8})`}</li>
              )}
            </ul>
          </div>
          <p className="drinkText">{data.strInstructions}</p>
        </div>
        <div className="drinkImageContainer">
          <img className="drinkImage" src={data.strDrinkThumb} />
        </div>
      </div>
    );
  }
};

export default DetailPage;
