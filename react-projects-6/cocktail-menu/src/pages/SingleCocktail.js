import { Link, useParams } from "react-router-dom";
import React, { useCallback, useEffect } from "react";
import Loading from "../components/Loading";

export default function SingleCocktail() {
  const [cocktail, setCocktail] = React.useState(null);
  const { id } = useParams();

  const fetchSingleCocktail = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      console.log(data);
      setCocktail(data.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  // React.useEffect(() => {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCocktail(data.drinks[0]);
  //     });
  // }, [id]);

  useEffect(() => {
    fetchSingleCocktail();
  }, [id, fetchSingleCocktail]);

  function getIngredients(cocktail) {
    return Object.keys(cocktail)
      .filter((i) => i.includes("strIngredient"))
      .filter((i) => cocktail[i])
      .map((v) => cocktail[v]);
  }

  if (!cocktail) {
    return <Loading />;
  }

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{cocktail.strDrink}</h2>
      <div className='drink'>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {cocktail.strDrink}
          </p>
          <p>
            <span className='drink-data'>category :</span>{" "}
            {cocktail.strCategory}
          </p>
          <p>
            <span className='drink-data'>info :</span> {cocktail.strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {cocktail.strGlass}
          </p>
          <p>
            <span className='drink-data'>instructons :</span>{" "}
            {cocktail.strInstructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {console.log(getIngredients(cocktail), "ing")}
            {getIngredients(cocktail).map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
