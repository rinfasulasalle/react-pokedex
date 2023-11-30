// components/PokemonDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error al obtener detalles del Pokémon:", error);
        setPokemonData(null);
      }
    };

    fetchPokemonData();
  }, [name]);

  return (
    <div>
      <div className="container mt-5">
        {pokemonData ? (
          <div className="card text-center">
            <div className="card-header bg-primary text-white">
              <h2>{pokemonData.name}</h2>
            </div>
            <div className="card-body">
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
                className="img-fluid rounded-circle border border-3 border-primary mb-3"
                style={{ maxWidth: "150px" }}
              />
              <p className="card-text">
                <strong>Altura:</strong> {pokemonData.height / 10} metros
              </p>
              <p className="card-text">
                <strong>Peso:</strong> {pokemonData.weight / 10} kg
              </p>
              <p className="card-text">
                <strong>Tipo(s):</strong>{" "}
                {pokemonData.types.map((type) => (
                  <span key={type.slot} className="badge bg-secondary me-1">
                    {type.type.name}
                  </span>
                ))}
              </p>
              <p className="card-text">
                <strong>Habilidades:</strong>{" "}
                {pokemonData.abilities.map((ability) => (
                  <span key={ability.slot} className="badge bg-success me-1">
                    {ability.ability.name}
                  </span>
                ))}
              </p>
              <p className="card-text">
                <strong>Estadísticas:</strong>{" "}
                {pokemonData.stats.map((stat) => (
                  <span key={stat.stat.name} className="badge bg-info me-1">
                    {stat.stat.name}: {stat.base_stat}
                  </span>
                ))}
              </p>
              <p className="card-text">
                <strong>Movimientos:</strong>{" "}
                {pokemonData.moves.slice(0, 5).map((move) => (
                  <span key={move.move.name} className="badge bg-warning me-1">
                    {move.move.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ) : (
          <p>Cargando detalles del Pokémon...</p>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
