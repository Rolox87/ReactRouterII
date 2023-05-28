import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation';

// pages
import Home from './pages/Home'
import Pokemones from './pages/Pokemons'
import Pokemon from './pages/Pokemon'
import PokemonProvider from './PokemonProvider';
import { useEffect, useState } from 'react';

function App() {
  const [Pokedext, setPokedext] = useState([]);
  const getPokemon = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const {results} = await data.json();
  setPokedext(results)     
  }
  useEffect (()=>{
    getPokemon()
  },[])
  return (
    <div className="App">
      <PokemonProvider.Provider value={Pokedext}>
        <BrowserRouter >
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </PokemonProvider.Provider>

    </div>
  )
}

export default App