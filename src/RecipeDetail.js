import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import axios from 'axios'
import {RecipeContext} from "./RecipeContext";
import {FavoriteContext} from "./FavoritesContext";

const RecipeDetail = ({match}) => {
    const API_KEY = 'fd0f8cbddca84dbc97ac85e1768f5c15';

    const [recipes, setRecipes] = useContext(RecipeContext);
    const [recipe, setRecipe] = useState({});
    const [favorites, setFavorites] = useContext(FavoriteContext);
    const [newHealthScore, setNewHealthScore] = useState("");


    const removeRecipe = () => {
        const index = recipes.findIndex(item => item.id === recipe.id);
        recipes.splice(index, 1);
        console.log(recipes);
    }

    useEffect(
        () => {
            getRecipe();
            console.log(recipe);
            console.log(match);
        }, []
    )

    const getRecipe = () => {
        axios.get(`https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${API_KEY}&includeNutrition=false`)
            .then(response => {
                console.log(response.data);
                setRecipe(response.data);
            });
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log(newHealthScore);
        const index = recipes.findIndex(item => item.id === recipe.id);
        recipes[index] = {...recipe, healthScore: newHealthScore};
    }

    return (
        <div className="recipe-detail" >
            <h1>{recipe.title}</h1>
            <button className={"love-btn"} type={"submit"} onClick={()=> {setFavorites([...favorites, {
                title: recipe.title,
                id: recipe.id,
                readyInMinutes: recipe.readyInMinutes,
                preparationMinutes: recipe.preparationMinutes,
                healthScore: newHealthScore,
                image: recipe.image
            }]);
            alert("Recipe added to Favorites");
            }}>❤</button>
            <button onClick={removeRecipe}>Remove</button>
            <p>Preparation time: {recipe.preparationMinutes} min</p>
            <p>Ready time: {recipe.readyInMinutes} min</p>
            <div className={"health-score-edit"}>
            <p className={"health-score-p"}>Health score: {newHealthScore !== ""? newHealthScore: recipe.healthScore}</p>
            <form onSubmit={handleSubmit}>
                <input className={"health-score-input"} type={"text"} value={newHealthScore} onChange={(e) => setNewHealthScore(e.target.value)}/>
                <button type={"submit"}>Change</button>
            </form>
            </div>
            <img src={recipe.image} alt={""}/>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetail;