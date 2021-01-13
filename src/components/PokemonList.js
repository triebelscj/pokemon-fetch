import React, { useState } from 'react'

const PokemonList = (props) => {

    const [state, setState] = useState(0);


    function handleClick(event) {
        event.preventDefault();
    }

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807%27")
        .then(response => {
            return response.json()
        })
        .then(response => {
            setState({
                pokemon: response.results
            })
        })

    return (
        <div className="App">
            <button
                onClick={handleClick}
                type="button"
                style={{
                    border: "4px solid red",
                    backgroundColor: "skyBlue",
                    color: "red",
                    fontSize: 40,
                    width: 340,
                    height: 130,
                    borderRadius: 8,
                    margin: 55,
                    cursor: "pointer",
                    paddingBottom: 75,
                    paddingTop: 20
                }}
            >
                Fetch Pokémon!
            </button>
            <div className="pokeball" onClick={handleClick}>
                <div className="red" onClick={handleClick}>
                    <div className="open" onClick={handleClick}>

                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', color: "white", position: 'relative', bottom: 70 }}>
                {state.pokemon ? state.pokemon.map((item, index) => {
                    return (<div key={index}>{item.name}</div>)
                }) : null}
            </div>
        </div>
    )
}


export default PokemonList;