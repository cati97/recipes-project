import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    return (
        <nav>
            <ul className={"nav-links"}>
                <Link style={navStyle} to={"/"}><li className={"link"}>Home</li></Link>
                <Link style={navStyle} to={"/"}><h1 className={"logo link"}>CookAnything.com</h1></Link>
                <Link style={navStyle} to={"/favorites"}><li className={"link"}>My Favorites</li></Link>
                <Link style={navStyle} to={"/all-recipes"}><li className={"link"}>All Recipes</li></Link>
            </ul>
        </nav>
    );
}
export default Nav;
