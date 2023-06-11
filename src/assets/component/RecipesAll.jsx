import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "./Client";
import { Button, Row, Col, Container } from "react-bootstrap";
import FormReview from "./FormReview";
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
        <Container>
          <h1 className="row RecName mb-5 mt-5 ">{recipe.recipeName}</h1>
          <Row className="justify-content-center g-0 Row-ing">
            <Col lg="8" className="text-center">
              <img
                src={recipe.image?.fields?.file?.url}
                alt="Recipe"
                className="RecipeImg img-fluid "
              />
            </Col>
            <Col lg="4">
              <ul className=" ingredients">
                <h3 className="text-center mb-4 ">Ingredients:</h3>
                {formatIngredients(recipe.ingredients)}
              </ul>
            </Col>
          </Row>
          <div className="col-12 RecMethod ">
            <ol className="methods">
              <h3 className="text-center mb-4 ">Method:</h3>
              {formatMethods(recipe.recipeMethods)}
            </ol>
          </div>
          <Row className="mt-5 justify-content-center">
            <Col lg="6">
              <FormReview />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
