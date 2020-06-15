import React, {createContext, useState} from 'react';

export const FavoriteContext = createContext(null);

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([]);


    return (
        <FavoriteContext.Provider value={[favorites, setFavorites]}>
            {props.children}
        </FavoriteContext.Provider>
    )
}