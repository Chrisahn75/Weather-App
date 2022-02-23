import React from 'react';
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import API from "./components/API"
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { createContext, useState } from "react";

export const CityContext = createContext("");

export default function App() {

  const [city, setCity] = useState("paris");

  const context = {
    city: city,
    setCity: setCity,
  };

  return (
    <CityContext.Provider value={context}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Favorites">Favorites</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Favorites" component={Favorites}></Route>
        </Switch>
        <footer>
        <p>Chris AHONA</p>
        <p>24/02/22</p>
      </footer>
      </BrowserRouter>
    </CityContext.Provider>
  );
}
