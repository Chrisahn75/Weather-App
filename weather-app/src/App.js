import React from 'react';
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import API from "./components/API"
import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export const CityContext = createContext("");

export default function App() {

  const [city, setCity] = useState("Paris");
  const [favorites, setFavorites] = useState([]);
  const context= {
    city: city,
    setCity: setCity,
    favorites: favorites,
    setFavorites: setFavorites,
  };

  return (
    <>
      <CityContext.Provider value={context}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">favorites</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
          </Switch>
          <footer>
            <h3>Chris AHONA</h3>
            <p>24/02/22</p>
          </footer>
        </BrowserRouter>
      </CityContext.Provider>
    </>
  );
}