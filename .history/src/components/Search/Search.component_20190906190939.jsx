import React,{Component} from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            pokemon :[],
            word : ''
        }
    }

    handleSearch = ()=>{
        P.getPokemonByName(this.state.word)
            .then((response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('There was an ERROR: ', error);
            });
    }
    
    handleChange =(e)=>{
        this.setState({word : e.target.value});
    }
    render() { 

        return ( 
            <div>
            <h1>Seach pokemons</h1>
            <input type="search" onChange={this.handleChange}/>
            <button onClick={this.handleSearch}>Search</button>
            </div>
         );
    }
}
 
export default Search;