import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./CardList.css";
import { DrinksContext } from "../Context/drinksContext";

const CardList = () => {
  const { drinks, setDrinks } = useContext(DrinksContext);
  const [categoryDrink, setCategoryDrink] = useState("Cocktail");
  const [pageShowed, setPageShowed] = useState(1);
  const [numDrinks, setNumDrinks] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredObjects, setFilteredObjects] = useState([]);

  // console.log(drinks);
  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryDrink}`
    ).then((res) => setDrinks(res.data.drinks));
  }, [categoryDrink]);

  useEffect(() => {
    const filtered = drinks.filter((obj) =>
      obj.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredObjects(filtered);
  }, [drinks, searchTerm]);

  const previusCoctailsPage = () => {
    if (pageShowed > 1) {
      setPageShowed(pageShowed - 1);
      setNumDrinks(numDrinks - 10);
    }
  };

  const nextCoctailsPage = () => {
    if (pageShowed < Math.ceil(drinks.length / 10)) {
      setPageShowed(pageShowed + 1);
      setNumDrinks(numDrinks + 10);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const changeCategory = (category) => {
    setCategoryDrink(category);
    setPageShowed(1);
    setNumDrinks(0);
    setSearchTerm("");
  };

  if (drinks === null) {
    return null;
  } else {
    return (
      <>
        <div className="searchBarContainer">
          <input
            className="searchBar"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search your drink..."
          />
        </div>

        <div className="btnCategoriesContainer">
          <button
            className={
              categoryDrink === "Cocktail"
                ? "btnCategories activeCategory"
                : "btnCategories"
            }
            onClick={() => changeCategory("Cocktail")}
          >
            Cocktail
          </button>
          <button
            className={
              categoryDrink === "Shot"
                ? "btnCategories activeCategory"
                : "btnCategories"
            }
            onClick={() => changeCategory("Shot")}
          >
            Shot
          </button>
          <button
            className={
              categoryDrink === "Coffee / Tea"
                ? "btnCategories activeCategory"
                : "btnCategories"
            }
            onClick={() => changeCategory("Coffee / Tea")}
          >
            Coffee/Tea
          </button>
          <button
            className={
              categoryDrink === "Soft Drink"
                ? "btnCategories activeCategory"
                : "btnCategories"
            }
            onClick={() => changeCategory("Soft Drink")}
          >
            Soft Drink
          </button>
        </div>
        <div className="cardList">
          {filteredObjects.slice(numDrinks, numDrinks + 10).map((drink) => {
            return <Card key={drink.idDrink} data={drink} />
          })}
        </div>

        {Math.ceil(filteredObjects.length / 10) > 1 && (
          <div className="navigation">
            <button
              className="buttonNavigationDrinks"
              onClick={previusCoctailsPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-left"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 6l-6 6l6 6v-12" />
              </svg>
            </button>
            <p className="pageShoweb">{pageShowed}</p>/
            <p className="pageShoweb">
              <b>{Math.ceil(filteredObjects.length / 10)}</b>
            </p>
            <button
              className="buttonNavigationDrinks"
              onClick={nextCoctailsPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-right"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 18l6 -6l-6 -6v12" />
              </svg>
            </button>
          </div>
        )}
      </>
    );
  }
};

export default CardList;
