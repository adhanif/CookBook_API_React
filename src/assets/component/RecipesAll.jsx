import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";
import "./../../../src/App.css";

export default function RecipesAll() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setRecipe(response.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const formatIngredients = (ingredients) => {
    return ingredients
      .split("\n")
      .map((ingredient, index) => <li key={index}>{ingredient.trim()}</li>);
  };

  const formatMethods = (methods) => {
    return methods.split("\n").map((method, index) => {
      return <li key={index}>{method.trim()}</li>;
    });
  };

  return (
    <div>
      {recipe && (
        <div className="container">
          <h1 className="row RecName">{recipe.recipeName}</h1>
          <div className="RecipeBody col-12">
            <ul className="col-5 ingredients">
              <h3>Ingredients:</h3>
              {formatIngredients(recipe.ingredients)}
            </ul>
            <img
              className="col-7 RecImg"
              src={recipe.image?.fields?.file?.url}
              alt="Recipe"
            />
          </div>

          <div className="col-12 RecMethod ">
            <ol className="methods">
              <h3>Method:</h3>
              {formatMethods(recipe.recipeMethods)}
            </ol>
          </div>
          <p className="row">kalories: {recipe.calory}</p>
        </div>
      )}
    </div>
  );
}
