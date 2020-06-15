import React, {useContext, useState} from 'react';
import './App.css';
import RecipeFilter from "./RecipeFilter";
import RecipeViewer from "./RecipeViewer";
import {RecipeContext} from "./RecipeContext";

const RecipeSearch = () => {

    const [recipes, setRecipes] = useContext(RecipeContext);

    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState({});

    const [maxReadyTime, setMaxReadyTime] = useState(0);
    const [sortBySelect, setSortBySelect] = useState("title");


    return (
        <div className="RecipeSearch">
            <RecipeFilter changeQueryHandler={setQuery} filtersHandler={setFilters} maxReadyTimeHandler={setMaxReadyTime} sortByHandler={setSortBySelect}/>
            <RecipeViewer allRecipes={recipes} query={query} filters={filters} maxReadyTime={maxReadyTime} sortBySelect={sortBySelect} clickHandler={setSelectedRecipe}/>
        </div>
    );

}

export default RecipeSearch;
