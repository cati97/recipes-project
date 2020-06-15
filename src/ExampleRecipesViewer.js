import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const ExampleRecipesViewer = ({allRecipes}) => {

    return (
        <div className="ExampleRecipesViewer">
            <ul className={"recipe-ul"}>
                {allRecipes.slice(15, 45).map(recipe => <Recipe readyTime={recipe.readyInMinutes} healthScore={recipe.healthScore} key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image}/>)}
            </ul>
        </div>
    );
}

export default ExampleRecipesViewer;
