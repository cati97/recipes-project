import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const RecipeContext = createContext(null);

export const RecipeProvider = (props) => {
    const API_KEY = 'fd0f8cbddca84dbc97ac85e1768f5c15';
    const [recipes, setRecipes] = useState([]);

    useEffect(
        () => {
            getRecipes();
        }, [])

    const getRecipes =  () => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&fillIngredients=true`)
            .then(response => {
                console.log(response.data.results);
                setRecipes(response.data.results);

            });
    }


    return (
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>
    )
}