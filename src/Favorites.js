import React, {useContext} from "react";
import {FavoriteContext} from "./FavoritesContext";
import Recipe from "./Recipe";

const Favorites = () => {

    const [favorites, setFavorites] = useContext(FavoriteContext);

    return (
        <div>
            <ul className={"recipe-ul"}>
        {favorites.map(recipe => <Recipe readyTime={recipe.readyInMinutes} healthScore={recipe.healthScore} key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image}/>)}
            </ul>
        </div>
    )
}

export default Favorites;