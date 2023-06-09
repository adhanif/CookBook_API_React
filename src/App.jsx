import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import RecipesAll from "./assets/component/RecipesAll";
import Safeeha from "./assets/component/Safeeha";
import Dashi from "./assets/component/Dashi";
import Home from "./assets/component/Home";
import NotFound from "./assets/component/NotFound";
import { client } from "./assets/component/Client";
import NavBar from "./assets/component/NavBar";
import HeaderImage from "./assets/component/HeaderImage";
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
      <NavBar />
      <HeaderImage recipes={recipes} />

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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipesAll />} />
        {/* <Route path="/Dashi" element={<Dashi recipes={recipes} />} />
        <Route path="/Safeeha" element={<Safeeha recipes={recipes} />} /> */}
        //
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
