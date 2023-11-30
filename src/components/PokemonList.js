// components/PokemonList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémones:", error);
        setPokemonList([]);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-4">Lista de Pokémones</h2>
        <div className="row">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">{pokemon.name}</h5>
                  <Link
                    to={`/pokemon/${pokemon.name}`}
                    className="btn btn-primary"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
