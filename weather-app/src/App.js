import React from 'react';
import Accueil from "./components/Accueil";
import Favoris from "./components/Favoris";
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Favoris">Favoris</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Accueil}></Route>
          <Route exact path="/Favoris" component={Favoris}></Route>
        </Switch>
      </BrowserRouter>
  );
}
