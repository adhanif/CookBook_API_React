import React from "react";

export default function Dashi({ recipes }) {
  return (
    <div>
      {recipes &&
        recipes.map((recipe) => {
          return <div key={recipe.sys.id}>{recipe.fields.ingredients}</div>;
        })}
    </div>
  );
}
