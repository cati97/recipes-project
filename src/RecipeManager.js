import React, {useContext, useState} from 'react';
import './App.css';
import RecipeFilter from "./RecipeFilter";
import RecipeViewer from "./RecipeViewer";
import {RecipeContext} from "./RecipeContext";
import ExampleRecipesViewer from "./ExampleRecipesViewer";


const RecipeManager = () => {

    const [recipes, setRecipes] = useContext(RecipeContext);

    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState("");
    const [searchClicked, setSearchClicked] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState({});

    const [maxReadyTime, setMaxReadyTime] = useState(0);
    const [sortBySelect, setSortBySelect] = useState("title");


    return (
            <div className="RecipeManager">
                <RecipeFilter setClicked={setSearchClicked} changeQueryHandler={setQuery} filtersHandler={setFilters} maxReadyTimeHandler={setMaxReadyTime} sortByHandler={setSortBySelect}/>
                <RecipeViewer allRecipes={recipes} query={query} filters={filters} maxReadyTime={maxReadyTime} sortBySelect={sortBySelect} clickHandler={setSelectedRecipe}/>
                {searchClicked? null: <ExampleRecipesViewer allRecipes={recipes} />}
            </div>
    );

}

export default RecipeManager;
