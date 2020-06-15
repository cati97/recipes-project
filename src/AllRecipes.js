import React, {useContext} from "react";
import './App.css';
import {RecipeContext} from "./RecipeContext";
import Recipe from "./Recipe";
import RecipeAddForm from "./RecipeAddForm";


const AllRecipes = () => {
    const [recipes, setRecipes] = useContext(RecipeContext);

    return (
        <div className={"AllRecipes"}>
            <div className={"all-recipes-div"}>
            {recipes.map(recipe => <Recipe readyTime={recipe.readyInMinutes} healthScore={recipe.healthScore} key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image}/>)}
            </div>
            <div className={"add-recipe-form"}>
            <RecipeAddForm/>
            </div>
        </div>
    );
}

export default AllRecipes;