import React from 'react';
import {NavLink} from 'react-router-dom'
const Header =()=>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink  className="navbar-brand" to="/">Reactmon</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <NavLink className="nav-item nav-link active" to="/search">Search <span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-item nav-NavLink" to="/pokedex">Pokedex</NavLink>
                <NavLink className="nav-item nav-NavLink" to="/discover">Discover</NavLink>
            </div>
        </div>
    </nav>
)
export default Header;