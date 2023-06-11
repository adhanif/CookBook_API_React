import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";
import "./headerImage.css";

export default function HeaderImage({ recipes }) {
<<<<<<< HEAD
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [recipes]);

  return (
    <div className="image-container">
      {recipes && recipes.length > 0 && (
        <>
          <img
            src={recipes[currentImageIndex].fields.image.fields.file.url}
            alt="Recipe"
          />
          <div className="image-text">
            {recipes[currentImageIndex].fields.title}
          </div>
        </>
=======
  // console.log(recipes);
  //recipe.fields.image.fields.file.url
  return (
    <div>
      {recipes && (
        <div>
          {/* {recipes.map((recipe) => {
            return (
              <img
                key={recipe.sys.id}
                src={recipe.fields.image.fields.file.url}
                alt="Recipe"
              />
            );
          })} */}
        </div>
>>>>>>> 9c1bc03fb47dc31e0f158386f246017dff267e50
      )}
    </div>
  );
}
