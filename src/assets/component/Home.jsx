import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "./Client";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../../src/App.css";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <Carousel variant="dark" className="Carousel-margin">
          {recipes.map((recipe) => (
            <Carousel.Item key={recipe.sys.id}>
              <div
                className="carousel-image"
                style={{
                  backgroundImage: `url(${recipe.fields.image?.fields?.file?.url})`,
                }}
              ></div>
              <Carousel.Caption>
                <h2 style={{ color: "white" }}>{recipe.fields.recipeName}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container>
        <Row xs={1} md={3} className="g-5 cards-margin">
          {recipes.map((recipe) => (
            <Col key={recipe.sys.id}>
              <Card>
                <div className="card-image-wrapper">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    // src={recipe.fields.image?.fields?.file?.url}
                    style={{
                      backgroundImage: `url(${recipe.fields.image?.fields?.file?.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{recipe.fields.recipeName}</Card.Title>
                  <Card.Text>
                    contains {recipe.fields.calory} calories!
                  </Card.Text>
                  <Button variant="dark" className="mb-2 mt-2">
                    <Link className="ShowMore" to={`/recipes/${recipe.sys.id}`}>
                      Read more
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
