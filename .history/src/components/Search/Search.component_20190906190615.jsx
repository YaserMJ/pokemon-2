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

    componentDidMount(){
        P.getPokemonByName('eevee') // with Promise
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('There was an ERROR: ', error);
            });
    }

    render() { 

        return ( 
            <div>Hi</div>
         );
    }
}
 
export default Search;