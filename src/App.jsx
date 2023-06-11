import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import RecipesAll from "./assets/component/RecipesAll";
import Home from "./assets/component/Home";
import NotFound from "./assets/component/NotFound";
import { client } from "./assets/component/Client";

import NavBar from "./assets/component/NavBar";
import HeaderImage from "./assets/component/HeaderImage";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState();

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
    <>
      <NavBar />
      <HeaderImage recipes={recipes} />
      <NavLink to="/">Home</NavLink>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <NavLink key={recipe.sys.id} to={`/recipes/${recipe.sys.id}`}>
                {recipe.fields.recipeName}
              </NavLink>
            );
          })}
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipesAll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
