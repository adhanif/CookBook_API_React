import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";

export default function RecipesAll() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      // .getEntries()
      .then((response) => {
        // console.log(response.fields);
        setRecipe(response.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log(recipe)

  return (
    <div>
      {recipe && (
        <div>
          <h1 key={recipe.id}>{recipe.recipeName}</h1>
          <img
            key={recipe.id}
            src={recipe.image?.fields?.file?.url}
            alt="Recipe"
          />
          <p key={recipe.id}>{recipe.ingredients}</p>
          <p key={recipe.id}>{recipe.recipeMethods}</p>
          <p key={recipe.id}>kalories= {recipe.calory}</p>
        </div>
      )}
    </div>
  );
}
