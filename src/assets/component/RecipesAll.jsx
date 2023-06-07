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
        console.log(response.fields);
        setRecipe(response.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(recipe)

  return (
    <div>
      {recipe.fields}
      {/* {recipe &&
        recipe.map((recipeItem) => (
          <div key={recipeItem.sys.id}>{recipeItem}</div>
        ))} */}
    </div>
  );
}
