import React from 'react';
import PokeSprite from 'react-poke-sprites'

const Card =({pokemon})=>{
 
    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <PokeSprite
                        pokemon={pokemon.name}
                        className="lugia-class"
                    />
    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">pokemon desc here</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Card;