import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import RecipesAll from "./assets/component/RecipesAll";
import Safeeha from "./assets/component/Safeeha";
import Dashi from "./assets/component/Dashi";
import Home from "./assets/component/Home";
import NotFound from "./assets/component/NotFound";
import { client } from "./assets/component/Client";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  // client
  //   .getEntry("<entry_id>")
  //   .then((entry) => console.log(entry))
  //   .catch(console.error);

  useEffect(() => {
    client
      // .getEntry("6MGXbG0aSYJWo7zrK34QR0")
      .getEntries()
      .then((response) => {
        // console.log(response.items);
        setRecipes(response.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <NavLink key={recipe.sys.id} to={`/recipes/${recipe.sys.id}`}>
                {recipe.fields.recipeName}
              </NavLink>
            );
          })}
        {/* <NavLink to="/lasagna">Lasagna</NavLink>
        <NavLink to="/Dashi">Dashi</NavLink>
        <NavLink to="/Safeeha">Safeeha</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipesAll />} />
        {/* <Route path="/Dashi" element={<Dashi recipes={recipes} />} />
        <Route path="/Safeeha" element={<Safeeha recipes={recipes} />} /> */}
        //
        <Route path="*" element={<NotFound />} />
      </Routes>
      <>
        {/* {recipes &&
          recipes.map((recipe) => {
            return <div key={recipe.sys.id}>{recipe.fields.ingredients}</div>;
          })} */}
      </>
    </>
  );
}

export default App;
