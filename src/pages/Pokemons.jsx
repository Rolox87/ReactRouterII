import { useState } from 'react';
//import { usePokemonsContext } from '../PokemonProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import PokemonProvider from "../PokemonProvider"

const Pokemons = () => {

    //const pokemones = usePokemonsContext();
    const pokemones = useContext (PokemonProvider)
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("");
    const goToPokemon = () => {
        pokemon ? navigate(`/pokemon/${pokemon}`)
            : alert("Selecciona un pokemón para ver")
    }

    return (
        <div className='container'>
            <h2>Selecciona un pokemón</h2>
            <select onChange={({ target }) => setPokemon(target.value)}>
                <option value="" selected>Elige un pokemón</option>
                {pokemones.sort((a,b) => a.name > b.name ? 1 : -1).map((pokemon, index) => (
                    <option value={pokemon.name} key={index}>{pokemon.name}</option>
                ))}
            </select>
            <button onClick={goToPokemon}>Ver detalles</button>
        </div>
    )
}

export default Pokemons