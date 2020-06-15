import React from 'react';
import './App.css';
import Nav from "./Nav";
import Favorites from "./Favorites";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import RecipeDetail from "./RecipeDetail";
import {RecipeProvider} from "./RecipeContext";
import {FavoriteProvider} from "./FavoritesContext";
import AllRecipes from "./AllRecipes";

const App = () => {
  return (
      <Router>
      <div className="App">
          <RecipeProvider>
              <FavoriteProvider>
          <Nav/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/all-recipes" exact component={AllRecipes}/>
          <Route path="/:id" component={RecipeDetail}/>
          </Switch>
              </FavoriteProvider>
          </RecipeProvider>
      </div>
      </Router>
  );
}

export default App;
