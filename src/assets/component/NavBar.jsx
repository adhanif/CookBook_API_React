import React, { useState, useEffect } from "react";
import { client } from "./Client";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi"; // Importing the BiSearch icon from react-icons

export default function NavBar() {
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
  }, [recipes]);
  return (
    <Navbar className="custom-navbar mb-3" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {recipes &&
              recipes.map((recipe) => (
                <Nav.Link
                  key={recipe.sys.id}
                  as={NavLink}
                  to={`/recipes/${recipe.sys.id}`}
                >
                  {recipe.fields.recipeName}
                </Nav.Link>
              ))}
          </Nav>
          <Nav className="ms-auto">
            <Form className="d-flex">
              <div className="input-group">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="form-control bg-white border-0 pe-5 mt-lg-0 mt-3"
                />
                <Button
                  variant="outline-light"
                  className="position-absolute end-0 bg-transparent border-0 mt-lg-0 mt-3"
                  style={{ color: "black" }}
                >
                  <BiSearch />
                </Button>
              </div>
            </Form>
            <Button
              variant="outline-light"
              className="ms-0 ms-lg-2 me-0 me-lg-2 mt-3 mt-lg-0"
            >
              Login
            </Button>
            <Button
              variant="outline-light"
              className="mt-3 mt-lg-0 mb-lg-0 mb-3 "
            >
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
