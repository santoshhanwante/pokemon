import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import './styles.css'; 

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  const handlePokemonSelect = async (pokemon) => {
    try {
      const response = await axios.get(pokemon.url); // Fetch detailed information using the URL
      setSelectedPokemon(response.data); // Update state with detailed information
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app">
      <PokemonList pokemons={pokemons} onPokemonSelect={handlePokemonSelect} />
      <PokemonDetails selectedPokemon={selectedPokemon} />
    </div>
  );
};

export default App;
