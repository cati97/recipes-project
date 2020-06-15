import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const Recipe = ({title, id, image, readyTime, healthScore}) => {

    const recipeStyle = {
        color: 'black',
        textDecoration: 'none',
        width: '50%'
    };


    return (
        <Link style={recipeStyle} to={`/${id}`}>
        <div className={"recipe"} id={id}>
            <h1>{title}</h1>
            <p>Ready in {readyTime} min</p>
            <p>Health score: {healthScore}</p>
            <img src={image} alt={""}/>
        </div>
        </Link>
    );
}

export default Recipe;