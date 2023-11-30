// components/SearchBar.js
import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error);
      setSearchResults(null);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                className="form-control form-control-lg"
                placeholder="Ingrese un Pokémon"
                style={{ borderRadius: "25px 0 0 25px" }}
              />
              <button
                onClick={handleSearch}
                className="btn btn-primary btn-lg"
                style={{ borderRadius: "0 25px 25px 0" }}
              >
                Buscar
              </button>
            </div>

            {searchResults && (
              <div
                className="mt-4 card text-center"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="card-body">
                  <Link to={`/pokemon/${searchResults.name}`}>
                    <img
                      src={searchResults.sprites.front_default}
                      alt={searchResults.name}
                      className="img-fluid rounded-circle border border-3 border-red"
                      style={{ maxWidth: "100px" }}
                    />
                    <h5 className="card-title mt-2">{searchResults.name}</h5>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
