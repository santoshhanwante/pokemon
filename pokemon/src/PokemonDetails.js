import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';

const PokemonDetails = ({ selectedPokemon }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (selectedPokemon) {
      axios.get(selectedPokemon.url)
        .then(response => {
          setDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching details:', error);
        });
    }
  }, [selectedPokemon]);

  if (!selectedPokemon) {
    return <div>Select a Pokémon to see details.</div>;
  }

  if (!details) {
    return <div>Loading...</div>;
  }

  const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${details.id}.png`;

  return (
    <div className="details">
      <h2>{details.name}</h2>
      <img src={imageURL} alt={details.name} />

      <h3>Attributes:</h3>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>

      <h3>Abilities:</h3>
      <ul>
        {details.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>

      <h3>Moves:</h3>
      <ul>
        {details.moves.map((move, index) => (
          <li key={index}>{move.move.name}</li>
        ))}
      </ul>

      <h3>Statistics:</h3>
      {details.stats.map(stat => (
        <div key={stat.stat.name}>
          <p>{stat.stat.name}: {stat.base_stat}</p>
          <LinearProgress variant="determinate" value={stat.base_stat} />
        </div>
      ))}

      {/* Display other relevant information */}
    </div>
  );
};

export default PokemonDetails;
