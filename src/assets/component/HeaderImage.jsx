import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";

export default function HeaderImage({ recipes }) {
  console.log(recipes);
  //recipe.fields.image.fields.file.url
  return (
    <div>
      {recipes && (
        <div>
          {recipes.map((recipe) => {
            return (
              <img
                key={recipe.sys.id}
                src={recipe.fields.image.fields.file.url}
                alt="Recipe"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
