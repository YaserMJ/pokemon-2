import React from "react";
import Item from "./ListItem.component";
import "./List.styles.css";
import {Link} from 'react-router-dom'
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: []
    };
  }

  getPokemons = () => {
    P.resource([
      "https://pokeapi.co/api/v2/pokemon/?limit=498&offset=0"
    ]).then(response => {
      let x = response[0].results;
      this.setState({ pokedex: x });
      console.log(this.state.pokedex);
    });
  };

  render() {
    return (
      <div className='listBzk'>
        <Link onClick={this.getPokemons}>Open Pokedex</Link>
        <div className="container">
          <div class="row">
          {this.state.pokedex.map(pokemon => (
            <Item key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default List;
