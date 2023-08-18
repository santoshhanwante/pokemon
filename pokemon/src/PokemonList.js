import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const PokemonList = ({ pokemons, onPokemonSelect }) => {
  return (
    <div className="sidebar">
      <List component="nav" aria-label="pokemon list">
        {pokemons.map((pokemon, index) => (
          <ListItem
            key={index}
            button
            onClick={() => onPokemonSelect(pokemon)} // This calls the onPokemonSelect function
          >
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PokemonList;
