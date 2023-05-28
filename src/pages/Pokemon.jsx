import { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import Loader from "../components/Loading";
import { useParams } from "react-router-dom";
//import { usePokemonContext } from "../PokemonProvider";

const Pokemon = () => {
  const {name}  = useParams();
  const [pokemon, setPokemon] = useState(null);
  
  useEffect (()=>{
    const getPokemon = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const results = await data.json();
        
  setPokemon(results)     
  }
    getPokemon()
  },[])

  return <div>{!pokemon ? <Loader /> : <CardPokemon pokemon={pokemon} />}</div>;
};
export default Pokemon;