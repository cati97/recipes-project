import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";


const RecipeViewer = ({allRecipes, query, filters, maxReadyTime, sortBySelect, clickHandler}) => {

    const [selectedRecipes, setSelectedRecipes] = useState([]);

    useEffect( () => {
        setSelectedRecipes(
            (allRecipes.filter(recipe => recipe.title.includes(query))
                .filter(rec => filters.includes("vegetarian")? rec["vegetarian"] : true)
                .filter(rec => filters.includes("veryHealthy")? rec["veryHealthy"] : true)
                .filter(rec => filters.includes("glutenFree")? rec["glutenFree"] : true)
                .filter(rec => parseInt(rec.readyInMinutes) <= parseInt(maxReadyTime))).sort((a, b) => {
                    if (a[sortBySelect] > b[sortBySelect]) return 1;
                    else if (a[sortBySelect] < b[sortBySelect]) return -1;
                    else return 0;
            }))
        }, [allRecipes, query, filters, maxReadyTime, sortBySelect])

    return (
        <div className="RecipeViewer">
            <ul className={"recipe-ul"}>
                {selectedRecipes.map(recipe => <Recipe clickTitleHandler={clickHandler} readyTime={recipe.readyInMinutes} healthScore={recipe.healthScore} key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image}/>)}
            </ul>
        </div>
    );
}

export default RecipeViewer;
